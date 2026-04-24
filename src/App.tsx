import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import Vans from "./Pages/Vans";
import "../server";
import VanDetails from "./Components/VanDetail";
import Rent from "./Components/Rent";
import Layout from "./Components/Layout";
import Host from "./Pages/Host";
import DashboardLayout from "./Components/DashboardLayout";
import Income from "./Components/Income";
import Dashboard from "./Components/Dashboard";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/host" element={<DashboardLayout />}>
            <Route index element={< Dashboard />}/>
            <Route path="income" element={< Income />}/>
            <Route path="reviews" element={< Reviews />}/>
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          <Route path="/rent/:idParam" element={<Rent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// Putting the /vans/:id means that something is going to be used there
