import React from "react";
import "./info.css";
import { CircularProgress } from "@material-ui/core";

const Info = ({ domainDetails, error, loading }) => {
  return loading ? (
    <CircularProgress />
  ) : (
    <div className="infoContainer">
      {error && (
        <div className="errorStyle">Unable to process your request</div>
      )}
      <div className="infoTop">
        <p>{domainDetails?.name}</p>
      </div>
      <div className="infoBottom">
        {domainDetails?.aRecord.map((aR) => (
          <div className="infoBottomContent">
            <div className="infoBottomContentTitle">A RECORD</div>
            <div className="infoBottomContentResult">{aR}</div>
          </div>
        ))}

        <div className="infoBottomContent">
          <div className="infoBottomContentTitle">Domain Owner</div>
          <div className="infoBottomContentResult">
            {domainDetails?.domainOwner}
          </div>
        </div>
        <div className="infoBottomContent">
          <div className="infoBottomContentTitle">Owner Country</div>
          <div className="infoBottomContentResult">
            {domainDetails?.ownerCountry}
          </div>
        </div>
        <div className="infoBottomContent">
          <div className="infoBottomContentTitle">GEO LOCATION</div>
          <div className="infoBottomContentResult">
            {domainDetails?.geoLocation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
