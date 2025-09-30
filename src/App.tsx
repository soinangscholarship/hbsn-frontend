import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import NavBar from "./components/layout/NavBar/NavBar";
import Header from "./components/layout/Header/Header";
function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
