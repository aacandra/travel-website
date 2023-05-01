import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './home.css';

const ImageCarousel = () => {
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos', {
      headers: {
        'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'
      }
    }).then(response => {      
      const items = response.data.data.slice(0, 4);
      setCarouselItems(items);
      console.log(response.data)
    }).catch(error => {
      console.log(error);
    });
  }, []);



  return (
    <section className="home">
      <Carousel>
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.imageUrl}
              alt={item.title}
              
            />
            <Carousel.Caption className='carousel-caption'>
              <h1>{item.title}</h1>
              <p style={{ padding: "100px" }}>{item.description} </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default ImageCarousel;
