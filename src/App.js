import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Loginpage from "./Auth/login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loginpage />} />

        {/* <Route path="/select-category/:name/:link" element={<SelectCategoryPage />} />

        <Route path="/game/:name/:link" element={<MainGamePage />} />

        <Route path="/wait/:link/:name" element={<MultiplayerEnterName />} /> */}




        {/* Add more routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
