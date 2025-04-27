
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Contact from './containers/contact';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';

function App() {
  return (
    <div className="App">
      {/* {particale js} */}

      {/* {navba} */}

      {/* {main page content} */}
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route index path='/about' element={<About/>} />
        <Route index path='/resume' element={<Resume/>} />
        <Route index path='/skills' element={<Skills/>} />
        <Route index path='/portfolio' element={<Portfolio/>} />
        <Route index path='/contact' element={<Contact/>} />
      </Routes>

    </div>
  );
}

export default App;
