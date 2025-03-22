import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/LandingPage/HomePage";
import MedicationList from "./pages/MedicationList";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <div className="">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/src/pages/LandingPage/HomePage.jsx" element={<HomePage />} />
            <Route path="/src/pages/MedicationList.jsx" element={<MedicationList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
