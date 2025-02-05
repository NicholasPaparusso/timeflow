import React from "react";
import { useLocation } from "react-router-dom";
import LeftSidebarMenu from "./LeftSidebarMenu";
import TopNavbar from "./TopNavbar";
import ScrollToTop from "./ScrollToTop";

const AppLayout = ({ children, toggleActive }) => {
  const { pathname } = useLocation();

  const normalizePath = (path) => path.replace(/^\/|\/$/g, ""); // Rimuove gli slash iniziali e finali
  
  const isAuthPage = [
    "login",
    "signup",
    "password-dimenticata",
    "resetta-password",
    "conferma-email",
    "termini-e-condizioni",
    "privacy-policy",
  ].includes(normalizePath(pathname));
  

  return (
    <>
      {!isAuthPage && (
        <>
          <TopNavbar toggleActive={toggleActive} />
          <LeftSidebarMenu toggleActive={toggleActive} />
        </>
      )}
      <div className="main-content">
        <ScrollToTop />  
          {children}
      </div>
    </>
  );
};

export default AppLayout;
