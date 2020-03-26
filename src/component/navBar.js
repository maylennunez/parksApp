import React, { Component } from 'react';
// import ResponsiveMenu from 'react-responsive-navbar';
import {Link} from 'react-router-dom'

class navBar extends Component {

    render() {
        return (
             <nav>
                     <Link  to="/"> Home </Link>

                    <Link to="/parks"> Parks </Link>
                    <Link to="/events"> Events </Link>
            
            </nav>
        );
    }
}

export default navBar;