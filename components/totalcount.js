import totals from './totals'

export default ({ limit }) => {
  let truncatedList = []
  let totalCount = 0

  truncatedList = totals
  totals.map(props => (totalCount = totalCount + props.count))

  return (
    <div className="bg-white sm:rounded-md p-2 h-full hover:no-underline w-full md:w-1/2">
      <a
        href="/stats"
        className="p-4 rounded-lg inline-block w-full hover:no-underline bg-gray-50 hover:bg-gray-100 md:max-w-sm"
      >
        <span className="flex justify-between ">
          <p className="text-base leading-6 font-medium text-gray-900  hover:no-underline">
            Total PPE Delivered
          </p>

          <p className="text-base font-normal text-gray-900 ml-2 ">&rarr;</p>
        </span>
        <div className="flex items-baseline">
          <p className="text-5xl leading-8 mb-1 font-extrabold text-gray-900">
            {(totalCount / 100).toFixed() * 100}
          </p>
          {/* <small className="upprcase text-pink-600">estimated</small> */}
        </div>
        <p className="text-base text-gray-800 mb-0 pt-2">
          Face Shields, Masks and more...
        </p>
      </a>
    </div>
  )
}
