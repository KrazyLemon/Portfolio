import { useEffect, useState } from "react";
import Navbar from "./components/sections/Navbar";
import TopButton from "./components/ui/TopButton";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import Footer from "./components/sections/Footer";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function App() {
  
  const [bgColor, setBgColor] = useState("bg-cyan-700");
  const [bgIndex, setBgIndex] = useState(0);


  const colors = [
    "via-blue-900", "via-blue-800", "via-sky-800", "via-sky-800", "via-cyan-700",
    "via-teal-700", "via-emerald-700", "via-green-700",
    "via-lime-600", "via-yellow-600",
    "via-amber-600", "via-orange-600",
    "via-red-600", "via-rose-600",
    "via-pink-600", "via-fuchsia-700", "via-purple-800", "via-violet-900",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => {
        const next = (prevIndex + 1) % colors.length;
        setBgColor(colors[next]);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

 
  return (
    <div className={`w-full min-h-screen bg-gradient-to-b from-black from-30% transition-colors 
                      duration-[2000ms] ease-in-out to-black ${bgColor}`}>
      <Navbar  />
      <Hero />
      <Work />
      <About />
      <Contact />
      <TopButton />
      <Footer />
    </div>
  )
}
