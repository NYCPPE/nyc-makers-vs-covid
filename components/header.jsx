import Head from 'next/head'
import { GA_TRACKING_ID } from './gtag'

export default function Header(props) {
  const title = props.title || 'NYC Makes PPE'
  const description =
    props.description ||
    'Providing PPE to underserved healthcare workers and organizations in NYC. We are a group of engineers, makers, and healthcare professionals leveraging DIY manufacturing technology to support PPE production in NYC.'
  const image = props.image || '/img/card-social-media_2.jpg'

  return (
    <Head>
      <title>{title}</title>

      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta name="title" content={title} />

      <meta name="description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:url" content="https://nycmakesppe.com/" /> */}
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta
        property="article:publisher"
        content="http://facebook.com/NYCMakesPPE"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@NYCMakesPPE" />
      <meta name="twitter:domain" content="NYC Makes PPE" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@NYCMakesPPE" />

      <link rel="icon" type="image/png" href="/fav.png" />

      <link rel="stylesheet" href="/css/github-markdown.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
        rel="stylesheet"
      ></link>

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </Head>
  )
}
