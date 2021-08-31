import React from 'react';
import styled from 'styled-components';


const Title = (title) => {
    console.log(title)
    return (
        <Text>{title}</Text>
    )
}

const Text = styled.p`
    font-size: 20px;
`;


export default Title;