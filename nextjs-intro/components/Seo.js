import Head from "next/head";

export default function Seo({ title }) {
  const webPageTitle = `${title} | Next Movies`;
  return (
    <Head>
      <title>{webPageTitle}</title>
    </Head>
  );
}
