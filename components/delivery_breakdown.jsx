import { format, generate_delivery_breakdown } from '../utils/utils'
import totals from '../data/totals'

export let totalCount = 0

export default ({ limit }) => {
  let ppe = [
    { type: 'Face Shields', count: 0 },
    { type: 'Reusable Masks', count: 0 },
    { type: 'Kids Masks', count: 0 },
    { type: 'Surgical Masks', count: 0 },
    { type: 'Inhaler Spacers', count: 0 },
    { type: 'Ear Savers', count: 0 },
    { type: 'Gowns', count: 0 },
    { type: 'Hair Caps', count: 0 },
    { type: 'Hand Sanitizer', gallons: 0 },
    { type: 'KN95 Masks', count: 0 }
  ]

  totals.map(item => {
    totalCount += item.count ? item.count : 0
  })

  ppe.forEach(item_type => {
    generate_delivery_breakdown(totals, item_type)
  })

  return (
    <>
      <div className="mt-6 py-2 border-b mb-4 text-xl leading-6 font-medium text-gray-900">
        Delivery Breakdown
      </div>
      <div className="flex flex-wrap item-baseline">
        {ppe.map(item => (
          <div className="pr-8">
            <div className="text-2xl font-medium text-gray-900">
              {item.gallons
                ? format(item.gallons) + ' gallons'
                : format(item.count)}
              <a className={!item.gallons ? 'hidden' : ''} href="#note">
                <sup>†</sup>
              </a>
            </div>
            <p>{item.type}</p>
          </div>
        ))}
      </div>
    </>
  )
}
