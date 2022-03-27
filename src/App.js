import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UploadFiles from "./pages/UploadFiles";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="App h-screen flex flex-col justify-between">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Hero />} />
          <Route path="products" element={<Products />}>
            <Route path="products/:productId" element={<Product />} />
          </Route>

          <Route
            path="gallery"
            element={<Gallery selected={selected} setSelected={setSelected} />}
          />
          <Route path="about" element={<About />} />
          <Route path="upload" element={<UploadFiles />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
