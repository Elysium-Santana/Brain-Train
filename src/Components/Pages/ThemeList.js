import React, { useEffect, useState } from 'react';
import styles from '../utilities/Utilities.module.css';
import style from '../Pages/ChooseTheme.module.css';
import { useNavigate } from 'react-router-dom';

const ThemeList = ({
  data,
  setData,
  setMessage,
  setBackground_color,
  messageTexts,
  chekcCustomOrigin,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    setBackground_color(styles.choose);
  }, []);

  let selectQuestions;
  let selectedTheme;
  const atualDate = new Date();
  atualDate.setHours(0, 0, 0, 0);

  function selectTheme({ target }) {
    chekcCustomOrigin(target.value);
    selectQuestions = false;
    selectedTheme = data.filter((item) => item.theme === target.value);
    selectQuestions = selectedTheme[0].questions.filter((item) => {
      item.options.sort(() => Math.random() - 0.5);
      item.repeat = 3;
      const questionDate = new Date(item.date);
      return questionDate < atualDate;
    });

    if (selectQuestions.length > 0) {
      setData([
        {
          theme: selectedTheme[0].theme,
          questions: selectQuestions,
        },
      ]);
      navigate('form');
      setMessage(messageTexts[2]);
    } else if (selectedTheme[0].questions.length === 0) {
      navigate(`create/${target.value}`);

      console.log('ok');
    } else {
      // setData(null);
      setMessage(messageTexts[3]);
      selectQuestions = false;
    }
  }

  return (
    <ul>
      <h1>Escolha um tema para treinar!</h1>
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
