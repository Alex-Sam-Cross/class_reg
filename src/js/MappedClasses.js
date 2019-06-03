import React from 'react';

function MappedClasses(props) {
  return props.classList.map((classes, i) => {
    return (
      <div className="class" key={i}>
        <div>
          <span className="text_secondary">{classes.title}: </span>
          {classes.description}
        </div>
      </div>
    );
  });
}

export default MappedClasses;
