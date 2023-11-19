import Head from "next/head";
const config = require("../next.config");

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`${config.basePath}/favicon/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${config.basePath}/favicon/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${config.basePath}/favicon/favicon-16x16.png`}
      />
      <link
        rel="manifest"
        href={`${config.basePath}/favicon/site.webmanifest`}
      />
      <link
        rel="mask-icon"
        href={`${config.basePath}/favicon/safari-pinned-tab.svg`}
        color="#000000"
      />
      <link
        rel="shortcut icon"
        href={`${config.basePath}/favicon/favicon.ico`}
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="msapplication-config"
        content={`${config.basePath}/favicon/browserconfig.xml`}
      />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={`Openspace`} />
      <meta
        property="og:image"
        content={`${config.basePath}/assets/images/Openspace-Logo.svg`}
      />
    </Head>
  );
};

export default Meta;
