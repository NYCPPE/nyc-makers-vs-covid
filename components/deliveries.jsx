import totals from './totals'
import { isToday, parse, formatDistanceStrict, startOfToday } from 'date-fns'

export let totalCount = 0

export default ({ limit }) => {
  let truncatedList = []
  let totalCount = 0

  if (limit) {
    truncatedList = totals.slice(0, 6)
    totals.map(props => (totalCount = totalCount + props.count))
  } else {
    truncatedList = totals
    totals.map(props => (totalCount = totalCount + props.count))
  }

  return (
    <div className={'bg-white sm:rounded-md p-4 h-full hover:no-underline'}>
      <a
        href="/stats"
        className="rounded-lg inline-block w-full hover:no-underline "
      >
        <span className="flex justify-between ">
          <p className="text-xl leading-6 font-medium text-gray-900  hover:no-underline">
            Total PPE Delivered
          </p>
          {limit && (
            <p className="text-base font-normal text-gray-900 ml-2">&rarr;</p>
          )}
        </span>
        <div className="flex items-baseline">
          <p className="text-6xl leading-8 mb-1 pt-6 font-extrabold text-gray-900">
            {totalCount}
          </p>
          {/* <small className="upprcase text-gray-600">estimated</small> */}
        </div>
        <p className="text-md pt-2 text-gray-800 mb-0">
          Face Shields, Masks and more...
        </p>
      </a>

      {/* <h3>Total PPE Delivered</h3>
      <div className="text-6xl font-bold">{totalCount}</div> */}
      {!limit && (
        <>
          <p className="pt-12 text-xl leading-6 font-medium text-gray-900  hover:no-underline">
            Latest PPE deliveries. Only locations are given. We deliver PPE to
            EMTs, nursing homes, and hospitals.
          </p>{' '}
          <table className="w-full table border-transparent">
            <tbody className="w-full table border-none">
              {truncatedList.map((props, i) => (
                <tr key={i} className="">
                  <td className="border px-4 py-4">
                    <span className="py-4">{props.count}</span>
                  </td>
                  <td className="border px-4 py-2">{props.type}</td>
                  <td className="border px-4 py-2">
                    <svg
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 float-left"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {props.hospital}
                  </td>
                  <td className="border px-4 py-2">
                    <svg
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 float-left"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      {isToday(parse(props.date, 'MM/dd/yyyy', new Date()))
                        ? 'Today'
                        : formatDistanceStrict(
                            parse(props.date, 'MM/dd/yyyy', new Date()),
                            startOfToday(),
                            { unit: 'day', addSuffix: 'true' }
                          )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}
