import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // color: props.color, 　　↑分割代入により、propsを毎回書かなくても良くなる
    color,
    fontSize: `18px`
  };

  // return <p style={contentStyle}>{props.message}</p>; ←↓どちらでもOK
  return <p style={contentStyle}>{props.children}</p>;
};

// export default ColorfulMessage;
