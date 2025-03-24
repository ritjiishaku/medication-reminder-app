import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MedicationList from "./pages/MedicationList";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 flex flex-col">
        <Navbar />

        <main className="flex-grow container mx-auto p-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medications" element={<MedicationList />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
