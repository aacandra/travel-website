import React from 'react'
import './Footer.css'
 
const Footer = () => {
  return (
    <footer style={{ paddingTop: '50px' }}>
    <div className="bg text-center ">
    {/* Grid container */}
    <div className="container-fluid p-4">
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Facebook */}        
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-instagram" /></a>
        {/* Linkedin */}
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-linkedin" /></a>
        {/* Github */}
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-github" /></a>
      </section>
      {/* Section: Social media */}
      {/* Section: Form */}
      <section className>
        <form action>
          {/*Grid row*/}
          <div className="text-secondary row d-flex justify-content-center">
            {/*Grid column*/}
            <div className="col-auto">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-md-5 col-12">
              {/* Email input */}
              <div className="form-outline form-white mb-4">
                <input type="email" id="form5Example21" className="form-control" />
                <label className="form-label" htmlFor="form5Example21">Email address</label>
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-auto">
              {/* Submit button */}
              <button type="submit" className="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </form>
      </section>
      {/* Section: Form */}
      {/* Section: Text */}
      <section className="text-secondary mb-4">
        <p>
          Next Travel adalah website yang menyajikan informasi seputar destinasi wisata di Indonesia
        </p>
      </section>
      {/* Section: Text */}
      {/* Section: Links */}
      <section className>
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text">Links</h5>
           
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text">Links</h5>
            
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text">Links</h5>
             
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
         
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </section>
      {/* Section: Links */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2023 Copyright:
      <a className="text-white" href="https://dibimbingid.com/">Next Travel</a>
    </div>
    {/* Copyright */}
  </div>
  </footer>
    
    

  )
}

export default Footer