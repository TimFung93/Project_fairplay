import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../App.css';
import React, { Component } from 'react';
import { randomArray } from '../Sort/Randomarray';
import {
  array3,
  InsertsortStart,
  InsertPlay
} from '../Sort/Insertionsort';


export default class Insertionsort extends Component {
  constructor() {
    super();

    this.state = {
      data: randomArray(),
      count: 0,
      speed: 5,
      isPlaying: false,
      sorted: false
    }
    this.handlePlay = this.handlePlay.bind(this)
    this.handleRandom = this.handleRandom.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.insertionSortStrap = this.insertionSortStrap.bind(this)
    this.handleSlower = this.handleSlower.bind(this)
    this.handleFaster = this.handleFaster.bind(this)
  }

  insertionSortStrap() {
    let results = InsertPlay()
    let count = this.state.count

    this.setState({
      data: results.array,
      count: count + 1,
      currentIndex: results.currentIndex
    })
    if (!results.isSorted) {
      setTimeout(this.insertionSortStrap, this.state.speed)
    }
  }

  handlePlay(e) {
    InsertsortStart(this.state.data)
    this.insertionSortStrap()
    this.state.isPlaying = true

  }

  handleSlower() {
    let x = 50
    if (this.state.speed >= 300) {
      x = 0
    }
    this.setState({
      speed: this.state.speed + x
    })
  }
  handleFaster() {
    let x = 50
    if (this.state.speed <= 5) {
      x = 0
    }
    this.setState({
      speed: this.state.speed - x
    })
  }

  handleRandom() {
    this.setState({
      data: randomArray(),
      count: 0
    })
  }

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
              <h1>Insertionsort</h1>

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
              <button className='btn btn-default fast' onClick={this.handleFaster}>Faster</button>
              <div className="wrap">
                <div className="circle">
                  <button type='button' className="circle_inner" onClick={this.handlePlay} disabled={this.state.isPlaying === true}></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <h3>ALGORITHM</h3>
            <div className='code'>
              <p>func bubblesort( var a as array )</p>
              <p id='indent2'>for i from 1 to N</p>
              <p id='indent3'>for j from 0 to N - 1</p>
              <p id='indent4'> if a[j] > a[j + 1]</p>
              <p id='indent5'>swap( a[j], a[j + 1] )</p>
              <p>end func</p>

            </div>
          </div>
          <div className='col-md-6'>
            <h3>WHAT IS IT DOING?</h3>
            <p> Loop over positions in the array, starting with index 1.
            Each new position is like the new card handed to you by the dealer,
                          and you need to insert it into the correct place in the sorted subarray to the left of that position.</p>

            <h3>WHAT BIG O NOTATION?</h3>
            <p>Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. </p>
            <ul>
              <li><a href="http://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation" target="_blank">StackOverflow Q & A on Big O</a></li>
              <li><a href="https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/" target="_blank">A Beginners Guide to Big O</a></li>
              <li><a href='https://www.youtube.com/watch?v=-Eiw_-v__Vo' target="_blank">Free Code Camp's Video on Big O</a></li>
            </ul>
            <p> Best-case performance‎: ‎O(n) comparisons, O(1) swaps</p>
            <p>Worst-case performance‎: ‎О(n2) comparisons, swaps </p>
            <p>Average performance‎: ‎О(n2) comparisons, swaps </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <h3>KEY</h3>
            <ul>
              <li><span id='current'>Current minimum point</span> point being accessed</li>
              <li><span id='sorted'>Sorted</span> points</li>
            </ul>
          </div>
          <div className='col-md-6'>
            <h3>MORE INFORMATION</h3>
            <ul>
              <li><a href="https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort" target="_blank">Khan Academy Article</a></li>
              <li><a href="https://www.youtube.com/watch?v=DFG-XuyPYUQ&t" target="_blank">Harvard's CS50 Video on Insertionsort</a></li>
              <li><a href='http://stackoverflow.com/questions/12887629/efficency-of-insertion-sort-vs-bubble-sort-vs-selection-sort' target="_blank">StackOverflow Q & A Sorts vs. Sorts vs. Sorts</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
