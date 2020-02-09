import React, { Component } from 'react';

import './Button.styles.scss';

class Button extends Component {
  render() {
    const { goNextStage, isNext } = this.props;
    return (
      <button className={isNext ? 'button button-active' : 'button'} onClick={goNextStage} type="button">
        Далее
      </button>
    );
  }
}

export default Button;
