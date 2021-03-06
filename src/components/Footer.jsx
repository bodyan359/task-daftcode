import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <svg
        className="whiteLogo"
        alt="Company Logo White"
        width="173"
        height="47"
        viewBox="0 0 173 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M101.16 13.4H99.16V34.2H101.16V35H91.16V34.2H93.16V14.88L85.24 35.4H84.32L75.44 14.32V34.2H78.64V35H72.24V34.2H74.64V13.4H72.2V12.6H81.12L87.36 27.6L93.16 12.6H101.16V13.4ZM121.647 27H109.567C109.834 31.6933 111.661 34.04 115.047 34.04C115.954 34.04 116.981 33.8267 118.127 33.4C119.301 32.9733 120.154 32.3733 120.687 31.6L121.247 32C120.661 32.9867 119.661 33.8 118.247 34.44C116.834 35.08 115.421 35.4 114.007 35.4C112.621 35.4 111.367 35.2667 110.247 35C109.127 34.7067 108.034 34.2267 106.967 33.56C105.901 32.8933 105.061 31.8933 104.447 30.56C103.861 29.2267 103.567 27.6133 103.567 25.72C103.567 22.4933 104.461 20.1067 106.247 18.56C108.034 16.9867 110.194 16.2 112.727 16.2C115.287 16.2 117.407 17.0533 119.087 18.76C120.794 20.4667 121.647 23.2133 121.647 27ZM109.527 26.2H116.047C116.047 23.7467 115.781 21.6 115.247 19.76C114.741 17.92 113.914 17 112.767 17C111.621 17 110.794 17.8933 110.287 19.68C109.781 21.44 109.527 23.4667 109.527 25.76V26.2ZM132.113 35.48C129.953 35.48 128.086 34.6267 126.513 32.92C124.94 31.2133 124.153 28.8 124.153 25.68C124.153 22.56 124.926 20.12 126.473 18.36C128.02 16.6 129.9 15.72 132.113 15.72C133.206 15.72 134.233 15.9467 135.193 16.4C136.153 16.8533 136.846 17.5333 137.273 18.44V9H135.273V8.2H143.273V34.2H145.273V35H137.273V33.16C136.553 34.7067 134.833 35.48 132.113 35.48ZM137.273 26.24V19.64C136.553 18.2 135.606 17.48 134.433 17.48C133.286 17.48 132.3 18.1467 131.473 19.48C130.646 20.8133 130.233 22.9333 130.233 25.84C130.233 28.72 130.66 30.8267 131.513 32.16C132.366 33.4933 133.393 34.0667 134.593 33.88C135.26 33.7733 135.766 33.56 136.113 33.24C136.886 32.4933 137.273 30.16 137.273 26.24ZM156.069 34.2H158.069V35H148.069V34.2H150.069V9H148.069V8.2H156.069V34.2ZM168.881 34.2H170.881V35H160.881V34.2H162.881V17.4H161.281V16.6H168.881V34.2ZM169.241 11.32C169.241 12.28 168.895 13.1067 168.201 13.8C167.535 14.4667 166.708 14.8 165.721 14.8C164.761 14.8 163.935 14.4667 163.241 13.8C162.548 13.1067 162.201 12.28 162.201 11.32C162.201 10.3333 162.548 9.49333 163.241 8.8C163.935 8.10666 164.761 7.76 165.721 7.76C166.708 7.76 167.535 8.10666 168.201 8.8C168.895 9.49333 169.241 10.3333 169.241 11.32Z"
          fill="white"
        />
        <circle cx="166" cy="11" r="4" fill="#FABD20" />
        <path
          d="M56 28C56 43.464 43.464 42 28 42C12.536 42 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
          fill="#FABD20"
        />
      </svg>

      <div className="footerColumns">
        <div className="footerSubText">
          <div className="footerText">Product</div>
          <div>Updates</div>
          <div>Security</div>
          <div>Chrome Extension</div>
        </div>

        <div className="footerSubText">
          <div className="footerText">Company</div>
          <div>About</div>
          <div> Blog </div>
          <div>Join Us</div>
        </div>

        <div className="footerSubText">
          <div className="footerText">Help</div>
          <div>Talk to Support</div>
          <div> Support Docs </div>
          <div>API Docs</div>
          <div>System Status</div>
        </div>
        <div className="inputWithButton toFirstPlace">
          <div className="footerText">Try Medli for free</div>
          <div className="inputWithButton">
            <input
              className="inputInput"
              type="text"
              placeholder="Enter your email"
            />
            <button className="buttonInput">Get Started</button>
          </div>
        </div>
      </div>
      <div className="termsAndConditions">
        <svg
          width="100%"
          height="1"
          viewBox="0 0 1110 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.2" width="1110" height="1" fill="white" />
        </svg>
        <p className="footerText posRight">Terms & Conditions</p>
      </div>
    </div>
  );
}

export default Footer;
