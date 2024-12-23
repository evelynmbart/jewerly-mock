import "./App.css";
import { BestSellers } from "./components/BestSellers";
import { Hero } from "./components/Hero";
import { More } from "./components/More";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BestSellers />
      <More />
    </>
  );
}

export default App;
