import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import './home.css';

const ImageCarousel = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banners', {
      headers: {
        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'
      }
    })
      .then(response => {      
        const items = response.data.data.slice(0, 4);
        setCarouselItems(items);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="home">
      <div className="jumbotron">
        <div className="content">
          <h5>Welcome to Next Travel</h5>
          <h1>Visit <span className="changecontent" /></h1>
          <p>Selamat datang di dunia petualangan yang menakjubkan! <br/>
            Jika Anda mencari pengalaman wisata yang paling populer dan mengesankan, Temukan di sini!</p>
          <a href="#book">Book Place</a>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h4>Slides only</h4>
          <p>A carousel without slide control</p>
        </div>
        <div className="card-body">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {carouselItems.map((item, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={item.id}>
                  <img src={item.imageUrl} className="d-block w-100" alt={item.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageCarousel;
