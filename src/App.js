import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import Footer from './Components/Footer';
import Education1 from './Components/Education1';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Education1 />
      <Skills />
      <Projects />
      <Achievements />
      <Footer />
      {/* <Education /> */}
    </div>
  );
}

export default App;
