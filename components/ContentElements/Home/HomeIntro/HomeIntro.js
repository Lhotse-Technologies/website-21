import Section from "../../../Common/Section";
import HomeBox from "./HomeBox";

const HomeIntro = ({ content }) => (
  <Section
    id="home-intro"
    className="bg-gray-100 py-16 flex flex-col justify-end"
    style={{
      background:
        "url(/layout/mountain-background.svg) bottom center no-repeat #fff",
      minHeight: 600,
    }}
  >
    <div
      className="text-center pb-32"
      dangerouslySetInnerHTML={{ __html: content }}
    />
    <HomeBox content={"Test"} />
  </Section>
);

export default HomeIntro;
