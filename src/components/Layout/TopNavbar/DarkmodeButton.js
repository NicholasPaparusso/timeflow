import { DarkMode,  LightMode } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Tooltip } from "@mui/material";
import Button from "@mui/material/Button";
const DarkModeButton = () => {

      // Light/Dark Mode
      const [isDarkMode, setIsDarkMode] = useState(false);
    
      useEffect(() => {
        // Retrieve the user's preference from local storage
        const storedPreference = localStorage.getItem("theme");
        if (storedPreference === "dark") {
          setIsDarkMode(true);
        }
      }, []);
    
      const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
      };
    
      useEffect(() => {
        // Update the user's preference in local storage
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    
        // Update the class on the <html> element to apply the selected mode
        const htmlElement = document.querySelector("html");
        if (htmlElement) {
          if (isDarkMode) {
            htmlElement.classList.add("dark-theme");
          } else {
            htmlElement.classList.remove("dark-theme");
          }
        }
      }, [isDarkMode]);
      const modeIcon = isDarkMode ?  <LightMode /> : <DarkMode />;
      const modeText = isDarkMode ? "Light Mode" : "Dark Mode";
    return (
        <>      
        <Tooltip onClick={handleToggle} className="cursor-pointer" title={modeText}>
          <Button
              variant="text"
              sx={{
                width: "30px",
                height: "30px",
                padding: "5px",
                minWidth: "auto",
              }}
              className="fullscreen-btn text-body"
          >
            {
                modeIcon
            }
          </Button>
        </Tooltip>
        </>
    );
}

export default DarkModeButton;