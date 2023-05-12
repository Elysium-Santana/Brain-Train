import React, { useState } from 'react';
import styles from '../utilities/Utilities.module.css';
import style from '../Pages/ChooseTheme.module.css';
import { useNavigate } from 'react-router-dom';

const ThemeList = ({ data, setData, setMessage, setBackground_color }) => {
  const navigate = useNavigate();
  const atualDate = new Date();
  atualDate.setHours(0, 0, 0, 0);
  console.log(atualDate);
  let selectQuestions;
  function selectTheme({ target }) {
    selectQuestions = false;
    let selectTheme = data.filter((item) => item.theme === target.value);
    selectQuestions = selectTheme[0].questions.filter((item) => {
      item.options.sort(() => Math.random() - 0.5);
      item.repeat = 3;
      const questionDate = new Date(item.date);
      return questionDate < atualDate;
    });

    console.log(selectQuestions);

    if (selectQuestions.length > 0) {
      setData([
        {
          theme: selectTheme[0].theme,
          questions: selectQuestions,
        },
      ]);
      navigate('form');
      setMessage('Vamos começar!!');
      setBackground_color(style.train);
    } else {
      // setData(null);
      setMessage('Não há nenhum treino  pendente com esse tema para hoje!');
      selectQuestions = false;
    }
  }

  return (
    <ul>
      {data &&
        data.map((item, index) => (
          <input
            className={styles.linkButton_1}
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
