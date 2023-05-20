import React, { useState, useEffect } from 'react';
import './promo.css';
import axios from 'axios';

const LatestPromo = () => {
  const [promo, setPromo] = useState([]);

  useEffect(() => {
    axios
      .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos', {
        headers: {
          apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'
        }
      })
      .then(response => {
        console.log(response.data);
        const items = response.data.data.slice(0,8);
        setPromo(items);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="latest-promo">
      <div className="latest-promo-title">
        <h2>Latest Promo</h2>
      </div>

      <div className="promo-box">
        <div className="row">
          {promo.map((item, i) => {
            return (
            <div className="col-sm-3" key={i}>
              <div className="card"
                data-bs-toggle="modal"
                data-bs-target={`#promo${item.id}`}
              >
                    
                <img
                  src={item.imageUrl}
                  className="card-img-top"
                  alt="..."
                />
                <p className="diskon bg-light">{item.promo_code}</p>
                <div className="card-body">
                  <h6 className="card-text">{item.title}</h6>
                  <p className="my-0">
                  <i class="bi bi-bookmark-star-fill info"></i>
                    Disc. 
                  </p>
                  <p className="mb-0">
                    Rp. {item.promo_discount_price},-
                  </p>
                </div>
              </div>

              <div
                      className="modal fade"
                      id={`promo${item.id}`}
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h3
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              {item.title}
                            </h3>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body cek">
                            <img src={item.imageUrl} alt="" />
                            <hr />
                            <p className="my-0">
                              {" "}
                               {item.description}
                            </p>
                            <p className="my-0">
                              {" "}
                              Promo code : {item.promo_code}
                            </p>
                            <p className="my-0">
                              {" "}
                              Promo discount price : Rp{
                                item.promo_discount_price
                              }{" "}
                            </p>
                            <p className="my-0">
                              {" "}
                              Minimun discount price :{" "}
                              Rp{item.minimum_claim_price}
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Get Promo
                            </button>
                          </div>
                        </div>
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

export default LatestPromo;
