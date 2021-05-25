import React from "react";
import Section from "../../../Common/Section";

function ValueProposition() {
  return (
    <Section className="bg-purple-100 pt-32 pb-64" id="value-proposition">
      <div className=" grid md:grid-cols-4 grid-cols-1 gap-4 mt-12 justify-items-center">
        {[0, 0, 0, 0].map((_, idx) => (
          <div key={idx} className="flex flex-col align-center ">
            <div className="rounded-full h-24 w-24  bg-red-100 p-6 mx-auto shadow-lg" />
            <div className="pt-6 w-100 text-center">
              <b>Text</b>
              <br />
              Value Prop
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default ValueProposition;
