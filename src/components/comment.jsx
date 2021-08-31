import React from 'react';
import styled from 'styled-components';

function Comment (props) {

    return (
        <>
        <Text>{props.UploadImage}</Text>
        </>
    );
}
const Text = styled.img`
    font-size: 20px;
`;
export default Comment;