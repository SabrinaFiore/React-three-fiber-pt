import './../App.css';
import styled from "styled-components";
import Slider from './Slider';
import Hero from './Hero';
import Who from './Who';


// background: center / cover no-repeat url("./public/img/bg-blue-green.jpg");
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: linear-gradient(to right, #063e56, #001e2d);
  border-width: 0.5rem;
  border-style: solid;
  border-image: linear-gradient(to right, #ffebee, #954f57) 1;


  &::-webkit-scrollbar {
    display: none;
  }
`

function Home() {
  return (
    <>
      <Container>
        <Hero/>
        <Who />
        <Slider/>
      </Container>
    </>
  )
}

export default Home
