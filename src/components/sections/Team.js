import React from 'react'
import  styled  from 'styled-components';

import img1 from'../../assets/Nfts/Kong.svg';
import img2 from'../../assets/Nfts/Kong-1.svg';
import img3 from'../../assets/Nfts/Kong-2.svg';
import img4 from'../../assets/Nfts/Kong-3.svg';
import Confetti from '../Confetti';
import ConfettiComponent from './../Confetti';

const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
`

const Title = styled.h1`
font-size: ${(props) => props.theme.fontxxl};
text-transform: capitalize;
color: ${(props) => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.text};
width: fit-content;
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1 rem;
position:relative;
z-index:5;

backdrop-filter:blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius:2px;
transition: all 0.3s ease;


&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}
`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color:${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
  transition: all 0.3s ease;
}
`


const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
font-weight:400;
`


const MemberComponent = ({img, name=" ", position=" "}) => {


  return(
    <Item>
    <ImageContainer>
    <img src={img} alt={name}/>
    </ImageContainer>
    <Name>{name}</Name>
    <Position>{position}</Position>
    </Item>
  )
}


const Team = () => {
  return (
    <Section>
    <ConfettiComponent/>
    <Title>Team</Title>
    <Container>
   <MemberComponent img={img1} name="Kong 1" position="Admin"/>
   <MemberComponent img={img2} name="Kong 2" position="Admin"/>
   <MemberComponent img={img3} name="Kong 3" position="Admin"/>
   <MemberComponent img={img4} name="Kong Frosty" position="Developer & GFX Artist"/>
    </Container>
    </Section>
  )
}

export default Team