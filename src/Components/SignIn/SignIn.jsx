import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import RegisterModal from '../Register/Register';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ModalComponent() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleClose = () => {
    setShow(false);
    setSuccess(false);
  }

  const handleShow = () => setShow(true);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/login',
        formLogin,
        {
          headers: {
            'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          }
        }
      );
      if (response.status === 200) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        alert("Login Success!")
        navigate('/Account'); 
      }
      
    } catch (error) {
      setError("Wrong email address or password");
    }
  }

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/logout',
        null,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `bearer ${token}`,
          }
        }
      );
      setToken(null);
      localStorage.removeItem("token");
      
    } catch (error) {
      setError(error.response.data);
    }
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormLogin({
      ...formLogin,
      [name]: value
    })
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={formLogin.email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={formLogin.password} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            {error && <p>{error}</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
           
          <p>
            Not Registered Yet?{" "}
            <a href="#" onClick={handleShow}>
              <RegisterModal />
            </a>
          </p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
 
 