import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './views/Home';
import Experience from './views/Experience';
import Projects from './views/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
