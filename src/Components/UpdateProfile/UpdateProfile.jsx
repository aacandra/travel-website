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
  const [images, setImages] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user', {
      headers: {
        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
   
      const user = response.data;
      setNameEdit(user.data.name);
      setEmailEdit(user.data.email);
      setPictureEdit(user.data.profilePictureUrl);
      setNumberEdit(user.data.phoneNumber);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
    });
  }, []);


  const handleImage = (e) => {
    setImages(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let imageUrl = {
      url: pictureEdit,
    };

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
  
    axios.post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-profile', {
      name: nameEdit,
      email: emailEdit,
      profilePictureUrl: imageUrl.url,
      phoneNumber: numberEdit,
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
      <div className='containers'>
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

          {/* <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control type="text" placeholder="Profile Picture URL" value={pictureEdit} onChange={(event) => setPictureEdit(event.target.value)} />
          </Form.Group> */}

          <Form.Group controlId="formFile" className="mb-3">
           <Form.Label>Profile Picture</Form.Label>
           <Form.Control type="file"   accept="image/*" id="picture" name="picture" placeholder="Profile Picture URL" // value={pictureEdit}
            onChange={(e) => handleImage(e)}   />
         </Form.Group>
        
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Profile Phone Number" value={numberEdit} onChange={(event) => setNumberEdit(event.target.value)} />
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
