import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Principle from './components/Principle/Principle';
import Team from './components/Team/Team';
import Events from './components/Events/Events';
import Hiring from './components/Hiring/Hiring';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero id="home" />
      <Principle id="principle-investigator" />
      <Team id="team" />
      <Events id="events" />
      <Hiring id="hiring" />
      <Footer id="contact" />
    </div>
  );
}

export default App;
