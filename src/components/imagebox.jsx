import React from 'react';
import styled from 'styled-components';

function ImageBox (props) {
    console.log(props)
    const getUrl = props.image.map((im, idx) => (
        `http://${im}`
    ))

    return (
        <>
        {getUrl.map((s, idx) => (
            <ImBox src={s} width="300" height="300"/>
        ))}
        </>
    );
}

const ImBox = styled.img`
    padding: 30px;
`;
export default ImageBox;