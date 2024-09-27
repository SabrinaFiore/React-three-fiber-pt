
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import AboutMe from './components/About-me';
import Navbar from './components/Navbar';
import Case01 from './components/Case01';
import Case02 from './components/Case02';
import Case03 from './components/Case03';
import Case04 from './components/Case04';
import Case05 from './components/Case05';
import Carousel from './components/Carousel';
import NoCodeProjects from './components/NoCodeProjects';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='body-bg'>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='about-me' element={<AboutMe />}></Route>
            <Route path='case01' element={<Case01 />}></Route>
            <Route path='case02' element={<Case02 />}></Route>
            <Route path='case03' element={<Case03 />}></Route>
            <Route path='case04' element={<Case04 />}></Route>
            <Route path='case05' element={<Case05 />}></Route>
            <Route path='carousel' element={<Carousel />}></Route>
            <Route path='projects' element={<Projects />}></Route>
            <Route path='noCodeProject' element={<NoCodeProjects />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
