import React, { Fragment } from 'react';

export const Footer = () =>
  <Fragment>
    <div>
      <footer className="page-footer font-small text-white bg-dark pt-4 ">
      <div className="container">
          <ul className="list-unstyled list-inline text-center">
            <li className="list-inline-item">
              <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/Fomest">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1" href="www.linkedin.com/in/ratchanon-wadthaisong-108329173">
                <i className="fab fa-linkedin-in"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-li mx-1" href="https://github.com/Fomersss">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        <div className="footer-copyright text-center py-3">© 2019 Copyright:
    <a title="sss" href="https://github.com/Fomersss/scg-web"> Fomersss</a>
        </div>
        </div>
      </footer>
    </div>
  </Fragment>
