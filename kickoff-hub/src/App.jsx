import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
