import Head from "next/head";

import Image from "next/image";
import { getPage } from "../lib/api";
import en from "../locales/en";
import de from "../locales/de";
import { useRouter } from "next/router";


export default function Home({ pageData }) {
  const { locale } = useRouter();
  const t = locale === "de" ? de : en;
  return (
    <>
      <Head>
        <title>{pageData?.meta?.data?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeIntro content={pageData?.home?.content} />

      <p>{t.test_lang}</p>

      <div className="h-64 grid md:grid-cols-3 grid-cols-1 gap-4 mt-12">
        <PostPreview>1</PostPreview>
        <PostPreview>2</PostPreview>
        <PostPreview>3</PostPreview>
        <PostPreview>4</PostPreview>
        <PostPreview>5</PostPreview>
      </div>
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

export async function getStaticProps() {
  const pageData = await getPage("home");

  return {
    props: { pageData },
  };
}
