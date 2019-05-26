import React from 'react';

function MainWelcome() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossOrigin="anonymous"
      />
      <main id="home">
        <h1 className="main-heading">
          Rosemary <span className="text_secondary">High</span>
        </h1>
        <h2 className="sub-heading">College</h2>
        <div className="icons">
          <a href="./">
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a href="./">
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a href="https://github.com/Alex-Sam-Cross">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
      </main>
    </div>
  );
}

export default MainWelcome;
