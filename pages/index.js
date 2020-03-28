import Deliveries from '../components/deliveries'

const links = [
  {
    href:
      'https://docs.google.com/forms/d/1eON_mLsFlD1wn_JUDM31IQkamXbBWD8Df6VdYJ9UDWQ/edit?ts=5e7bfed0',
    label: 'Request',
    image: 'distribution/hero.png',
    title: 'Are you a doctor in need of PPE?',
    text:
      'Our network of makers and couriers can deliver 50-100 units same day in NYC area.',
    button: 'Request',
    color: 'bg-blue-500'
  },
  {
    href: '/instructions',
    image: 'distribution/make.png',
    label: 'Make',
    title: 'Can you fabricate PPE?',
    text:
      'Our guides and community can help you get started ASAP. Assembly, fabrication and more.',
    button: 'Make',
    color: 'bg-blue-500'
  },
  {
    href:
      'https://docs.google.com/forms/d/1eON_mLsFlD1wn_JUDM31IQkamXbBWD8Df6VdYJ9UDWQ/edit?ts=5e7bfed0',
    image: 'distribution/join.png',
    label: 'Join',
    title: 'Want to get involved?',
    text: 'We need people on call for assembly, delivery and organization.',
    button: 'Join',
    color: 'bg-blue-500'
  }
]

export default () => (
  <>
    <div>
      <div className="flex flex-wrap justify-between w-full items-start mt-12 p-4">
        <div className=" mr-0 md:mr-2">
          <div className="text-4xl font-extrabold flex items-start flex-wrap ">
            NYCMakesPPE
          </div>
          <div className="mt-4 text-lg leading-7 text-gray-800">
            <p>
              We are a group of makers and healthcare professionals in NYC
              leveraging DIY manufacturing technology to support PPE production
              in NYC. Our goal full the gap for those who may be overlooked
              during the severe equipment shortage due to COVID-19.
            </p>
            <a href="/about" className="text-blue-600 underline pr-4">
              Learn more
            </a>
            <a href="/about" className="text-blue-600 underline">
              Our Disclaimer
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-4">
        <div className=" flex flex-row flex-wrap justify-between bg-yellow-50 rounded-lg">
          {links.map(({ href, label, title, text, button, image }) => (
            <div className="w-full rounded-lg w-full md:w-1/3  overflow-hidden flex flex-col justify-between p-4">
              <div className="mb-2 items-baseline text-2xl leading-7 font-extrabold">
                <span className="rounded-lg">
                  <img className="h-auto w-full mx-auto" src={image} />
                </span>
                <div className="pt-4 text-gray-800">{title}</div>
              </div>
              <div className="">
                <p className="text-base leading-6 text-gray-500">{text}</p>
                <div className="rounded-md shadow">
                  <a
                    href={href}
                    className="flex items-center justify-center px-4 py-2 text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                  >
                    {button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-4 relative max-w-screen-xl mx-auto">
      <div className="max-w-md mx-auto lg:max-w-5xl flex">
        <Deliveries limit />

        <div className=" flex-1 m-4 rounded-lg bg-gray-100 p-6 lg:flex flex-col justify-start md:w-2/3">
          <div className="flex-1">
            <div className="mb-6 items-baseline text-2xl leading-7 font-extrabold">
              Will you help us?
            </div>
            <div className="mt-4 text-lg leading-7 text-gray-800">
              We've raised over $30,000 so far. Your donation will be used to
              deliver critical PPE for medical workers. We are running the
              gofundme campaign to cover material costs for all manufactured PPE
              donated to hospitals.
            </div>
          </div>
          <div className="rounded-md shadow mt-4">
            <a
              href="https://charity.gofundme.com/o/en/campaign/nyc-makes-ppe-covid-19"
              className="flex items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Donate.
            </a>
          </div>
          <div className="text-xs mt-4 text-gray-800">
            They campaign is being organized by Hack Manhattan, a 501(c)(3)
            exempt charity. Any surplus we cannot reasonably use will be donated
            to other COVID-19 relief efforts or relevant 501(c)(3) exempt
            charities not part of this campaign.
          </div>
        </div>
      </div>
    </div>
  </>
)
