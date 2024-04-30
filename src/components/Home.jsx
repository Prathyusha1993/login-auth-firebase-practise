import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div>
      <h4>home Page</h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
