"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        className="footer-area"
        sx={{
          textAlign: "center",
          bgcolor: "#fff",
          borderRadius: "7px 7px 0 0",
          padding: "20px 25px",
        }}
      >
        <Typography>
          © <span className="text-purple">Timeflow</span> is Proudly Owned by{" "}
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="text-primary"
            style={{
              textDecoration: "none",
            }}
          >
           Nicholas Paparusso
          </a>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
