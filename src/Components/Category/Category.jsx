import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebars";
import "./category.css";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [editCategoriesName, seteditCategoriesName] = useState("");
  const [editcategoriesUrl, setEditcategoriesUrl] = useState("");
  const [newCategories, setNewCategories] = useState("");
  const [newCategoriesUrl, setNewCategoriesUrl] = useState("");

  //  LIST CATEGORIES
  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        const item = response.data.data;
        setCategories(item);
        seteditCategoriesName(response.data.data.name);
        setEditcategoriesUrl(response.data.data.imageUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // EDIT/UPDATE CATEGORIES
  const handleUpdate = (categoriesId) => {
    axios
      .post(
        `
    https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/category/${categoriesId}`,
        {
          name: editCategoriesName,
          imageUrl: editcategoriesUrl,
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

  // DELETE CATEGORIES
  const handleDelete = (categoriesId) => {
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-category/${categoriesId}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Delete Banner Success");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // UPLOAD NEW CATEGORIES
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-category`,
        {
          name: newCategories,
          imageUrl: newCategoriesUrl,
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
          <h3> Category Section</h3>
        </div>
        <div className="page-content">
          <section id="content-types">
            <div className="row">
              <h4> Upload New Category</h4>
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <form
                      onSubmit={handleSubmit}
                      className="form form-horizontal"
                    >
                      <div className="form-body">
                        <div className="row">
                          <div className="col-md-4">
                            <label>Categories Name</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newCategories}
                              onChange={(event) =>
                                setNewCategories(event.target.value)
                              }
                              type="text"
                              id="categories-name"
                              className="form-control"
                              name="catname"
                              placeholder="Categories Name"
                            />
                          </div>
                          <div className="col-md-4">
                            <label>Banner Link</label>
                          </div>
                          <div className="col-md-8 form-group">
                            <input
                              value={newCategoriesUrl}
                              onChange={(event) =>
                                setNewCategoriesUrl(event.target.value)
                              }
                              type="text"
                              id="categories-link"
                              className="form-control"
                              name="categorieslink"
                              placeholder="https://"
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
              <h4> Edit/Delete Categories</h4>
              <div className="col-xl-12 col-md-6 col-sm-12">
              <div className="edit-categories">  
                {categories.map((item, index) => (
                  <div className="card-category" key={item.id}>
                    <div className="card-content">
                      <div className="card-body">
                        <h6>File Name : {item.name}</h6>

                        <div className="col-md-4">
                          <label>Name</label>
                        </div>

                        <div className="col-md-8 form-group">
                          <input
                            value={editCategoriesName}
                            onChange={(event) =>
                              seteditCategoriesName(event.target.value)
                            }
                            type="text"
                            id="first-name"
                            className="form-control"
                            name="fname"
                            placeholder={item.name}
                          />
                        </div>

                        <div className="col-md-4">
                          <label>Banner Link</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input
                            value={editcategoriesUrl}
                            onChange={(event) =>
                              setEditcategoriesUrl(event.target.value)
                            }
                            type="text"
                            id="banner-link"
                            className="form-control"
                            name="blink"
                            placeholder={item.imageUrl}
                          />
                        </div>
                      </div>
                      <img
                        className="img-fluid w-100"
                        src={item.imageUrl}
                        alt="Card image cap"
                      />
                      <p>Banners ID : {item.id}</p>
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

export default Category;
