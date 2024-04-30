import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const userCeredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCeredential);
      const user = userCeredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4>Register Page</h4>
      <form onSubmit={handleSubmitForm} className="signup-form">
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-botton">Sign Up</button>
      </form>
      <p>
        Need to Login? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
