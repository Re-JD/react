import React from 'react';


function ImageBox (props) {
    console.log(props)
    const url = props.image.map((props,idx) => (
        "http://"+{props}
    ))
    return (
        <>
        <img src={url}/>
        </>
    );
}


export default ImageBox;