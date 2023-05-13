import React, { useState, useEffect } from 'react';
import './popular.css';
import axios from 'axios';

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axios
      .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities-by-category/8c380f04-88b5-4ed0-960b-b63d996f21f9', {
        headers: {
          apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'
        }
      })
      .then(response => {
        console.log(response.data);
        const items = response.data.data;
        setPopular(items);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="popular">
      <div className="popular-title">
      <h2>Popular Activites</h2></div>

      <div className="popular-box">
        <div className="row">
          {popular.map((item, i) => {
            return (
              
              <div className="col-sm-3" key={i}>
                <div className="popular-cards">
                  <img
                    src={item.imageUrls[0]}
                    className="card-img-top"
                    alt="..."
                  />
                  <div
                    className="card-box d-flex px-2 mt-2 justify-content-between
                  "
                  >
                    <p> {item.title} </p>
                    <p>
                      <i className="bi bi-star-fill text-warning pe-1"></i>
                      {item.rating} <span className="text-secondary">/5</span>{" "}
                      . {item.total_reviews}
                    </p>
                  </div>

                  <div className="card-body py-0">
                    <p className="card-text mb-1">
                      <img src="img/pin.png" alt="" />
                      {item.city}, {item.province}
                    </p>

                    <p className="text-secondary">
                      More <i className="fa-solid fa-circle-arrow-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
       
    </div>
  </div>
  );
};

export default Popular;
