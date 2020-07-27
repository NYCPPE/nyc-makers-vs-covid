import { format } from '../utils/utils'
import totals from '../data/totals'

export let totalCount = 0

export let total_by_ppe_type = [
  { type: 'Face Shields', count: 0 },
  { type: 'Reusable Masks', count: 0 },
  { type: 'Kids Masks', count: 0 },
  { type: 'Surgical Masks', count: 0 },
  { type: 'Inhaler Spacers', count: 0 },
  { type: 'Ear Savers', count: 0 },
  { type: 'Gowns', count: 0 },
  { type: 'Hair Caps', count: 0 },
  { type: 'Hand Sanitizer', gallons: 0.0 },
  { type: 'KN95 Masks', count: 0 }
]

totals.map(item => {
  totalCount += item.count
})

total_by_ppe_type.forEach(ppe_type => {
  totals
    .filter(item => item.type == ppe_type.type)
    .map(item => {
      if (item.gallons) ppe_type.gallons += item.gallons
      else ppe_type.count += item.count
    })
})

const DeliveryBreakdownByItem = ({ limit }) => {
  return (
    <>
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
        </div>

        <div className="mt-6 py-2 border-b mb-4 text-xl leading-6 font-medium text-gray-900">
          Delivery Breakdown
        </div>
        <div className="flex flex-wrap item-baseline">
          {total_by_ppe_type.map((item, index) => (
            <div className="pr-8" key={index}>
              <div className="text-2xl font-medium text-gray-900">
                {item.gallons
                  ? format(item.gallons) + ' gallons'
                  : format(item.count)}
                {item.gallons ? (
                  <a href="#note">
                    <sup>†</sup>
                  </a>
                ) : (
                  ''
                )}
              </div>
              <p>{item.type}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DeliveryBreakdownByItem
