import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faHeadphones,
  faLeftLong,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faCircleLeft } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './McLarensSystem';

function McLarensSystem() {
  return (
    <div className="container-fluid gac-system-container">
      <div className=" flex-column align-items-center justify-content-between py-2">
      <div className="back-icon-container d-none d-lg-block animate-from-left">
          <FontAwesomeIcon
            icon={faCircleLeft}
            className="back-icon"
            onClick={() => window.history.back()}  // Navigate to the previous page
          />
        </div>

        {/* Header Section */}
        <div className="text-center mb-1 mt-3 header-section text-dark ms-0 ms-lg-3 ">
        <h1 className="mb-2 text-center animate-from-top">Welcome to McLarens Group</h1>
        <p className="lead text-dark animate-from-top">Providing Services for Over 70 Years</p>
        <button
          type="button"
          className="custom-btn animate-from-top"
          onClick={() => window.open('https://www.mclarens.lk/', '_blank')}
        >
          Group Website
        </button>
      </div>

        {/* Grid layout for cards */}
        <div className="row g-2 justify-content-center mt-2 cards-container mb-4">
          <div className="col-lg-2 col-md-6 col-sm-12 mt-5 mt-lg-0 pt-sm-5 pt-lg-0 animate-from-bottom">
            <div
              className="card text-center shadow-sm"
              onClick={() => window.open('https://helpdesk.mclarens.lk/', '_blank')}
            >
              <div className="card-body">
              <div style={{ display: 'inline-flex', alignItems: 'center', position: 'relative', marginTop:'25px' }}>
                           <FontAwesomeIcon icon={faUser} className="icon-style" />
                            <FontAwesomeIcon 
                                   icon={faHeadphones} 
                                   className="icon-style" 
                                   style={{ 
                                   position: 'absolute', 
                                   top: '-16px',  // Adjust to fit headphones on the user's head
                                   left: '2px',  // Slight left adjustment to center on head
                                   fontSize: '2.4em'  // Slightly bigger headphones to fit around head
                          }} 
                             />
               </div>

                <h5 className="card-title mt-1">IT Help Desk</h5>
              </div>
            </div>
          </div>
        
        </div>

        {/* Social Media Icons Section */}
        <div className="gac-social-media-icons d-flex flex-column align-items-center mt-3 d-none d-lg-block">
          <h5 className="mb-3 text-light"></h5>
          <div className="social-icons d-flex flex-column align-items-center animate-from-right">
          <a href="https://www.facebook.com/McLarensGroup" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="gac-social-iconf mb-3" style={{ color: '#4267B2' }} />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FMcLarensGroup" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="gac-social-iconf mb-3" style={{ color: '#1DA1F2' }} />
          </a>
          <a href="https://www.linkedin.com/company/mclarens-holdings-ltd/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="gac-social-iconf mb-3" style={{ color: '#0077B5' }} /> 
          </a>
          <a href="https://www.youtube.com/c/MclarensgroupLk1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="gac-social-iconf mb-3" style={{ color: '#FF0000' }} /> 
          </a>
          <a href="https://www.instagram.com/mclarens_group/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="gac-social-iconf mb-3" style={{ color: '#C13584' }} />
          </a>
          </div>
        </div>

        {/* Copyright Section */}
        <footer className="text-center mt-auto mb-3">
          <p className="copyright-text text-dark animate-from-bottom overflow-hidden">Copyright © 2024 McLarens Group of Companies.</p>
        </footer>
      </div>
    </div>
  );
}

export default McLarensSystem;
