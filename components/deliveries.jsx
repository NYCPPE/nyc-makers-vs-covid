import DeliveryBreakdownByItem from './delivery_breakdown'
import DeliveryTable from './delivery_table'

export default ({ limit }) => {
  return (
    <>
      <DeliveryBreakdownByItem />
      <DeliveryTable />
    </>
  )
}
