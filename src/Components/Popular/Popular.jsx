import React, { useState, useEffect } from "react";
import "./popular.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Link from "react-bootstrap/Modal";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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

  const handleShow = (id) => {
    setShow(id);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="popular">
      <div className="popular-title text-center">
        <h2>Popular Activites</h2>
      </div>

      <div className="popular-box">
        <div className="row">
          {popular.map((item, index) => {
            return (
              <Card
                className="popular-cards"
                style={{ marginBottom: "20px", width: "19rem" }}
                key={index}
              >
                <Card.Img variant="top" src={item.imageUrls[0]} 
                onClick={() => handleShow(item.id)}/>
                <Card.Body>
                  <Card.Title>
                    <h6>{item.title}  <i class="bi bi-arrow-right-square-fill"></i></h6>
                  </Card.Title>
                  <Card.Text className="card-text">
                    <p>
                      Rating
                      <i className="bi bi-star-fill text-warning pe-1"></i>
                      {item.rating} <span className="text-secondary">/5</span> .{" "}
                      {item.total_reviews}
                    </p>
                    <p className="card-text mb-1">
                      <i class="bi bi-geo-alt-fill"></i>
                      {item.city}, {item.province}
                    </p>
                  </Card.Text>
                   
                </Card.Body>

                <Modal show={show === item.id} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{item.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="modal-body">
                      <img src={item.imageUrls[0]} alt="" />
                      <hr />
                      <p className="my-0">Description : {item.description}</p>
                      <p className="my-0"> Price : {item.price} </p>
                      <p className="my-0">
                        {" "}
                        Discount price : {item.price_discount}{" "}
                      </p>
                      <p className="my-0"> Rating : {item.rating} </p>
                      <p className="my-0">
                        {" "}
                        Total review : {item.total_reviews}{" "}
                      </p>
                      <p className="my-0"> Facilities : {item.facilities} </p>
                      <p className="my-0"> Address : {item.address} </p>
                      <p className="my-0"> City : {item.city} </p>
                      <p className="my-0"> Province : {item.province} </p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="light" onClick={handleClose}>
                      Book
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
