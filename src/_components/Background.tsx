/* Background Hexagons */

import React from "react";

export const Background = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg7"
      version="1.1"
      width="100%"
      height="100%"
      style={{ display: "block" }}
    >
      <defs>
        <pattern
          id="pattern7"
          x="0"
          y="0"
          width="62.5"
          height="108"
          patternUnits="userSpaceOnUse"
          preserveAspectRatio="xMidYMin"
          viewBox="0 0 125 216"
        >
          <g transform="matrix(1.00234,0,0,1,-562.5,-252)">
            <path
              className="primary-shade"
              d="M623.538,288L623.538,360L561.184,324L561.184,252L623.538,288Z"
              style={{ fill: "rgb(255, 247, 242)" }}
            />
            <path
              d="M623.538,288L623.538,360L685.892,324L685.892,252L623.538,288Z"
              style={{ fill: "url(#_Linear1)" }}
            />
            <path
              className="light-shade"
              d="M685.892,252L561.184,252L623.538,288L685.892,252Z"
              style={{ fill: "rgb(230, 212, 197)" }}
            />
            <path
              className="light-shade"
              d="M685.892,324L623.538,360L685.892,396L685.892,324Z"
              style={{ fill: "rgb(230, 212, 197) " }}
            />
            <path
              className="light-shade"
              d="M561.184,324L561.184,396L623.538,360L561.184,324Z"
              style={{ fill: "rgb(230, 212, 197)" }}
            />
            <path
              d="M623.538,360L623.538,432L561.184,468L561.184,396L623.538,360Z"
              style={{ fill: "url(#_Linear2)" }}
            />
            <g transform="matrix(-1,0,0,1,1247.08,-3.79696e-13)">
              <path
                className="primary-shade"
                d="M623.538,360L623.538,432L561.184,468L561.184,396L623.538,360Z"
                style={{ fill: "rgb(220, 194, 190)" }}
              />
            </g>
            <path
              className="light-shade"
              d="M685.892,468L561.184,468L623.538,432L685.892,468Z"
              style={{ fill: "rgb(230, 212, 197)" }}
            />
          </g>
          <defs>
            <linearGradient
              id="_Linear1"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(49.8831,-3.41061e-13,3.41061e-13,49.8831,623.538,331.2)"
            >
              <stop
                className="dark-shade"
                offset="0"
                style={{ stopColor: "rgb(230, 230, 240)", stopOpacity: "1" }}
              />
              <stop
                className="secondary-shade"
                offset="1"
                style={{ stopColor: "rgb(230, 230, 240)", stopOpacity: "1" }}
              />
            </linearGradient>
            <linearGradient
              id="_Linear2"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(49.8831,-5.11591e-13,5.11591e-13,49.8831,561.184,424.8)"
            >
              <stop
                className="dark-shade"
                offset="0"
                style={{ stopColor: "rgb(230, 230, 240)", stopOpacity: "1" }}
              />
              <stop
                className="secondary-shade"
                offset="1"
                style={{ stopColor: "rgb(230, 230, 240)", stopOpacity: "1" }}
              />
            </linearGradient>
          </defs>
        </pattern>
      </defs>

      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern7)" />
    </svg>
  );
};

export default Background;
