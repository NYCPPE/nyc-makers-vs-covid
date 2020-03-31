const product = [
  {
    href: '/instructions#wisc',
    label: 'Face Shield',
    image: 'img/wisc.png',
    title: 'WISC',
    text: 'A design similar to commercial products.'
  },
  {
    href: '/instructions#3dverkstan-face-shield',
    label: 'Face Shield',
    image: 'img/3dverk.png',
    title: '3DVerkstan',
    text: 'High-output 3D printed face shield.'
  },
  {
    href: '/instructions#open-source-face-shield',
    label: 'Open Source Face Shield',
    image: 'img/nyu.png',
    title: 'Open Source Face Shield',
    text: "A design that doesn't require foam."
  },
  {
    href: '/instructions#sewn-cotton-masks',
    label: '100% Cotton Masks',
    image: 'img/mask.jpg',
    title: '100% Cotton Masks',
    text:
      'Intended to be worn over existing PPE to prolong the life of surgical/N95 masks.'
  }
]
const community = [
  {
    href: '/open-fold-face-shield.html',
    label: 'Face Shield',
    image: 'img/openfold.png',
    title: 'Open Fold Face Shield',
    text:
      'These designs can be used to make ‘Face-shields’ using only thin plastic materials and some folding.'
  },
  {
    href: '/fast-face-shield.html',
    label: 'Fast Face Shield',
    image: 'img/fastface.png',
    title: 'Fast Face Shield',
    text:
      'The Fast Face Shield is a suggested design for healthcare workers with no other options.    ',
    button: 'View Design'
  }
]

export default () => (
  <>
    <div className="mt-12 mb-2 py-2 px-4 text-xl font-bold text-gray-900">
      Currently in production
    </div>
    <div className=" flex flex-row flex-wrap justify rounded-lg">
      {product.map(({ href, label, title, text, button, image }, i) => (
        <a
          href={href}
          key={i}
          className="block w-full md:w-1/3 rounded-lg over:bg-gray-100 text-gray-900 overflow-hidden flex flex-col justify-between p-4"
        >
          <div className=" items-baseline ">
            <span className="rounded-lg">
              <img
                className="h-auto w-full mx-auto hidden md:block"
                src={image}
              />
            </span>
            <div className="pt-4 text-2xl leading-7 font-extrabold mb-2">
              {title}
            </div>
            <div className="text-sm leading-5  mt-4 ">{text}</div>
          </div>
        </a>
      ))}
    </div>

    <div className="mt-12 mb-2 py-2 px-4 text-xl font-bold text-gray-900">
      Community designs
    </div>

    <div className=" flex flex-row flex-wrap md:flex-no-wrap justify-between rounded-lg">
      {community.map(({ href, label, title, text, button, image }, i) => (
        <a
          href={href}
          key={i}
          className="w-full md:w-1/2 rounded-lg hover:bg-gray-100 text-gray-900 overflow-hidden flex flex-col justify-between p-4"
        >
          <div className=" items-baseline ">
            <span className="rounded-lg">
              <img
                className="h-auto w-full mx-auto hidden md:block"
                src={image}
              />
            </span>
            <div className="pt-4 text-2xl leading-7 font-extrabold mb-2">
              {title}
            </div>
            <div className="text-sm leading-5 mt-4 ">{text}</div>
          </div>
        </a>
      ))}
    </div>
  </>
)
