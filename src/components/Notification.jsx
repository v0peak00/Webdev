import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
margin-top: 10px;
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

export default function Notification() {
    return (
        <Container>
            Hello
        </Container>
    )
}
