import React from 'react';

function About() {
  return (
    <main id="about">
      <h1 class="main-heading">
        About <span class="text_secondary">Me</span>
      </h1>
      <h2 class="sub-heading">Let me tell you about a few things...</h2>
      <div class="about-info">
        <img src="./../img/portrait.jpg" alt="Sam Cross" class="bio-image" />
        <div class="bio">
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
        <div class="job job-1">
          <h3>Something </h3>
          <h6>Something</h6>
          <p>
            Nam eu sem finibus, convallis dolor sit amet, tempus quam. Quisque
            non purus nec risus bibendum volutpat vitae eu eros. Pellentesque
            lectus augue, dapibus nec nunc ut, porta congue nibh. Suspendisse
            aliquam cursus augue, sed molestie eros hendrerit ut.
          </p>
        </div>
        <div class="job job-2">
          <h3>Something</h3>
          <h6>Something</h6>
          <p>
            Fusce varius tellus vel fringilla luctus. Vestibulum vestibulum sit
            amet orci vitae porta. Nullam non egestas ex, vel scelerisque dolor.
            Donec tempus lobortis est, sit amet congue purus. Duis nec est
            tristique, lacinia erat ac, dictum lectus.
          </p>
        </div>
        <div class="job job-3">
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
