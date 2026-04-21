import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Vans from "./Components/Vans";
import "../server";
import VanDetails from "./Components/VanDetail";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path = "/vans/:id" element={<VanDetails />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
