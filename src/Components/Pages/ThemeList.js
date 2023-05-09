import React, { useState } from 'react';
import style from '../utilities/Utilities.module.css';
import { useNavigate } from 'react-router-dom';

const ThemeList = ({ data, setQuizFiltered, dateFormated }) => {
  const navigate = useNavigate();
  function selectTheme({ target }) {
    const selectTheme = data.filter((item) => item.theme === target.value);
    const selectQuestions = selectTheme[0].questions.filter(
      (item) => item.date === dateFormated,
    );

    setQuizFiltered([
      {
        theme: selectTheme[0].theme,
        questions: selectQuestions,
      },
    ]);
    navigate('form');
  }

  return (
    <ul>
      {data &&
        data.map((item, index) => (
          <input
            className={style.linkButton_1}
            type="button"
            key={index}
            value={item.theme}
            onClick={selectTheme}
          />
        ))}
    </ul>
  );
};

export default ThemeList;
