import React, { useContext } from 'react';
import Logo from '../images/logo.png';
import './Nav.css';
import './materialize.css';
import './materialize.min.css';
import './body.css';

function Nav(){
  return (
  <>
  <head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <link type="text/css" rel="stylesheet" href="css/materialize.css" media="screen,projection" ></link>
    <link type="text/css" rel="stylesheet" href="css/body.css" media="screen,projection" ></link>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" ></meta>
  </head>
  <header>
    <div className="navbar-fixed">
        <nav className="green lighten-5">
           <div className="nav-wrapper">
               <a href="#" className="brand-logo"><img src={Logo} width="190" height="65"/></a>
               <ul id="nav-mobile" className="right hide-on-med-and-down">
               <li><a className="waves-effect waves-light btn green" href="#">Contact</a></li>
                </ul>
            </div>
          </nav>
    </div>
  </header>
  </>
  );
}
export default Nav;