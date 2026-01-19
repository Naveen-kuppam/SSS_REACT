import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";

function AuthForm() {
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    // ===== REGISTER =====
    if (mode === "register") {
      if (!username || !email || !password) {
        setMessage("All fields are required");
        return;
      }

      const user = { username, email, password };
      localStorage.setItem("user", JSON.stringify(user));

      setMessage("Registration successful. Please login.");
      setMode("login");
    }

    // ===== LOGIN =====
    else if (mode === "login") {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.username === username &&
        storedUser.password === password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/home");
      } else {
        setMessage("Invalid username or password");
      }
    }

    // ===== FORGOT PASSWORD =====
    else if (mode === "forgot") {
      setMessage("Password reset is not available (frontend only)");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>
          {mode === "login"
            ? "Login"
            : mode === "register"
            ? "Register"
            : "Forgot Password"}
        </h2>

        <form onSubmit={handleSubmit}>
          {mode === "register" && (
            <>
              <input
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </>
          )}

          {mode === "login" && (
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}

          {mode !== "forgot" && (
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          )}

          {mode === "forgot" && (
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}

          <button type="submit">
            {mode === "login"
              ? "Login"
              : mode === "register"
              ? "Register"
              : "Send Reset Link"}
          </button>
        </form>

        <div className="auth-switch">
          {mode !== "login" && (
            <span onClick={() => setMode("login")}>Login</span>
          )}
          {mode !== "register" && (
            <span onClick={() => setMode("register")}>Register</span>
          )}
          {mode !== "forgot" && (
            <span onClick={() => setMode("forgot")}>Forgot Password</span>
          )}
        </div>

        {message && <p className="auth-message">{message}</p>}
      </div>
    </div>
  );
}

export default AuthForm;
