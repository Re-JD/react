import React from 'react';


function ImageBox (props) {
    console.log(props)
    return (
        <>
        {props.image.map((props,idx) => (
            <img key={idx} src={props}/>
        ))}
        </>
    );
}


export default ImageBox;