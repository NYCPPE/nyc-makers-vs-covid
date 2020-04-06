export default function Banner() {
  return (
    <div className="w-full relative bg-blue-600">
      <div className="max-w-screen-xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            {/* <span className="hidden md:inline">COVID-19 ALERT:</span> */}
            <span className="">
              Know how to sew? NYC Makes PPE is seeking volunteers to produce
              100% cotton face masks.
            </span>
            <span className="block sm:m-2 sm:inline-block mt-2 md:m-0">
              <a
                href="https://docs.google.com/document/d/1ZaKMhbZuQhKtEFLjgZBmOwH9hNSOdEz2jTONqMp7WbM/edit"
                className="sm:p-2 text-white font-bold underline"
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
