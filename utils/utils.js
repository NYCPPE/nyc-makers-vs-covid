import {
  isYesterday,
  isToday,
  parse,
  format as _formatDate,
  formatDistanceStrict,
  startOfToday
} from 'date-fns'

export let format = num => Intl.NumberFormat('en-US').format(num)

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
