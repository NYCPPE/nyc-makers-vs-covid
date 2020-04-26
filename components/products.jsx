const product = [
  {
    href: '/instructions#vase-mode-inhaler-spacer-by-pink_vampire',
    label: 'Vase mode Inhaler Spacer',
    image: 'img/vase_mode_inhaler_spacer.png',
    title: 'Vase mode Inhaler Spacer',
    text:
      'Inhaler spacer tube printed using "Vase mode" without any sharp edges and is easy to clean. Designed by Pink_Vampire.'
  },
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
    href: '/instructions#sewn-100-cotton-masks',
    label: '100% Cotton Masks',
    image: 'img/mask.jpg',
    title: '100% Cotton Masks',
    text:
      'Intended to be worn over existing PPE to prolong the life of surgical/N95 masks.'
  },
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
    <div className="mt-12 mb-2 text-xl font-bold text-gray-900">
      Supported PPE Designs
    </div>
    <div className=" flex flex-row flex-wrap justify rounded-lg">
      {product.map(({ href, label, title, text, button, image }, i) => (
        <a
          href={href}
          key={i}
          className="block w-full md:w-1/4 rounded-lg over:bg-gray-100 text-gray-900 overflow-hidden flex flex-col justify-between p-4"
        >
          <div className=" items-baseline">
            <span className="rounded-lg">
              <img
                className="h-auto w-full mx-auto hidden md:block"
                src={image}
              />
            </span>
            <div className="pt-4 text-2xl leading-7 font-extrabold mb-2">
              {title}
            </div>
            <div className="text-sm leading-5  mt-4">{text}</div>
          </div>
        </a>
      ))}
    </div>
  </>
)
