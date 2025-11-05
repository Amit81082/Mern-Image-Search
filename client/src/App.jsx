import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import SearchPage from "./pages/MainSearchPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";

axios.defaults.withCredentials = true; // ✅ Always before useEffect

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ inside component

  useEffect(() => {
    axios
      .get("https://mern-image-search-57yy.onrender.com/auth/user")
      .then((res) => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get(
        "https://mern-image-search-57yy.onrender.com/auth/logout"
      );
      setUser(null);
      navigate("/login"); // ✅ safe navigation
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

if (loading) return <div className="loader"></div>;


  return (
    <Routes>
      <Route
        path="/"
        element={
          !user ? (
            <LoginPage />
          ) : (
            <SearchPage user={user} onLogout={handleLogout} />
          )
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

// ✅ Wrapper Component — BrowserRouter should wrap outside App
export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
