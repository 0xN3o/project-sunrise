import Head from "next/head";

export default function PageHead(props) {
  // Default value
  const title = props.title
    ? `${props.title} | Project Sunrise`
    : "Project Sunrise";
  const description = props.description
    ? props.description
    : 'Most awesome NFT "referral-to-earn" protocol that reward you up to 436,900% per token.';
  const url = props.url
    ? `https://projectsunrise.net/${props.url}`
    : "https://projectsunrise.net";
  const image = props.image
    ? props.image
    : "https://i.ibb.co/dc4CVtq/project-sunrise-100.jpg";

  return (
    <Head>
      {/* Primary */}
      <title>{title}</title>
      <meta name="title" content={title} key="primary_title" />
      <meta
        name="description"
        content={description}
        key="primary_description"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} key="og_url" />
      <meta property="og:title" content={title} key="og_title" />
      <meta
        property="og:description"
        content={description}
        key="og_description"
      />
      <meta property="og:image" content={image} key="og_image" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@projectsunrise" />
      <meta property="twitter:title" content={title} key="twitter_title" />
      <meta
        property="twitter:description"
        content={description}
        key="twitter_description"
      />
      <meta name="twitter:image" content={image} key="twitter_image" />
      <meta name="twitter:image:alt" content="Project Sunrise" />
    </Head>
  );
}
