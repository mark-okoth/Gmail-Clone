import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import RefreshIcon from "@mui/icons-material/Refresh";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import "./Css/SecondNav.css";
function SecondNav() {
  const [checkbox, setCheckBox] = useState(true);
  const CheckboxValue = (e) => {
    setCheckBox(e.target.checked);
  };
  return (
    <div className="SecondNav">
      <div className="left">
        <Checkbox checked={checkbox} onChange={CheckboxValue} />
        <div>
          <RefreshIcon />
        </div>
        <div>
          <MoreVertIcon />
        </div>
      </div>
      <div className="right">
        <div className="right-content">
          <p>1-3 of 3</p>
        </div>
        <div className="right-icon">
          <NavigateBeforeIcon  />
          <NavigateNextIcon />
        </div>
      </div>
    </div>
  );
}

export default SecondNav;
