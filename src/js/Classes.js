import React, { Component } from 'react';
import MappedClasses from './MappedClasses.js';
import classArr from './classes.json';

class Classes extends Component {
  //constructor
  constructor(props) {
    super(props);
    //set states
    this.state = {
      classList: [],
      input: '',
      debouncedFunction: debounce(
        function(newArray) {
          this.setState({
            classList: newArray
          });
        },
        750,
        this
      )
    };
    //setuping your own custom functions
    this.inputHandler = this.inputHandler.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    this.setState({
      classList: classArr
    });
  }
  inputHandler(event) {
    //updating the state/value of input
    let input = event.target.value.toLowerCase();
    let newclassList = this.state.classList.filter(classList => {
      if (classList.title.toLowerCase().includes(input)) {
        if (input === '') {
          return;
        } else return classList;
      }
    });

    this.setState({
      input: input
    });

    this.state.debouncedFunction(newclassList);
  }
  render() {
    return (
      <main id="classes">
        <h1 className="main-heading">
          Classes at <span className="text_secondary">Rosemary High</span>
        </h1>
        <h2 className="sub-heading">
          Lets have a look at the most popular classes
        </h2>
        <input
          className="input"
          placeholder="Type here to search for a class"
          onChange={this.inputHandler}
          value={this.input}
        />
        <div className="class-info">
          <MappedClasses classList={this.state.classList} />
        </div>
      </main>
    );
  }
}
function debounce(func, delay, context) {
  var previousCallTime;
  var firstCall = true;
  var id; // we store the id of each setTimeout in here, so that we can cancel it later if needs be

  return function(newArray) {
    var now = Date.now();
    var timeSinceLastCall = now - previousCallTime;
    var startTimer = function() {
      id = setTimeout(function() {
        func.call(context, newArray);
      }, delay);
    };

    if (firstCall) {
      // it's the first call, so we start the timer (based on the 'delay' parameter up top) which is set up to fire our 'func()' once the timer is up...
      startTimer();
      // we set 'firstCall' to false so this 'if' block never runs again
      firstCall = false;
      // set 'previousCallTime' to the time right now, so we can compare it to the timestamps of future calls
      previousCallTime = now;
      // break out of this function here, knowing that we've got our timer set up and the clock ticking down...
      return;
    }

    // if another call comes in before 1 second ('delay') is up...
    if (timeSinceLastCall < delay) {
      // ... cancel the previous setTimeout that is waiting to fire 'func()'
      clearTimeout(id);
      // ... then restart the setTimeout
      startTimer();
      // set the previousTime again to the time right now
      previousCallTime = now;
    } else {
      // but if a subsequent call comes in AFTER 'delay' amount of time, then our function will have been allowed to fire. Now, we can just restart the timer again.
      previousCallTime = now;
      startTimer();
    }
  };
}
export default Classes;
