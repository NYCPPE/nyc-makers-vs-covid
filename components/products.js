const product = [
  {
    href: '/instructions#wisc',
    label: 'Face Shield',
    image: 'img/wisc.png',
    title: 'WISC',
    text: 'Wisconsin Face shield.'
  },
  {
    href: '/instructions#3dverkstan-face-shield',
    label: 'Face Shield',
    image: 'img/3dverk.png',
    title: '3DVerkstan',
    text: '3D printed face shield.'
  },
  {
    href: '/instructions#WISC',
    label: 'Face Shield',
    image: 'img/miniband.png',
    title: 'Miniband',
    text: 'Reduced version of the prusa design.'
  }
]
const community = [
  {
    href: '/open-fold-face-shield',
    label: 'Face Shield',
    image: 'img/openfold.png',
    title: 'Open Fold Face Shield',
    text:
      'These designs can be used to make complete PPE ‘Face-shields’† using only thin plastic materials and some folding.'
  },
  {
    href: '/fast-face-shield',
    label: 'Face Shield',
    image: 'img/fastface.png',
    title: '3DVerkstan',
    text: '3D printed face shield.',
    button: 'View Design'
  }
]

export default () => (
  <>
    <h3>Currently in production</h3>

    <div className=" flex flex-row flex-wrap md:flex-no-wrap justify-between rounded-lg">
      {product.map(({ href, label, title, text, button, image }, i) => (
        <a
          href={href}
          key={i}
          className="w-full rounded-lg bg-gray-50 hover:bg-gray-100 m-2 text-gray-900 overflow-hidden flex flex-col justify-between p-4"
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
            <p className="text-sm leading-5  mt-4 ">{text}</p>
          </div>
        </a>
      ))}
    </div>

    <h3>Community designs</h3>

    <div className=" flex flex-row flex-wrap md:flex-no-wrap justify-between rounded-lg">
      {community.map(({ href, label, title, text, button, image }, i) => (
        <a
          href={href}
          key={i}
          className="w-full rounded-lg bg-gray-50 hover:bg-gray-100 m-2 text-gray-900 overflow-hidden flex flex-col justify-between p-4"
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
  </>
)
