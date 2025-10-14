import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import Header from "../components/Header";

import arsenal from "../assets/logos/arsenal.png";
import chelsea from "../assets/logos/chelsea.png";
import barcelona from "../assets/logos/barcelona.png";
import realmadrid from "../assets/logos/realmadrid.png";
import psg from "../assets/logos/psg.png";
import marseille from "../assets/logos/marseille.png";

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "{}");
    const savedName = localStorage.getItem("lastUser");

    if (savedName && users[savedName]) {
      navigate("/dashboard");
    }
  }, []);

  // Username state and validation
  const [username, setUsername] = useState("");
  const [usernameTouched, setUsernameTouched] = useState(false);

  // Password state and validation
  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  // user info & feedback
  const [userMessage, setUserMessage] = useState("");

  // Username validation logic
  const usernameError = useMemo(() => {
    const name = username.trim();

    if (!name) return "";
    if (name.length < 4) return "Username must be at least 4 characters long.";
    return "";
  }, [username]);

  const isUsernameValid = username.trim().length >= 4 && usernameError === "";

  // Password validation logic
  const passwordError = useMemo(() => {
    const pass = password.trim();

    if (!pass) return "";
    if (pass.length < 6) return "Password must be at least 6 characters long.";
    if (!/[A-Za-z]/.test(pass) || !/[0-9]/.test(pass)) {
      return "Password must contain both letters and numbers.";
    }
    return "";
  }, [password]);

  const isPasswordValid = password.trim().length > 0 && passwordError === "";

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    if (!isUsernameValid || !isPasswordValid) {
      alert("Please enter valid username and password.");
      return;
    }

    // Retrieve all saved users (or empty object if none)
    const users = JSON.parse(localStorage.getItem("users") || "{}");

    // check if username exists
    if (users[username]) {
      // existing user
      if (users[username] === password) {
        setUserMessage(`Welcome back, ${username}!`);
        localStorage.setItem("lastUser", username);
        navigate("/dashboard");
      } else {
        setUserMessage("Incorrect password. Please try again.");
      }
    } else {
      // first-time user → save them
      users[username] = password;
      localStorage.setItem("users", JSON.stringify(users));
      setUserMessage(`Account created for ${username}! Redirecting...`);
      localStorage.setItem("lastUser", username);
      navigate("/dashboard");
    }
  };

  const previewMatches = [
    {
      id: 1,
      home: "Arsenal",
      away: "Chelsea",
      homeLogo: arsenal,
      awayLogo: chelsea,
      score: "1–2",
      status: "LIVE",
      time: "Sat 7:30 PM",
    },
    {
      id: 2,
      home: "Barcelona",
      away: "Real Madrid",
      homeLogo: barcelona,
      awayLogo: realmadrid,
      score: "–",
      status: "Upcoming",
      time: "Sat 9:30 PM",
    },
    {
      id: 3,
      home: "PSG",
      away: "Marseille",
      homeLogo: psg,
      awayLogo: marseille,
      score: "–",
      status: "Upcoming",
      time: "Sun 8:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0F] to-[#121420] text-white flex flex-col items-center">
      <header className="w-full flex justify-start px-6 py-4">
        <Header />
      </header>

      <main className="flex flex-col items-center justify-center text-center mt-10 px-6 w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Your Hub for Match Insights <br /> & Live Scores
        </h1>

        <form
          onSubmit={handleLogin}
          className="w-full bg-[#1E1F29] rounded-2xl p-6 shadow-lg flex flex-col gap-4"
        >
          {/* Username Input */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => setUsernameTouched(true)}
            className={`p-3 rounded-lg bg-transparent border focus:outline-none w-full 
              ${
                usernameTouched
                  ? usernameError
                    ? "border-red-500 focus:ring-2 focus:ring-red-500"
                    : "border-green-500 focus:ring-2 focus:ring-green-500"
                  : "border-gray-600 focus:ring-2 focus:ring-blue-500"
              }`}
          />

          {usernameTouched && usernameError && (
            <p className="text-red-400 text-xs mt-1 text-left">
              {usernameError}
            </p>
          )}

          {/* Password Input*/}
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setPasswordTouched(true)}
              className={`p-3 pr-10 rounded-lg bg-transparent border focus:outline-none w-full 
                 ${
                   passwordTouched
                     ? passwordError
                       ? "border-red-500 focus:ring-2 focus:ring-red-500"
                       : "border-green-500 focus:ring-2 focus:ring-green-500"
                     : "border-gray-600 focus:ring-2 focus:ring-blue-500"
                 }`}
            />

            {/* Toggle eye icon */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {passwordTouched && passwordError && (
            <p className="text-red-400 text-xs mt-1 text-left">
              {passwordError}
            </p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={!isUsernameValid || !isPasswordValid}
            className={`mt-2 font-semibold py-2 rounded-lg w-full transition-colors ${
              !isUsernameValid || !isPasswordValid
                ? "bg-blue-600/40 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Login / Sign Up
          </button>
          {userMessage && (
            <p className="text-sm text-gray-300 mt-2 text-center">
              {userMessage}
            </p>
          )}
        </form>

        <section className="mt-10 w-full max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 text-left">
            Featured Matches
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewMatches.map((match) => (
              <div
                key={match.id}
                className="bg-[#1E1F29] p-5 rounded-xl text-center shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-white font-semibold mb-1">
                  {match.home} vs {match.away}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{match.time}</p>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    match.status === "LIVE"
                      ? "bg-green-500 text-black"
                      : "bg-gray-600 text-white"
                  }`}
                >
                  {match.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
