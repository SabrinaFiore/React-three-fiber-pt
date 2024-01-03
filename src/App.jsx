
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import AboutMe from './components/About-me';
import Navbar from './components/Navbar';
import Case01 from './components/Case01';
import Carousel from './components/Carousel';


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
            <Route path='carousel' element={<Carousel />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
