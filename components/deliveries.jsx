import totals from '../data/totals'
import {
  format,
  formatDate,
  formatDateDistance,
  shouldFormatDateDistance
} from '../utils/utils'
export let totalCount = 0

export default ({ limit }) => {
  let totalCount = 0
  let totalShields = 0
  let totalMasks = 0
  let totalKidsMasks = 0
  let totalKN95 = 0
  let totalSurgicalMasks = 0
  let totalGallonsHandSanitizer = 0
  let totalInhalerSpacer = 0
  let totalEarSaver = 0
  let totalGowns = 0

  totals.map(item => {
    totalGallonsHandSanitizer += item.gallons ? item.gallons : 0
    totalCount += item.count ? item.count : 0
  })
  totals
    .filter(item => item.type === 'Face Shields')
    .map(item => {
      totalShields += item.count
    })
  totals
    .filter(item => item.type === 'Reusable Masks')
    .map(item => (totalMasks = totalMasks + item.count))
  totals
    .filter(item => item.type === 'Kids Masks')
    .map(item => (totalKidsMasks = totalKidsMasks + item.count))
  totals
    .filter(item => item.type === 'KN95 Masks')
    .map(item => (totalKN95 += item.count))
  totals
    .filter(item => item.type === 'Surgical Masks')
    .map(item => (totalSurgicalMasks += item.count))
  totals
    .filter(item => item.type === 'Inhaler Spacers')
    .map(item => (totalInhalerSpacer += item.count))
  totals
    .filter(item => item.type === 'Ear Savers')
    .map(item => (totalEarSaver += item.count))
  totals
    .filter(item => item.type === 'Gowns')
    .map(item => (totalGowns += item.count))

  return (
    <div className={'bg-white sm:rounded-md p-4 h-full hover:no-underline'}>
      <div>
        <div className="py-2 border-b mb-4  text-xl leading-6 font-medium text-gray-900">
          Total PPE Delivered
        </div>
        <div className="flex item-baseline">
          <p className="text-6xl leading-8 pt-2 font-extrabold text-gray-900">
            {format(totalCount)}
          </p>
        </div>
        <div className="mt-6  py-2 border-b mb-4 text-xl leading-6 font-medium text-gray-900">
          Delivery Breakdown
        </div>
        <div className="flex flex-wrap item-baseline">
          <div className="pr-8">
            <div className="text-2xl font-medium text-gray-900">
              {format(totalShields)}
            </div>
            <p> Face Shields</p>
          </div>
          <div className="pr-8">
            <div className="text-2xl font-medium text-gray-900">
              {format(totalMasks)}
            </div>
            <p> Reusable Masks</p>
          </div>
          <div className="pr-8">
            <div className="text-2xl font-medium text-gray-900">
              {format(totalKidsMasks)}
            </div>
            <p> Kids Masks</p>
          </div>
          <div className="pr-8">
            <div className="text-2xl font-medium text-gray-900">
              {format(totalSurgicalMasks)}
            </div>
            <p> Surgical Masks</p>
          </div>
          <div className="pr-8">
            <div className="text-2xl font-medium text-gray-900">
              {format(totalInhalerSpacer)}
            </div>
            <p>Inhaler Spacers</p>
          </div>
          <div className="pr-8">
            <div className="text-2xl font-medium text-gray-900">
              {format(totalEarSaver)}
            </div>
            <p>Ear Savers</p>
          </div>
          <div className="pr-8">
            <div className="text-2xl font-medium text-gray-900">
              {format(totalGowns)}
            </div>
            <p>Gowns</p>
          </div>
          <div className="pr-8">
            <div className="text-2xl font-medium text-gray-900">
              {format(totalGallonsHandSanitizer)} gallons
              <a href="#note">
                <sup>†</sup>
              </a>
            </div>
            <p>Hand Sanitizer</p>
          </div>
          <div className="pr-8">
            <div className="text-2xl font-medium text-gray-900">
              {format(totalKN95)}
            </div>
            <p> KN95 Masks</p>
          </div>
        </div>
      </div>
      <div className="mt-2 py-2 border-b mb-4 text-xl leading-6 font-medium text-gray-900">
        Latest Deliveries as of {formatDate(totals[0].date)}
      </div>{' '}
      <p className="text-base leading-6 text-gray-900 hover:no-underline">
        We deliver PPE to EMTs, Nursing Homes, and other locations. Locations
        simplified for privacy.
      </p>{' '}
      <p className="text-base leading-6 text-gray-900 hover:no-underline">
        We are in the process of adding categorical information about
        organizations we deliver to. Those categories are: Hospital, Nursing
        Home, Social services, First responders, Prison/Jail, Childcare,
        Health(medical practices, Home Healthcare, etc.), Other.
      </p>
      <p className="text-base leading-6 text-gray-900 hover:no-underline">
        We try to provide an accurate count of deliveries, and sometimes it
        takes a day or two to reconcile reports from our volunteer couriers.
      </p>{' '}
      {!limit && (
        <div className="align-middle inline-block min-w-full overflow-hidden">
          <p
            id="note"
            className="text-base leading-6 text-gray-900 hover:no-underline"
          >
            † Deliveries of Hand Sanitizer are in gallons and counted
            separately.
          </p>
          <table className="min-w-full">
            <thead>
              <tr className="align-top">
                <th className="border px-4 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Amount
                </th>
                <th className="border px-4 py-3 border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Type
                </th>
                <th className="border px-4 py-3 border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Org. Category
                </th>
                <th className="border px-4 py-3 border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Location
                </th>
                <th className="border px-4 py-3 border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-900 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="border-none">
              {totals.map((item, i) => (
                <tr key={i} className={item.count ? '' : 'hidden'}>
                  <td className="border px-4 py-4">
                    <span className="py-4">
                      {item.count ? item.count : ''}
                      {item.gallons ? item.gallons + ' gals' : ''}
                      <a className={!item.gallons ? 'hidden' : ''} href="#note">
                        <sup>†</sup>
                      </a>
                    </span>
                  </td>
                  <td className="border px-4 py-2">{item.type}</td>
                  <td className="border px-4 py-2">{item.org_category}</td>
                  <td className="border px-4 py-2">
                    <svg
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 float-left mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.location}
                  </td>
                  <td className="border px-4 py-2">
                    <svg
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 float-left mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <title>{item.date}</title>
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>
                      {shouldFormatDateDistance(item.date)
                        ? formatDateDistance(item.date)
                        : item.date}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
