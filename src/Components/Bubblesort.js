import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';
import '../App.css';
import { randomArray } from '../Sort/Randomarray';
import {
  bubbleStep,
  array,
  startBubbleSort,
  bubblePlay
} from '../Sort/Bubblesort';

export default class Bubblesort extends Component {
  constructor() {
    super();

    this.state = {
      data: randomArray(),
      count: 0,
      speed: 5,
      isPlaying: false
    }

    this.handlePlay = this.handlePlay.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
    this.bubbleSortStrap = this.bubbleSortStrap.bind(this);
    this.handleSlower = this.handleSlower.bind(this);
    this.handleFaster = this.handleFaster.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handleRandom() {
    this.setState({
      data: randomArray(),
      count: 0
    });

  }

  bubbleSortStrap() {
    let count = this.state.count
    let results = bubblePlay(this.state.data);

    this.setState({
      data: results.array,
      count: count + 1,
      currentIndex: results.currentIndex,
      currentValue: results.currentValue,
      nextValue: results.nextValue
    })

    if (!results.isSorted) {
      setTimeout(this.bubbleSortStrap, this.state.speed)
    } else {
      this.setState({
        data: results.array,
        count: count,
        currentIndex: results.currentIndex,
        currentValue: results.currentValue
      })
    };
  };


  handlePause() {
    let on = 1
    if (on < 1) {
      on = on - 1
      console.log(on)
      return true
    } else {
      on = on + 1
      return false
    }
  }

  handleSlower() {
    let x = 50
    if (this.state.speed >= 300) {
      x = 0;
    };
    this.setState({
      speed: this.state.speed + x
    });
  }
  handleFaster() {
    let x = 50;
    if (this.state.speed <= 5) {
      x = 0;
    }
    this.setState({
      speed: this.state.speed - x
    });
  }

  handlePlay() {
    startBubbleSort(this.state.data)
    this.bubbleSortStrap()
    this.state.isPlaying = true

  };

  handleClear() {
    this.setState({
      data: [],
      count: 0,
      isPlaying: false
    })
  }

  render() {

    const width = 1000 / (this.state.data.length);

    const styles = this.state.data.map((dataPoints, i) => {
      return {
        height: 1000 * (this.state.data[i] / 35),
        left: width * i,
        width: width
      }
    });


    return (
      <div className="container">
        <div className='row'>
          <div className='col-md-6'>
            <div className='Graph'>
              <h1>Bubblesort</h1>

              <ReactCSSTransitionGroup
                transitionName='bars'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {
                  this.state.data.map((dataPoints, i) => {
                    return (
                      <div className={this.state.currentIndex === i ? 'bar2' : 'bar1'} style={styles[i]}>
                        {dataPoints}
                      </div>
                    )
                  })
                }

              </ReactCSSTransitionGroup>

            </div>
          </div>

          <div className='row'>
            <div className='col-md-12'>
              <h2>Number of Steps: {this.state.count}</h2>
              <h2>Current Speed: {this.state.speed <= 120 ? 'Fast' : 'Slow'}</h2>
              <button className='btn btn-default' onClick={this.handleRandom} disabled={this.state.isPlaying === true}>Random</button>
              <button className='btn btn-default' onClick={this.handleClear} disabled={this.state.isPlaying ? false : true}>Clear</button>
              <button className='btn btn-default' onClick={this.handleSlower}>Slower</button>
              <button className='btn btn-default' onClick={this.handlePause}>Pause</button>
              <button className='btn btn-default fast' onClick={this.handleFaster}>Faster</button>
              <div className="wrap">
                <div className="circle">
                  <button type='button' className="circle_inner" onClick={this.handlePlay}></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <h3>ALGORITHM</h3>
            <div className='code'>
              <p>begin BubbleSort(list)</p>
              <p id="indent">for all elements of list</p>
              <p id="indent2">if list[i] > list[i+1]</p>
              <p id="indent3"> swap(list[i], list[i+1])</p>
              <p id="indent4">end if</p>
              <p id="indent5">end for</p>
              <p id="indent6">return list</p>
              <p>end BubbleSort</p>
            </div>
          </div>


          <div className='col-md-6'>
            <h3>WHAT IS IT DOING?</h3>
            <p>Bubble sort, sometimes referred to as sinking sort,
            is a simple sorting algorithm that repeatedly steps through the list to be sorted,
               compares each pair of adjacent items and swaps them if they are in the wrong order.</p>

            <h3>WHAT BIG O NOTATION?</h3>
            <p>Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. </p>
            <ul>
              <li><a href="http://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation" target="_blank">StackOverflow Q&A on Big O</a></li>
              <li><a href="https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/" target="_blank">A Beginners Guide to Big O</a></li>
              <li><a href='https://www.youtube.com/watch?v=-Eiw_-v__Vo' target="_blank">Free Code Camp's Video on Big O</a></li>
            </ul>

            <p> Best-case performance‎: ‎О(n)</p>
            <p>Worst-case performance‎: ‎О(n2) </p>
            <p>Average performance‎: ‎О(n2) </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <h3>KEY</h3>
            <ul>
              <li><span id='current'>Current point</span> being accessed</li>
              <li><span id='sorted'>Sorted</span> points</li>
            </ul>
          </div>
          <div className='col-md-6'>
            <h3>MORE INFORMATION</h3>
            <ul>
              <li><a href="http://interactivepython.org/runestone/static/pythonds/SortSearch/TheBubbleSort.html" target="_blank">Problem Solving with Algorithm & Data Structures</a></li>
              <li><a href="https://www.youtube.com/watch?v=8Kp-8OGwphY" target="_blank">Harvard's CS50 Video on Bubblesort</a></li>
              <li><a href='https://www.hackerrank.com/challenges/ctci-bubble-sort' target="_blank">Cracking the Coding Interview</a></li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}
