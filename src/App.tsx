import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { DashboardPage } from "./features/dashboard/DashboardPage";
import { HomePage } from "./features/home/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<div className="p-6">Users Page (Coming Soon)</div>} />
        <Route path="/settings" element={<div className="p-6">Settings Page (Coming Soon)</div>} />
      </Routes>
    </Router>
  );
}

export default App;
