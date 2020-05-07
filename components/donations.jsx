import React, { useState, useEffect } from 'react'

export default ({ limit }) => {
  const [hasError, setErrors] = useState(false)
  const [data, setData] = useState({})

  async function fetchData() {
    const res = await fetch('/api/v1/system')
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="sm:rounded-md p-2  hover:no-underline">
      <a
        href="https://charity.gofundme.com/o/en/campaign/nyc-makes-ppe-covid-19"
        className="rounded-lg inline-block w-full hover:no-underline md:max-w-sm  hover:opacity-75"
      >
        <div className="flex items-baseline">
          <p className="text-4xl leading-8 mb-1 font-medium text-white">
            {data.raised ? data.raised : hasError ? '$40,000' : 'Loading...'}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-base leading-6 mb-0 font-medium text-white hover:no-underline">
            Total raised. Donate &rarr;
          </p>
        </div>
        <div className="flex justify-between">
          <span className="text-xs leading-6 text-cool-gray-500 font-hairline">
            {data.numberOfDonors
              ? data.numberOfDonors + '. Thank you!'
              : hasError
              ? ''
              : 'Loading...'}
          </span>
        </div>
      </a>
    </div>
  )
}
