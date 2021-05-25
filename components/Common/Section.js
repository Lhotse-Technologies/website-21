import React from "react";

function Section({ children, ...props }) {
  return <section {...props}>{children}</section>;
}

export default Section;
