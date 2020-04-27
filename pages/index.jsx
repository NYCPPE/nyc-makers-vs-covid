import TotalCount from '../components/totalcount'
import Donations from '../components/donations'
import Social from '../components/social'
import Photos from '../components/photos'
import RequestButton from '../components/modal'
import Footer from '../components/footer'
import Link from 'next/link'

export default () => (
  <div className="w-full" id="home">
    <div>
      <div className="flex justify-start lg:justify-center flex-wrap mt-0 p-4 md:px-12 md:py-12 bg-cool-gray-900">
        <div className="text-3xl max-w-3xl md:text-5xl leading-tight md:font-black flex items-start flex-wrap text-gray-50 mb-4 mr-8">
          Providing PPE to underserved healthcare workers and organizations in
          NYC.
        </div>
        <div className="relative m-0 lg:mx-auto w-full max-w-md md:max-w-sm mb-8 p-0">
          <div className="flex flex-row flex-wrap md:flex-no-wrap justify-between rounded-lg">
            <div className="w-full rounded-lg bg-cool-gray-50 m-2 overflow-hidden flex flex-col justify-between p-6">
              <div className="items-baseline">
                <div className="text-cool-gray-900 pb-3 items-baseline text-black text-xl md:text-2xl leading-tight font-semibold">
                  Are you an organization or healthcare worker in need of PPE?
                </div>
              </div>
              <div className="rounded-md ">
                <a
                  href="https://bit.ly/nycmakesppe-request"
                  className=" flex items-center justify-center text-white px-2 py-3 bg-cool-gray-900 text-white font-medium rounded-lg"
                >
                  Request PPE
                </a>
              </div>
              <span className="text-sm pt-4">
                For organizations requesting 500+ pieces of PPE,{' '}
                <a
                  href="https://bit.ly/nycmakesppe-grant"
                  className="font-medium"
                >
                  click here
                </a>
                .
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto flex flex-wrap justify-start md:flex-nowrap">
          <TotalCount />
          <Donations />
        </div>
      </div>
    </div>
    <div className="max-w-3xl mx-auto pt-8">
      <div className="flex-1 mt-4 mb-6 p-4 rounded-lg">
        <p className="text-md leading-normal text-gray-700">
          <b>NYC Makes PPE</b> is a group of engineers, makers, and healthcare
          professionals leveraging DIY manufacturing technology to support PPE
          production in NYC.
        </p>
        <p className="text-md leading-normal text-gray-700">
          Columbia University, Weill Cornell Medicine, NYC Resistor, Hack
          Manhattan, fat cat FAB LAB, Makerspace NYC, CCNY CUNY ASRC, and Bjarke
          Ingels Group, Matterhackers, Alternew/NYC Face Mask Initiative, and
          others.
        </p>
        <a className="text-base mr-4" href="/about">
          Learn More
        </a>
        <a className="text-base" href="/instructions#in-use">
          Supported Designs
        </a>
      </div>
      <Photos />
    </div>
  </div>
)
