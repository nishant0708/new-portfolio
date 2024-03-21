import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "../src/component/NavBar";
import { Banner } from './component/Banner';
import { Skills } from './component/Skills';
import CustomCursor from './component/CustomCursor';
import Parallax from './component/parallax/Parallax';
import Portfolio from './component/Portfolio';
import Contact from './component/contact/contact';


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
        <Route path="/" exact component={<Banner/>} />
          <Route path="/skills" component={<Skills/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
        </Routes>
          
    
      </Router>
      <Banner />
      <Skills />
      <Parallax type="portfolio" />
      <CustomCursor />
     <Portfolio/>
     <Contact/>
    </div>
  );
}

export default App;
