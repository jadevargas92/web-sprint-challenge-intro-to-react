import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const CharacterDetails = (props => {
    const { height, mass, hair_color, skin_color, uniqueKey} = props
    return (
        <div>
            <h3>Height: {height}</h3>
            <h3>Mass: {mass}</h3>
            <h3>Skin Color: {skin_color}</h3>
            <h3>Hair Color: {hair_color}</h3>
        </div>
    )
}) 

export default CharacterDetails;