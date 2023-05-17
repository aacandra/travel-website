import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Sidebar from '../Sidebar/Sidebars'


const Admin = () => { 
  const [users, setUsers] = useState([]);
  const [newRole, setNewRole] = useState("");

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
      <Sidebar/>  
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
