import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/login", form);
      alert("Login successful");
      // You can save JWT to localStorage if needed
      navigate("/");
    } catch (err) {
      alert(err.response.data.message || "Login failed");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit" style={{ marginTop: "20px" }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
