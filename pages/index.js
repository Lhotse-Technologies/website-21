import Head from "next/head";
import { getPage } from "../lib/api";
import Image from "next/image";

export default function Home({ pageData }) {
  return (
    <>
      <Head>
        <title>{pageData?.meta?.data?.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeIntro content={pageData?.home?.content} />

      <div className="h-64 grid md:grid-cols-3 grid-cols-1 gap-4 mt-12">
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
    <div style={{ position: "relative", height: 400 }}>
      <Image
        src="/image.jpg"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
      />
    </div>
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
