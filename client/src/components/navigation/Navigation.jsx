import React, {useState} from 'react';
import './Navigation.scss';
import {slide as Menu} from 'react-burger-menu';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
    const [open, setOpen] = useState({menuOpen: false});
    const handleChange = (state) => {
        setOpen(state.isOpen);
    }

    const closeMenu = () => {
        setOpen({
            menuOpen: false
        });
    }

    const toggleMenu = () => {
        setOpen((oldState) => ({
            menuOpen: !oldState.menuOpen
        }));
    } 
    return (
        <div >
            <Menu isOpen={open.menuOpen} onStateChange={(state) => handleChange(state)} pageWrapId={props.pageWrapId} outerContainerId={props.outerContainerId}>
                <NavLink className="menu-item" to="/" onClick={() => closeMenu()}>Home</NavLink>
                <NavLink className="menu-itme" to="/explore" onClick={() => closeMenu()}>Explore</NavLink>
            </Menu>
        </div>

    )
}

export default Navigation;