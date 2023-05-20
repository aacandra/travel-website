import React, { useState, useEffect } from "react";
import "./popular.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities-by-category/8c380f04-88b5-4ed0-960b-b63d996f21f9",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        const items = response.data.data;
        setPopular(items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="popular">
      <div className="popular-title text-center">
        <h2>Popular Activites</h2>
      </div>

      <div className="popular-box">
        <div className="row">
          {popular.map((item, i) => {
            return (
              // <div className="col-sm-3" style={{ marginBottom: "20px" }} key={i}>
              //   <div className="popular-cards">
              //   <a

              //     // data-bs-toggle="modal"
              //     // data-bs-target={`#popularh${item.id}`}
              //     // href={`#popularh${item.id}`}

              //   >
              //     <img
              //       src={item.imageUrls[0]}
              //       className="card-img-top"
              //       alt="..."
              //     />
              //     <div className="card-box d-flex px-2 mt-2 justify-content-between">
              //       <h6> {item.title} </h6>
              //       <p>
              //         <i className="bi bi-star-fill text-warning pe-1"></i>
              //         {item.rating} <span className="text-secondary">/5</span> .{" "}
              //         {item.total_reviews}
              //       </p>
              //     </div>

              //     <div className="card-modal-body py-0">
              //       {/* <p className="card-text mb-1">
              //         <i class="bi bi-geo-alt-fill"></i>
              //         {item.city}, {item.province}
              //       </p> */}
              //       <div className="modal-link"
              //         // data-bs-toggle="modal"
              //         // data-bs-target={`#popularh${item.id}`}
              //       >
              //         <button className="modal-link" data-bs-toggle="modal"
              //         data-bs-target={`#popcat${item.id}`}>More</button>
              //       {/* <p className="text-secondary">
              //         Lihat <i class="bi bi-arrow-right-square-fill"></i>
              //       </p> */}
              //       </div>
              //     </div>
              //   </a>
              //   </div>
              //   <div>
              //     <div
              //       className="modal fade"
              //       id={`popcat${item.id}`}
              //       tabIndex={-1}
              //       aria-labelledby="exampleModalLabel"
              //       aria-hidden="true"
              //     >
              //       <div className="modal-dialog">
              //         <div className="modal-content">
              //           <div className="modal-header">
              //             <h3
              //               className="modal-title fs-5"
              //               id="exampleModalLabel"
              //             >
              //               {item.title}
              //             </h3>
              //             <button
              //               type="button"
              //               className="btn-close"
              //               data-bs-dismiss="modal"
              //               aria-label="Close"
              //             />
              //           </div>
              //           <div className="modal-body">
              //             <img src={item.imageUrls[0]} alt="" />
              //             <hr />
              //             <p className="my-0">
              //               Description : {item.description}
              //             </p>
              //             <p className="my-0"> Price : {item.price} </p>
              //             <p className="my-0">
              //               {" "}
              //               Discount price : {item.price_discount}{" "}
              //             </p>
              //             <p className="my-0"> Rating : {item.rating} </p>
              //             <p className="my-0">
              //               {" "}
              //               Total review : {item.total_reviews}{" "}
              //             </p>
              //             <p className="my-0">
              //               {" "}
              //               Facilities : {item.facilities}{" "}
              //             </p>
              //             <p className="my-0"> Address : {item.address} </p>
              //             <p className="my-0"> City : {item.city} </p>
              //             <p className="my-0"> Province : {item.province} </p>
              //           </div>
              //           <div className="modal-footer">
              //             <button
              //               type="button"
              //               className="btn btn-secondary"
              //               data-bs-dismiss="modal"
              //             >
              //               Book
              //             </button>

              //           </div>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
              // </div>

              // ==================
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary"  onClick={handleShow}>Go somewhere</Button>
                </Card.Body>
                
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
