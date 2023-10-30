import React from "react";

export default function InfoIcon({ title, Icon }) {
  return (
    <div className="group ">
      <div >
        <div className="icon-div" >
          <div className="custom-icon"> {Icon} </div>
          <p className="icon-title">{title}</p>
        </div>
      </div>
    </div>
  );
}
