import TotalCount from '../components/totalcount'
import Donations from '../components/donations'
import Social from '../components/social'
import Photos from '../components/photos'

const links = [
  {
    href:
      'https://docs.google.com/forms/d/1eON_mLsFlD1wn_JUDM31IQkamXbBWD8Df6VdYJ9UDWQ/edit?ts=5e7bfed0',
    label: 'Request',
    image: 'distribution/hero.png',
    title: 'Are you a healthcare professional in need of PPE?',
    text:
      'Our network of makers and couriers can deliver 50-100 units same day in NYC area.',
    button: 'Request',
    color: 'bg-blue-500'
  },
  // {
  //   href: '/instructions',
  //   image: 'distribution/make.png',
  //   label: 'Make',
  //   title: 'Can you fabricate PPE?',
  //   text:
  //     'Our guides and community can help you get started ASAP. Assembly, fabrication and more.',
  //   button: 'Make',
  //   color: 'bg-blue-500'
  // }
  {
    href: 'https://charity.gofundme.com/o/en/campaign/nyc-makes-ppe-covid-19',
    image: 'distribution/join.png',
    label: 'Join',
    title: 'Want to donate to fun our efforts?',
    text: "We're raising money to buy materials make PPE.",
    button: 'Donate',
    color: 'bg-blue-500'
  }
]

export default () => (
  <>
    <div>
      <div className="flex justify-between items-center max-w-4xl items-start mt-8 p-4">
        <div className="text-3xl md:text-4xl leading-tight font-black flex items-start flex-wrap text-gay-700 mb-4 mr-4">
          Providing PPE to underserved healthcare workers in NYC.
        </div>
        <span className="rounded-lg w-1/2">
          <img
            className="h-auto mx-auto hidden md:block"
            src="distribution/hero.png"
          />
        </span>
      </div>
      <span className=" hidden md:block rounded-lg px-4 block md:hidden">
        <img
          className="h-auto w-full mx-auto block md:hidden"
          src="distribution/hero.png"
        />
      </span>
      <div className="relative z-10 mx-auto ">
        <div className=" flex flex-row flex-wrap md:flex-no-wrap justify-between rounded-lg">
          {links.map(({ href, label, title, text, button, image }, i) => (
            <div
              key={i}
              className="w-full rounded-lg bg-yellow-50 m-2 overflow-hidden flex flex-col justify-between text-gray-900 p-6"
            >
              <div className=" items-baseline ">
                <div className="pb-2 items-baseline text-black text-2xl leading-tight font-semibold">
                  {title}
                </div>
                <p className="py-2 text-base leading-normal text-gray-600">
                  {text}
                </p>
              </div>
              <div className="rounded-md shadow">
                <a
                  href={href}
                  className="flex items-center justify-center px-2 py-3 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  {button}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="mx-auto flex flex-wrap justify-start md:flex-nowrap">
      <TotalCount />
      <Donations />
    </div>

    <h3 className="py-2 px-4"></h3>
    <div className="flex-1 py-2 px-4">
      <p className="text-xl">
        NYC Makes PPE is a group of engineers, makers, and healthcare
        professionals leveraging DIY manufacturing technology to support PPE
        production in NYC.
      </p>
      <p className="text-xl">
        Our represented organizations include: Columbia University, Weill
        Cornell Medicine, NYC Resistor, HackManhattan, fat cat FAB LAB,
        Makerspace NYC, and others
      </p>
      <a
        className="text-lg text-blue-600"
        href="mailto:jake.h.lee@columbia.edu"
      >
        Want to get involved?
      </a>
    </div>
    <h3 className="py-2 px-4">Photos</h3>
    <Photos />
    <h3 className="py-2 px-4">Find us online</h3>
    <Social />
  </>
)
