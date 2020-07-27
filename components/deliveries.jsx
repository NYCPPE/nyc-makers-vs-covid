import DeliveryBreakdownByItem from './delivery_breakdown'
import DeliveryTable from './delivery_table'

const Deliveries = ({ limit }) => {
  return (
    <>
      <DeliveryBreakdownByItem />
      <DeliveryTable />
    </>
  )
}

export default Deliveries
