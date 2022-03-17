import React from "react";
import "./Css/Nav.css";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import InOutlinedInputput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TuneIcon from '@mui/icons-material/Tune';
import Logo from './Gmail.png';

function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <div className="logo">
          <li>
            <a href="">
              <MenuIcon fontSize="large" color="#000000" />
            </a>
          </li>
          <li>
           <img src={Logo} alt="" />
          </li>
        </div>
        <div className="search">
          <FormControl variant="standard" fullWidth>
            <InOutlinedInputput
               InputProps={{ style: {  borderRadius: 10} }}
              id="input-with-icon-adornment"
              placeholder="Search Mail"

              startAdornment={
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>        
              }
              endAdornment={
                <InputAdornment position="end">
                <TuneIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="right">
          <div className="icons">
            <ul>
              <li>
                <a href=""></a>
              </li>
              <li>
                <a href="">
                  <HelpOutlineOutlinedIcon fontSize="medium" color="#000000" />
                </a>
              </li>
              <li>
                <SettingsIcon fontSize="medium" />
              </li>
              <li>
                <a href="">
                  <AppsIcon fontSize="medium" color="#000000" />
                </a>
              </li>{" "}
              <li></li>
            </ul>
          </div>
          <div className="img">
            <img
              src="https://cdn.lifehack.org/wp-content/uploads/2014/03/shutterstock_97566446.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
