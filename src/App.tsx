import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import NavBar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";
import ScholarshipPage from "./components/pages/ScholarshipPage/ScholarshipPage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ActivitiesPage from "./components/pages/ActivitiesPage/ActivitiesPage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import OrganizationPage from "./components/pages/OrganizationPage/OrganizationPage";
import SouvenirPage from "./components/pages/SouvenirPage/SouvenirPage";
import { ProtectedRoute } from "./components/common/ProtectedRoute";
import { LoginPage } from "./components/pages/Login/LoginPage";
import { UsersPage } from "./components/pages/Users/UsersPage";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <UsersPage />
              </ProtectedRoute>
            }
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/scholarship" element={<ScholarshipPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/organization" element={<OrganizationPage />} />
          <Route path="/souvenir" element={<SouvenirPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
