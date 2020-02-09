import React, { Component } from 'react';

import './QuestionBlock.styles.scss';

class QuestionBlock extends Component {
  render() {
    const { dataForQuestion } = this.props;

    return (
      <div className="question_block">
        <img
          className="question_block--img"
          src={dataForQuestion.image}
          alt="imagine bird"
        />
        <div className="question_block--info">
          <p className="question_block--name">
            {dataForQuestion.name}
          </p>
          <audio className="question_block--player" controls>
            <track kind="captions" />
            <source src={dataForQuestion.audio} />
          </audio>
        </div>
      </div>
    );
  }
}

export default QuestionBlock;
