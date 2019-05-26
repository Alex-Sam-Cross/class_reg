import React from 'react';
import Main from './Main';
import Footer from './Footer.js';

function MainPage(props) {
  return (
    <div className="bg-img">
      <header>
        <div className="menu-btn" onClick={props.menuClick}>
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>
        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait" />
          </div>
          <ul className="menu-nav">
            <li className="nav-item current">
              <div className="nav-link">Home</div>
            </li>
            <li className="nav-item" onClick={props.selectAbout}>
              <div className="nav-link">About Rosemary High</div>
            </li>
            <li className="nav-item" onClick={props.selectCourses}>
              <div className="nav-link">Courses</div>
            </li>
            <li className="nav-item">
              <div className="nav-link">Registration</div>
            </li>
            <li className="nav-item">
              <div href="src/contact.html" className="nav-link">
                Contact Rosemary High
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default MainPage;
