import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebars";
import "./activity.css";

const Activity = () => {
  const [activity, setActivity] = useState([]);
  const [editActivityName, setEditActivityName] = useState("");
  const [editActivityDesc, setEditActivityDesc] = useState("");
  const [editActivityUrl1, setEditActivityUrl1] = useState("");
  const [editActivityUrl2, setEditActivityUrl2] = useState("");
  const [editActivityPrice, setEditActivityPrice] = useState(0);
  const [editActivityPriceDisc, setEditActivityPriceDisc] = useState(0);
  const [editActivityRating, setEditActivityRating] = useState(0);
  const [editActivityReviews, setEditActivityReviews] = useState(0);
  const [editActivityFacilities, setEditActivityFacilities] = useState("");
  const [editActivityAddress, setEditActivityAddress] = useState("");
  const [editActivityProvince, setEditActivityProvince] = useState("");
  const [editActivityCity, setEditActivityCity] = useState("");
  const [editActivityMaps, setEditActivityMaps] = useState("");
  const [editActivityCategoryId, setEditActivityCategoryId] = useState("");

  const [newActivityCategoryId, setNewctivityCategoryId] = useState("");
  const [newActivityTitle, setNewActivityTitle] = useState("");
  const [newActivityDescription, setNewActivityDescription] = useState("");
  const [newActivityImageUrls1, setNewActivityImageUrls1] = useState("");
  const [newActivityImageUrls2, setNewActivityImageUrls2] = useState("");
  const [newActivityPrice, setNewActivityPrice] = useState(0);
  const [newActivityPriceDisc, setNewActivityPriceDisc] = useState(0);
  const [newActivityRating, setNewActivityRating] = useState(0);
  const [newActivityReview, setNewActivityReview] = useState(0);
  const [newActivityFacilities, setNewActivityFacilities] = useState("");
  const [newActivityAddress, setNewActivityAddress] = useState("");
  const [newActivityCity, setNewActivityCity] = useState("");
  const [newActivityProvince, setNewActivityProvince] = useState("");
  const [newActivityMap, setNewActivityMap] = useState("");

  //  LIST ACTIVITIES
  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        const item = response.data.data;

        setActivity(item);
        setEditActivityName(response.data.data.title);
        setEditActivityDesc(response.data.data.description);
        setEditActivityUrl1(response.data.data.imageUrls[0]);
        setEditActivityUrl2(response.data.data.imageUrls[1]);
        setEditActivityPrice(response.data.data.price);
        setEditActivityPriceDisc(response.data.data.price_discount);
        setEditActivityRating(response.data.data.rating);
        setEditActivityReviews(response.data.data.total_reviews);
        setEditActivityFacilities(response.data.data.facilities);
        setEditActivityAddress(response.data.data.address);
        setEditActivityProvince(response.data.data.province);
        setEditActivityCity(response.data.data.city);
        setEditActivityMaps(response.data.data.location_maps);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // EDIT/UPDATE ACTIVITIES
  const handleUpdate = (activityId) => {
    axios
      .post(
        `
    https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-activity/${activityId}
`,
        {
          title: editActivityName,
          description: editActivityDesc,
          imageUrls: [editActivityUrl1, editActivityUrl2],
          price: editActivityPrice,
          price_discount: editActivityPriceDisc,
          rating: editActivityRating,
          total_reviews: editActivityReviews,
          facilities: editActivityFacilities,
          address: editActivityAddress,
          province: editActivityProvince,
          city: editActivityCity,
          location_maps: editActivityMaps,
          categoryId: editActivityCategoryId,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Update Data Succes!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("Error Update Data. Try Again!.");
      });
  };

  // DELETE ACTIVITIES
  const handleDelete = (activityId) => {
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-activity/${activityId}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Delete Activity Success");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // UPLOAD NEW ACTIVITIES
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-activity`,
        {
          categoryId: newActivityCategoryId,
          title: newActivityTitle,
          description: newActivityDescription,
          imageUrls: [newActivityImageUrls1, newActivityImageUrls2],
          price: newActivityPrice,
          price_discount: newActivityPriceDisc,
          rating: newActivityRating,
          total_reviews: newActivityReview,
          facilities: newActivityFacilities,
          address: newActivityAddress,
          province: newActivityProvince,
          city: newActivityCity,
          location_maps: newActivityMap,
        },
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        window.location.reload();

        alert("Upload Success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="app">
      <Sidebar />
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <div className="page-heading">
          <h3> Activity Section</h3>
        </div>
        <div className="page-content">
          <section id="content-types">
            <div className="row">
              <h4> Upload New Activity</h4>
              <div className="col-xl-8 col-md-6 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form
                      onSubmit={handleSubmit}
                      className="form form-horizontal"
                    >
                      <div className="form-body">
                        <div className="row">
                          <div className="col-md-4">
                            <label>Activity CategoryID</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newActivityCategoryId}
                              onChange={(event) =>
                                setNewctivityCategoryId(event.target.value)
                              }
                              type="text"
                              id="activity-title"
                              className="form-control"
                              name="acttitle"
                              placeholder="Category ID"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>Activity Title</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newActivityTitle}
                              onChange={(event) =>
                                setNewActivityTitle(event.target.value)
                              }
                              type="text"
                              id="activity-title"
                              className="form-control"
                              name="acttitle"
                              placeholder="Activty Title"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>Activity Description</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newActivityDescription}
                              onChange={(event) =>
                                setNewActivityDescription(event.target.value)
                              }
                              type="text"
                              id="activity-description"
                              className="form-control"
                              name="actdescription"
                              placeholder="Activty Description"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>Banner Link</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newActivityImageUrls1}
                              onChange={(event) =>
                                setNewActivityImageUrls1(event.target.value)
                              }
                              type="text"
                              id="activity-imgurl-link"
                              className="form-control"
                              name="activityimglink []"
                              placeholder="https://"
                            />
                            <br />
                            <input
                              value={newActivityImageUrls2}
                              onChange={(event) =>
                                setNewActivityImageUrls2(event.target.value)
                              }
                              type="text"
                              id="activity-imgurl-link"
                              className="form-control"
                              name="activityimglink []"
                              placeholder="https://"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>Activity Price</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newActivityPrice}
                              onChange={(event) =>
                                setNewActivityPrice(
                                  parseInt(event.target.value)
                                )
                              }
                              type="number"
                              id="activity-price"
                              className="form-control"
                              name="actprice"
                              placeholder="Activty Price"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>Activity Price Discount</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newActivityPriceDisc}
                              onChange={(event) =>
                                setNewActivityPriceDisc(event.target.value)
                              }
                              type="number"
                              id="activity-price-discount"
                              className="form-control"
                              name="actpricedisc"
                              placeholder="Activty Price Disc"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>Activity Rating</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newActivityRating}
                              onChange={(event) =>
                                setNewActivityRating(event.target.value)
                              }
                              type="number"
                              id="activity-rating"
                              className="form-control"
                              name="actrating"
                              placeholder="Activty Rating"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>Activity Total Reviews</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newActivityReview}
                              onChange={(event) =>
                                setNewActivityReview(event.target.value)
                              }
                              type="number"
                              id="activity-review"
                              className="form-control"
                              name="actreview"
                              placeholder="Activty Review"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>Activity Facilites</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newActivityFacilities}
                              onChange={(event) =>
                                setNewActivityFacilities(event.target.value)
                              }
                              type="text"
                              id="activity-facilities"
                              className="form-control"
                              name="actfacilities"
                              placeholder="Activty Facilities"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>Activity Address</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newActivityAddress}
                              onChange={(event) =>
                                setNewActivityAddress(event.target.value)
                              }
                              type="text"
                              id="activity-address"
                              className="form-control"
                              name="actaddress"
                              placeholder="Activty Address"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>Activity Province</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newActivityProvince}
                              onChange={(event) =>
                                setNewActivityProvince(event.target.value)
                              }
                              type="text"
                              id="activity-province"
                              className="form-control"
                              name="actaddress"
                              placeholder="Activty Province"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>Activity City</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newActivityCity}
                              onChange={(event) =>
                                setNewActivityCity(event.target.value)
                              }
                              type="text"
                              id="activity-city"
                              className="form-control"
                              name="actcity"
                              placeholder="Activty City"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>Activity Location Map</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newActivityMap}
                              onChange={(event) =>
                                setNewActivityMap(event.target.value)
                              }
                              type="text"
                              id="activity-map"
                              className="form-control"
                              name="actmap"
                              placeholder="Activity Map"
                            />
                          </div>

                          <div className="col-12 col-md-8 offset-md-4 form-group"></div>
                          <div className="col-sm-12 d-flex justify-content-end">
                            <button
                              type="submit"
                              className="btn btn-primary me-1 mb-1"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="row">
              <h4> Edit/Delete Activity</h4>
              <div className="col-xl-12 col-md-6 col-sm-12">
              <div className="edit-activities">  
                {activity.map((item, index) => (
                  <div className="card-activity" key={item.id}>
                    <div className="card-content">
                      <div className="card-body">
                        <h6>File Name : {item.title}</h6>

                        <div className="col-md-4">
                          <label>CategoryID</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input
                            value={editActivityCategoryId}
                            onChange={(event) =>
                              setEditActivityCategoryId(event.target.value)
                            }
                            type="text"
                            id="activity-category-id"
                            className="form-control"
                            name="actcategoryid"
                            placeholder={item.categoryId}
                          />
                        </div>
                        <div className="col-md-4">
                          <label>Tittle</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input
                            value={editActivityName}
                            onChange={(event) =>
                              setEditActivityName(event.target.value)
                            }
                            type="text"
                            id="activity-title"
                            className="form-control"
                            name="acttitle"
                            placeholder={item.title}
                          />
                        </div>

                        <div className="col-md-4">
                          
                        </div>
                        <div className="col-md-8 form-group">
                        <label>Image URL1</label>
                          <input
                            value={editActivityUrl1}
                            onChange={(event) =>
                              setEditActivityUrl1(event.target.value)
                            }
                            type="text"
                            id="activity-imgurl-link"
                            className="form-control"
                            name="activityimglink[]"
                            placeholder={item.imageUrls[0]}
                          />
                          <img
                            className="img-fluid w-100"
                            src={item.imageUrls[0]}
                            alt="Card image cap"
                          />
                           <br/>
                           <br/>
                           <label>Image URL2</label>
                           <br/>     
                          <input
                            value={editActivityUrl2}
                            onChange={(event) =>
                              setEditActivityUrl2(event.target.value)
                            }
                            type="text"
                            id="activity-imgurl-link"
                            className="form-control"
                            name="activityimglink[]"
                            placeholder={item.imageUrls[1]}
                          />
                          <img
                            className="img-fluid w-100"
                            src={item.imageUrls[1]}
                            alt="Card image cap"
                          />
                        </div>
                        <div className="col-md-4">
                          <label>Price</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input
                            value={editActivityPrice}
                            onChange={(event) =>
                              setEditActivityPrice(parseInt(event.target.value))
                            }
                            type="number"
                            id="activity-price"
                            className="form-control"
                            name="actprice"
                            placeholder={item.price}
                          />
                        </div>
                        <div className="col-md-4">
                          <label>Price Disc</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input
                            value={editActivityPriceDisc}
                            onChange={(event) =>
                              setEditActivityPriceDisc(event.target.value)
                            }
                            type="number"
                            id="activity-price-discount"
                            className="form-control"
                            name="actpricedisc"
                            placeholder={item.price_discount}
                          />
                        </div>
                        <div className="col-md-4">
                          <label>Rating</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input
                            value={editActivityRating}
                            onChange={(event) =>
                              setEditActivityRating(event.target.value)
                            }
                            type="number"
                            id="activity-rating"
                            className="form-control"
                            name="actrating"
                            placeholder={item.rating}
                          />
                        </div>
                        <div className="col-md-4">
                          <label>Total Reviews</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input
                            value={editActivityReviews}
                            onChange={(event) =>
                              setEditActivityReviews(event.target.value)
                            }
                            type="number"
                            id="activity-review"
                            className="form-control"
                            name="actreview"
                            placeholder={item.total_reviews}
                          />
                        </div>
                        <div className="col-md-4">
                          <label>Facilities</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input
                            value={editActivityFacilities}
                            onChange={(event) =>
                              setEditActivityFacilities(event.target.value)
                            }
                            type="text"
                            id="activity-facilities"
                            className="form-control"
                            name="actfacilities"
                            placeholder={item.facilities}
                          />
                        </div>
                        <div className="col-md-4">
                          <label>Address</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input
                            value={editActivityAddress}
                            onChange={(event) =>
                              setEditActivityAddress(event.target.value)
                            }
                            type="text"
                            id="activity-address"
                            className="form-control"
                            name="actaddress"
                            placeholder={item.address}
                          />
                        </div>
                        <div className="col-md-4">
                          <label>Province</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input
                            value={editActivityProvince}
                            onChange={(event) =>
                              setEditActivityProvince(event.target.value)
                            }
                            type="text"
                            id="activity-province"
                            className="form-control"
                            name="Activty Province"
                            placeholder={item.province}
                          />
                        </div>
                        <div className="col-md-4">
                          <label>City</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input
                            value={editActivityCity}
                            onChange={(event) =>
                              setEditActivityCity(event.target.value)
                            }
                            type="text"
                            id="activity-city"
                            className="form-control"
                            name="actcity"
                            placeholder={item.city}
                          />
                        </div>
                        <div className="col-md-4">
                          <label>Location Map</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input
                            value={editActivityMaps}
                            onChange={(event) =>
                              setEditActivityMaps(event.target.value)
                            }
                            type="text"
                            id="activity-map"
                            className="form-control"
                            name="actmap"
                            placeholder={item.city}
                          />
                        </div>
                      </div>

                      <div className="card-footer d-flex justify-content-between">
                        <span>
                          <button
                            onClick={() => handleUpdate(item.id)}
                            className="btn btn-light-primary"
                          >
                            Update
                          </button>
                        </span>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="btn btn-light-primary"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Activity;
