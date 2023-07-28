import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../components/Home/Home";
import Sample from "../components/Sample/Sample";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
