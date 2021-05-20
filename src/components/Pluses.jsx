import React from "react";

function Pluses() {
  return (
    <div className="Pluses">
      <div className="column">
        <div className="yellowNumbers">230+</div>
        <div className="stat">Scientifically based tests</div>
      </div>
      <div className="column">
        {" "}
        <div className="yellowNumbers">10,000+</div>
        <div className="stat">Medical recommendations</div>
      </div>
      <div className="column">
        {" "}
        <div className="yellowNumbers">25M+</div>
        <div className="stat">Students learning</div>
      </div>
    </div>
  );
}

export default Pluses;
