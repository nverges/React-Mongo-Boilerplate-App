/**
|--------------------------------------------------
| Stateless Navigation Bar Component
|--------------------------------------------------
*/

import React from 'react';

const  Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-inverse" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/"><h2 id="homeHeading">Julie's Grace</h2></a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#"><h4>Home</h4></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#section-about"><h4>About</h4></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#section-contact"><h4>Contact</h4></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/login"><h4>Login</h4></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;