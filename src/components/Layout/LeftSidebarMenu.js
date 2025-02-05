import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const LeftSidebarMenu = ({ toggleActive }) => {
  const [expanded, setExpanded] = useState("panel1");
  const location = useLocation(); // Get current location/pathname

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Function to check if current pathname matches the link path
  const isActiveLink = (path) => (location.pathname === path ? "active" : "");

  return (
    <Box className="leftSidebarDark">
      <Box className="left-sidebar-menu">
        <Box className="logo">
          <Link to="/">
            <img
              src="/icon.png"
              alt="logo-icon"
              width={26}
              height={26}
            />
            <Typography component={"span"}>Timeflow</Typography>
          </Link>
        </Box>

        <Box className="burger-menu" onClick={toggleActive}>
          <Typography component={"span"} className="top-bar"></Typography>
          <Typography component={"span"} className="middle-bar"></Typography>
          <Typography component={"span"} className="bottom-bar"></Typography>
        </Box>

        <Box className="sidebar-inner">
          <Box className="sidebar-menu">
            <Typography
              className="sub-title"
              sx={{
                display: "block",
                fontWeight: "500",
                textTransform: "uppercase",
              }}
            >
              MAIN
            </Typography>

            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <i className="material-symbols-outlined">dashboard</i>
                <Typography component={"span"} className="title">
                  Dashboard
                </Typography>
                <Typography component={"span"} className="trezo-badge">
                  18
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/ecommerce"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/ecommerce"
                      )}`}
                    >
                      eCommerce
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/crm/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/crm/"
                      )}`}
                    >
                      CRM
                      <Typography
                        component={"span"}
                        className="trezo-badge style-two"
                      >
                        Hot
                      </Typography>
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/project-management/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/project-management/"
                      )}`}
                    >
                      Project Management
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/lms/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/lms/"
                      )}`}
                    >
                      LMS{" "}
                      <Typography
                        component={"span"}
                        className="trezo-badge style-two"
                      >
                        Top
                      </Typography>
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/helpdesk/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/helpdesk/"
                      )}`}
                    >
                      HelpDesk
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/analytics/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/analytics/"
                      )}`}
                    >
                      Analytics
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/crypto/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/crypto/"
                      )}`}
                    >
                      Crypto
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/sales/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/sales/"
                      )}`}
                    >
                      Sales
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/hospital/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/hospital/"
                      )}`}
                    >
                      Hospital
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/marketing/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/marketing/"
                      )}`}
                    >
                      Marketing
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/nft/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/nft/"
                      )}`}
                    >
                      NFT
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/saas/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/saas/"
                      )}`}
                    >
                      SaaS
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/real-estate/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/real-estate/"
                      )}`}
                    >
                      Real Estate
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/shipment/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/shipment/"
                      )}`}
                    >
                      Shipment
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/finance/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/finance/"
                      )}`}
                    >
                      Finance
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/hrm/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/hrm/"
                      )}`}
                    >
                      HRM
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/school/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/school/"
                      )}`}
                    >
                      School
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/dashboard/call-center/"
                      className={`sidemenu-link ${isActiveLink(
                        "/dashboard/call-center/"
                      )}`}
                    >
                      Call Center
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>   

            <Typography
              className="sub-title"
              sx={{
                display: "block",
                fontWeight: "500",
                textTransform: "uppercase",
              }}
            >
              OTHERS
            </Typography>

            <Link
              to="/my-profile/"
              className={`sidebar-menu-link ${isActiveLink("/my-profile/")}`}
            >
              <i className="material-symbols-outlined">account_circle</i>
              <Typography component={"span"} className="title">
                My Profile
              </Typography>
            </Link>

            <Accordion
              expanded={expanded === "panel27"}
              onChange={handleChange("panel27")}
              className="mat-accordion"
            >
              <AccordionSummary
                className="mat-summary"
                aria-controls="panel27d-content"
                id="panel27d-header"
              >
                <i className="material-symbols-outlined">settings</i>
                <Typography component={"span"} className="title">
                  Settings
                </Typography>
              </AccordionSummary>

              <AccordionDetails className="mat-details">
                <ul className="sidebar-sub-menu">
                  <li className="sidemenu-item">
                    <Link
                      to="/settings/account-settings"
                      className={`sidemenu-link ${isActiveLink("/settings/account-settings")}`}
                    >
                      Account Settings
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/settings/change-password/"
                      className={`sidemenu-link ${isActiveLink(
                        "/settings/change-password/"
                      )}`}
                    >
                      Change Password
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/settings/connections/"
                      className={`sidemenu-link ${isActiveLink(
                        "/settings/connections/"
                      )}`}
                    >
                      Connections
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/settings/privacy-policy/"
                      className={`sidemenu-link ${isActiveLink(
                        "/settings/privacy-policy/"
                      )}`}
                    >
                      Privacy Policy
                    </Link>
                  </li>

                  <li className="sidemenu-item">
                    <Link
                      to="/settings/terms-conditions/"
                      className={`sidemenu-link ${isActiveLink(
                        "/settings/terms-conditions/"
                      )}`}
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <a href="/authentication/logout/" className="sidebar-menu-link">
              <i className="material-symbols-outlined">logout</i>
              <Typography component={"span"} className="title">
                Logout
              </Typography>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSidebarMenu;
