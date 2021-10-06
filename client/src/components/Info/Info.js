import React from "react";
import "./info.css";

const Info = () => {
  return (
    <div className="infoContainer">
      <div className="infoTop">
        <p>google.com</p>
      </div>
      <div className="infoBottom">
        <div className="infoBottomContent">
          <div className="infoBottomContentTitle">A RECORD</div>
          <div className="infoBottomContentResult">XXXX</div>
        </div>
        <div className="infoBottomContent">
          <div className="infoBottomContentTitle">CNAME</div>
          <div className="infoBottomContentResult">XXXX</div>
        </div>
        <div className="infoBottomContent">
          <div className="infoBottomContentTitle">SERVER LOCATION </div>
          <div className="infoBottomContentResult">XXXX</div>
        </div>
        <div className="infoBottomContent">
          <div className="infoBottomContentTitle">GEO LOCATION</div>
          <div className="infoBottomContentResult">XXXX</div>
        </div>
        <div className="infoBottomContent">
          <div className="infoBottomContentTitle">ETC</div>
          <div className="infoBottomContentResult">XXXX</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
