import {
  addDays,
  isBefore,
  isYesterday,
  isToday,
  parse,
  format as _formatDate,
  formatDistanceStrict,
  startOfToday
} from 'date-fns'

export let format = num => Intl.NumberFormat('en-US').format(num)
export function shouldFormatDateDistance(date) {
  let deliveryDate = parse(date, 'MM/dd/yyyy', new Date())
  let fourDaysFromDeliveryDate = addDays(deliveryDate, 4)
  return isBefore(startOfToday(), fourDaysFromDeliveryDate)
}
export function formatDateDistance(date) {
  let deliveryDate = parse(date, 'MM/dd/yyyy', new Date())
  if (isToday(deliveryDate)) {
    return 'Today'
  } else if (isYesterday(deliveryDate)) {
    return 'Yesterday'
  } else {
    return formatDistanceStrict(deliveryDate, startOfToday(), {
      unit: 'day',
      addSuffix: 'true'
    })
  }
}

export let formatDate = date => {
  let latest = parse(date, 'MM/dd/yyyy', new Date())
  return _formatDate(latest, 'MMMM d, yyyy')
}

export let generate_delivery_breakdown = (totals, ppe_type) => {
  totals
    .filter(item => item.type == ppe_type.type)
    .map(item => {
      if (item.gallons) ppe_type.gallons += item.gallons
      else ppe_type.count += item.count ? item.count : 0
    })
}
