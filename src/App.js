import React, { Component } from 'react';
import MainPage from './js/MainPage.js';
import './css/App.scss';

class App extends Component {
  // constructor
  constructor(props) {
    super(props);

    this.state = {
      // set states
      showMenu: false,
      currentPage: 'welcome'
    };
    //binds
    this.menuClick = this.menuClick.bind(this);
    this.selectWelcome = this.selectWelcome.bind(this);
    this.selectAbout = this.selectAbout.bind(this);
    this.selectClasses = this.selectClasses.bind(this);
    this.selectRegistration = this.selectRegistration.bind(this);
    this.selectContact = this.selectContact.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  // methods
  componentDidUpdate() {
    // select DOM items
    const welcome = document.getElementById('welcome');
    const about = document.getElementById('about');
    const classes = document.getElementById('classes');

    if (this.state.currentPage === 'welcome') {
      welcome.classList.add('show');
      about.classList.remove('show');
      classes.classList.remove('show');
    } else if (this.state.currentPage === 'about') {
      welcome.classList.remove('show');
      about.classList.add('show');
      classes.classList.remove('show');
    } else if (this.state.currentPage === 'classes') {
      welcome.classList.remove('show');
      about.classList.remove('show');
      classes.classList.add('show');
    } else {
    }
  }

  menuClick() {
    closeMenu(this);
  }
  selectWelcome() {
    closeMenu(this);
    this.setState({
      currentPage: 'welcome'
    });
  }
  selectAbout() {
    closeMenu(this);
    this.setState({
      currentPage: 'about'
    });
  }
  selectClasses() {
    closeMenu(this);
    this.setState({
      currentPage: 'classes'
    });
  }
  selectRegistration(event) {
    closeMenu(this);
    this.setState({
      currentPage: 'registration'
    });
  }
  selectContact(event) {
    closeMenu(this);
    this.setState({
      currentPage: 'contact'
    });
  }
  // render
  render() {
    return (
      <div>
        <MainPage
          menuClick={this.menuClick}
          classList={this.state.classList}
          onChange={this.inputHandler}
          value={this.state.input}
          selectWelcome={this.selectWelcome}
          selectAbout={this.selectAbout}
          selectClasses={this.selectClasses}
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
