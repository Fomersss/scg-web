import React, { Component } from 'react';
import profilePic from '../../assets/img/profile.jpg';


export class Home extends Component {
  render() {
    return (
        <div className="row">
          <div className="profile">
            <img src={profilePic} alt="mypic" className="image rounded-circle img-profile" />
            <div className="resume">
              <h1 class="mb-5">Ratchanon Wadthaisong</h1>
              {/* <p class="lead mb-3">Software Developer</p> */}
              <h1 class="mb-4">Experience</h1>
              <div class="mb-4">
                <ul class="resume-list">
                  <li>
                    <h4>Software Developer, SCG</h4>
                    <p class="date">Dec 2017 - Present</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum dolore culpa libero delectus excepturi! Repellat dolore, sapiente officia quod.</p>
                  </li>
                </ul>
              </div>
              <h1 class="mb-4">Education</h1>
              <div class="mb-4">
                <ul class="resume-list">
                  <li>
                    <h4>Suranaree University Of Technology</h4>
                    <p class="date">2010 - 2014</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint dolorum dolore culpa libero delectus excepturi! Repellat dolore, sapiente officia quod.</p>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
    )
  }
}