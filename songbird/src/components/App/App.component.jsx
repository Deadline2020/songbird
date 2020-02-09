import React, { Component } from 'react';

import './App.styles.scss';
import baseBirds from '../../static/birdsData';

import Header from '../Header';
import ListMarks from '../ListMarks';
import QuestionBlock from '../QuestionBlock';

class App extends Component {
  state = {
    baseBirds,
    scoreValue: 0,
    activeMark: 0,
    pathToImg: 'assets/img/defaultBird.png',
    pathToSong: '',
    nameBird: '*******',
    correctAnswerIndex: undefined,
    arrIncorrectAnswers: [],
  }

  render() {
    // console.log(this.state.baseBirds);
    const {
      scoreValue, activeMark, pathToImg, pathToSong, nameBird, correctAnswerIndex, arrIncorrectAnswers
    } = this.state;
    return (
      <div className="app">
        <Header
          scoreValue={scoreValue}
        />
        <ListMarks
          activeMark={activeMark}
        />
        <QuestionBlock
          pathToImg={pathToImg}
          pathToSong={pathToSong}
          nameBird={nameBird}
        />
      </div>
    );
  }

}

export default App;
