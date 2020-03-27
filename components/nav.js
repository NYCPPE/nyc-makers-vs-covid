import Link from 'next/link'
import Banner from './banner'

const links = [
  { href: '/instructions', label: 'Make' },
  {
    href: 'https://charity.gofundme.com/o/en/campaign/nyc-makes-ppe-covid-19',
    label: 'Donate'
  },
  {
    href:
      'https://docs.google.com/forms/d/1eON_mLsFlD1wn_JUDM31IQkamXbBWD8Df6VdYJ9UDWQ/edit?ts=5e7bfed0',
    label: 'Request'
  },
  { href: '/about', label: 'About' }
]

export default function Nav() {
  return (
    <>
      <nav>
        <ul className="flex justify-between items-center p-8 ">
          <li>
            <Link href="/">
              <a className="md:flex flex-nowrap items-center hidden">
                <img src="NYCMakesPPELogo.svg" className="mr-4 w-10" />
                <span className="text-gray-900">NYCMakesPPE</span>
              </a>
            </Link>
          </li>
          <ul className="flex justify-between items-center">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`} className="ml-4">
                <a href={href} className="btn-blue no-underline text-gray-900">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
      {/* <Banner /> */}
    </>
  )
}
