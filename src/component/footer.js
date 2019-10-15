import React, { Fragment } from 'react';

export const Footer = (props) =>
<Fragment>
<footer className="page-footer font-small special-color-dark pt-4 fixed-bottom">
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
        </ul>

    </div>

    <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <a title="sss" href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
    </div>
</footer>
</Fragment>
