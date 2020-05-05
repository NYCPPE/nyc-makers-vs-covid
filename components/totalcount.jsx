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
    <div className="sm:rounded-md p-2 hover:no-underline">
      <a
        href="/stats"
        className="rounded-lg inline-block w-full hover:no-underline hover:opacity-75 md:max-w-sm"
      >
        <div className="flex item-baseline">
          <p className="text-6xl leading-8 pt-2 font-extrabold text-white">
            {format(totalCount)}
          </p>
        </div>
        <span className="mt-3 flex justify-between flex-col flex-wrap">
          <span className="text-base w-48 leading-6 p-0 m-0 font-medium text-white hover:no-underline">
            Total PPE Delivered &rarr;
          </span>
          <span className="text-xs text-cool-gray-500 font-hairline p-0 m-0">
            Last updated {formatDate(totals[0].date)}
          </span>
        </span>

        <div className="flex item-baseline mb-0">
          <span className="text-3xl leading-8 mb-0 pt-2 font-extrabold text-white">
            + {format(totalGallonsHandSanitizer)} Gallons of Hand Sanitizer
            <sup>†</sup>
          </span>
        </div>
        <div className="flex item-baseline mb-2">
          <span
            id="note"
            className="text-xs text-cool-gray-500 font-hairline p-0 m-0"
          >
            <sup>†</sup>Deliveries of Hand Sanitizer are in gallons and counted
            separately.
          </span>
        </div>
      </a>
    </div>
  )
}
