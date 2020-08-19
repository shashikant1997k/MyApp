import React from 'react';

const Image = (props) =>{
    let getImg = `https://source.unsplash.com/random/800x500?${props.img}`;
    return (
        <>
            <div className="imgDiv">
                {(props.img) ? <img src={getImg} alt=""/> : null}
            </div>
        </>
    )
}

export default Image;