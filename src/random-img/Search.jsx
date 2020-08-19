import React, { useState } from 'react';
import Image from './Image';

const Home = () =>{
    let [name, setName] = useState();

    const inputChange = (ev) =>{
        setName(ev.target.value);
    }

    return (
        <>
            <div className="searchDiv">
                <input type="text" name="search" onChange={inputChange} placeholder="Search" />
            </div>
            <Image img={name} />
        </>
    )
}

export default Home;