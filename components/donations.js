export default ({ limit }) => {
  return (
    <div className="bg-white sm:rounded-md p-2 h-full hover:no-underline w-full md:w-1/2">
      <a
        href="/stats"
        className="p-4 rounded-lg inline-block w-full hover:no-underline border border-blue-600 md:max-w-sm"
      >
        <span className="flex justify-between ">
          <p className="text-base leading-6 font-medium text-blue-600  hover:no-underline">
            Total raised
          </p>

          <p className="text-base font-normal text-blue-600 ml-2 ">&rarr;</p>
        </span>
        <div className="flex items-baseline">
          <p className="text-5xl leading-8 mb-1 font-extrabold text-blue-600">
            $35,000
          </p>
          {/* <small className="upprcase text-blue-600">estimated</small> */}
        </div>
        <p className="text-base text-blue-600 mb-0">
          Organized by Hack Manhattan
        </p>
      </a>
    </div>
  )
}
