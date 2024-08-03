import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Principle from './components/Principle/Principle';
import Team from './components/Team/Team';
import Events from './components/Events/Events';
import Events2 from './components/Events2/Events2';
import Publication from './components/Publication/Publication'
import Hiring from './components/Hiring/Hiring';
import Footer from './components/Footer/Footer';
import Newsroom from './components/Newsroom/Newsroom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero id="home" />
      <Principle id="principle-investigator" />
      <Team id="team" />
      <Events id="events" />
      <Events2 id="events2" />
      <Hiring id="hiring" />
      <Publication id="publication" />
      <Newsroom id="newsroom" />
      <Footer id="contact" />
    </div>
  );
}

export default App;
