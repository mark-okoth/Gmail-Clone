import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelImportantTwoToneIcon from "@mui/icons-material/LabelImportantTwoTone";
import Checkbox from "@mui/material/Checkbox";
import "./Css/Mail.css";

function Mail() {
  return (
    <div className="cover">
      <div className="mail">
        <div className="iconmail">
          <Checkbox checked={false} />
        </div>
        <div className="iconmail">
          <StarOutlineIcon />
        </div>
        <div className="iconmail">
          <LabelImportantTwoToneIcon />
        </div>
        <div className="content">
          <p>Andela</p>
        </div>
        <div className="content">
          <p>Congratulations on completing the web development path</p>
        </div>
      </div>
      <div className="time">
        <p>2:30 PM</p>
      </div>
    </div>
  );
}

export default Mail;
