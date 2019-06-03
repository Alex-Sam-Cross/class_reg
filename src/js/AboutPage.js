import React from 'react';

function About() {
  return (
    <main id="about">
      <h1 className="main-heading">
        About <span className="text_secondary">Rosemary High</span>
      </h1>
      <h2 className="sub-heading">Let me tell you about a few things...</h2>
      <div className="about-info">
        <img
          src="../img/graduation.jpg"
          alt="Rosemary High"
          className="bio-image"
        />
        <div className="bio">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ullamcorper finibus justo eu vehicula. Pellentesque
            efficitur varius odio nec tincidunt. Vestibulum a maximus quam. In
            sodales ac elit vel fringilla. Cras consectetur urna sed nulla
            interdum posuere. Donec quis urna tincidunt, efficitur lacus sit
            amet, placerat enim. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
        </div>
        <div className="section section-1">
          <h3>Something </h3>
          <h6>Something</h6>
          <p>
            Nam eu sem finibus, convallis dolor sit amet, tempus quam. Quisque
            non purus nec risus bibendum volutpat vitae eu eros. Pellentesque
            lectus augue, dapibus nec nunc ut, porta congue nibh. Suspendisse
            aliquam cursus augue, sed molestie eros hendrerit ut.
          </p>
        </div>
        <div className="section section-2">
          <h3>Something</h3>
          <h6>Something</h6>
          <p>
            Fusce varius tellus vel fringilla luctus. Vestibulum vestibulum sit
            amet orci vitae porta. Nullam non egestas ex, vel scelerisque dolor.
            Donec tempus lobortis est, sit amet congue purus. Duis nec est
            tristique, lacinia erat ac, dictum lectus.
          </p>
        </div>
        <div className="section section-3">
          <h3>Something</h3>
          <h6>Something</h6>
          <p>
            Curabitur sit amet scelerisque justo. Vivamus nisl massa, volutpat
            id volutpat in, convallis vel sapien. Ut finibus vel ipsum sit amet
            elementum. Sed finibus enim mauris, vitae tincidunt enim tincidunt
            nec. Nam mauris erat, ornare et mauris posuere, porttitor vestibulum
            leo.
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
