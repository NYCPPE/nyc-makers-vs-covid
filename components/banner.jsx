export default function Banner() {
  return (
    <div className="w-full relative bg-yellow-200 ">
      <div className="max-w-screen-xl mx-auto py-4 px-4 ">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-bold text-white">
            {/* <span className="hidden md:inline">COVID-19 ALERT:</span> */}
            <span className="mr-2 text-gray-900">
              NYC Makes PPE is seeking volunteers to produce 100% cotton face
              masks.
            </span>
            <span className="block inline-block">
              <a
                href="https://docs.google.com/document/d/1ZaKMhbZuQhKtEFLjgZBmOwH9hNSOdEz2jTONqMp7WbM/edit"
                className="sm:p-2 text-white font-bold underline text-gray-900"
              >
                Find out more &rarr;
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
