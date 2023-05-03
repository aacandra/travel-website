import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Account.css';


const AccountDetail = ({ isLoggedIn }) => {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccount = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user",
          {
            headers: {
              'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c',
              Authorization: `Bearer ${token}`,
            }
          }
        );
        setAccount(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
        navigate("/error");
      }
    };

    fetchAccount();
  }, [navigate]);

  return (
    <div className="account">
      <div className="container">
      <h2>Welcome, {account ? account.data.name : ''}</h2>
        <div className="account-content">
          {account ? (
            <>
              <img
                src={`${account.data.profilePictureUrl}`}
                alt="Gravatar"
              />
              <div className="account-detail">
                <ul>
                <li><h4>ID : {account.data.id}</h4></li>
                <li><h4>Name : {account.data.name}</h4></li>
                <li><h4>Email : {account.data.email}</h4></li>
                <li><h4>Role : {account.data.role}</h4></li>
                <li><h4>Phone Number : {account.data.phoneNumber}</h4></li>
                </ul>
              </div>
              <button
                className="edit-button"
                onClick={() => navigate("/UpdateProfile")}
              >
                Edit Profile
              </button>

            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <button
        className="logout-button"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("session_id");
          navigate("/");
          alert("You will be logged out!");
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default AccountDetail;
