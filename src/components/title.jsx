import React from 'react';
import styled from 'styled-components';


const Title = (props) => {
    console.log(props)
    return (
        <Text>{props.Title}</Text>
    )
}

const Text = styled.p`
    font-size: 20px;
`;


export default Title;