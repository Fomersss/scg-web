import React, { Fragment } from 'react';

export const NavBar = (props) =>
    <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Ratchanon Wadthaisong</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cv">CV</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Assignment</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-md-auto">
                    <li class="nav-item ">
                        <a class="btn">
                            <i class="fab fa-github"></i>  </a>
                    </li>
                </ul>
            </div>
        </nav>
    </Fragment>