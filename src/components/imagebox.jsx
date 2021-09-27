import React from 'react';


function ImageBox (props) {
    console.log(props)
    const getUrl = props.image.map((im, idx) => (
        `<img src="http://"+${im}></img>`
    ))

    return (
        <>
        {getUrl}
        </>
    );
}


export default ImageBox;