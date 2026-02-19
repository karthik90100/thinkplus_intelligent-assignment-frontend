import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/authApi";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const submit = async () => {
    if (isSignup) {
      if (!form.name || !form.email || !form.password || !form.role) {
        alert("All fields are required");
        return;
      }
    } else {
      if (!form.email || !form.password) {
        alert("Email and password are required");
        return;
      }
    }

    try {
      if (isSignup) {
        await authApi.signup(form);
        alert("Signup successful. Please login.");
        setIsSignup(false);
        setForm({ name: "", email: "", password: "", role: "student" });
      } else {
        const res = await authApi.login({
          email: form.email,
          password: form.password,
        });

        localStorage.setItem("user", JSON.stringify(res.data.user));

        if (res.data.user.role === "student") {
          navigate("/student/StudentDashboard");
        } else if (res.data.user.role === "instructor") {
          navigate("/instructor/dashboard");
        } else {
          navigate("/admin/dashboard");
        }
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || "Authentication failed");
    }
  };

  return (
    <div className="login-container">
      {/* Card */}
      <div className="login-card">
        {/* Header */}
        <h2 className="login-title">Think+</h2>
        <p className="login-subtitle">
          {isSignup ? "Create your account" : "Welcome back"}
        </p>

        {/* Form */}
        <div className="login-form">
          {isSignup && (
            <>
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <select
                value={form.role}
                onChange={(e) =>
                  setForm({ ...form, role: e.target.value })
                }
              >
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
              </select>
            </>
          )}

          <input
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button className="login-btn" onClick={submit}>
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </div>

        {/* Switch */}
        <p className="switch-text" onClick={() => setIsSignup(!isSignup)}>
          {isSignup
            ? "Already have an account? Login"
            : "New to Think+? Sign Up"}
        </p>

        <p className="login-footer">
          AI-powered assignment evaluation platform
        </p>
      </div>
    </div>
  );
}

export default Login;
