import totals from '../data/totals'
import DeliveryBreakdownByItem from './delivery_breakdown'
import DeliveryTable from './delivery_table'

import { format } from '../utils/utils'
export let totalCount = 0

export default ({ limit }) => {
  totals.map(item => {
    totalCount += item.count ? item.count : 0
  })

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
      </div>
      <DeliveryBreakdownByItem />
      <DeliveryTable />
    </div>
  )
}
