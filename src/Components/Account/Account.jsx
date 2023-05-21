import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Account.css";

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
              apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
              Authorization: `Bearer ${token}`,
            },
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

  const isAdmin = account?.data?.role === "admin";

  return (
    <div className="account">
      <div className="containers">
        <div class="row">
          <div class="col-md-12 ml-auto mr-auto">
            <h2 className="text-center">
              Welcome, {account ? account.data.name : ""}
            </h2>
            <br />
            <div className="account-content">
              {account ? (
                <>
                  <img
                    src={`${account.data.profilePictureUrl}`}
                    alt="Gravatar"
                  />
                  <div className="account-detail">
                    <ul>
                      <li>
                        <h4>Name : {account.data.name}</h4>
                      </li>
                      <li>
                        <h4>Email : {account.data.email}</h4>
                      </li>
                      <li>
                        <h4>Role : {account.data.role}</h4>
                      </li>
                      <li>
                        <h4>Phone Number : {account.data.phoneNumber}</h4>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 ml-auto mr-auto">
          <div className="editprofile-tabs">
            <div>
              <button onClick={() => navigate("/UpdateProfile")}>
                Edit Profile
              </button>
            </div>
            <br />
            <div>
              {isAdmin && (
                <button onClick={() => navigate("/Admin")}>Admin Panel</button>
              )}
            </div>
            <br />
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("session_id");
                navigate("/");
                alert("You will be logged out!");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
