import React, { Component } from 'react';
import MainPage from './js/MainPage.js';
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
    this.menuClick = this.menuClick.bind(this);
    this.selectWelcome = this.selectWelcome.bind(this);
    this.selectAbout = this.selectAbout.bind(this);
    this.selectCourses = this.selectCourses.bind(this);
    this.selectRegistration = this.selectRegistration.bind(this);
    this.selectContact = this.selectContact.bind(this);
  }

  // methods
  menuClick() {
    closeMenu(this);
  }
  selectWelcome() {
    closeMenu(this);
    document.getElementById('welcome').style.display = 'block';
    document.getElementById('about').style.display = 'none';
  }
  selectAbout() {
    closeMenu(this);
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('about').style.display = 'block';
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
      <div>
        <MainPage
          menuClick={this.menuClick}
          selectWelcome={this.selectWelcome}
          selectAbout={this.selectAbout}
          selectCourses={this.selectCourses}
          selectContact={this.selectContact}
        />
      </div>
    );
  }
}

function closeMenu(s) {
  // select DOM items
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const menuNav = document.querySelector('.menu-nav');
  const menuBranding = document.querySelector('.menu-branding');
  const navItems = document.querySelectorAll('.nav-item');

  if (!s.state.showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(i => i.classList.add('show'));
    // Set menu state, showMenu = true when open
    s.setState({
      showMenu: true
    });
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(i => i.classList.remove('show'));
    // Set menu state, showMenu = flase when closed
    s.setState({
      showMenu: false
    });
  }
}

export default App;
