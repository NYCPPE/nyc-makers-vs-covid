const coverage = [
  {
    href:
      'https://spectrum.ieee.org/tech-talk/biomedical/devices/lessons-learned-nyc-makers-producing-personal-protective-equipment-medics',
    organization: 'IEEE Spectrum',
    title:
      'Lessons Learned by NYC Makers Producing Personal Protective Equipment',
    date: '3/30/2020'
  },
  {
    href: 'https://www.youtube.com/watch?v=bAVtZ5mc4nM&t=61s',
    organization: 'Bloomberg TV',
    title: 'NYC Makes PPE Interview',
    date: '4/1/2020'
  },
  {
    href: 'https://makezine.com/2020/04/03/makers-wanted-print-ppe-for-nyc-now/',
    organization: 'Make: Community',
    title: 'Makers Wanted: Print PPE for NYC Now',
    date: '4/3/2020'
  }
]

export default () => (
  <>
    <div className="mt-12 mb-2 py-2 px-4 text-xl font-bold text-gray-900">
      NYC Makes PPE in the Press
    </div>
    <div className=" flex flex-col flex-nowrap justify rounded-lg">
      {coverage.map(({ href, organization, title, date }, i) => (
        <a
          href={href}
          key={i}
          className="block w-full rounded-lg over:bg-gray-100 text-base text-pink-600 overflow-hidden flex flex-col justify-between px-4 py-2"
        >
          <div className="text-xl font-medium hover:underline">{title}</div>
          {organization} - {date}
        </a>
      ))}
    </div>
  </>
)
