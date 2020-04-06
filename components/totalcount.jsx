import totals from './totals'
import { format } from './deliveries'

export default ({ limit }) => {
  let truncatedList = []
  let totalCount = 0

  truncatedList = totals
  totals.map(items => (totalCount = totalCount + items.count))

  return (
    <div className="bg-white sm:rounded-md p-2 h-full hover:no-underline w-full md:w-1/2">
      <a
        href="/stats"
        className="p-4 rounded-lg inline-block w-full hover:no-underline bg-gray-50 hover:bg-gray-100 md:max-w-sm"
      >
        <span className="flex justify-between">
          <p className="text-base leading-6 font-medium text-pink-600  hover:no-underline">
            Total PPE Delivered
          </p>

          <p className="text-base font-normal text-pink-600 ml-2">&rarr;</p>
        </span>
        <div className="flex items-baseline">
          <p className="text-5xl leading-8 mb-1 font-extrabold text-pink-600">
            {format(totalCount)}
          </p>
        </div>
        <p className="text-base text-pink-600 mb-0 pt-2">
          Face Shields, Masks and more...
        </p>
      </a>
    </div>
  )
}
