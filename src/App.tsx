import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import NavBar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";
import ScholarshipPage from "./components/pages/ScholarshipPage/ScholarshipPage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ActivitiesPage from "./components/pages/ActivitiesPage/ActivitiesPage";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/scholarship" element={<ScholarshipPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
