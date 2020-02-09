import React, { Component } from 'react';

import './AnswerBlock.styles.scss';

import Answer from '../Answer';

class AnswerBlock extends Component {
  render() {
    const { correctAnswerIndex, arrIncorrectAnswers, checkAnswer } = this.props;
    const listMarks = ['1', '2', '3', '4', '5', '6'];

    return (
      <div className="answer_block">
        <ul>
          {listMarks.map((item, ind) => {
            let indicatorClassName = 'answer--indicator';
            if (correctAnswerIndex === ind) indicatorClassName = 'answer--indicator answer--indicator-true';
            if (arrIncorrectAnswers.includes(ind)) indicatorClassName = 'answer--indicator answer--indicator-false';
            return (
              <Answer
                indicatorClassName={indicatorClassName}
                key={item}
                name={item}
                ind={ind}
                onClick={checkAnswer}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AnswerBlock;
