import React, { useState,useEffect } from 'react';
import { Link,useNavigate, } from 'react-router-dom';
import '../styles/Home.css';
import jazzyimage from '../assests/jazzyimage.svg';
import nairasign from '../assests/nairasign.svg';
import axios from 'axios';
import cheese from '../assests/cheese.svg';
import onions from '../assests/onions.svg';
import lettuce from '../assests/lettuce.svg';
import buns from '../assests/buns.svg';
import egg from '../assests/egg.svg';
import addtocart from '../assests/addtocart.svg';
import backToTopIcon from '../assests/backtotopimage.svg';
import heartcircle from '../assests/heartcircle.svg';
import hearticon from '../assests/heartimage.svg';
import redhearticon from '../assests/redhearticon.svg';
import heroImg from '../assests/homebackground.svg'

const Home = () => {
  const [backToTopImage, setBackToTopImage] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 120){
        setBackToTopImage(true);
      } else{
        setBackToTopImage(false);
      }
    })
  })
  const [data, setData] = useState([]);
  let url = 'https://jazzy-backend.onrender.com/burgers/AllBurgers';
  const getFetchedData = async ()=>{
    let fetchedData = await axios.get(url);
    setData(fetchedData.data);
    console.log(fetchedData.data);
  };
  useEffect(()=>{
    getFetchedData();
  },[]);
  const toTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  };
  const [clickimage, setClickImage] = useState(false);
  let clickbutton = ()=>{
      setClickImage(!clickimage)
  }
  return (
    <div className='container mt-4'>
      <div className='home-background-image'>
        <img className='img-fluid w-100' src={heroImg} alt="" />
      </div>
      <div className='row mt-5'>
        <div className='col-lg-4 home-jazzy-image d-none d-md-block'>  
          <img src={jazzyimage} alt="" className='jazzy-image img-fluid'/>
        </div>
        <div className='col-lg-8 home-burger-container '>
          {data.map((datum)=>{
            const {_id,title,description,category,price,image} = datum;
            return(
                <div key={_id} id="id" className='home-fetched-data'>
                <Link to={`/singleBurger/${_id}`} className='text-decoration-none' >
                  <div className='home-fetched-image'>
                  <img id='image' src={image} alt={title} className='fetched-image w-100 img-fluid' />
                  </div>
                  <h6> {title} </h6>
                  <p>Total Price</p>
                  <div className='d-inline-flex gap-2'>
                    <img src={nairasign} alt="" />
                    <h5> {price} </h5>
                  </div>
                  <div className='d-inline-flex gap'>
                    <img src={cheese} alt="" className='img-fluid food-item-image'/>
                    <img src={onions} alt="" className='img-fluid food-item-image'/>
                    <img src={lettuce} alt="" className='img-fluid food-item-image'/>
                    <img src={buns} alt="" className='img-fluid food-item-image'/>
                    <img src={egg} alt="" className='img-fluid food-item-image'/>
                  </div>
                </Link>
                <div className='heart-body'>
                  <img onClick={clickbutton} src={clickimage ? redhearticon : hearticon} alt="" className='heart-icon'/>
                  <img src={heartcircle} alt="" className='heart-circle'/>
                  {/* <img src={redhearticon} alt="" className='red-heart-icon'/> */}
                </div>
                <div className='home-button'>
                <button className='btn btn-danger add-button'>
                  <img src={addtocart} alt="" />
                  Add to Cart
                </button>
                </div>
              </div>
            )
          })}
        </div>
        {backToTopImage && (
          <img src={backToTopIcon} alt="" className='to-top-image' onClick={toTop}/>
        )}
      </div>
    </div>
  )
}

export default Home