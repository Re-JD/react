import React from 'react';
import styled from 'styled-components';

function Comment (comment) {
    console.log(comment)
    return (
        <>
        <Text src={comment}></Text>
        </>
    );
}
const Text = styled.img`
    font-size: 20px;
`;
export default Comment;