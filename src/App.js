import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
  
    </div>
  );
}

export default App;
