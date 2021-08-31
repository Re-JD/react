import React from 'react';
import styled from 'styled-components';

const Content = (props) => {
    
    return (
        <Text>{props.Context}</Text>
    )
}
const Text = styled.p`
    font-size: 20px;
`;
export default Content;