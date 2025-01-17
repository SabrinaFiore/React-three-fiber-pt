import './../App.css';
import styled from "styled-components";
import Hero from './Hero';
import Work from './Work';
import Carousel from './Carousel';

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: #3d3b3b;
  
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
        {/* <Carousel/> */}
      </Container>
    </>
  )
}

export default Home
