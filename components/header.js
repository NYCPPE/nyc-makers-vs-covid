import Head from 'next/head'

export default function Header() {
  return (
    <Head>
      <title>NYC Makes PPE</title>

      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta
        name="description"
        content="NYC Makes PPE is a group of makers and healthcare professionals in NYC leveraging DIY manufacturing technology to support PPE production in NYC and worldwide. This website seeks to consolidate information gathered during planning and manufacturing for reference."
      />

      <link rel="canonical" href="https://nycmakesppe.com/" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="NYC Makes PPE" />
      <meta
        property="og:description"
        content="NYC Makes PPE is a group of makers and healthcare professionals in NYC leveraging DIY manufacturing technology to support PPE production in NYC and worldwide."
      />
      <meta property="og:url" content="https://nycmakesppe.com/" />
      <meta property="og:site_name" content="NYC Makes PPE" />
      <meta property="og:image" content="img/card-social-media.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta
        property="article:publisher"
        content="http://facebook.com/fatcatFABLAB"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:description"
        content="NYC Makes PPE is a group of makers and healthcare professionals in NYC leveraging DIY manufacturing technology to support PPE production in NYC and worldwide."
      />
      <meta name="twitter:title" content="NYC Makes PPE" />
      <meta name="twitter:site" content="@fatcatFABLAB" />
      <meta name="twitter:domain" content="NYC Makes PPE" />
      <meta name="twitter:image:src" content="img/card-social-media.jpg" />
      <meta name="twitter:creator" content="@fatcatFABLAB" />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-161723058-1"
      ></script>
      {/* <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'UA-161723058-1');
      </script> */}

      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
  )
}
