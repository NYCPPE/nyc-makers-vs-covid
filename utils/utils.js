import {
  isYesterday,
  isToday,
  parse,
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
