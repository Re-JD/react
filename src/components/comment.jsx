import React from 'react';
import styled from 'styled-components';

function Comment (props) {
    console.log(props)
    return (
        <>
        <Text src={props.comment}></Text>
        </>
    );
}
const Text = styled.img`
    font-size: 20px;
`;
export default Comment;