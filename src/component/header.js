import React, { Fragment } from 'react';

export const Header = () =>
  <Fragment>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="/">Ratchanon Wadthaisong</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/restaurant">Restaurant</a>
            </li>
          </ul>
        </div>
        </div>
    </nav>
  </Fragment>