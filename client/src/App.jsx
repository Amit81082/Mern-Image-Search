import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/MainSearchPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://mern-image-search-57yy.onrender.com/auth/user", {
        withCredentials: true,
      })
      .then((res) => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

    const handleLogout = async () => {
      await axios.get(
        "https://mern-image-search-57yy.onrender.com/auth/logout",
        {
          withCredentials: true,
        }
      );
      setUser(null); // frontend logout
    };


  if (loading) return null; // or a simple loader

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <SearchPage user={user} onLogout={handleLogout} /> : <LoginPage />}
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
