import Deliveries from '../components/deliveries'
import Header from '../components/header'

export default () => {
  return (
    <>
      <Header
        title="NYCMakesPPE | Statistics"
        description="NYC Makes PPE is a group of makers and healthcare professionals in NYC leveraging DIY manufacturing technology to support PPE production in NYC and worldwide."
      />
      <Deliveries />
    </>
  )
}
