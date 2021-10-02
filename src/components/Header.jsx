import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 100px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #6f6fee;

color: white;
font-size: 30px;
font-weight: 500;
`
const Header1 = styled.span`
flex: 1;


`

const Header2 = styled.span`
flex: 1;

`

export default function Header() {
    return (
        <Container>
            <Header1>Hello</Header1>
            <Header2>World</Header2>
        </Container>
    )
}
