import totals from './totals'
import { format, formatDate } from '../utils/utils'

export default ({ limit }) => {
  let truncatedList = []
  let totalCount = 0

  truncatedList = totals
  totals.map(items => (totalCount = totalCount + items.count))

  return (
    <div className="sm:rounded-md p-2 hover:no-underline">
      <a
        href="/stats"
        className="rounded-lg inline-block w-full hover:no-underline hover:opacity-75 md:max-w-sm"
      >
        <div className="flex items-baseline">
          <p className="text-4xl leading-8 mb-1 font-medium text-white">
            {format(totalCount)}
          </p>
        </div>
        <span className="flex justify-between flex-col flex-wrap">
          <span className="text-base w-48 leading-6 p-0 m-0 font-medium text-white hover:no-underline">
            Total PPE Delivered &rarr;
          </span>
          <span className="text-xs text-cool-gray-500 font-hairline p-0 m-0">
            Last updated {formatDate(totals[0].date)}
          </span>
        </span>
      </a>
    </div>
  )
}
