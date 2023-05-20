import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function RegisterModal() {
  const [show, setShow] = useState(false);
  const [formRegister, setFormRegister] = useState({
    email: '',
    name: '',
    password: '',
    passwordRepeat: '',
    role: '',
    profilePictureUrl: '',
    phoneNumber: '',
  });

  const [success, setSuccess] = useState(false);
  const [images, setImages] = useState();
  const [error, setError] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let imageUrl = null


    if (images) {
      const formData = new FormData();
      formData.append("image", images);
      await axios
        .post(
          "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
          formData,
          {
            headers: {
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((response) => {
          imageUrl = response.data;
          console.log(response.data);
        });
    }

    axios
      .post(
        'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/register',
        formRegister,
        {
          headers: {
            apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          },
        }
      )
      .then((response) => {
        console.log(response);
        setSuccess(true);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
        setError(error.response.data.message);
      });
  };

  const handleImage = (e) => {
    setImages(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormRegister({ ...formRegister, [name]: value });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create An Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={formRegister.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formRegister.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formRegister.password}
                onChange={handleChange}
              />
            </Form.Group>
     
            <Form.Group className="mb-3" >
                <Form.Label>Password Repeat</Form.Label>
                <Form.Control type="password" 
                placeholder="Password" 
                name="passwordRepeat" 
                value={formRegister.passwordRepeat} 
                onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" >
            <Form.Label>Select Role</Form.Label>
            <Form.Select aria-label="Default select example" 
            name="role" 
            value={formRegister.role} onChange={handleChange}>
              <option>Select Role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </Form.Select>
          </Form.Group>


          <Form.Group  className="mb-3">
           <Form.Label>Profile Picture</Form.Label>
           <Form.Control type="file"   accept="image/*" id="picture" name="picture" placeholder="Profile Picture URL" 
            onChange={(e) => handleImage(e)}   />
         </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" 
            name="phoneNumber" value={formRegister.phoneNumber} 
            onChange={handleChange} />
          </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
        
        
  <Modal.Footer>
  {success && (
  <div className="alert alert-success" role="alert">
    Registration Successful!
  </div> )}

 {error && <div className="alert alert-danger">{error}</div>} 
  </Modal.Footer>

  </Modal>
</>
);
}
export default RegisterModal;

