import Deliveries from '../components/deliveries'

const links = [
  {
    href:
      'https://docs.google.com/forms/d/1eON_mLsFlD1wn_JUDM31IQkamXbBWD8Df6VdYJ9UDWQ/edit?ts=5e7bfed0',
    label: 'Request',
    title: 'Are you a doctor in need of PPE?',
    text:
      'Our network of makers and couriers can deliver 50-100 units same day in NYC area.',
    button: 'Request',
    color: 'bg-blue-500'
  },
  {
    href: '/instructions',
    label: 'Make',
    title: 'Can you fabricate PPE?',
    text:
      'Our guides and community can help you get started ASAP. Assembly, fabrication and more.',
    button: 'Make',
    color: 'bg-blue-500'
  }
]

export default () => (
  <>
    <div>
      <div className="flex flex-row justify-between mt-12">
        <div className="px-4">
          <div className="text-4xl font-bold flex items-start flex-wrap ">
            NYC Makes PPE
          </div>
          <div class="mt-4 max-w-xl text-lg leading-7 text-gray-600">
            <p>
              NYC Makes PPE is a group of makers and healthcare professionals in
              NYC leveraging DIY manufacturing technology to support PPE
              production in NYC and worldwide. This website seeks to consolidate
              information gathered during planning and manufacturing for
              reference.
            </p>
          </div>
        </div>
      </div>
      <div class="relative z-10 mx-auto mt-6">
        <div class="  flex flex-row justify-between">
          {links.map(({ href, label, title, text, button }) => (
            <div class="w-full rounded-lg m-1 overflow-hidden flex flex-col justify-between bg-gray-100 p-6">
              <div class=" mb-6 items-baseline text-2xl leading-7 font-extrabold">
                {title}
              </div>
              <div class="">
                <p class="mt-5 text-lg leading-7 text-gray-500">{text}</p>

                <div class=" rounded-md shadow">
                  <a
                    href={href}
                    class="flex items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
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
    <Deliveries limit />
    <div class="mt-4 relative max-w-screen-xl mx-auto">
      <div class="max-w-md mx-auto lg:max-w-5xl">
        <div class="rounded-lg bg-gray-100 p-6 lg:flex flex-col justify-start">
          <div class="flex-1">
            <div className="mt-4 mb-6 items-baseline text-2xl leading-7 font-extrabold">
              Will you help us?
            </div>
            <div class="mt-4 text-lg leading-7 text-gray-800">
              We've raised over $30,000 so far. Your donation will be used to
              deliver critical PPE for medical workers. We are running the
              gofundme campaign to cover material costs for all manufactured PPE
              donated to hospitals.
            </div>
          </div>
          <div class="rounded-md shadow mt-4">
            <a
              href="https://charity.gofundme.com/o/en/campaign/nyc-makes-ppe-covid-19"
              class="flex items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              Donate.
            </a>
          </div>
          <div class="text-xs mt-4 text-gray-800">
            They campaign is being organized by Hack Manhattan, a 501(c)(3)
            exempt charity. Any surplus we cannot reasonably use will be donated
            to other COVID-19 relief efforts or relevant 501(c)(3) exempt
            charities not part of this campaign.
          </div>
        </div>
      </div>
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

      <div class="mt-12 bg-white">
        <div class="p-4 ">
          <div class="pt-2 text-lg leading-6 font-medium text-gray-900">
            Join the discord community
          </div>
          <div class="mt-2 sm:flex sm:items-start sm:justify-between">
            <div class="max-w-xl text-sm leading-5 text-gray-500">
              <p>
                We need all hands on deck. Join us and chat realtime about how
                we can support our cities medical workers.
              </p>
            </div>
            <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
              <span class="inline-flex rounded-md shadow-sm">
                <a
                  type="button"
                  href="https://discord.gg/Qd4sWX"
                  class="inline-flex items-center px-4 py-2  text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                  Join Discord
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
