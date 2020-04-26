import { useModal } from 'react-modal-hook'

const RequestButton = ({}) => {
  const [showCreateModal, hideCreateModal] = useModal(
    ({ in: open, onExited }) => (
      <div
        className="fixed w-full h-full flex justify-center items-center text-gray-50 top-0 left-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      >
        <div className="rounded-lg bg-pink-50 m-2 flex flex-col justify-between p-6 max-w-sm ">
          <div className="m-2">
            <div className="items-baseline">
              <div className=" flex items-center justify-center pb-4 leading-tight  text-3xl font-bold text-pink-600">
                Looking for face shields, hand sanitizer, masks and more?{' '}
              </div>
            </div>
            <div className="rounded-md shadow-xl">
              <a
                href=""
                className="flex items-center justify-center px-2 py-3 text-base font-bold rounded-lg text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Request PPE
              </a>
            </div>
          </div>
          <div className="m-2 mt-4">
            <div className="items-baseline">
              <p className="text-pink-600 pb-4 items-baseline text-black text-base leading-tight ">
                For requests larger than 200 units please fill out this form:
              </p>
            </div>
            <div className="rounded-md ">
              <a
                href=""
                className=" flex items-center justify-center border-pink-500 border text-white bg-pink-50 px-2 py-3 text-pink-600 font-medium rounded-lg"
              >
                Large scale PPE request
              </a>
            </div>
            <p
              className="text-pink-600 text-sm pt-4 w-full text-center cursor-pointer"
              onClick={hideCreateModal}
            >
              close
            </p>
          </div>
        </div>
      </div>
    )
  )

  return (
    <React.Fragment>
      <button
        className="rounded-md shadow-xl flex items-center justify-center px-2 py-3 text-base font-medium rounded-lg text-white bg-cool-gray-900 hover:bg-cool-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out mt-2"
        onClick={showCreateModal}
      >
        Request
      </button>
    </React.Fragment>
  )
}

export default RequestButton
