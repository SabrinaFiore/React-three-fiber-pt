import { React } from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100%;
  scroll-snap-align: center;
  padding: 5.5rem 0 4rem;

  @media only screen and (max-width: 768px) {
    padding: 11.5rem 0 4rem;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  color: #3d3b3b;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'EB Garamond', serif;
  font-size: 30px;
  font-weight: 300;
  line-height: 1;

  @media only screen and (max-width: 768px) {
    text-align: center;
    font-size: 40px;
  }
`;

const Subtitle = styled.h3`
  font-family: 'Avenir', sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding-left: 0.5rem;
  margin-top: 3rem;
`;

const Desc = styled.p`
  font-size: 16px;
  color: #3d3b3b;
  font-family: 'Avenir', sans-serif;
  font-weight: 300;
  padding-left: 0.5rem;
`;

const Gallery = styled.div``;

const Img = styled.img`
  width: 400px; 
  height: 400px; 
  object-fit: cover;
  padding: 0.5rem;
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
        <Title>Photography Exhibitions</Title>
          <Gallery>
            <Subtitle>ND Awards - Honorable mention on the ND Awards magazine 2020</Subtitle> 
            <Desc>Is a photography magazine, founded in 2008.
              <br></br>
              Check out my work on&nbsp;
              <a className="linkNoCodeProjects underline" href="https://ndawards.net/winners-gallery/nd-awards-2020/non-professional/conceptual/hm/13577/" target="_blank" rel="noopener noreferrer">the ND Awards Page</a>
            </Desc>
            <GridND>
              <Img src="../../img/IMG03.jpg" alt="hamburg03" />
              <Img src="../../img/IMG04.jpg" alt="hamburg04"/>
              <Img src="../../img/IMG05.jpg" alt="hamburg05"/>
              <Img src="../../img/IMG06.jpg" alt="hamburg06"/>
              <Img src="../../img/IMG07.jpg" alt="hamburg07"/>
            </GridND>
            
            <Subtitle>The Holy Art - Berlin exhibitions in December 2023</Subtitle> 
            <Desc>The Holy Art Gallery is a global leader in the art world, featuring the works of the most talented emerging and established artists from around the globe with branches in London, New York, Athens and Berlin!
              <br></br>
              The exhibitions on 21-22-23 December 2023 in Berlin was about some of these photos, check out&nbsp;
              <a className="linkNoCodeProjects underline" href="https://www.theholyart.com/journal/newyork" target="_blank" rel="noopener noreferrer">the holy art page</a>
            </Desc>
            <GalleryBRL>
              <Img src="../../img/theholyart-ph-03.png" alt="nk01"/>
              <Img src="../../img/IMG08.jpg" alt="nk01"/>
              <Img src="../../img/IMG09.jpg" alt="nk02"/>
              <Img src="../../img/IMG10.jpg" alt="nk03"/>
            </GalleryBRL>

            <Subtitle>Lanificio Digitale - Naples exhibitions in May 2024</Subtitle> 
            <Desc>International event based on the new languages of contemporary art
              <br></br>
              The exhibitions in May 2024 in Naples were really important also for the city, check the article &nbsp;
              <a className="linkNoCodeProjects underline" href="https://napoli.repubblica.it/cronaca/2024/05/13/news/new_fluxus_al_lanificio_di_napoli_i_nuovi_linguaggi_dellarte_contemporanea-422939261/" target="_blank" rel="noopener noreferrer">"Napoli i nuovi linguaggi dell’arte"</a>
              <br></br>
              In addiction, my photo was also converted in a&nbsp;              
              <a className="linkNoCodeProjects underline" href="https://zora.co/collect/base:0xa7572c0cfff083ebc379ba2ae834a188a220d9f9/1" target="_blank" rel="noopener noreferrer">NFT</a>
            </Desc>
            <GalleryBRL>
              <Img src="../../img/IMG_9718 2.2_mini.jpg" alt="np01"/>
              <Img src="../../img/IMG11.jpeg" alt="np02"/>
            </GalleryBRL>
          </Gallery>
      </Container>
    </Section>
	)
}

export default NoCodeProjects