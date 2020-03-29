export default ({ limit }) => {
  return (
    <div className="bg-white sm:rounded-md p-2 h-full hover:no-underline w-full md:w-1/2">
      <a
        href="https://charity.gofundme.com/o/en/campaign/nyc-makes-ppe-covid-19"
        className="p-4  rounded-lg inline-block w-full hover:no-underline bg-gray-50 hover:bg-gray-100 md:max-w-sm"
      >
        <span className="flex justify-between ">
          <p className="text-base leading-6 font-medium text-gray-900  hover:no-underline">
            Total raised
          </p>

          <p className="text-base font-normal text-gray-900 ml-2 ">&rarr;</p>
        </span>
        <div className="flex items-baseline">
          <p className="text-5xl leading-8 mb-1 font-extrabold text-gray-900">
            $40,000
          </p>
          {/* <small className="upprcase text-pink-600">estimated</small> */}
        </div>
        <p className="text-base text-gray-800 mb-0 pt-2">
          For materials to make PPE
        </p>
      </a>
    </div>
  )
}
