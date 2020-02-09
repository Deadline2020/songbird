import React, { Component } from 'react';
// import { Route } from 'react-router-dom';

import './App.styles.scss';
import baseBirds from '../../static/birdsData';

import Header from '../Header';
import ListMarks from '../ListMarks';
import QuestionBlock from '../QuestionBlock';
import AnswerBlock from '../AnswerBlock';
import DescriptionBlock from '../DescriptionBlock';
import Button from '../Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.defaultData = {
      name: '*******',
      image: 'assets/img/defaultBird.png',
      audio: '',
    };

    // this.aaa = {
    //   id: 1,
    //   name: 'Ворон',
    //   species: 'Corvus corax',
    //   description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
    //   image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
    //   audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
    // };

    this.state = {
      scoreValue: 0,
      activeMark: 0,
      isNext: false,
      secretIndex: [-1, -1],
      dataForQuestion: this.defaultData,
      dataForDescription: {},
      // dataForDescription: this.aaa,

      correctAnswerIndex: undefined,
      arrIncorrectAnswers: [],
    };
  }

  componentDidMount() {
    // this.setState({ BaseCurrency: response });
  }

  checkAnswer = (ind) => {
    console.log('asdasdasd', ind);
  }

  goNextStage = () => {
    console.log('gggggggggg');
  }

  render() {
    // console.log(this.state.baseBirds);
    const {
      scoreValue, activeMark, dataForQuestion, dataForDescription,
      correctAnswerIndex, arrIncorrectAnswers, isNext,
    } = this.state;
    return (
      <div className="app">
        <Header
          scoreValue={scoreValue}
        />
        <ListMarks
          activeMark={activeMark}
        />
        <div className="app--game_fields">
          <QuestionBlock
            dataForQuestion={dataForQuestion}
          />
          <AnswerBlock
            checkAnswer={this.checkAnswer}
            correctAnswerIndex={correctAnswerIndex}
            arrIncorrectAnswers={arrIncorrectAnswers}
          />
          <DescriptionBlock
            dataForDescription={dataForDescription}
          />
          <Button
            onClick={this.goNextStage}
            isNext={isNext}
          />
        </div>
        <div className="congratulation" style={{ display: 'none' }}>

        </div>
     

      </div>
    );
  }


}

export default App;
