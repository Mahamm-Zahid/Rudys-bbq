import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/about";
import Home from "./pages/home";
import Location from "./pages/location";
import Products from "./pages/products";
import Footer from "./components/Footer";
import ViewAll from "./pages/viewall";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllPages />} />
          <Route path="/ViewAll" element={<ViewAll />} />{" "}
          {/* Add this route for the "viewall" page */}
        </Routes>
      </div>
    </Router>
  );
};

const AllPages = () => {
  return (
    <>
      <Home />
      <About />
      <Location />
      <Products />
      <Footer />
    </>
  );
};

export default App;
