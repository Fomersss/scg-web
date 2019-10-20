import React, { Component,Fragment } from 'react'
import axios from 'axios';
import * as _ from 'lodash';
import StarRatingComponent from 'react-star-rating-component';
import restaurantPic from '../../assets/img/restaurant.png';



export class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: []
    }
  }

  async componentDidMount() {
    // get data from local storage
    const data = JSON.parse(localStorage.getItem('restaurant'));
    if (data) {
      this.setState({restaurant : data})
    } else {
      // get data from api first time
      await axios.get('http://localhost:4000/scg/restaurant').then(res => {
        const response = _.get(res, 'data.data')
        if (response && response.length) {
          localStorage.setItem('restaurant', JSON.stringify(response))
          this.setState({
            restaurant: response
          })
        }
      })
    }
  }

  render() {
    const { restaurant } = this.state;
    console.log('restaurant ==> ', restaurant);
    return (
      <Fragment>
        <div className ="container-layout">
        <div className="row body-layout">
          <div className="col-md-12 mb-5">
            <h2>Show Restuarant</h2>
            <hr />
            <p>Show result from google place search api</p>
          </div>
        </div>
        <div className="row">
          { restaurant.length > 0 ? (restaurant.map((restaurant, index) =>
            <div key={index} className="col-md-4 mb-5">
              <div className="card h-100">
                <img className="card-img-top" src={restaurantPic} alt="" />
                <div className="card-body">
                  <h4 className="card-title">{restaurant.name}</h4>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={restaurant.rating}
                  />
                  <p className="card-text">{restaurant.vicinity}</p>
                </div>
              </div>
            </div>
          )) :
          <div className="col-md-12 mb-5">
              <h4 className="card-title text-center">No Restuarant data please run "scg-api" project</h4>
        </div>
          }
         
        </div>
        </div>
      </Fragment>)
  }
}