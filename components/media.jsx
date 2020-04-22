const coverage = [
  {
    href:
      'http://tribecatrib.com/content/coronavirus-crisis-community-daily-downtown-updates',
    organization: 'The Tribeca Trib',
    logo: 'media_logos/the_tribeca_trib.jpg',
    title: 'The Coronavirus Crisis in the Community: Daily Downtown Updates',
    date: '3/28/2020'
  },
  {
    href:
      'https://spectrum.ieee.org/tech-talk/biomedical/devices/lessons-learned-nyc-makers-producing-personal-protective-equipment-medics',
    organization: 'IEEE Spectrum',
    logo: 'media_logos/ieee_spectrum.png',
    title:
      'Lessons Learned by NYC Makers Producing Personal Protective Equipment',
    date: '3/30/2020'
  },
  {
    href: 'https://www.youtube.com/watch?v=bAVtZ5mc4nM&t=61s',
    organization: 'Bloomberg TV',
    logo: 'media_logos/bloomberg_tv.png',
    title: 'NYC Makes PPE Interview',
    date: '4/1/2020'
  },
  {
    href:
      'https://makezine.com/2020/04/03/makers-wanted-print-ppe-for-nyc-now/',
    organization: 'Make: Community',
    logo: 'media_logos/make_community.png',
    title: 'Makers Wanted: Print PPE for NYC Now',
    date: '4/3/2020'
  },
  {
    href:
      'https://nycmakesppe.reportablenews.com/pr/everyday-new-yorkers-are-making-ppe-to-protect-healthcare-workers-and-giving-them-away-for-free',
    logo: 'NYCMakesPPELogo.svg',
    organization: 'NYC Makes PPE',
    title:
      'Everyday New Yorkers are making PPE to protect healthcare workers - and giving them away for free',
    date: '4/9/2020'
  },
  {
    href:
      'http://www1.cuny.edu/mu/forum/2020/04/16/cuny-colleges-harness-3d-printers-to-provide-crucial-protective-equipment-for-frontline-medical-workers/',
    logo: 'media_logos/cuny.png',
    organization: 'City University of New York (CUNY)',
    title:
      'CUNY Colleges Harness 3D Printers To Provide Crucial Protective Equipment For Frontline Medical Workers',
    date: '4/16/2020'
  },
  {
    href:
      'https://www.bxtimes.com/cuny-schools-3d-print-ppe-face-shields-for-nyc-health-workers/',
    logo: 'media_logos/bronx_times.png',
    organization: 'Bronx Times',
    title: 'CUNY schools 3D-print PPE face shields for NYC health workers',
    date: '4/17/2020'
  }
]

export default () => (
  <>
    <div className="mt-12 mb-2 py-2 px-4 text-xl font-bold text-gray-900">
      Press
    </div>
    <div className=" flex flex-col flex-nowrap justify rounded-lg">
      {coverage.map(({ href, organization, logo, title, date }, i) => (
        <a
          href={href}
          key={i}
          className="block w-full rounded-lg over:bg-gray-100 text-base text-pink-600 overflow-hidden flex flex-col justify-between px-4 py-2"
        >
          <img
            className="mb-1 object-left object-scale-down h-15 w-full"
            src={logo}
          />
          <div className="text-xl font-medium hover:underline">{title}</div>
          {organization} - {date}
        </a>
      ))}
      <div className="mt-12 mb-2 py-2 px-4 text-center text-2xl font-bold text-gray-900">
        For media inquires contact us at{' '}
        <a
          href="mailto:mediainfo@nycmakesppe.com"
          className="block w-full rounded-lg over:bg-gray-100 text-pink-600 overflow-hidden flex flex-col justify-between px-4 py-2"
        >
          mediainfo@nycmakesppe.com
        </a>
      </div>
    </div>
  </>
)
