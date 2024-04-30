import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const userCeredential = await signInWithEmailAndPassword(
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
      <h4>Login Page</h4>
      <form onSubmit={handleSubmitForm} className="login-form">
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
        <button className="login-botton">Sign In</button>
      </form>
      <p>
        Need to SignUp? <Link to="/signup">Create Account</Link>{" "}
      </p>
    </div>
  );
}

export default Login;
