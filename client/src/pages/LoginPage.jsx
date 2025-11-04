import React from "react";
import "./LoginPage.css";

function LoginPage() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:5000/auth/github";
  };

  return (
    <div className="login-container">
      <h2>Welcome to Image Search App</h2>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <button onClick={handleGitHubLogin} className="github-btn">
        Login with GitHub
      </button>
    </div>
  );
}

export default LoginPage;
