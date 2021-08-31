import React from 'react';
import styled from 'styled-components';

const Content = (content) => {
    console.log(content)
    return (
        <Text>{content.Context}</Text>
    )
}
const Text = styled.p`
    font-size: 20px;
`;
export default Content;