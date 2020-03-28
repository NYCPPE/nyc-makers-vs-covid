export default () => (
  <div className="mt-8 flex flex-col">
    <h1 className="mt-6 mb-4 text-2xl w-full">Photos</h1>
    <div className="flex justify-between">
      <span className="rounded-lg">
        <img
          className="h-auto w-full max-w-xs mx-auto"
          src="distribution/image0.jpg"
        />
      </span>
      <span className="w-4 h-4 "></span>

      <span className="rounded-lg">
        <img
          className="h-auto w-full max-w-xs mx-auto p4"
          src="/distribution/image1.jpg"
        />
      </span>
    </div>
    <div className="flex mt-4 justify-between">
      <span className="rounded-lg">
        <img
          className="h-auto w-full max-w-xs mx-auto"
          src="distribution/image2.jpg"
        />
      </span>
      <span className="w-4 h-4 "></span>

      <span className="rounded-lg">
        <img
          className="h-auto w-full max-w-xs mx-auto p4"
          src="distribution/image3.jpg"
        />
      </span>
    </div>
  </div>
)
