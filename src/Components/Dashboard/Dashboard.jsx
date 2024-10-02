import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faUserCircle,
  faBriefcase,
  faClipboard,
  faNetworkWired,
  faCar,
  faMoneyBill,
  faLifeRing
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="container-fluid dashboard-container d-flex flex-column align-items-center justify-content-between py-2">
      {/* Header Section */}
      <div className="text-center mb-2 header-section">
        <h1 className="mb-2">Welcome to McLarens Group</h1>
        <p className="lead">Providing Services for Over 70 Years</p>
        <button type="button" className="btn btn-lg" style={{ backgroundColor: '#3d7cc9', color: 'white' }}>Group Website</button>
      </div>

      {/* Grid layout for cards */}
      <div className="row g-2 justify-content-center mt-2 cards-container">
        {/* First row - 2 cards */}
        <div className="col-lg-4 d-none d-lg-block"></div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="card text-center shadow-sm" style={{ backgroundColor: '#FF5733' }} onClick={() => window.open('https://webmail.example.com', '_blank')}>
            <div className="card-body">
              <FontAwesomeIcon icon={faEnvelope} className="icon-style" />
              <h5 className="card-title mt-1">Web Mail Login</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="card text-center shadow-sm" style={{ backgroundColor: '#C70039' }} onClick={() => window.open('https://hris.example.com', '_blank')}>
            <div className="card-body">
              <FontAwesomeIcon icon={faUserCircle} className="icon-style" />
              <h5 className="card-title mt-1">HRIS Portal</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-none d-lg-block"></div>

        {/* Second area */}
        <div className="col-lg-2 d-lg-block d-none"></div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="card text-center shadow-sm" style={{ backgroundColor: '#FFC300' }} onClick={() => window.open('https://workhub.example.com', '_blank')}>
            <div className="card-body">
              <FontAwesomeIcon icon={faBriefcase} className="icon-style" />
              <h5 className="card-title mt-1">Work Hub</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12">
          <div className="card text-center shadow-sm" style={{ backgroundColor: '#DAF7A6' }} onClick={() => window.open('https://stationary.example.com', '_blank')}>
            <div className="card-body">
              <FontAwesomeIcon icon={faClipboard} className="icon-style" />
              <h5 className="card-title mt-1">Stationary Request</h5>
            </div>
          </div>
        </div>

        {/* Additional Cards */}
        <div className="col-lg-2 col-md-4 col-sm-12">
          <div className="card text-center shadow-sm" style={{ backgroundColor: '#9FE2BF' }} onClick={() => window.open('https://intranet.example.com', '_blank')}>
            <div className="card-body">
              <FontAwesomeIcon icon={faNetworkWired} className="icon-style" />
              <h5 className="card-title mt-1">Group Intranet</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12">
          <div className="card text-center shadow-sm" style={{ backgroundColor: '#FFB6C1' }} onClick={() => window.open('https://tripbonus.example.com', '_blank')}>
            <div className="card-body">
              <FontAwesomeIcon icon={faCar} className="icon-style" />
              <h5 className="card-title mt-1">GAC Trip Bonus</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-2 d-none d-lg-block"></div>

        <div className="col-lg-2 col-md-4 col-sm-12">
          <div className="card text-center shadow-sm" style={{ backgroundColor: '#87CEEB' }} onClick={() => window.open('https://claim.example.com', '_blank')}>
            <div className="card-body">
              <FontAwesomeIcon icon={faMoneyBill} className="icon-style" />
              <h5 className="card-title mt-1">Claims Management</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-12">
          <div className="card text-center shadow-sm" style={{ backgroundColor: '#FF69B4' }} onClick={() => window.open('https://help.example.com', '_blank')}>
            <div className="card-body">
              <FontAwesomeIcon icon={faLifeRing} className="icon-style" />
              <h5 className="card-title mt-1">Help Desk</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
