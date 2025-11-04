import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/MainSearchPage";
import LoginPage from "./pages/LoginPage";

const navigate = useNavigate();


// ✅ Add this line before any axios calls
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
        "https://mern-image-search-57yy.onrender.com/auth/logout",
        {
          withCredentials: true, // sends session cookie
        }
      );

      setUser(null); // clear user from frontend
      navigate("/login"); // redirect manually (no CORS issue)
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) return null;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <SearchPage user={user} onLogout={handleLogout} />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
