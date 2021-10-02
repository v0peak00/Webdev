import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const Container = styled.div`
margin-top: 10px;
height: 600px;
width: 80%;
display: flex;
align-items: center;
justify-content: center;
background-color: #e97f7f;

color: white;
font-size: 30px;
font-weight: 500;
`
const Header1 = styled.span`
flex: 3;




`

const Header2 = styled.span`
flex: 1;
background-color: white;


`
const Title = styled.div`
color: white;
font-size: 30px;
font-weight: 500;
`

const Header3 = styled.span`
flex: 2;
background-color: #e97f7f;


`

export default function MainAndSide() {
    return (
        <Container>
            <Header1>
                <Title>Hello</Title>
            </Header1>
            <Header2></Header2>
            <Header3>
                <Title>Hello</Title>
            </Header3>
        </Container>
    )
}
