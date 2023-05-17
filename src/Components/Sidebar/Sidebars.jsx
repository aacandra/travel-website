import React, { useState, useEffect } from "react";
import axios from "axios";

const Sidebar = () => {
   const [account, setAccount] = useState("");
   const [picture, setPicture] = useState("");

   useEffect(() => {
    axios
      .get("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user", {
        headers: {
          apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        const user = response.data;
        setAccount(user.data.name);
        setPicture(user.data.profilePictureUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div>
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
                      <img src={picture} alt="Face 1" />
                    </div>
                    <div className="ms-3 name">
                      <h6 className="font-bold">Hallo, {account}</h6>
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
    </div>
  )
}

export default Sidebar