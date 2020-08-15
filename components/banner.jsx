const Banner = () => {
  return (
    <div className="w-full relative bg-yellow-200">
      <div className="max-w-screen-xl mx-auto py-4 px-4">
        <div className="pr-16 sm:text-center sm:px-16 mx-auto">
          <p className="font-bold text-white">
            {/* <span className="hidden md:inline">COVID-19 ALERT:</span> */}
            <span className="mr-2 text-gray-900">
              NYC Makes PPE is seeking volunteer couriers to get our PPE to
              those on the frontline in all five boroughs.
              <br />
            </span>
            <span className="block inline-block">
              <a
                href="mailto:distribution@nycmakesppe.org"
                className="sm:p-2 text-white font-bold underline text-gray-900"
              >
                E-mail us to find out how you can help! &rarr;
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
