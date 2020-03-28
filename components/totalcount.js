import totals from './totals'

export default ({ limit }) => {
  let truncatedList = []
  let totalCount = 0

  truncatedList = totals
  totals.map(props => (totalCount = totalCount + props.count))

  return (
    <div className="bg-white sm:rounded-md p-4 h-full hover:no-underline">
      <a
        href="/stats"
        className="p-4 rounded-lg inline-block w-full hover:no-underline border border-blue-600 max-w-sm"
      >
        <span className="flex justify-between ">
          <p className="text-base leading-6 font-medium text-blue-600  hover:no-underline">
            Total PPE Delivered
          </p>

          <p className="text-base font-normal text-blue-600 ml-2 ">&rarr;</p>
        </span>
        <div className="flex items-baseline">
          <p className="text-5xl leading-8 mb-1 font-extrabold text-blue-600">
            {(totalCount / 100).toFixed() * 100}
          </p>
          {/* <small className="upprcase text-blue-600">estimated</small> */}
        </div>
        <p className="text-base text-blue-600 mb-0">
          Face Shields, Masks and more...
        </p>
      </a>
    </div>
  )
}
