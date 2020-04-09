export default ({ children }) => (
  <div className="bg-white">
    <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
        <div className="px-5 py-2">
          <a
            href="/about"
            className="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            About
          </a>
        </div>

        <div className="px-5 py-2">
          <a
            href="mailto:mediainfo@nycmakesppe.com"
            className="text-base leading-6 text-g gray-500 hover:text-gray-900"
          >
            Press
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="pdf/Face_Shield_Disclaimer.pdf"
            className="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Disclaimer
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="https://twitter.com/nycmakesppe"
            className="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Twitter
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="https://github.com/NYCPPE/nyc-makers-vs-covid"
            className="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Github
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="https://www.facebook.com/nycmakesppe"
            className="text-base leading-6 text-gray-500 hover:text-gray-900"
          >
            Facebook
          </a>
        </div>
      </nav>
    </div>
  </div>
)
