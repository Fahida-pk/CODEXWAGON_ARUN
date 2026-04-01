import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSuccess = async (res) => {
    console.log("TOKEN:", res.credential);

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

      console.log("USER:", data);

      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/home");

    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <h1 style={{ color: "red" }}>LOGIN PAGE</h1>

        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.log("Login Failed")}
        />
      </div>
    </div>
  );
}

export default Login;