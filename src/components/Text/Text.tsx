import { TextProps } from "./Text.props";
import React from "react";
function Text({ text, className, tag }: TextProps) {
  return React.createElement(
    tag,
    { className },
    text
  );
}

export default Text;
