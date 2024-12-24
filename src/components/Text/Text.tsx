import { TextProps } from "./Text.props";
import React from "react";
function Text({ children, className, tag }: TextProps) {
  return React.createElement(
    tag,
    { className },
    children
  );
}

export default Text;
