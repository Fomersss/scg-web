import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';
import restaurantPic from '../../assets/img/restaurant.png';



export class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.restuarant = {
      data: [
        {
          "geometry": {
            "location": {
              "lat": 13.7957924,
              "lng": 100.5398573
            },
            "viewport": {
              "northeast": {
                "lat": 13.7971430302915,
                "lng": 100.5411858802915
              },
              "southwest": {
                "lat": 13.7944450697085,
                "lng": 100.5384879197085
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
          "id": "140c0b14d01a06cc292fdbe9b9a10f1eb4126379",
          "name": "Nai Kong Noodle",
          "opening_hours": {
            "open_now": false
          },
          "photos": [
            {
              "height": 2976,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/110238360045750092517/photos\">Thossapol Themna</a>"
              ],
              "photo_reference": "CmRaAAAA4cEEe6H0i3ShukZucqO-PHaGMe54rRL2csN2jg1yvYE_CasDfJdyClaeTX0FXpYxFr7C6IcCYBuDcRdu_OHJF5erPsU3pWvNKmyq9-Zq3bMb-pvnv2-vY-Cye4dxzmJaEhCIeQa-0HErNaNq_sEHb64RGhRqf73bdWupoBDYK2hRFerXZ2oD8A",
              "width": 3968
            }
          ],
          "place_id": "ChIJjVCVFw6c4jARRfF25KSiAfM",
          "plus_code": {
            "compound_code": "QGWQ+8W Bangkok, Thailand",
            "global_code": "7P52QGWQ+8W"
          },
          "rating": 4,
          "reference": "ChIJjVCVFw6c4jARRfF25KSiAfM",
          "scope": "GOOGLE",
          "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
          ],
          "user_ratings_total": 239,
          "vicinity": "Phaya Thai, Bangkok"
        },
        {
          "geometry": {
            "location": {
              "lat": 13.8062795,
              "lng": 100.5263084
            },
            "viewport": {
              "northeast": {
                "lat": 13.8076640302915,
                "lng": 100.5276570802915
              },
              "southwest": {
                "lat": 13.8049660697085,
                "lng": 100.5249591197085
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
          "id": "e8339c91d3ea3dcab303543a3abaf46dadd40997",
          "name": "Mr.Ngee Noodles",
          "opening_hours": {
            "open_now": false
          },
          "photos": [
            {
              "height": 3024,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/113415526889380840842/photos\">Pao Akarin Aroonpaisalsin</a>"
              ],
              "photo_reference": "CmRaAAAA846OzFzejNQiplEZfslGfm4g2z6ls09nQ31Gp8RbJvZ7UI2TMinVt4xQVEtWbqsAadw5pMUr_sZhLUCD-bKl-y_Ve1Ir3rlscRgTwe87uK5crMXozjek7FcUu6QpemdqEhCRQi4nn2wOj3udV9SxStWIGhSnXYGGIqmxJTGYWCyM4L1uQxZ3Xw",
              "width": 4032
            }
          ],
          "place_id": "ChIJ_7rvqYub4jARKUejt4GwaGM",
          "plus_code": {
            "compound_code": "RG4G+GG Bangkok, Thailand",
            "global_code": "7P52RG4G+GG"
          },
          "rating": 4.1,
          "reference": "ChIJ_7rvqYub4jARKUejt4GwaGM",
          "scope": "GOOGLE",
          "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
          ],
          "user_ratings_total": 162,
          "vicinity": "166/42 Pracha Rat Sai 2 Road, Bang Sue"
        }, {
          "geometry": {
            "location": {
              "lat": 13.8062795,
              "lng": 100.5263084
            },
            "viewport": {
              "northeast": {
                "lat": 13.8076640302915,
                "lng": 100.5276570802915
              },
              "southwest": {
                "lat": 13.8049660697085,
                "lng": 100.5249591197085
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
          "id": "e8339c91d3ea3dcab303543a3abaf46dadd40997",
          "name": "Mr.Ngee Noodles",
          "opening_hours": {
            "open_now": false
          },
          "photos": [
            {
              "height": 3024,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/113415526889380840842/photos\">Pao Akarin Aroonpaisalsin</a>"
              ],
              "photo_reference": "CmRaAAAA846OzFzejNQiplEZfslGfm4g2z6ls09nQ31Gp8RbJvZ7UI2TMinVt4xQVEtWbqsAadw5pMUr_sZhLUCD-bKl-y_Ve1Ir3rlscRgTwe87uK5crMXozjek7FcUu6QpemdqEhCRQi4nn2wOj3udV9SxStWIGhSnXYGGIqmxJTGYWCyM4L1uQxZ3Xw",
              "width": 4032
            }
          ],
          "place_id": "ChIJ_7rvqYub4jARKUejt4GwaGM",
          "plus_code": {
            "compound_code": "RG4G+GG Bangkok, Thailand",
            "global_code": "7P52RG4G+GG"
          },
          "rating": 4.1,
          "reference": "ChIJ_7rvqYub4jARKUejt4GwaGM",
          "scope": "GOOGLE",
          "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
          ],
          "user_ratings_total": 162,
          "vicinity": "166/42 Pracha Rat Sai 2 Road, Bang Sue"
        }, {
          "geometry": {
            "location": {
              "lat": 13.8062795,
              "lng": 100.5263084
            },
            "viewport": {
              "northeast": {
                "lat": 13.8076640302915,
                "lng": 100.5276570802915
              },
              "southwest": {
                "lat": 13.8049660697085,
                "lng": 100.5249591197085
              }
            }
          },
          "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
          "id": "e8339c91d3ea3dcab303543a3abaf46dadd40997",
          "name": "Mr.Ngee Noodles",
          "opening_hours": {
            "open_now": false
          },
          "photos": [
            {
              "height": 3024,
              "html_attributions": [
                "<a href=\"https://maps.google.com/maps/contrib/113415526889380840842/photos\">Pao Akarin Aroonpaisalsin</a>"
              ],
              "photo_reference": "CmRaAAAA846OzFzejNQiplEZfslGfm4g2z6ls09nQ31Gp8RbJvZ7UI2TMinVt4xQVEtWbqsAadw5pMUr_sZhLUCD-bKl-y_Ve1Ir3rlscRgTwe87uK5crMXozjek7FcUu6QpemdqEhCRQi4nn2wOj3udV9SxStWIGhSnXYGGIqmxJTGYWCyM4L1uQxZ3Xw",
              "width": 4032
            }
          ],
          "place_id": "ChIJ_7rvqYub4jARKUejt4GwaGM",
          "plus_code": {
            "compound_code": "RG4G+GG Bangkok, Thailand",
            "global_code": "7P52RG4G+GG"
          },
          "rating": 4.1,
          "reference": "ChIJ_7rvqYub4jARKUejt4GwaGM",
          "scope": "GOOGLE",
          "types": [
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
          ],
          "user_ratings_total": 162,
          "vicinity": "166/42 Pracha Rat Sai 2 Road, Bang Sue",
        },
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row body-layout">
          <div className="col-md-12 mb-5">
            <h2>Show Restuarant</h2>
            <hr />
            <p>Show result from google place search api</p>
            {/* <a className="btn btn-primary btn-lg" href="#">Call to Action &raquo;</a> */}
          </div>
        </div>
        <div class="row">
          {this.restuarant.data.map(restaurant =>
            <div class="col-md-4 mb-5">
              <div class="card h-100">
                <img class="card-img-top" src={restaurantPic} alt="" />
                <div class="card-body">
                  <h4 class="card-title">{restaurant.name}</h4>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={restaurant.rating}
                  />
                  <p class="card-text">{restaurant.vicinity}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>)
  }
}