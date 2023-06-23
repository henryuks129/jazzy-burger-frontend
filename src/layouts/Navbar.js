import React from 'react';
import '../styles/Navbar.css';
import jazzyLogo from '../assests/jazzyLogo.svg';
import location from '../assests/location.svg';
import products from '../assests/products.svg';
import personIcon from '../assests/personIcon.svg';
import dropdown from '../assests/dropdown.svg';
import cartIcon from '../assests/cartIcon.svg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className='container nav-body sticky-top'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-inline-flex gap-3 align-items-center'>
                    <div className='nav-jazzylogo gap-2' onClick={()=>{navigate('/')}}></div>
                    <div className='location-nav d-flex gap-2 d-none d-lg-block'>
                    <img className='nav-location mt-1' src={location} alt="" />
                    <p className='nav-logo-text mt-3'>Lagos, Nigeria</p>
                    </div>
                </div>
                <div className='d-flex gap-4'>
                  <div className='d-flex gap-2 nav-products-section'>
                  <img className='nav-products' src={products} alt="" />
                  <p className='nav-allproducts-text pt-1 d-none d-lg-block'>All Products</p>
                  </div>
                  <div className='d-inline-flex gap-2 nav-person-section'>
                    <img className='nav-person' src={personIcon} alt="" />
                    {/* <div className='d-none d-md-block'> */}
                    <div className='d-inline-flex gap-2 guest-div d-none d-lg-block'>
                    <p className='nav-person-text pt-1'>Hi, Guests</p>
                    <img className='nav-dropdown pt-1' src={dropdown} alt="" />
                    </div>
                    {/* </div> */}
                  </div>
                  <div>
                    <img className='nav-carticon' src={cartIcon} alt="" />
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar