import './../App.css';
import styled from "styled-components";
import Slider from './Slider';
import Hero from './Hero';
import Work from './Work';


// background: center / cover no-repeat url("./public/img/bg-blue-green.jpg");
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  


  &::-webkit-scrollbar {
    display: none;
  }
`

function Home() {
  return (
    <>
      <Container>
        <Hero/>
        <Work />
        <Slider/>
      </Container>
    </>
  )
}

export default Home
