import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Offers from "./components/pages/Offers";
import OfferDetails from "./components/pages/OfferDetails";
import Dashboard from "./components/pages/Dashboard";
import NotFound from "./components/pages/NotFound";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Main />
      </Router>
    </AuthProvider>
  );
};

const Main = () => {
  const location = useLocation();
  const hideNavBar =
    location.pathname === "/login" || location.pathname === "/signup";
  const hideFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavBar && <NavBar />}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/offers/:id" element={<OfferDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
