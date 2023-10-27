
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Home from './components/Home';
import Who from './components/Who';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
