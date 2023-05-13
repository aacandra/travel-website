import React, { useState, useEffect } from 'react';
// import './popular.css';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories', {
        headers: {
          apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c'
        }
      })
      .then(response => {
        console.log(response.data);
        const items = response.data.data.slice(0,4);
        setCategories(items);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="popular" style={{padding: '60px'}} >
      <div className="popular-title">
        <h2>Categories</h2>
      </div>
      <h5 className="popular-text text-secondary text-center">
        Jika Anda mencari pengalaman wisata yang paling populer dan mengesankan, Temukan di sini!
      </h5>

      <div className="popular-box">
        <div className="row">
          {categories.map((item) => (
            <div className="col-sm-3" key={item}>
              <div className="popular-cards">
                <img
                  src={item.imageUrl}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-box d-flex px-2 mt-2 justify-content-between">
                  <p>{item.name}</p>
                  <p>
                    <i className="bi bi-star-fill text-warning pe-1"></i>
                   
                  </p>
                </div>

                <div className="card-body py-0">
                 

                  <p className="text-secondary">
                    More <i className="fa-solid fa-circle-arrow-right"></i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
