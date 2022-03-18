import React from "react";
import "./Css/Nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InOutlinedInputput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TuneIcon from "@mui/icons-material/Tune";
import Logo from "./Gmail.png";
import Tooltip from "@mui/material/Tooltip";

function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <li>
            <a href={"/"}>
              <Tooltip title="Main Menu">
                <MenuIcon fontSize="large" color="#000000" />
              </Tooltip>
            </a>
          </li>
          <li>
            <Tooltip title="Gmail">
              <img src={Logo} alt="" />
            </Tooltip>
          </li>
        </div>
        <div className="search">
          <FormControl variant="standard" fullWidth>
            <InOutlinedInputput
              id="input-with-icon-adornment"
              placeholder="Search Mail"
              startAdornment={
                <InputAdornment position="start">
                  <Tooltip title="Search">
                    <div>
                    <SearchOutlinedIcon />
                    </div>
                  </Tooltip>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <Tooltip title="Show Search Options">
                    <div>
                      <TuneIcon />
                    </div>
                  </Tooltip>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="right">
          <div className="icons">
            <ul>
              <li>
                <a href={"/"} ></a>
              </li>
              <li>
                <a href={"/"}>
                  <Tooltip title="Support">
                    <div>
                      <HelpOutlineOutlinedIcon
                        fontSize="large"
                        color="#000000"
                      />
                    </div>
                  </Tooltip>
                </a>
              </li>
              <li>
                <Tooltip title="Settings">
                  <div>
                    <SettingsIcon title="Delete" fontSize="large" />
                  </div>
                </Tooltip>
              </li>
              <li>
                <a href={"/"}>
                  <Tooltip title="Google apps">
                    <div>
                      <AppsIcon fontSize="large" color="#000000" />
                    </div>
                  </Tooltip>
                </a>
              </li>{" "}
              <li></li>
            </ul>
          </div>
          <div className="img">
            <Tooltip title="Google Account John Doe John@gmail.com">
              <img
                src="https://cdn.lifehack.org/wp-content/uploads/2014/03/shutterstock_97566446.jpg"
                alt=""
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
