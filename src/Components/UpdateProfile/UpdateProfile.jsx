import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './UpdateProfile.css';
import axios from "axios";

function UpdateProfile() {
  const navigate = useNavigate();
  const [nameEdit, setNameEdit] = useState("");
  const [emailEdit, setEmailEdit] = useState("");
  const [pictureEdit, setPictureEdit] = useState("");
  const [numberEdit, setNumberEdit] = useState("");
  const [roleEdit, setRoleEdit] = useState("");
  const [loading, setLoading] = useState(true);
  const [roleError, setRoleError] = useState(false);

  useEffect(() => {
    axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user', {
      headers: {
        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      console.log(response.data);
      const user = response.data;
      setNameEdit(user.data.name);
      setEmailEdit(user.data.email);
      setPictureEdit(user.data.profilePictureUrl);
      setNumberEdit(user.data.phoneNumber);
      setRoleEdit(user.data.role);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (roleEdit === "") {
      setRoleError(true);
      return;
    }
    axios.post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-profile', {
      name: nameEdit,
      email: emailEdit,
      profilePictureUrl: pictureEdit,
      phoneNumber: numberEdit,
    }, {
      headers: {
        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      console.log(response.data);
      alert('Update Data Succes!');
      

    }).catch((error) => {
      console.log(error);
      alert('Error Update Data. Try Again!.');
    });
  }

  const handleUserRoleSubmit = (event) => {
    event.preventDefault();
    if (roleEdit === "") {
      setRoleError(true);
      return;
    }
    axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-user-role/`, {
      role: roleEdit,
    }, {
      headers: {
        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      console.log(response.data);
      alert('Update Data Succes!');
      navigate("/Account");

    }).catch((error) => {
      console.log(error);
      alert('Error Update Data. Try Again!.');
    });
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='edit-account'>
      <div className='container'>
        <h1>Edit Account Detail</h1>
            <div className='profile-picture'>
            <p>Profil Picture</p>
            <img
            src={pictureEdit}
            alt="Profile"
          />
            </div>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={nameEdit} onChange={(event) => setNameEdit(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={emailEdit} onChange={(event) => setEmailEdit(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control type="text" placeholder="Profile Picture URL" value={pictureEdit} onChange={(event) => setPictureEdit(event.target.value)} />
          </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Profile Phone Number" value={numberEdit} onChange={(event) => setNumberEdit(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSelect">
            <Form.Label>Role</Form.Label>
            <Form.Select aria-label="Select Role" value={roleEdit} onChange={(event) => setRoleEdit(event.target.value)} >
              <option>Plase Select Your Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </Form.Select>
            {roleError && <div className="text-danger">Please select your role!</div>}
        </Form.Group>

        <Button variant="primary" type="submit">
        Save Changes
      </Button>

      
        </Form>
      </div>
    </div>
  );
}

export default UpdateProfile;
