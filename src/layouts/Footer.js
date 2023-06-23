import React from 'react';
import '../styles/Footer.css';
import appleframe from '../assests/appleframe.svg';
import googleframe from '../assests/googleframe.svg';
import paymentsecure from '../assests/paymentsecured.svg';
import footersupport from '../assests/footersupport.svg';
import facebook from '../assests/facebookicon.svg';
import twitter from '../assests/twittericon.svg';
import instagramicon from '../assests/instagramicon.svg';
import youtubeicon from '../assests/youtubeicon.svg';

const Footer = () => {
  return (
    <div className='mt-2'>
      <div className='footer-background'>
      <div className='container'>
        <div className='d-flex justify-content-between pt-5 footer-body'>
          <div className='d-inline-flex gap-5 payment-body '>
          <div className='d-inline-flex support-main'>
            <img src={footersupport} alt="" className='footer-support'/>
            <div className='text-white'>
              <h4>24/7</h4>
              <p>Support</p>
            </div>
          </div>
            <div className='d-inline-flex payment-main'>
              <img src={paymentsecure} alt="" className='payment-secure'/>
              <div className='text-white'>
                <h4>100%</h4>
                <p>Payment Secured</p>
              </div>
            </div>
          </div>
            <div className='d-inline-flex gap-5 frames-body'>
            <div className=''>
              <img src={appleframe} alt="" className='apple-frame'/>
            </div>
            <div>
              <img src={googleframe} alt="" className='google-frame'/>
            </div>
            </div>
          </div>
          <div className='text-white'>
            <h4>Need Help</h4>
            <p className=''>
              <span className='text-decoration-underline'>+234 907 466 6655</span>
              <span className=''> or</span></p>
              <p className='text-decoration-underline'>help@jazzyburger.com</p>
          </div>
          <div className='text-white'>
          <h4>FOLLOW US</h4>
          </div>
          <div className='d-inline-flex'>
            <a href="https://www.facebook.com/112170038391085/posts/1588022294986034/?substory_index=1588022294986034&app=fbl" ><img src={facebook} alt="" /></a>
            <a href="https://twitter.com/jazzysburger?t=Y1T3JvkqJbGDoK_sQaGyqw&s=08" ><img src={twitter} alt="" /></a>
            <a href="https://www.instagram.com/jazzysburger/?igshid=YmMyMTA2M2Y%3D"><img src={instagramicon} alt="" /></a>
            <a href="https://www.youtube.com/watch?v=gNCHBUi3Rbg" className='youtube-icon'><img src={youtubeicon} alt="" className=''/></a>
          </div>
      </div>
    </div>
      <div className='text-center'>
      <p>&copy; JJB Concepts . Developed by our Digital LLC</p>
      </div>
    </div>
  )
}

export default Footer