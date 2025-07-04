import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.css";
import Navber from "./Component/Navber";
import Home from "./Component/Home";
import MyCart from "./Component/MyCart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-cart" element={<MyCart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
