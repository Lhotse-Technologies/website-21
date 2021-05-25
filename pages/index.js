import Head from "next/head";
import { getPage } from "../lib/api";

import HomeIntro from "../components/ContentElements/Home/HomeIntro/HomeIntro";
import ValueProposition from "../components/ContentElements/Home/ValueProposition/ValueProposition";
import AppOverView from "../components/ContentElements/Home/AppOverview/AppOverView";
import Manifest from "../components/ContentElements/Home/Manifest/Manifest";

export default function Home({ pageData }) {
  return (
    <>
      <Head>
        <title>{pageData?.meta?.data?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeIntro content={pageData?.home?.content} />
      <ValueProposition />
      <AppOverView />
      <Manifest />
    </>
  );
}

export async function getStaticProps({ locale, defaultLocale }) {
  const pageData = await getPage("home", locale, defaultLocale);

  return {
    props: { pageData },
  };
}
