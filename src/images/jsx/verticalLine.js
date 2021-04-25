import React from "react";

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1mm"
      height={props.height}
      version="1.1"
    //   viewBox="0 0 10 297"
    >
      <g>
        <rect
          width="7.388"
          height={props.height}
          x="1.466"
          y="0.134"
          fill="#c6c6c6ff"
          strokeWidth="0.371"
          ry="0"
        ></rect>
      </g>
    </svg>
  );
}

export default Icon;
