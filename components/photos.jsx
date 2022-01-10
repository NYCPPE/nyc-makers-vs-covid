const Photos = () => (
  <div className="flex flex-col p-4">
    <div className="flex flex-wrap md:flex-no-wrap justify-start">
      <span className="rounded-lg overflow-hidden">
        <img
          className="h-auto w-full max-w-xs mx-auto"
          src="distribution/image4.jpg"
        />
      </span>
      <span className="w-4 h-4"></span>

      <span className="rounded-lg overflow-hidden">
        <img
          className="h-auto w-full max-w-md mx-auto"
          src="/distribution/image1.jpg"
        />
      </span>
      <span className="w-4 h-4"></span>

      <span className="rounded-lg overflow-hidden">
        <img
          className="h-auto w-full max-w-xs mx-auto"
          src="distribution/maker.jpg"
        />
      </span>
    </div>
  </div>
)

export default Photos
