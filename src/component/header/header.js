import React from "react";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

import bel from '../../accets/bell.png'
import fo from '../../accets/F.png'


export default function Header(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-light  border-bottom">
            <span className="glyphicon glyphicon-search" aria-hidden="true"
                  ></span>
            <form className="form-inline">

                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                       aria-label="Search"/>
            </form>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

                    <li className="nav-item active">
                        <a className="nav-link hoh" ><img src={bel}/> </a>
                    </li>

                    <li className="ffffff">
                        <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                            Open with fade transition
                        </Button>
                        <Menu
                            id="fade-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </li>
                    <li className="nav-item eby">
                        <a className="nav-link"><img
                            src={fo}/></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
