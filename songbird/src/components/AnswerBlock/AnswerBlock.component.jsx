import React, { Component } from 'react';

import './AnswerBlock.styles.scss';

import Answer from '../Answer';

class AnswerBlock extends Component {
  render() {
    const { correctAnswerIndex, arrIncorrectAnswers, returnAnswerIndex } = this.props;
    const listMarks = ['1', '2', '3', '4', '5', '6'];

    return (
      <ul className="answer_block">
        {listMarks.map((item, ind) => {
          let answerClassName = 'answer_block--answer';
          if (correctAnswerIndex === ind) answerClassName = 'answer_block--answer answer_block--answer-correct';
          if (arrIncorrectAnswers.includes(ind)) answerClassName = 'answer_block--answer answer_block--answer-incorrect';
          return (
            <Answer
              answerClassName={answerClassName}
              key={item}
              ind={ind}
              onClick={returnAnswerIndex}
            />
          );
        })}
      </ul>
    );
  }
}

export default AnswerBlock;
