import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home page</h1>;
}
function About() {
  return <h1>About page</h1>;
}
function App() {
  return (
    <BrowserRouter>
      <Link to="/about" className="font-bold text-blue-500 undeline"> about page</Link>
      <Link to="/" className="font-bold text-blue-500 undeline"> Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
