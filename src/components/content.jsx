import React from 'react';
import styled from 'styled-components';

const Content = (props) => {
    console.log(props)
    return (
        <Text>{props.content}</Text>
    )
}
const Text = styled.p`
    font-size: 20px;
`;
export default Content;