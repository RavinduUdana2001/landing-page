import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChalkboardUser,
  faLaptopFile,
  faBookOpenReader,
  faFileSignature,
  faPeopleGroup,
  faBook,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import back3 from '../../assets/back-3.jpg';
import { useNavigate } from 'react-router-dom';
import gacIcon from '../../assets/gac-blue.png'; // Replace with the correct path
import mclarensIcon from '../../assets/mc.png';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid dashboard-container overflow-hidden d-flex flex-column align-items-center justify-content-between py-2"
      style={{
        background: `url(${back3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '0 10px',
      }}
    >
      {/* Header Section */}
      <div className="text-center mb-1 mt-3 header-section text-dark   ">
        <h1 className="mb-2 text-center animate-from-top overflow-hidden ">Welcome to McLarens Group</h1>
        <p className="lead text-dark animate-from-top overflow-hidden">Providing Services for Over 70 Years</p>
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
        <div className="col-lg-4 d-none d-lg-block"></div>

        <div className="col-lg-2 col-md-6 col-sm-12 mt-0 mt-lg-5 animate-from-bottom overflow-hidden">
          <div
            className="card text-center shadow-sm"
            onClick={() => window.open('https://intranet.mclarens.lk', '_blank')}
          >
            <div className="card-body">
              <FontAwesomeIcon icon={faPeopleGroup} className="icon-style" />
              <h5 className="card-title mt-1">Group Intranet</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 col-sm-12 mt-0 mt-lg-5 animate-from-bottom overflow-hidden">
          <div
            className="card text-center shadow-sm me-1"
            onClick={() => window.open('https://outlook.cloud.microsoft/mail/', '_blank')}
          >
            <div className="card-body">
              <FontAwesomeIcon icon={faEnvelope} className="icon-style" />
              <h5 className="card-title mt-1">Web mail login</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-4 d-none d-lg-block"></div>

        <div className="col-lg-2 d-lg-block d-none"></div>
        <div className="col-lg-2 col-md-6 col-sm-12 animate-from-left overflow-hidden">
          <div
            className="card text-center shadow-sm"
            onClick={() => window.open('https://mhl.peopleshr.com', '_blank')}
          >
            <div className="card-body">
              <FontAwesomeIcon icon={faChalkboardUser} className="icon-style" />
              <h5 className="card-title mt-1">HRIS Portal</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 col-sm-12 animate-from-left overflow-hidden">
          <div
            className="card text-center shadow-sm"
            onClick={() => window.open('https://app.workhub24.com', '_blank')}
          >
            <div className="card-body">
              <FontAwesomeIcon icon={faLaptopFile} className="icon-style" />
              <h5 className="card-title mt-1">Work Hub</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 col-sm-12 animate-from-left overflow-hidden">
          <div
            className="card text-center shadow-sm"
            onClick={() => window.open('https://office.mclarens.lk/', '_blank')}
          >
            <div className="card-body">
              <FontAwesomeIcon icon={faFileSignature} className="icon-style" />
              <h5 className="card-title mt-1">Stationary Request</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 col-sm-12 animate-from-left overflow-hidden">
          <div
            className="card text-center shadow-sm"
            onClick={() => window.open('https://lms.mclarens.lk/', '_blank')}
          >
            <div className="card-body">
              <FontAwesomeIcon icon={faBookOpenReader} className="icon-style" />
              <h5 className="card-title mt-1">LMS</h5>
            </div>
          </div>
        </div>

        <div className="col-lg-2 d-none d-lg-block"></div>

        <div className="col-lg-2 col-md-6 col-sm-12 animate-from-right overflow-hidden">
          <div className="card text-center shadow-sm" onClick={() => navigate('/gac-system')}>
            <div className="card-body">
            <img src={gacIcon} alt="GAC Icon" className="icon-design1" />
              <h5 className="card-title mt-1">GAC Apps</h5>
            </div>
          </div>
        </div>

        {/* McLarens System Card */}
        <div className="col-lg-2 col-md-6 col-sm-12 animate-from-right overflow-hidden">
          <div className="card text-center shadow-sm" onClick={() => navigate('/mclarens-system')}>
            <div className="card-body">
            <img src={mclarensIcon} alt="McLarens Icon" className="icon-design" />
              <h5 className="card-title mt-1">McLarens Apps</h5>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons Section */}
      <div className="social-media-icons d-flex align-items-center mt-3 d-none d-lg-block  overflow-hidden">
        <h5 className="mb-3"></h5>
        <div className="d-flex flex-column align-items-center animate-from-right">
          <a href="https://www.facebook.com/McLarensGroup" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="gac-social-iconf mb-3" style={{ color: '#4267B2' }} />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2FMcLarensGroup" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="gac-social-iconf mb-3" style={{ color: '#1DA1F2' }} />
          </a>
          <a href="https://www.linkedin.com/company/mclarensgroup/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="gac-social-iconf mb-3" style={{ color: '#0077B5' }} />
          </a>
          <a href="https://www.youtube.com/channel/UCDNHRQUoC4zRMFIVk7YI4Ow" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} className="gac-social-iconf mb-3" style={{ color: '#FF0000' }} />
          </a>
          <a href="https://www.instagram.com/mclarensgroup/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="gac-social-iconf mb-3" style={{ color: '#C13584' }} />
          </a>
        </div>
      </div>
      <footer className="text-center mt-auto mb-3">
          <p className="copyright-text text-dark animate-from-bottom overflow-hidden">Copyright © 2024 McLarens Group of Companies.</p>
        </footer>

      <footer className="text-center mt-auto mb-3 d-lg-none d-block small-screen-footer animate-from-bottom">
    <p className="copyright-text1 text-dark ">Copyright © 2024 McLarens Group of Companies.</p>
</footer>

    </div>
  );
}

export default Dashboard;
