import "./App.css";
import { BestSellers } from "./components/BestSellers";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BestSellers />
    </>
  );
}

export default App;
