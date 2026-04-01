import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // ✅ IMPORTANT

function Login() {
  const navigate = useNavigate();

  const handleSuccess = async (res) => {
    try {
      const apiBase = import.meta.env.VITE_API_BASE;

      const response = await fetch(`${apiBase}/api/google-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: res.credential
        })
      });

      const data = await response.json();

      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/");

    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="overlay"></div>

      <div className="login-card">
        <h1 className="logo">CODEXWAGON</h1>
        <p className="tagline">Welcome Back 👋</p>

        <div className="google-btn">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log("Login Failed")}
          />
        </div>

        <p className="footer-text">
          Secure login powered by Google
        </p>
      </div>
    </div>
  );
}

export default Login;