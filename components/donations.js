export default ({ limit }) => {
  return (
    <div className="bg-white sm:rounded-md p-2 h-full hover:no-underline w-full md:w-1/2">
      <a
        href="https://charity.gofundme.com/o/en/campaign/nyc-makes-ppe-covid-19"
        className="p-4  rounded-lg inline-block w-full hover:no-underline bg-gray-50 hover:bg-gray-100 md:max-w-sm"
      >
        <span className="flex justify-between ">
          <p className="text-base leading-6 font-medium text-pink-600  hover:no-underline">
            Total raised
          </p>

          <p className="text-base font-normal text-pink-600 ml-2 ">&rarr;</p>
        </span>
        <div className="flex items-baseline">
          <p className="text-5xl leading-8 mb-1 font-extrabold text-pink-600">
            $40,000
          </p>
          {/* <small className="upprcase text-pink-600">estimated</small> */}
        </div>
        <p className="text-base text-pink-600 mb-0 pt-2">
          For materials and labor to make PPE
        </p>
      </a>
    </div>
  )
}
