import React, { Component } from 'react';

import './CongratPage.styles.scss';

class CongratPage extends Component {
  render() {
    const { score } = this.props;
    let caption = 'Я уверен, что Вы можете лучше!';
    const info = `Вы набрали ${score} из 30 возможных баллов`;
    let classImg = 'congratulation--img';
    if (score > 19 && score < 30) {
      caption = 'Еще чуть-чуть и победа Ваша!';
    }
    if (score === 30) {
      caption = 'Поздравляю с победой!!!';
      classImg = 'congratulation--img-show';
    }
    return (
      <div className="congratulation">
        <p className="congratulation--score">
          {info}
        </p>
        <img
          className={classImg}
          src="assets/media/congratulation--img.png"
          alt="You WINNER!"
        />
        <p className="congratulation--caption">
          {caption}
        </p>
      </div>
    );
  }
}

export default CongratPage;
