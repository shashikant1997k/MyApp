import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="navDiv">
                <NavLink exact className="link" activeClassName="active" to="/">Random Image</NavLink>
                <NavLink exact className="link" activeClassName="active" to="/keep-note">Keep-Note</NavLink>
            </div>
        </>
    )
}

export default Navbar;