import { React } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
    
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    display: flex;
    position: fixed;
    background: #f0f0f0;
    z-index: 2;
    top: 0;
  }
`;

const Links = styled.div`
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
`;

const Logo = styled.img`
  height: 50px;
  margin: 0 1rem;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  color: #3d3b3b;
`;

const ListItem = styled.li`
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Icons = styled.div`
  width: 60%;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: transparent;
  color: #3d3b3b;
  font-weight: 500;
  width: 100%;
  max-width: 200px;
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    max-width: 150px;
  }
`;

const Navbar = () => {
	const navigate = useNavigate()
	return (
		<Section>
			<Container>
				<Links>
					<List>
            <Link to={"./"}>
              <Logo src="../../img/Logo.png"/>
            </Link>
						<ListItem>
            <div className='link'><Link to={"./"}>Sabrina</Link>
            </div>
            </ListItem>
					</List>
				</Links>
				<Icons>
					{/* <Icon src="./public/img/Logo.jpg"/> */}
          <Button onClick={() => navigate('about-me')}>About me</Button>
          <Button onClick={() => navigate('projects')}>Projects</Button>
					<Button onClick={() => navigate('noCodeProject')}>Photography Exhibitions</Button>
					<Button onClick={() => navigate('contact')}>Contact</Button>
				</Icons>
			</Container>
		</Section>
	)
}

export default Navbar