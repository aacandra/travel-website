import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from '../Sidebar/Sidebars'


const Promo = () => {
 
  const [promo,setPromo] = useState([])  
  const [editPromoName, setEditPromoName] = useState("");
  const [editPromoUrl, setEditPromoUrl] = useState("");
  const [editPromoDescription, setEditPromoDescription] = useState("");
  const [editPromoTerm, setEditPromoTerm] = useState("");
  const [editPromoCode, setEditPromoCode] = useState("");
  const [editPromoDisc, setEditPromoDisc] = useState ("");
  const [editPromoClaim, setEditPromoClaim] = useState ("");
  const [errorMessage, setErrorMessage] = useState("");

  const [newTitlePromo, setNewTitlePromo] = useState("")
  const [newDescriptionPromo, setNewDescriptionPromo] = useState("")
  const [newTermPromo, setNewTermPromo] = useState("")
  const [newImagePromo,setNewImagePromo] = useState ("")
  const [newCodePromo,setNewCodePromo] = useState ("")
  const [newDiscountPromo,setNewDiscountPromo] = useState (0)
  const [newClaimPromo,setNewClainPromo] = useState (0)

   
  //  LIST PROMO
  useEffect(() => {
    axios
      .get(
        "https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos",
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        const item = response.data.data;
        setPromo(item)   
        setEditPromoName(response.data.data.name);
        setEditPromoUrl(response.data.data.imageUrl);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // EDIT/UPDATE PROMO
  const handleUpdate = (promoId) => { 
       
  
    axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-promo/${promoId}`, {
      
      name: editPromoName,
      imageUrl: editPromoUrl,


      
    }, {
      headers: {
        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },


    }).then((response) => {
      console.log(response.data);      
      alert('Update Data Succes!');
      window.location.reload();
      

    }).catch((error) => {
      console.log(error);
      alert('Error Update Data. Try Again!.');
    });
  }

  // DELETE PROMO
  const handleDelete = (promoId) => {
    axios
      .delete(
        `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-promo/${promoId}`,
        {
          headers: {
            apiKey: "24405e01-fbc1-45a5-9f5a-be13afcd757c",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Delete Promo Success")
        window.location.reload();
   
      })
      .catch((error) => {
        console.log(error.response.data);
 
      });
  };


  const handleSubmit = (event) => {
    event.preventDefault();  
    
    if (!newTitlePromo) {
      setErrorMessage("The 'title' field is required.");
    } else {
  
  axios
   .post(
     `https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-promo`,
       {
        title: newTitlePromo,
        imageUrl: newImagePromo,
        description : newDescriptionPromo,
        terms_condition : newTermPromo,
        promo_code : newCodePromo,
        promo_discount_price : newDiscountPromo,
        minimum_claim_price : newClaimPromo,
       },
     {
        headers: {
        apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
     }
   )
   .then((response) => {
    console.log(response.data);
    window.location.reload();

    alert("Upload Success")
   })
   .catch((error) => {
    console.log(error);
   });

   setNewTitlePromo("");
   setErrorMessage("");
  }
  };


 
  return (
    <div id="app">
    <Sidebar/> 
      <div id="main">
        <header className="mb-3">
          <a href="#" className="burger-btn d-block d-xl-none">
            <i className="bi bi-justify fs-3" />
          </a>
        </header>
        <div className="page-heading">
          <h3> Promo Section</h3>
        </div>
        <div className="page-content">
          <section id="content-types">
            <div className="row">
              <h4> Upload New Promo</h4>
              <div className="col-xl-8 col-md-6 col-sm-12">
                <div className="card">
                <div className="card-body">
                  <form  onSubmit={handleSubmit}  className="form form-horizontal">
                    <div className="form-body">
                      <div className="row">
                        <div className="col-md-4">
                          
                          <label>Promo Title</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input 
                            type="text"
                            id="promo-name"
                            className="form-control"
                            name="promoTitle"
                            placeholder= "Promo Title"
                            value={newTitlePromo} 
                            onChange={(event) => setNewTitlePromo(event.target.value)}
                            // value={formik.values.promoTitle}
                            // onChange={formik.handleChange} 
                          />   
                          {/* {errorMessage && (
                          <p style={{ color: "red", fontSize: "12px" }}>
                          {errorMessage}</p>)} */}
                                           
                        </div>

                        <div className="form-group mb-3">
                          <label>Description</label>
                          <textarea  
                          className="form-control" 
                          id="promo-description"
                          name="promoDescription" 
                          rows={3} 
                          value={newDescriptionPromo} 
                          onChange={(event) => setNewDescriptionPromo(event.target.value)}
                          // value={formik.values.promoDescription}
                          // onChange={formik.handleChange}  
                            />
                             

                        </div>

                        <div className="form-group mb-3">
                          <label>Term & Condition</label>
                          <textarea 
                          className="form-control" 
                          id="promo-term-condition" 
                          name="promoTermCondition" 
                          rows={3} 
                          value={newTermPromo} 
                          onChange={(event) => setNewTermPromo(event.target.value)}
                          // value={formik.values.promoTermCondition}
                          // onChange={formik.handleChange}  
                          />
                          
                        </div>

                        <div className="col-md-4">
                          <label>Promo Code</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input 
                            type="text"
                            id="promo-code"
                            className="form-control"
                            name="promoCode"
                            placeholder="Promo Code"
                            value={newCodePromo} 
                            onChange={(event) => setNewCodePromo(event.target.value)}
                            // value={formik.values.promoCode}
                            // onChange={formik.handleChange} 
                          />  
                                                 
                        </div>

                        <div className="col-md-4">
                          <label>Promo Discount Price</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input 
                            type="number"
                            id="discount-price"
                            className="form-control"
                            name="discPrice"
                            placeholder="Discount Price"
                            value={newDiscountPromo} 
                            onChange={(event) => setNewDiscountPromo(parseInt(event.target.value))}
                            // value={formik.values.discPrice}
                            // onChange={formik.handleChange}
                          />   
                                               
                        </div>

                        <div className="col-md-4">
                          <label>Minimum Claim Price</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input 
                            type="number"
                            id="discount-price"
                            className="form-control"
                            name="claimPrice"
                            placeholder="Minimum Claim Price"
                            value={newClaimPromo} 
                            onChange={(event) => setNewClainPromo(parseInt(event.target.value))}
                            // value={formik.values.claimPrice}
                            // onChange={formik.handleChange}
                          />     
                                         
                        </div>


                        <div className="col-md-4">
                          <label>Image URL</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input 
                            type="text"
                            id="banner-link"
                            className="form-control"
                            name="imageUrl"
                            placeholder="https://"
                            value={newImagePromo} 
                          onChange={(event) => setNewImagePromo(event.target.value)}
                            // value={formik.values.imageUrl}
                            // onChange={formik.handleChange}
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
            <br/>
            <br/>
            <div className="row">
              <h4> Edit/Delete Promo</h4>
              <div className="col-xl-8 col-md-6 col-sm-12">
                
                 
              {promo.map((item) => (
                <div className="card" key={item.id}>                  
                    <div className="card-content">
                      <div className="card-body">

                        <div className="col-md-4">
                          <label>Edit Promo Tittle</label>
                        </div>
                        
                        <div className="col-md-8 form-group">
                          <input value={editPromoName} onChange={(event) => setEditPromoName(event.target.value)}
                            type="text"
                            id="first-name"
                            className="form-control"
                            name="fname"
                            placeholder={item.title}
                          />                         
                        </div>

                        <div className="form-group mb-3">
                          <label>Description</label>
                          <textarea 
                          className="form-control" 
                          id="promo-description" 
                          rows={3} 
                          value={editPromoDescription} onChange={(event) => setEditPromoDescription(event.target.value)} 
                          placeholder={item.description}/>
                        </div>

                        <div className="form-group mb-3">
                          <label>Term & Condition</label>
                          <textarea 
                          className="form-control" 
                          id="promo-term-condition" 
                          rows={3} 
                          value={editPromoTerm} onChange={(event) => setEditPromoTerm(event.target.value)} 
                          placeholder={item.terms_condition} />
                        </div>

                        <div className="col-md-4">
                          <label>Promo Code</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input value={editPromoCode} onChange={(event) => setEditPromoCode(event.target.value)}
                            type="text"
                            id="promo-code"
                            className="form-control"
                            name="pcode"
                            placeholder={item.promo_code}
                          />                         
                        </div>

                        <div className="col-md-4">
                          <label>Promo Discount Price</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input value={editPromoDisc} onChange={(event) => setEditPromoDisc(event.target.value)}
                            type="number"
                            id="discount-price"
                            className="form-control"
                            name="discprice"
                            placeholder={item.promo_discount_price}
                          />                         
                        </div>

                        <div className="col-md-4">
                          <label>Minimum Claim Price</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input value={editPromoClaim} onChange={(event) => setEditPromoClaim(event.target.value)}
                            type="number"
                            id="discount-price"
                            className="form-control"
                            name="claimprice"
                            placeholder={item.minimum_claim_price}
                          />                         
                        </div>


                        <div className="col-md-4">
                          <label>Edit Promo Image</label>
                        </div>
                        <div className="col-md-8 form-group">
                          <input value={editPromoUrl} onChange={(event) => setEditPromoUrl(event.target.value)}
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
                      <p>PROMO ID : {item.id}</p>
                      <div className="card-footer d-flex justify-content-between">
                        <span>
                          <button onClick={() => handleUpdate(item.id)} className="btn btn-light-primary">
                            Update
                          </button>
                        </span>
                        <button  onClick={() => handleDelete(item.id)} className="btn btn-light-primary">
                          Delete
                        </button>
                      </div>
                    </div>
                  
                </div>
                ))}           
              </div>       
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Promo;
