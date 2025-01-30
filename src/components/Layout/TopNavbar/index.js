import React, { useEffect } from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import SearchForm from "./SearchForm";
import Notifications from "./Notifications";
import Profile from "./Profile";
import FullscreenButton from "./FullscreenButton";
import AppsMenu from "./AppsMenu";
import DarkModeButton from "./DarkmodeButton";
// import ChooseLanguage from "./ChooseLanguage";
// import ControlPanel from "../ControlPanel/index.js";


const TopNavbar = ({ toggleActive }) => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 100) {
        navbar?.classList.add("sticky");
      } else {
        navbar?.classList.remove("sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="top-navbar-dark">
      <AppBar
        id="navbar"
        color="inherit"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "initial",
          borderRadius: "0 0 15px 15px",
          py: { xs: "15px", sm: "3px" },
          width: "auto",
          zIndex: "489", 
        }}
        className="top-navbar"
      >
        <Toolbar
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: { xs: "center", sm: "space-between" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "10px", sm: "5px", md: "10px" },
            }}
          >
            <Tooltip title="Mostra/Nascondi" arrow>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                onClick={toggleActive}
              >
                <i className="material-symbols-outlined">menu</i>
              </IconButton>
            </Tooltip>

            {/* Search form */}
            <SearchForm />

            {/* AppsMenu */}
            <AppsMenu />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: "8px", sm: "8px", lg: "15px" },
              mt: { xs: "10px", sm: "0px" },
            }}
          >
            {/* ChooseLanguage */}
            {/* <ChooseLanguage /> */}

            <DarkModeButton/>

            {/* FullscreenButton */}
            <FullscreenButton />

            {/* Notifications */}
            <Notifications />

            {/* Profile */}
            <Profile />

            {/* ControlPanel */}
            {/* <ControlPanel /> */}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopNavbar;
