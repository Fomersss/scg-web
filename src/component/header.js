import React, { Fragment } from 'react';

export const Header = (props) =>
    <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Ratchanon Wadthaisong</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/findvalue">Find XYZ</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/restuarant">Restuarant</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-md-auto">
                    <li className="nav-item">
                        <a className="btn navbar-link" href="https://github.com/Fomersss/scg-web">
                            <i title="github url"className="fab fa-github"></i>  </a>
                    </li>
                </ul>
            </div>
        </nav>
    </Fragment>