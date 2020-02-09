import React, { Component } from 'react';

import './QuestionBlock.styles.scss';

class QuestionBlock extends Component {
  render() {
    const { pathToImg, pathToSong, nameBird } = this.props;

    return (
      <div className="question_block">
        <img
          className="question_block--img"
          src={pathToImg}
          alt="imagine bird"
        />
        <div className="question_block--info">
          <p className="question_block--name">
            {nameBird}
          </p>
          <audio className="question_block--player" controls>
            <track kind="captions" />
            <source src={pathToSong} />
          </audio>
        </div>
      </div>
    );
  }
}

export default QuestionBlock;
