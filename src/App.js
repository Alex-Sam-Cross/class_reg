import React, { Component } from 'react';
import WelcomePage from './js/WelcomePage.js';
import './css/App.scss';

class App extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      // set states
      showMenu: false
    };
    //binds
    this.selectAbout = this.selectAbout.bind(this);
    this.selectCourses = this.selectCourses.bind(this);
    this.selectRegistration = this.selectRegistration.bind(this);
    this.selectContact = this.selectContact.bind(this);
    this.menuClick = this.menuClick.bind(this);
  }

  // methods
  menuClick(event) {
    // select DOM items
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');
    const navItems = document.querySelectorAll('.nav-item');

    if (!this.state.showMenu) {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');
      navItems.forEach(i => i.classList.add('show'));
      // Set menu state, showMenu = true when open
      this.setState({
        showMenu: true
      });
    } else {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      menuBranding.classList.remove('show');
      navItems.forEach(i => i.classList.remove('show'));
      // Set menu state, showMenu = flase when closed
      this.setState({
        showMenu: false
      });
    }
  }
  selectAbout(event) {
    console.log(event);
    console.log('click');
  }
  selectCourses(event) {
    console.log(event);
    console.log('click');
  }
  selectRegistration(event) {
    console.log(event);
    console.log('click');
  }
  selectContact(event) {
    console.log(event);
    console.log('click');
  }
  // render
  render() {
    return (
      <WelcomePage
        menuClick={this.menuClick}
        selectAbout={this.selectAbout}
        selectCourses={this.selectCourses}
        selectContact={this.selectContact}
      />
    );
  }
}

export default App;
