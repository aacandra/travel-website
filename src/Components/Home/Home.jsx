import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css';

const ImageCarousel = () => {
  const [carouselItems, setCarouselItems] = useState("");

  useEffect(() => {
    axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/banner/dbae247b-e322-434c-bf89-3533f2d70fa2', {
      headers: {
        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'
      }
    })
      .then(response => {      
        const items = response.data.data;
        setCarouselItems(items);
        console.log(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="home">
      <div className="jumbotron">
      <img className="background-image" src={carouselItems.imageUrl} alt="Background Image" />
        <div className="content">
          <h5>Welcome to Next Travel</h5>
          <h1>Visit <span className="changecontent" /></h1>
          <p>Selamat datang di dunia petualangan yang menakjubkan! <br/>
            Jika Anda mencari pengalaman wisata yang paling populer dan mengesankan, Temukan di sini!</p>
          <a href="#book">Explore</a>
        </div>
      </div>

      
    </section>
  );
}

export default ImageCarousel;
