import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
