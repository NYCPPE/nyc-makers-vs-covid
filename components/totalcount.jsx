import totals from './totals'
import { format, formatDate } from '../utils/utils'

export default ({ limit }) => {
  let truncatedList = []
  let totalCount = 0
  let totalGallonsHandSanitizer = 0

  truncatedList = totals
  totals.map(item => {
    totalGallonsHandSanitizer += item.gallons ? item.gallons : 0
    totalCount += item.count ? item.count : 0
  })

  return (
    <div className="sm:rounded-md p-2 mr-3 hover:no-underline">
      <a
        href="/stats"
        className="rounded-lg inline-block w-full hover:no-underline md:max-w-sm  hover:opacity-75"
      >
        <div className="flex items-baseline">
          <p className="text-4xl leading-8 mb-1 font-medium text-white">
            {format(totalCount)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-base leading-6 mb-0 font-medium text-white hover:no-underline">
            Total PPE Delivered &rarr;
          </p>
        </div>
        <div className="flex justify-between">
          <span className="text-xs leading-6 text-cool-gray-500 font-hairline">
            Last updated {formatDate(totals[0].date)}
          </span>
        </div>
      </a>
    </div>
  )
}
