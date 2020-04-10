import TotalCount from '../components/totalcount'
import Donations from '../components/donations'
import Social from '../components/social'
import Media from '../components/media'
import Photos from '../components/photos'
import Products from '../components/products'

const links = [
  {
    href:
      'https://docs.google.com/forms/d/e/1FAIpQLScwaPIokgEel7exfRQMBEuQlOUTdYCc4UOhKelGtUwKms8ytg/viewform',
    label: 'Request',
    image: 'distribution/hero.png',
    title: 'Are you a healthcare worker in need of PPE?',
    text:
      'Our network of makers and couriers can deliver anywhere in the NYC area.',
    button: 'Request',
    color: 'bg-pink-500'
  },
  {
    href: 'https://charity.gofundme.com/o/en/campaign/nyc-makes-ppe-covid-19',
    image: 'distribution/join.png',
    label: 'Join',
    title: 'Will you help us fund our efforts?',
    text: "We're on GoFundMe raising money to buy materials to make PPE.",
    button: 'Donate',
    color: 'bg-pink-500'
  }
]

export default () => (
  <>
    <div>
      <div className="flex justify-between max-w-4xl items-start mt-0 md:mt-8 p-4">
        <div className="text-2xl md:text-4xl leading-tight font-black flex items-start flex-wrap text-gay-700 mb-4 mr-8 main-title">
          Providing PPE to underserved healthcare workers and organizations in
          NYC.
        </div>
        {/* <span className="z-10 rounded-lg main-image max-w-sm">
          <img
            className="h-auto mx-auto hidden md:block"
            src="distribution/hero.png"
          />
        </span> */}
      </div>
      <span className="hidden md:block rounded-lg px-4 block md:hidden">
        <img
          className="h-auto w-full mx-auto block md:hidden"
          src="distribution/hero.png"
        />
      </span>
      <div className="relative mx-auto">
        <div className="flex flex-row flex-wrap md:flex-no-wrap justify-between rounded-lg">
          {links.map(({ href, label, title, text, button, image }, i) => (
            <div
              key={i}
              className="w-full rounded-lg bg-pink-50 m-2 overflow-hidden flex flex-col justify-between p-6"
            >
              <div className="items-baseline">
                <div className="text-pink-600 pb-2 items-baseline text-black text-2xl leading-tight font-semibold">
                  {title}
                </div>
                <p className="py-2 text-base leading-normal text-pink-600">
                  {text}
                </p>
              </div>
              <div className="rounded-md shadow-xl">
                <a
                  href={href}
                  className="flex items-center justify-center px-2 py-3 text-base font-medium rounded-lg text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
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

    <div className="mt-12 mb-2 py-2 px-4 text-xl font-bold text-gray-700">
      About
    </div>
    <Photos />
    <div className="flex-1 mt-4 mb-6 bg-gray-50 p-4 rounded-lg">
      <p className="text-md leading-normal text-gray-700">
        <b>NYC Makes PPE</b> is a group of engineers, makers, and healthcare
        professionals leveraging DIY manufacturing technology to support PPE
        production in NYC.
      </p>
      <p className="text-md leading-normal text-gray-700">
        Our represented organizations include: Columbia University, Columbia
        University Makerspace, Columbia Zuckerman Institute, Weill Cornell
        Medicine, NYC Resistor, Hack Manhattan, fat cat FAB LAB, Makerspace NYC,
        CCNY CUNY ASRC, and Bjarke Ingels Group, Matterhackers, and others.
      </p>
      <a className="text-base text-pink-600 rounded-lg mr-4" href="/about">
        Learn more
      </a>
      <a
        className="text-base text-pink-600 rounded-lg"
        href="mailto:nycmakesppe@nycmakesppe.com"
      >
        Get involved
      </a>
    </div>

    <div className="mt-12 mb-4 px-4 text-xl font-bold text-gray-900">
      Find us online
    </div>
    <Social />
    <Products />
  </>
)
