import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';
import '../App.css';
import { compareArrayLarge } from '../Sort/Randomarray';
import {
  array,
  startBubbleSort,
  bubblePlay
} from '../Sort/Bubblesort';
import {
  array2,
  selectSortStart,
  selectionSortPlay
} from '../Sort/Selectionsort';

import {
  array3,
  InsertsortStart,
  InsertPlay
} from '../Sort/Insertionsort';


export default class Compare extends Component {
  constructor() {
    super()

    this.state = {
      data: array,
      data2: array2,
      data3: array3,
      count1: 0,
      count2: 0,
      count3: 0,
      speed: 5,
      isPlaying: false,
      sorted: false
    }

    this.handlePlay = this.handlePlay.bind(this)
    this.handlePlayBubble = this.handlePlayBubble.bind(this)
    this.handlePlaySelection = this.handlePlaySelection.bind(this)
    this.handlePlayInsert = this.handlePlayInsert.bind(this)
    this.handleRandom = this.handleRandom.bind(this)
    this.bubbleSortStrap = this.bubbleSortStrap.bind(this)
    this.selectionSortStrap = this.selectionSortStrap.bind(this)
    this.insertSortStrap = this.insertSortStrap.bind(this)
    this.handleSlower = this.handleSlower.bind(this)
    this.handleFaster = this.handleFaster.bind(this)
  }

  bubbleSortStrap() {
    let count = this.state.count1
    let results = bubblePlay();
    this.setState({
      data: results.array,
      count1: count + 1,
      currentIndex: results.currentIndex
    })

    if (!results.isSorted) {
      setTimeout(this.bubbleSortStrap, this.state.speed)
    }
  }


  selectionSortStrap() {
    let count2 = this.state.count2
    let results = selectionSortPlay()


    this.setState({
      data2: results.array,
      count2: count2 + 1,
      currentIndex2: results.currentIndex

    })
    if (!results.isSorted) {
      setTimeout(this.selectionSortStrap, this.state.speed)
    }
  }

  insertSortStrap() {
    let count3 = this.state.count3
    let results = InsertPlay();


    //console.log(results)
    this.setState({
      data3: results.array,
      count3: count3 + 1,
      currentIndex3: results.currentIndex

    })

    if (!results.isSorted) {
      setTimeout(this.insertSortStrap, this.state.speed)
    };
  };

  handlePlayBubble() {
    startBubbleSort(this.state.data)
    this.bubbleSortStrap()

  }

  handlePlaySelection() {
    selectSortStart(this.state.data2)
    this.selectionSortStrap()

  }

  handlePlayInsert() {
    InsertsortStart(this.state.data3)
    this.insertSortStrap()

  };

  handlePlay() {
    this.handlePlaySelection();
    this.handlePlayBubble();
    this.handlePlayInsert();
    this.state.isPlaying = true;
  }

  handleRandom() {
    this.setState({
      data: compareArrayLarge(),
      data2: compareArrayLarge(),
      data3: compareArrayLarge(),
      isPlaying: false
    })
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
  render() {

    const width = 350 / (this.state.data.length);

    const styles = this.state.data.map((dataPoints, i) => {
      return {
        height: 1000 * (this.state.data[i] / 35),
        left: width * i,
        width: width
      }
    });

    const width2 = 350 / (this.state.data2.length);

    const styles2 = this.state.data2.map((dataPoints2, index) => {
      return {
        height: 1000 * (this.state.data2[index] / 35),
        left: width2 * index,
        width: width2
      }
    });

    const width3 = 350 / (this.state.data3.length);

    const styles3 = this.state.data3.map((dataPoints3, index3) => {
      return {
        height: 1000 * (this.state.data3[index3] / 35),
        left: width3 * index3,
        width: width3
      }
    });

    return (
      <div className="container">
        <div className='row'>
          <div className='col-md-4'>
            <div className="Graph">
              <h1>Bubblesort</h1>
              <h2>Number of Steps: {this.state.count1}</h2>
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
          <div className='col-md-4'>
            <div className="Graph">
              <h1>Selectionsort</h1>
              <h2>Number of Steps: {this.state.count2}</h2>
              <ReactCSSTransitionGroup
                transitionName='bars'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {
                  this.state.data2.map((dataPoints2, i) => {
                    return (
                      <div className={this.state.currentIndex2 === i ? 'bar2' : 'bar1'} style={styles2[i]}>
                        {dataPoints2}
                      </div>
                    )
                  })
                }
              </ReactCSSTransitionGroup>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="Graph">
              <h1>Insertionsort</h1>
              <h2>Number of Steps: {this.state.count3}</h2>
              <ReactCSSTransitionGroup
                transitionName='bars'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {
                  this.state.data3.map((dataPoints3, index) => {
                    return (
                      <div className={this.state.currentIndex3 === index ? 'bar2' : 'bar1'} style={styles3[index]}>
                        {dataPoints3}
                      </div>
                    )
                  })
                }
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
        <div className='row space'>
          <div className='col-md-12'>
            <h2>Current Speed: {this.state.speed <= 120 ? 'Fast' : 'Slow'}</h2>
            <button className='btn btn-default' onClick={this.handleRandom}>Random</button>
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
    );
  }
}
