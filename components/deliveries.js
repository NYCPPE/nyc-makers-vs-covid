const links = [
  {
    count: 150,
    date: '03/26/20',
    hospital: 'Columbia University/NY Presbyterian Hospital',
    type: 'WISC Shields'
  },
  {
    count: 30,
    date: '03/26/20',
    hospital: 'Brookdale Medical Center',
    type: 'NYU Shields'
  },
  {
    count: 100,
    date: '03/26/20',
    hospital: 'Weill Cornell/NY Presbyterian Hospital',
    type: '3DVerkstan Shields'
  },
  {
    count: 115,
    date: '03/26/20',
    hospital: 'Weill Cornell/NY Presbyterian Hospital',
    type: '3DVerkstan Shields'
  },
  {
    count: 50,
    date: '03/26/20',
    hospital: 'Lincoln Hopsital',
    type: 'WISC Shields'
  },
  {
    count: 100,
    date: '03/25/20',
    hospital: 'Wyckoff Heights Medical Center',
    type: 'WISC Shields'
  },
  {
    count: 30,
    date: '03/25/20',
    hospital: 'Weill Cornell/NY Presbyterian Hospital',
    type: '3DVerkstan Shields'
  },
  {
    count: 800,
    date: '03/25/20',
    hospital: 'Columbia University/NY Presbyterian Hospital',
    type: 'Shields'
  },
  {
    count: 150,
    date: '03/24/20',
    hospital: 'Maimonides Hospital',
    type: 'WISC Shields'
  },
  {
    count: 70,
    date: '03/24/20',
    hospital: 'NY Presbyterian Hospital',
    type: 'WISC Shields'
  },
  {
    count: 75,
    date: '03/24/20',
    hospital: 'Elmhurst Hospital',
    type: 'WISC Shields'
  },
  {
    count: 50,
    date: '03/22/20',
    hospital: 'Mount Sinai Morningside Hospital',
    type: 'WISC Shields/1 Miniband'
  },
  {
    count: 97,
    date: '03/22/20',
    hospital: 'Elmhurst Hospital',
    type: 'WISC Shields'
  }
]

export default ({ limit }) => {
  console.log(limit)

  let truncatedList = []

  if (limit) {
    truncatedList = links.slice(0, 6)
  } else {
    truncatedList = links
  }

  return (
    <div class="bg-white overflow-hidden sm:rounded-md p-4">
      <h3>Latest Deliveries</h3>
      <div className="m-0">
        {truncatedList.map(props => (
          <div>
            <div class="py-2 mt-4 flex">
              <div class="mr-4">
                <span class="py-3  w-20 mx-auto text-3xl flex justify-center leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {props.count}
                </span>
              </div>
              <div>
                <div class="flex items-center justify-between">
                  <div class="text-sm leading-5 font-medium text-blue-600 truncate">
                    {props.type}
                  </div>
                </div>
                <div class="mt-1 sm:flex sm:justify-between">
                  <div class="sm:flex">
                    <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      {props.hospital}
                    </div>
                    <div class="ml-4 mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>
                        <time datetime="2020-01-07">{props.date}</time>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {limit && (
          <a href="/stats">
            <p className="w-full pt-4 text-blue-600 ">
              See all deliveries &rarr;
            </p>
          </a>
        )}
      </div>
    </div>
  )
}
