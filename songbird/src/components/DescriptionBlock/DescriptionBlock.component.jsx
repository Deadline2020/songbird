import React, { Component } from 'react';

import './DescriptionBlock.styles.scss';

// import Answer from '../Answer';

class DescriptionBlock extends Component {
  render() {
    // const { correctAnswerIndex, arrIncorrectAnswers, checkAnswer } = this.props;
    // const listMarks = ['1', '2', '3', '4', '5', '6'];
    const { dataForDescription } = this.props;
    console.log(dataForDescription);

    if (dataForDescription.name) {
      return (
        <div className="description_block">
          <div className="media_wrapper">
            <img
              className="media_wrapper--img"
              src={dataForDescription.image}
              alt="imagine bird"
            />
            <div className="media_wrapper--info">
              <p className="media_wrapper--name">
                {dataForDescription.name}
              </p>
              <p className="media_wrapper--species">
                {dataForDescription.species}
              </p>
              <audio className="media_wrapper--player" controls>
                <track kind="captions" />
                <source src={dataForDescription.audio} />
              </audio>
            </div>
          </div>
          <div className="text_wrapper">
          {dataForDescription.description}
          </div>
        </div>
      );
    }
    return (
      <div className="description_block">
        <p className="description_block--invite">Послушайте плеер.</p>
        <p className="description_block--invite">Выберите птицу из списка.</p>
      </div>
    );
  }
}
export default DescriptionBlock;
