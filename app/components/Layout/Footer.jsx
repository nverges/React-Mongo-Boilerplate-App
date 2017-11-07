import React from 'react';

const Footer = () => {
    return (
    <div id="footer">
        <ul className="nav justify-content-center">
            <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
            </li>
        </ul>
    </div>
    )
};

Footer.displayName = "Footer";

export default Footer;