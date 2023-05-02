import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const accountDetail = ({ isLoggedIn }) => {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await axios.get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user", account,
        {
          headers: {
            'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          }
        }


      );
      setAccount(response.data);
      console.log(response.data);
    };

    fetchAccount();
  }, []);

  return (
    <div className="account">
      <container>
        <h2>Welcome to Next-Travel </h2>
        <div className="account-content">
          {account ? (
            <>
              <img
                src={``}
                alt="Gravatar"
              />
              <div className="account-detail">
                <h4>Email : {account.email}</h4>
                <h4>Name : {account.name}</h4>
                <h4>ID : {account.id}</h4>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </container>

      <button
        className="logout-button"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("session_id");
          navigate("/");
          alert("You Will Be Logout!");
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default accountDetail;