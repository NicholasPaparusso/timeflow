import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AppLayout from "./components/Layout/AppLayout";

// Pagine
import Home from "./pages/Home";
//User
import Users from "./pages/users";
import UsersList from "./pages/users/UsersList";
import AddUsers from "./pages/users/AddUsers";
//Autenticazione
import SignIn from "./pages/authentication/SignIn";
import SignUp from "./pages/authentication/SignUp";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import ResetPassword from "./pages/authentication/ResetPassword";
import ConfirmEmail from "./pages/authentication/ConfirmEmail";

// Settings
import TermsConditions from "./pages/settings/TermsConditions";
import PrivacyPolicy from "./pages/settings/PrivacyPolicy";

const App = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <AuthProvider>
    <div className={`main-wrapper-content ${active ? "active" : ""}`}>
      <Router>
        <AppLayout toggleActive={toggleActive}>
          <Routes>
            {/* Pagine di autenticazione */}
            <Route path="/login/" element={<SignIn />} />
            <Route path="/signup/" element={<SignUp />} />
            <Route path="/password-dimenticata/" element={<ForgotPassword />}/>
            <Route path="/resetta-password/" element={<ResetPassword />}/>
            <Route path="/conferma-email/" element={<ConfirmEmail />}/>

            {/* Settings */}
            <Route path="/termini-e-condizioni/" element={<TermsConditions />}/>
            <Route path="/privacy-policy/" element={<PrivacyPolicy />}/>

            {/* Pagine protette */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            {/*User*/}
            <Route
              path="/users/"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />

            <Route
              path="/users/riepilogo"
              element={
                <ProtectedRoute>
                  <UsersList />
                </ProtectedRoute>
              }
            />


            <Route
              path="/users/aggiungi"
              element={
                <ProtectedRoute>
                  <AddUsers />
                </ProtectedRoute>
              }
            />
            {/*User*/}
          </Routes>
        </AppLayout>
      </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
