import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h4>Login Authentication with Firebase</h4>
      <Outlet />
    </div>
  );
}

export default App;
