import "swiper/css";
import "swiper/css/bundle";
import 'remixicon/fonts/remixicon.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css'; 
import 'react-clock/dist/Clock.css';
import '../node_modules/boxicons/css/boxicons.min.css';
import './styles/front-pages.css';
import "./styles/control-panel.css";
import "./styles/left-sidebar-menu.css";
import "./styles/top-navbar.css";
import "./styles/crypto-dashboard.css";
import "./styles/chat.css";
import "./styles/globals.css";
// globals dark Mode CSS
import "./styles/dark.css";
// globals RTL Mode CSS
import "./styles/rtl.css"; 
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
reportWebVitals();
