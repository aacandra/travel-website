import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import './Services.css'

const Services = () => {
  return (
    <div className="services" id="services">
        <div className="services-item">
        <div className="services-title">
          <h2>Services</h2></div>
          <div className="row" style={{marginTop: '60px'}}>
            <div className="col-md-4 py-3 py-md-0">
              <div className="item ">
                <div className="item-body">             
                <i className="bi bi-building-fill" />
                <h3>Affordable Hotel</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="item">                
                <div className="item-body">
                <i className="bi bi-basket3-fill" />
                  <h3>Food &amp; Drinks</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="item">                
                <div className="item-body">
                <i className="bi bi-shield-fill-check" />
                  <h3>Safty Guide</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" style={{marginTop: '30px'}}>
            <div className="col-md-4 py-3 py-md-0">
              <div className="item">                
                <div className="item-body">
                <i className="bi bi-globe-asia-australia" />
                  <h3>Around The World</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="item" >               
                <div className="item-body">
                <i className="bi bi-airplane-fill" />
                  <h3>Fastest Travel</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 py-3 py-md-0">
              <div className="item">                
                <div className="item-body">
                <i className="bi bi-tree-fill" />
                  <h3>Adventures</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Services