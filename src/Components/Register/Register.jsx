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
  const [error, setError] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();

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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={formRegister.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={formRegister.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formRegister.password}
                onChange={handleChange}
              />
            </Form.Group>
     
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password Repeat</Form.Label>
                <Form.Control type="password" 
                placeholder="Password" 
                name="passwordRepeat" 
                value={formRegister.passwordRepeat} 
                onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSelect">
            <Form.Label>Select Role</Form.Label>
            <Form.Select aria-label="Default select example" 
            name="role" 
            value={formRegister.role} onChange={handleChange}>
              <option>Select Role</option>
              <option value="1">Admin</option>
              <option value="2">User</option>
            </Form.Select>
          </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Profile Picture URL</Form.Label>
            <Form.Control type="text" 
            name="profilePictureUrl" 
            value={formRegister.profilePictureUrl} 
            onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
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

