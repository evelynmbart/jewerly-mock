import "./App.css";
import { BestSellers } from "./components/BestSellers";
import { DontMiss } from "./components/DontMiss";
import { Hero } from "./components/Hero";
import { History } from "./components/History";
import { More } from "./components/More";
import { Navbar } from "./components/Navbar";
import { Socials } from "./components/Socials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BestSellers />
      <More />
      <DontMiss />
      <History />
      <Socials />
    </>
  );
}

export default App;
