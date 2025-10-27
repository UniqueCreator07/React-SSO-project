import React from "react";
import "./App.css";

function App() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:5000/auth/github";
  };

  return (
    <div className="app-container">
      <div className="login-card">
        <h1 className="title">React SSO Login</h1>
        <p className="subtitle">Sign in securely using your account</p>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google Logo"
            className="google-icon"
          />
          Sign in with Google
        </button>

        <button className="github-btn" onClick={handleGitHubLogin}>
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub Logo"
            className="google-icon"
          />
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}

export default App;
