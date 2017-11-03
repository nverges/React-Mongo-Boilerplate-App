import React from 'react';

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-3">React Boilerplate App NYT Search</h1>
            <p className="lead">Boilerplate App Built with Bootstrap 4, Sass, Node, Express, React and MongoDB</p>
            <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Button</a>
            </p>
        </div>
    )
};

Jumbotron.displayName = Jumbotron;

export default Jumbotron;