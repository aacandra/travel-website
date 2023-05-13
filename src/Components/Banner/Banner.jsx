import React, { useState, useEffect } from "react";
import axios from "axios";
import {Modal, Card, Button} from 'react-bootstrap';

const Banner = () => {
  const [nameAccount, setNameAccount] = useState("");
  const [banner,setBanner] = useState([]);
  const [pictureAccount, setPictureAccount] = useState("");
  const [editBannerName, setEditBannerName] = useState("");
  const [editBannerUrl, setEditBannerUrl] = useState("");
  const [newBanner, setNewBanner] = useState("");
  const [newImageUrl,setNewImageUrl] = useState ("");

  const [modalEdit, setModalEdit] = useState(false);
  const [editBannerData, setEditBannerData] = useState({
    id : "",
    name : "",
    imageUrl : ""
  }); 

  const closeModalEdit = () => setModalEdit(false);

  // Get current account
  const getAccount = () => {
    axios
      .get("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user", {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const user = response.data;
        setNameAccount(user.data.name);
        setPictureAccount(user.data.profilePictureUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
        setEditBannerName(response.data.data.name);
        setEditBannerUrl(response.data.data.imageUrl);

      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Delete banner
  const deleteBanners = () => {
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-banner/${bannerId}`,
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
  
  useEffect(() => {
    getAccount();
    getBanners();
  }, []);
 
  // to insert banner in modal edit
  const handleEditBanner = (idx) => {
    setModalEdit(true);
    setEditBannerData({
      id : banner[idx].id,
      name : banner[idx].name,
      imageUrl : banner[idx].imageUrl
    })
  }

// to delete banner in modal edit
  const handleDeleteBanner = (idx)=>{

  
  }


  // EDIT/UPDATE BANNER
  const handleUpdate = (bannerId) => { 
       
  
    axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-banner/${bannerId}`, {
      
      name: editBannerName,
      imageUrl: editBannerUrl,
      
    }, {
      headers: {
        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },


    }).then((response) => {
      console.log(response.data);      
      alert('Update Data Succes!');
      window.location.reload();
      

    }).catch((error) => {
      console.log(error);
      alert('Error Update Data. Try Again!.');
    });
  }

  // DELETE BANNER
  const handleDelete = (bannerId) => {
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-banner/${bannerId}`,
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
  };
   
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
      <div id="sidebar" className="active">
        <div className="sidebar-wrapper active">
          <div className="sidebar-header">
            <div className="d-flex justify-content-between">
              <div className="logo">
                <a href="./" className="logo">
                  <h4>Next-Travel </h4>
                </a>
              </div>
              <div className="toggler">
                <a href="#" className="sidebar-hide d-xl-none d-block">
                  <i className="bi bi-x bi-middle" />
                </a>
              </div>
            </div>
          </div>
          <div class="sidebar-menu">
            <div className="col-12 col-lg-8">
               
                <div className="card-body py-4 px-5">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-xl">
                      <img src={pictureAccount} alt="Face 1" />
                    </div>
                    <div className="ms-3 name">
                      <h6 className="font-bold">Hallo, {nameAccount}</h6>
                      {/* <h6 className="text-muted mb-0">{emailAccount}</h6> */}
                    </div>
                  </div>
                </div>
              
            </div>

            <ul className="menu">
              <li className="sidebar-title">Menu</li>
              <li className="sidebar-item active ">
                <a href="/Admin" className="sidebar-link">
                  <i className="bi bi-person-fill" />
                  <span>User</span>
                </a>
              </li>
              <li className="sidebar-item active ">
                <a href="/Banner" className="sidebar-link">
                  <i className="bi bi-image-fill" />
                  <span>Banner</span>
                </a>
              </li>
              <li className="sidebar-item active ">
                <a href="/Promo" className="sidebar-link">
                  <i className="bi bi-collection-fill" />
                  <span>Promo</span>
                </a>
              </li>
              <li className="sidebar-item active ">
                <a href="/Category" className="sidebar-link">
                  <i className="bi bi-card-list" />
                  <span>Category</span>
                </a>
              </li>
              <li className="sidebar-item active ">
                <a href="/Activity" className="sidebar-link">
                  <i className="bi bi-basket-fill" />
                  <span>Activity</span>
                </a>
              </li>
            </ul>
          </div>
          <button className="sidebar-toggler btn x">
            <i data-feather="x" />
          </button>
        </div>
      </div>
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <div className="page-heading">
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
                 
              <Modal show={modalEdit} onHide={closeModalEdit}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit Banner : {editBannerData.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>   
                    <div className="col-md-4">
                      <label>Edit Banner Name</label>
                    </div>
                     <div> <img src={editBannerData.imageUrl} alt="" /> </div>
                    <div className="col-md-8 form-group">
                      <input value={editBannerData.name} onChange={(event) => setEditBannerData(prevState => ({...prevState, name: event.target.value}))}
                        type="text"
                        id="first-name"
                        className="form-control"
                        name="fname"
                        placeholder="Input nama"
                      />                         
                    </div>

                    <div className="col-md-4">
                      <label>Edit Banner Link</label>
                    </div>
                    <div className="col-md-8 form-group">
                      <input value={editBannerData.imageUrl} onChange={(event) => setEditBannerData(prevState => ({...prevState, imageUrl: event.target.value}))}
                        type="text"
                        id="banner-link"
                        className="form-control"
                        name="blink"
                        placeholder="Input url image"
                      />                         
                    </div>     
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={closeModalEdit} style={{backgroundColor : "grey"}}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={closeModalEdit} style={{backgroundColor : "#435ebe"}}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              {banner.map((item, index) => {
                return (
                  <Card style={{ width: '18rem' }} key={index}>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Button onClick={() => handleEditBanner(index)} className="btn btn-light-primary">
                        Edit
                      </Button>
                      <Button  onClick={() => handleDeleteBanner(index)} className="btn btn-light-primary">
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                );
              })}

              {/* {banner.map((item, index) => (
                <div className="card" key={item.id}>                  
                    <div className="card-content">
                      <div className="card-body">
                          <h6>File Name : {item.name}</h6>
                          
                        <div className="col-md-4">
                          <label>Edit Banner Name</label>
                        </div>
                        
                        <div className="col-md-8 form-group">
                          <input value={editBannerName} onChange={(event) => setEditBannerName(event.target.value)}
                            type="text"
                            id="first-name"
                            className="form-control"
                            name="fname"
                            placeholder={item.name}
                          />                         
                        </div>

                        <div className="col-md-4">
                          <label>Edit Banner Link</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input value={editBannerUrl} onChange={(event) => setEditBannerUrl(event.target.value)}
                            type="text"
                            id="banner-link"
                            className="form-control"
                            name="blink"
                            placeholder={item.imageUrl}
                          />                         
                        </div>

                                        
                      </div>
                      <img
                        className="img-fluid w-100"
                        src={item.imageUrl}
                        alt="Card image cap"
                      />
                      <p>Banners ID : {item.id}</p>
                      <div className="card-footer d-flex justify-content-between">
                        <span>
                          <button onClick={() => handleUpdate(item.id)} className="btn btn-light-primary">
                            Update
                          </button>
                        </span>
                        <button  onClick={() => handleDelete(item.id)} className="btn btn-light-primary">
                          Delete
                        </button>
                      </div>
                    </div>
                  
                </div>
                ))} */}
                 

              </div>
              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;
