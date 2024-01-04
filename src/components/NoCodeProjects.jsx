import { React } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  color: #fff;
`;

const Title = styled.h1`
  font-family: 'EB Garamond', serif;
  font-size: 20px;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`;

const Gallery = styled.div`

`;

const Img = styled.img`
  width: 400px; 
  height: 400px; 
  object-fit: cover;
`;

const GridND = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow-x: auto;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  /* Hide scrollbar in Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const GalleryBRL = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow-x: auto;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  /* Hide scrollbar in Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;


const NoCodeProjects = () => {
	return (
		<Section>
      <Container>
        <Title>No Code Projects</Title>
        <Gallery>
            ND AWARDS
          <GridND>
            <Img src="https://images.unsplash.com/photo-1558981033-0f0309284409?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="bike" />
            <Img src="https://images.unsplash.com/photo-1580820726687-30e7ba70d976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="rose"/>
            <Img src="https://images.unsplash.com/photo-1580769154185-abdda4691da5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="camera"/>
            <Img src="https://images.unsplash.com/photo-1580732055671-e64dde2eb75b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="road"/>
            <Img src="https://images.unsplash.com/photo-1580785422463-c88da52a2922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="night-1927265_960_720"/>
            <Img src="https://images.unsplash.com/photo-1580785422463-c88da52a2922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="night-1927265_960_720"/>
          </GridND>
            
            Berlino
          <GalleryBRL>
            <Img src="https://images.unsplash.com/photo-1558666831-d43129d768b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="sunset"/>
            <Img src="https://images.unsplash.com/photo-1580793660347-5cc5e9d2c6dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="model"/>
            <Img src="https://images.unsplash.com/photo-1580761072152-9d6b9c77cf4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="bird"/>
            <Img src="https://images.unsplash.com/photo-1580794592903-65ebe8345cd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="car"/>
            <Img src="https://images.unsplash.com/photo-1580820726687-30e7ba70d976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="rose"/>
            <Img src="https://images.unsplash.com/photo-1580820726687-30e7ba70d976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="rose"/>
          </GalleryBRL>
        </Gallery>
      </Container>
    </Section>
	)
}

export default NoCodeProjects