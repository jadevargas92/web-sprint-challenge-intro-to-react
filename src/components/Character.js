// Write your Character component here
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CharacterDetails from './CharacterDetails';


const StyledDiv = styled.div`
    width: 60%;
    margin: 1rem auto;
    display: flex;
    flex-flow: column wrap;
    border: 1px solid #000000;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.7);
`;

const StyledButton = styled.button`
    width: 6rem;
    height: 60%;
    padding:0.3em 1.2em;
    margin:0 0.3em 0.3em 0;
    border-radius:2em;
    box-sizing: border-box;
    text-decoration: none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#FFFFFF;
    background-color:#FABB5A;
    text-align:center;
    transition: all 0.2s;
    outline: none;

    &:hover {
        background-color:#D36F36;
    }
 
`;

const Character = (props => {
    const { name, height, mass, hair_color, skin_color, uniqueKey} = props
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const [isButtonVisible, setIsButtonVisible] = useState(true)

    useEffect(() => {
        {isDetailsVisible ? setIsButtonVisible(false) : setIsButtonVisible(true)}
    }, [isDetailsVisible])

    return(
        <StyledDiv>
            <h2>{name}</h2>
            { 
            isDetailsVisible && 
            <CharacterDetails mass={mass} height={height} hair_color={hair_color} skin_color={skin_color}/> 
            }
            { 
            isButtonVisible ? 
            <StyledButton onClick={ e => setIsDetailsVisible(true)}>Show Details</StyledButton> : 
            <StyledButton onClick={ e => setIsDetailsVisible(false)}>Collapse Details</StyledButton>
            }
        </StyledDiv>
    )
})

export default Character;