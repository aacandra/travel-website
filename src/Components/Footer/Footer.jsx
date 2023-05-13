import React from 'react';
import "./Footer.css";
 
const Footer = () => {
  return (
    <footer style={{ paddingTop: '50px' }}>
    <div className="bg text-center ">
    
    <div className="container-fluid p-4">
      
      <section className="mb-4">
             
      
        {/* <a className="btn  btn-floating m-1" href="https://instagram.com" role="button"><i className="bi bi-instagram" /></a>
        
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-linkedin" /></a>
       
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="bi bi-github" /></a> */}
      </section>
    
   
      <section className>
        <form action>
      
          <div className="text-secondary row d-flex justify-content-center">
         
            <div className="col-auto">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
           
            <div className="col-md-5 col-12">
              
              <div className="form-outline form-white mb-4">
                <input type="email" id="form5Example21" className="form-control" />
                <label className="form-label" htmlFor="form5Example21">Email address</label>
              </div>
            </div>
           
            <div className="col-auto">
         
              <button type="submit" className="btn btn-outline-light mb-4">
                Subscribe
              </button>
            </div>
    
          </div>
      
        </form>
      </section>
  
      <section className="text-secondary mb-4">
        <p>
          Next Travel adalah website yang menyajikan informasi seputar destinasi wisata di Indonesia
        </p>
      </section>
      
      <section className>
   
        <div className="row">
        
          {/* <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text">Links</h5>
           
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text">Links</h5>
            
          </div>
      
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text">Links</h5>
             
          </div> */}
        
       
        </div>
       
      </section>
  
    </div>
     
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2023 Copyright:
      <a className="text-white" href="https://dibimbingid.com/">Next Travel</a>
    </div>
    
  </div>
  </footer>
    
    

  )
}

export default Footer