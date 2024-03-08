import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../Assets/upload_area.svg";

const AddProduct = () => {

  // const[image,setImage] = useState(false);
  const[images,setImages] = useState([]);
  const [productDetails,setProductDetails] = useState({
      name:"",
      images:[],
      category:"women",
      new_price:"",
      old_price:""
  });

  const AddProduct = async () => {
    let added = false
    // console.log(productDetails)
    let dataObj;
    let product = productDetails;
    let formData = new FormData();
    if(images.length!==0){
      for(let i = 0; i < images.length; i++)
        formData.append('product[]', images[i]);
    }
    
    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept:'application/json',
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => 
          dataObj=data)
      
    console.log(dataObj);

    for(let i = 0; i<dataObj.length;i++)
    {
      if (dataObj[i].success) {
        product.images[i] = dataObj[i].image_url;
      }
    }
      console.log(product);
        await fetch('http://localhost:4000/api/Product/add', {
        method: 'POST',
        headers: {
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify(product),
        })
        .then((resp) => 
          resp.json()
        )
        .then((data) => {
          console.log(data)
          if(data.success)
            {
              alert("Product Added") 
              added=true
            }
            else alert("Failed")
        });
    if (added) window.location.reload()
  }

  const changeHandler = (e) => {
    console.log(e);
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
    }

  const imageHandler = (e) => {
    if (Array.from(e.target.files).length > 5) {
      e.preventDefault();
      alert(`Cannot upload files more than 5`);
      return;
    }
    setImages([]); 
    for(let i=0; i<e.target.files.length;i++){
      setImages(previmages => [...previmages,e.target.files[i]])
    }
    // console.log(e.target.files);
    // console.log(images);
    }
  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name="name" value={productDetails.name} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name="old_price" value={productDetails.old_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input type="text" name="new_price" value={productDetails.new_price} onChange={(e)=>{changeHandler(e)}} placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product category</p>
        <select value={productDetails.category} name="category" className="add-product-selector" onChange={changeHandler}>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select> 
      </div>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <label for="file-input">
          <img className="addproduct-thumbnail-img" src={!images[0]?upload_area:URL.createObjectURL(images[0])} alt="" />
          <img className="addproduct-thumbnail-img" src={!images[1]?upload_area:URL.createObjectURL(images[1])} alt="" />
          <img className="addproduct-thumbnail-img" src={!images[2]?upload_area:URL.createObjectURL(images[2])} alt="" />
          <img className="addproduct-thumbnail-img" src={!images[3]?upload_area:URL.createObjectURL(images[3])} alt="" />
          <img className="addproduct-thumbnail-img" src={!images[4]?upload_area:URL.createObjectURL(images[4])} alt="" /> 
        </label>
        <input onChange={(e)=>{imageHandler(e)}} type="file" name="images" id="file-input" hidden multiple />
      </div>
      <button className="addproduct-btn" onClick={()=>{AddProduct()}}>ADD</button>
    </div>
  );
};

export default AddProduct;
