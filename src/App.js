
import './App.css';
import { Routes, Route } from "react-router-dom";
import Loginpage from "./Auth/login"
import Signup from "./Auth/signup"
import Dashboard from './dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loginpage />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="dashboard/*" element={<Dashboard />} />

        {/* <Route path="/wait/:link/:name" element={<MultiplayerEnterName />} /> */}




        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
