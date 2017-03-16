import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../App.css';
import React, { Component } from 'react';
import { randomArray } from '../Sort/Randomarray';
import {
  array2,
  selectSortStart,
  selectionSortPlay
} from '../Sort/Selectionsort';


export default class Selectionsort extends Component {
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
    this.selectionSortStrap = this.selectionSortStrap.bind(this)
    this.handleSlower = this.handleSlower.bind(this)
    this.handleFaster = this.handleFaster.bind(this)
  }

  selectionSortStrap() {
    let results = selectionSortPlay()
    let count = this.state.count
    this.setState({
      data: results.array,
      count: count + 1,
      currentIndex: results.currentIndex
    })
    if (!results.isSorted) {
      setTimeout(this.selectionSortStrap, this.state.speed)
    }
  }

  handlePlay(e) {
    selectSortStart(this.state.data)
    this.selectionSortStrap()
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
    console.log(this.state.data)
    const width = 1000 / (this.state.data.length);

    const styles = this.state.data.map((dataPoints, i) => {
      return {
        height: 1000 * (this.state.data[i] / 35),
        left: width * i,
        width: width
      }
    });

    console.log(this.state.isPlaying)
    return (
      <div className="container">
        <div className='row'>
          <div className='col-md-6'>
            <div className='Graph'>
              <h1>Selectionsort</h1>

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
              <p>procedure selection sort </p>
              <p id="indent7">list  : array of items</p>
              <p id="indent8">n     : size of list</p>
              <p id="indent9">  for i = 1 to n - 1</p>
              <p id="indent10">   /* set current element as minimum*/</p>
              <p id="indent11">     min = i    </p>
              <p id="indent12">   /* check the element to be minimum */</p>
              <p id="indent13">  for j = i+1 to n </p>
              <p id="indent14"> if list[j]  list[min] then</p>
              <p id="indent15">  min = j;</p>
              <p id="indent16"> end if</p>
              <p id="indent17">end for</p>
              <p id="indent18"> /* swap the minimum element with the current element*/</p>
              <p id="indent19"> if indexMin != i  then</p>
              <p id="indent20">   swap list[min] and list[i]</p>
              <p id="indent21"> end if</p>
              <p id="indent22">end for</p>
              <p>end procedure</p>
            </div>
          </div>
          <div className='col-md-6'>
            <h3>WHAT IS IT DOING?</h3>
            <p>Scan all items and find the smallest. Swap it into position as the first item.
                           Repeat the selection sort on the remaining N-1 items.</p>

            <h3>WHAT BIG O NOTATION?</h3>
            <p>Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. </p>
            <ul>
              <li><a href="http://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation" target="_blank">StackOverflow Q & A on Big O</a></li>
              <li><a href="https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/" target="_blank">A Beginners Guide to Big O</a></li>
              <li><a href='https://www.youtube.com/watch?v=-Eiw_-v__Vo' target="_blank">Free Code Camp's Video on Big O</a></li>
            </ul>
            <p> Best-case performance‎: ‎О(n2)</p>
            <p>Worst-case performance‎: ‎О(n2) </p>
            <p>Average performance‎: ‎О(n2) </p>
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
              <li><a href="https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting" target="_blank">Khan Academy Article</a></li>
              <li><a href="https://www.youtube.com/watch?v=f8hXR_Hvybo&t" target="_blank">Harvard's CS50 Video on Selectionsort</a></li>
              <li><a href='http://interactivepython.org/runestone/static/pythonds/SortSearch/TheSelectionSort.html' target="_blank">Problem Solving with Algorithm & Data Structures</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
