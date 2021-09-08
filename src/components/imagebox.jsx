import React from 'react';
import styled from 'styled-components';

function ImageBox (props) {
    console.log(props)
    return (
        <>
        <Text src={props.image}></Text>
        </>
    );
}
const Text = styled.img`
    font-size: 20px;
`;
export default ImageBox;