import React from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import { ThemeProvider } from 'styled-components'
import {dark} from '../../styles/Themes'

const Section = styled.section`
min-height: 100vh;
width: 100%;
background-color: ${props => props.theme.text};
display: flex;
align-items: center;
position: relative;
`


const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
//background-color: lightblue;

display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Title = styled.h2`
font-size: ${props => props.theme.fontxxl};
text-transform: upppercase;
width: 80%;
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 0 auto;
`

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight:400;
`

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontmd};
color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
align-self: flex-start;
width: 80%;
margin: 1rem auto;
font-weight:400;
`

const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
align-self: flex-start;
`

const About = () => {
  return (
    <Section>
    <Container>
    <Box> <Carousel/> </Box>
    <Box> 
    <Title>
    Welcome to the DigiKong NFT!
    </Title>
    <SubText>
    DigiKong NFT is a Ethereum blockchain based collection of NFTs-Unique digital collectibles. 
    </SubText>
    <SubTextLight>
    DigiKong comes with 2,222 NFTs, where each one is unique and cool. Join and upcoming ambitious ever-growing community with a long lasting future.
    </SubTextLight>
  <ButtonContainer>
  <ThemeProvider theme={dark}>
  <Button text="JON OUR DISCORD" link="#"/>
  </ThemeProvider>
  </ButtonContainer>
    </Box>
    </Container>
    </Section>
  )
}

export default About