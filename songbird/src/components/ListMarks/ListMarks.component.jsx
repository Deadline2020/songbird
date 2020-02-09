import React, { Component } from 'react';

import './ListMarks.styles.scss';

class ListMarks extends Component {
  render() {
    const { activeMark } = this.props;
    const listMarks = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

    return (
      <ul className="list_marks">
        {listMarks.map((item, ind) => {
          const liClassName = (activeMark === ind) ? 'list_marks--mark list_marks--mark-active' : 'list_marks--mark';
          return (
            <li className={liClassName} key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListMarks;
