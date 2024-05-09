import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Principle from "./components/Principle/Principle";
import Team from "./components/Team/Team";
import Hiring from "./components/Hiring/Hiring";
import Footer from "./components/Footer/Footer";



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Principle />
      <Team />
      <Hiring />
      <Footer />
    </div>
  )
}

export default App
