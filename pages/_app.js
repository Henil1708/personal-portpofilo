import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import * as gtag from '../lib/gtag'
import Router from "next/router";
import NextNProgress from "nextjs-progressbar";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
function MyApp({ Component, pageProps }) {

  

  return <div className=''>
    <Head>
      {/* <script  src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script> */}
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/manifest.json"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"></meta>
      <meta name="author" content="Henil Mehta" />
    </Head>
    <NextNProgress  showOnShallow={true} color={"blue"} height={5} options={{ easing: "ease", speed: 500}} spinner={false} />
    <Script src={'https://cdn.ampproject.org/v0/amp-ad-0.1.js'} async={true} custom-element="amp-ad" />
    <Script
      crossOrigin='anonymous'
       id="Adsense-id"
      async = {true}
        strategy = "beforeInteractive"
      src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1918308490244896"
    />
   <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    <Component {...pageProps} />
  </div>
}

export default MyApp
