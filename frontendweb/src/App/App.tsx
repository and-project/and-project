import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
