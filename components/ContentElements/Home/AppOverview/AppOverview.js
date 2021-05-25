import React from "react";

import Section from "../../../Common/Section";

function AppOverView() {
  return (
    <Section className="bg-white container mx-auto" style={{}}>
      <OverviewRow />
      <OverviewRow textLeft={true} />
      <OverviewRow />
    </Section>
  );
}

const OverviewRow = ({ textLeft = false }) => (
  <div className={`flex ${textLeft && "flex-row-reverse"} my-16`}>
    <div className=" " style={{ width: "40%", maxHeight: 500 }}>
      <div
        className={`triangle ${textLeft &&
          "left"} flex items-center content-right justify-end pr-10`}
      >
        Triangel content
      </div>
    </div>
    <div className="flex-1  h-64 flex items-center pl-10">
      REchtsREchts
      <br />
      REchts
      <br />
      REchts
      <br />
      REchts
      <br />
      REchts
      <br />
      REchts
    </div>
  </div>
);

export default AppOverView;
