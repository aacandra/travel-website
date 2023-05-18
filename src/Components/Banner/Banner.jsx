import React, { useState, useEffect } from "react";
import axios from "axios";
import {Modal, Card, Button} from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebars'

const Banner = () => { 
  const [banner,setBanner] = useState([]); 
  const [name, setName] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [newBanner, setNewBanner] = useState("");
  const [newImageUrl,setNewImageUrl] = useState ("");  
  const [show, setShow] = useState(false)

  // Get list banner
  const getBanners = () => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        const item = response.data.data;
        setBanner(item)   
       

      })
      .catch((error) => {
        console.log(error);
      });
  }

  
  useEffect(() => {
    getBanners();
  }, []);
 
  // Update Banner Data

  const handleSubmit2 = (e, item) => {
    e.preventDefault() 

    axios
    .post(
      `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-banner/${item.id}`,
        {
          name: name,
          imageUrl: imageUrl,
        },
      {
          headers: {
          apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      window.location.reload();
      setName("")
      setImageUrl("")

      alert("Update Data Banner Success")
    })
    .catch((error) => {
      console.log(error);
    });

  }

  const handleClose = () => {
    setShow(false) 
  }

  const handleShow = (id) =>{
    setShow(id)
  } 

// to delete banner in modal edit
  const handleDelete = (e, item) => {
    e.preventDefault()
    const text = "Are Sure to Delete Banner?"
    if (confirm(text) === true) {
      axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-banner/${item.id}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Delete Banner Success")
        window.location.reload();
   
      })
      .catch((error) => {
        console.log(error.response.data);
 
      });

    }
  }
   
  // UPLOAD NEW BANNER
  const handleSubmit = (event) => {
    event.preventDefault();  
  
    axios
    .post(
      `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-banner`,
        {
          name: newBanner,
          imageUrl: newImageUrl,
        },
      {
          headers: {
          apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((response) => {
      console.log(response.data);
      window.location.reload();

      alert("Upload Success")
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div id="app">
    
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <div className="page-heading">
        <Sidebar/>  
          <h3> Banner Section</h3>
        </div>
        <div className="page-content">
          <section id="content-types">
            <div className="row">
              <h4> Upload New Banner</h4>
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit} className="form form-horizontal">
                    <div className="form-body">
                      <div className="row">
                        <div className="col-md-4">
                          <label>Banner Name</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input value={newBanner} onChange={(event) => setNewBanner(event.target.value)}
                            type="text"
                            id="banner-name"
                            className="form-control"
                            name="fname"
                            placeholder= "Banner Name"
                          />                         
                        </div>
                        <div className="col-md-4">
                          <label>Banner Link</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input value={newImageUrl} onChange={(event) => setNewImageUrl(event.target.value)}
                            type="text"
                            id="banner-link"
                            className="form-control"
                            name="blink"
                            placeholder="https://"
                          />                         
                        </div>

                        <div className="col-12 col-md-8 offset-md-4 form-group"></div>
                        <div className="col-sm-12 d-flex justify-content-end">
                          <button
                            type="submit"
                            className="btn btn-primary me-1 mb-1"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                </div>
              </div>
            </div>
            <br/>
            <br/>
            <div className="row">
              <h4 > Edit/Delete Banner</h4>
              <div className="col-xl-8 col-md-6 col-sm-12">                
                 
              {banner.map((item, index) => {
                return (
                  <Card style={{ width: '18rem' }} key={index}>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Button onClick={() => handleShow(item.id)} className="btn btn-light-primary">
                        Edit
                      </Button>
                      <Button  onClick={(e) => handleDelete(e,item)} className="btn btn-light-primary">
                        Delete
                      </Button>
                    </Card.Body>
                    <Modal show={show === item.id} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Banner : {item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>   
                    <div className="col-md-4">
                      <label>Edit Banner Name</label>
                    </div>
                     <div> <img src={item.imageUrl} alt="" /> </div>
                    <div className="col-md-8 form-group">
                      <input value={name} 
                        onChange={(e)=> setName(e.target.value)} 
                        type="text"
                        id="first-name"
                        className="form-control"
                        name="fname"
                        placeholder="Input New Banner Name"
                      />                         
                    </div>

                    <div className="col-md-4">
                      <label>Edit Banner Link</label>
                    </div>
                    <div className="col-md-8 form-group">
                      <input value={imageUrl} 
                        onChange={(e)=> setImageUrl(e.target.value)}
                        type="text"
                        id="banner-link"
                        className="form-control"
                        name="blink"
                        placeholder="Input Image Url"
                      />                         
                    </div>     
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose} style={{backgroundColor : "grey"}}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={(e) => handleSubmit2(e,item)} style={{ backgroundColor: "#435ebe" }}>
                    Save Changes
                </Button>
                </Modal.Footer>
              </Modal>
                  </Card>
                );
              })}
              </div>              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;
