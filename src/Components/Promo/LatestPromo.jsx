import React, { useState, useEffect } from 'react';
import './promo.css';
// import { HiOutlineLocationMarker } from 'react-icons/hi';
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
          {promo.map((item, i) => (
            <div className="col-sm-3" key={i}>
              <div className="card">
                <img
                  src={item.imageUrl}
                  className="card-img-top"
                  alt="..."
                />
                <p className="diskon bg-light">{item.promo_code}</p>
                <div className="card-body">
                  <p className="card-text">{item.title}</p>
                  <p className="my-0">
                    <img
                      src="img/discount.png"
                      alt=""
                      className="logodisc"
                    />{" "}
                    Disc. 
                  </p>
                  <p className="mb-0">
                    Rp. {item.promo_discount_price},-
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPromo;
