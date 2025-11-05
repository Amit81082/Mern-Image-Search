import React from "react";
import "./LoginPage.css";

function LoginPage() {
  const handleGoogleLogin = () => {
    window.location.href =
      "https://mern-image-search-57yy.onrender.com/auth/google";
  };

  const handleGitHubLogin = () => {
    window.location.href =
      "https://mern-image-search-57yy.onrender.com/auth/github";
  };

  return (
    <div className="login-container">
      <h2>Welcome to Image Search App 🖼️</h2>
      <button onClick={handleGoogleLogin} className="login-btn google">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
          alt="Google"
        />
        Login with Google
      </button>

      <button onClick={handleGitHubLogin} className="login-btn github">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          alt="GitHub"
        />
        Login with GitHub
      </button>
    </div>
  );
}

export default LoginPage;
