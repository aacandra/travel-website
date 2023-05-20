import React, { useState, useEffect } from "react";
import axios from "axios";

function LatestPromo() {
  const [promos, setPromos] = useState([]);
  const [selectedPromo, setSelectedPromo] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        const promos = response.data.data;
        console.log(response.data);
        setPromos(promos);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);

  const handleDetailClick = (promo) => {
    setSelectedPromo(promo);
    setShowModal(true); // Mengatur showModal menjadi true saat tombol detail diklik
  };

  const closeModal = () => {
    setSelectedPromo(null);
    setShowModal(false);
  };

  return (
    <div className="latest-promo">
      <div className="latest-promo-title">
        <h2>Latest Promo</h2>
      </div>
      <div className="promo-box">
        <div className="row">
          {promos.slice(0, 8).map((promo) => (
            <div key={promo.id} className="col-sm-3">
              <div className="card">
                <img
                  src={promo.imageUrl}
                  className="card-img-top"
                  alt={promo.title}
                  onClick={() => handleDetailClick(promo)}
                />
                <p className="diskon bg-light">{promo.promo_code}</p>
                <div className="card-body">
                  <h6 className="card-text">{promo.title} <i class="bi bi-arrow-right-square-fill"></i></h6>
                  
                  <div className="card-disc">
                    <p className="my-0">
                      <i class="bi bi-bookmark-star-fill info"></i>
                      Disc.
                    </p>
                    <p className="mb-0">Rp. {promo.promo_discount_price},-</p>
                  </div>

                  <h7
                    className="detail-promo"
                    onClick={() => handleDetailClick(promo)}
                    data-bs-toggle="modal"
                    data-bs-target="#promoModal"
                  >                
                  </h7>
                  
                </div>
              </div>
            </div>
          ))}

          {selectedPromo && (
            <div
              className={`modal fade ${showModal ? "show" : ""}`}
              id="promoModal"
              tabIndex="-1"
              aria-labelledby="promoModalLabel"
              aria-hidden={!showModal}
              style={{ display: showModal ? "block" : "none" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="promoModalLabel">
                      {selectedPromo.title}
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={closeModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                  <img src={selectedPromo.imageUrl} alt="" /><br/>
                    <p className="my-0">{selectedPromo.description}</p><br/>
                    <p className="my-0">Promo Code :<b> {selectedPromo.promo_code} </b></p>
                    <p className="my-0">Promo Discount : Rp. {selectedPromo.promo_discount_price}</p>
                    <p className="my-0">Min Claim Price : Rp. {selectedPromo.minimum_claim_price}</p>
                    <p className="my-0">Term&Cond : {selectedPromo.terms_condition}</p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                      onClick={closeModal}
                    >
                      Get Promo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LatestPromo;
