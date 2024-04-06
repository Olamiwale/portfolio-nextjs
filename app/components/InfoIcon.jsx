import React from "react";

export default function InfoIcon({ title, Icon }) {
  return (
    <div className="group ">
      <div >
        <div className="icon-div items-center"  >
          <div className="custom-icon"> {Icon} </div>
          <div className="icon-title ">{title}</div>
        </div>
      </div>
    </div>
  );
}
