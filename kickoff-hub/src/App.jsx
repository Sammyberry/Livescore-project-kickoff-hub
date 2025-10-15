import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import MatchDetails from "./pages/MatchDetails"; // 👈 NEW

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/match/:id" element={<MatchDetails />} /> {/* 👈 NEW */}
    </Routes>
  );
}

export default App;
