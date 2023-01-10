import { basicInfo } from '../constants/siteInfo';

function Head() {
  return (
    <>
      <title>{basicInfo.title}</title>

      <meta name="description" content={basicInfo.descriptions} />
      <meta name="keywords" content={basicInfo.keywords} />
      <meta name="author" content={basicInfo.author} />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />

      <meta name="og:title" content={basicInfo.title} />
      <meta name="og:description" content={basicInfo.descriptions} />
      <meta name="og:keywords" content={basicInfo.keywords} />
      <meta name="og:type" content="article" />
      <meta name="og:url" content="https://hendrasadewa.com" />
      <meta name="og:site_name" content={basicInfo.title} />
      <meta name="og:image" content={basicInfo.logo} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={basicInfo.twitter} />
      <meta name="twitter:site" content={basicInfo.twitter} />
      <meta name="twitter:title" content={basicInfo.title} />
      <meta name="twitter:description" content={basicInfo.descriptions} />

      <meta name="theme-color" content="#66cc8a" />

      <link rel="icon" href="/favicon.ico" />
    </>
  );
}

export default Head;
