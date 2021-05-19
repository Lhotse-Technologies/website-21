import Head from "next/head";

import Image from "next/image";
import { getPage } from "../lib/api";

import Row from "../components/Row.js";
import Column from "../components/Column.js";
import Grid from "../components/Grid.js";

export default function Home({ pageData }) {

  const input = [
    {
      text: "Div 1"
    },
    {
      text: "Div 2"
    },
    {
      text: "Div 3"
    },
    {
      text: "Div 4"
    },
    {
      text: "Div 5"
    },
    {
      text: "Div 6"
    }
  ];

  return (
    <>
      <Head>
        <title>{pageData?.meta?.data?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeIntro content={pageData?.home?.content} />

      <Row input = {input} />
      <Column input = {input} />
      <Grid input = {input} />

    </>
  );
}

const HomeIntro = ({ content }) => (
  <div className="text-center" dangerouslySetInnerHTML={{ __html: content }} />
);

const PostPreview = ({}) => (
  <div className="border-gray-900 rounded-md border text-center">
    <div
      className="w-full p-12"
      style={{
        background: "url(http://placehold.it/350)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    />
    <hr className="p-0 m-0" />
    Pretext
  </div>
);

export async function getStaticProps({ locale, defaultLocale }) {
  const pageData = await getPage("home", locale, defaultLocale);

  return {
    props: { pageData },
  };
}
