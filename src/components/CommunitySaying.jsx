import React from "react";

import women from "../img/woman-freelance-worker-does-yoga-exersice-workplace-enjoys-calm-tranquil-atmosphere-wears-round-glasses-jumper.png";

function CommunitySaying() {
  return (
    <div className="CommunitySaying">
      <div className="headText">What our community is saying?</div>
      <div className="subText">
        A mission-driven company that invest in and builds healthier living
      </div>
      <div className="videoButton">
        <svg
          className="playButton"
          width="130"
          height="130"
          viewBox="0 0 130 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b)">
            <circle cx="65" cy="65" r="65" fill="#FEF4E6" fillOpacity="0.8" />
          </g>
          <path
            d="M86 64.5359C88.6667 66.0755 88.6667 69.9245 86 71.4641L54.5 89.6506C51.8333 91.1902 48.5 89.2657 48.5 86.1865L48.5 49.8135C48.5 46.7343 51.8333 44.8098 54.5 46.3494L86 64.5359Z"
            fill="#131E07"
          />
          <defs>
            <filter
              id="filter0_b"
              x="-10"
              y="-10"
              width="150"
              height="150"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <img src={women} className="video" alt="Video" />
      </div>
    </div>
  );
}

export default CommunitySaying;
