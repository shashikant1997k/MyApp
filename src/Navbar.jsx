import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navDiv">
                <NavLink exact className="link" activeClassName="active" to="/MyApp">Random Image</NavLink>
                <NavLink className="link" activeClassName="active" to="/MyApp/keep-note">Keep-Note</NavLink>
            </div>
        </>
    )
}

export default Navbar;
