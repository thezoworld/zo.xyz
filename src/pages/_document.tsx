import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html className="w-full h-full">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400&display=swap"
            rel="stylesheet"
          />
          <meta name="title" content="Zo World | The Game of Life" />
          <meta
            name="description"
            content="Go on adventures in real life, complete quests with the local Zo community and follow your heart in the Zo World \z/."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://zo.xyz/" />
          <meta property="og:title" content="Zo World | The Game of Life" />
          <meta
            property="og:description"
            content="Go on adventures in real life, complete quests with the local Zo community and follow your heart in the Zo World \z/."
          />
          <meta
            property="og:image"
            content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://zo.xyz/" />
          <meta
            property="twitter:title"
            content="Zo World | The Game of Life"
          />
          <meta
            property="twitter:description"
            content="Go on adventures in real life, complete quests with the local Zo community and follow your heart in the Zo World \z/."
          />
          <meta
            property="twitter:image"
            content="https://cdn.zo.xyz/branding/zo_sunrise_background.jpg"
          />
          <meta name="theme-color" content="#F15824" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@The_Zo_World" />
          <meta name="theme-color" content="#f15824" />
        </Head>
        <body className="font-sans h-full w-full">
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WTMS2ZQ"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          ></noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
