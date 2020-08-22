import React from 'react';
import './App.css';
import './Font.css';
import Nav from './components/Nav';
import MainScreen from './components/MainScreen';
import MyProjects from './components/MyProjects';
import About from './components/About';
// import Contact from './components/Contact';
import HireMe from './components/HireMe';
// import ReactFullpage from '@fullpage/react-fullpage';
// import FullPageTest from './components/FullPageTest';


function App() {

  return (
    <div className="App">
      <Nav />

      <MainScreen />
      <MyProjects />
      <About />

      <HireMe />

      {/* <Contact /> */}
      {/* <FullPageTest /> */}
    </div >
  );
}

export default App;
