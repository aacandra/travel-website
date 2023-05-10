import React, { useState, useEffect } from "react";
import axios from "axios";


const Admin = () => {
  const [nameAccount, setNameAccount] = useState("");
  const [pictureAccount, setPictureAccount] = useState("");
  const [users, setUsers] = useState([]);
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    axios
      .get("https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user", {
        headers: {
          apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
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
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user",
        {
          headers: {
            apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
       
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (userId, newRole) => {
  
    axios
      .post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-user-role/${userId}`,
        {
          role: newRole,
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
        setNewRole(response.data) 
        setUsers((prevState) =>
          prevState.map((user) =>
            user.id === userId ? { ...user, role: newRole } : user
          )
        );
        setNewRole("");
        alert("Edit Role Success")
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                <div className="card">
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
          <button className="sidebar-toggler btn x"><i data-feather="x" /></button>
          </div>
        </div>
        <div id="main">
          <header className="mb-3">
            <a href="#" className="burger-btn d-block d-xl-none">
              <i className="bi bi-justify fs-3" />
            </a>
          </header>
          <div className="page-heading">
            <h3> Edit User Role</h3>
          </div>
          <div className="page-content">
            <section className="row">
              <div className="col-12 col-lg-12">
                <div className="row"></div>
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-header">
                        <h4>All User Role</h4>
                      </div>
                      <div className="card-body">
                        <div id="chart-profile-visit" />
                        <div>
                          <div className="page-heading">
                            <div className="page-title"></div>
                            <section className="section">
                              <div className="card">
                                <div className="card-body">
                                  <table
                                    className="table table-striped"
                                    id="table1"
                                  >
                                    <thead>
                                      <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Edit Role</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {users.map((user) => (
                                        <tr key={user.id}>
                                          <td>{user.name}</td>
                                          <td>{user.email}</td>
                                          <td>{user.role}</td>
                                          <td>
                                            <form action="#">
                                            
                                            <select value={user.role} onChange={(e) => handleChange(user.id, e.target.value)}>
                                            <option value="admin">Admin</option>
                                            <option value="user">User</option>
                                            </select>
                                            </form>                                         
                                          </td>
                                          
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

 

              
            
            </section>
          </div>
        </div>
      </div>
    
  );
};

export default Admin;
