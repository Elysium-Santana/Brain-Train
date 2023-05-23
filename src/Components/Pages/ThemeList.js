import React, { useEffect, useState, useRef } from 'react';
import styles from '../utilities/Utilities.module.css';
import style from '../Pages/ChooseTheme.module.css';
import { json, useLocation, useNavigate } from 'react-router-dom';
import { questions } from '../../Questions';

const ThemeList = ({
  data,
  setData,
  setMessage,
  setBackground_color,
  messageTexts,
  chekcCustomOrigin,
  showDeletables,
  setShowDeletables,
}) => {
  const [deletables, setDeletables] = useState([]);
  const location = useLocation();

  let isCustom = location.pathname.includes('customs');
  const navigate = useNavigate();
  useEffect(() => {
    setBackground_color(styles.choose);
    setShowDeletables(!showDeletables);
  }, []);
  let selectedTheme;

  useEffect(() => {
    if (data && data !== null && isCustom) {
      questions.customQuestions = data;
    }
  }, [data]);

  let selectQuestions;
  const atualDate = new Date();
  atualDate.setHours(0, 0, 0, 0);

  function selectTheme({ target }) {
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
      setMessage(messageTexts[3]);
      selectQuestions = false;
    }
  }

  function handleChange({ target }) {
    const { checked, value } = target;
    if (checked) {
      setDeletables([...deletables, target.value]);
    } else {
      setDeletables(deletables.filter((item) => item !== value));
    }
  }

  function deleteItemTheme() {
    setData(data.filter((item) => !deletables.includes(item.theme)));
    setDeletables([]);
  }

  return (
    <ul className={styles.themeList}>
      {data &&
        data.map((item, index) => (
          <li style={{ display: 'flex', alignContent: 'center' }} key={index}>
            <input
              className={styles.linkButton_1}
              type="button"
              value={item.theme}
              onClick={selectTheme}
            />
            <input
              value={item.theme}
              style={{
                width: '40px',
                height: '40px',
                display: !showDeletables ? 'block' : 'none',
              }}
              type="checkbox"
              checked={deletables.includes(item.theme)}
              name={item.theme}
              onChange={handleChange}
            />
          </li>
        ))}
      <input
        style={{
          padding: '1rem 3rem',
          fontSize: '1.5rem',
          display: !showDeletables ? 'block' : 'none',
        }}
        type="button"
        value="deletar"
        onClick={deleteItemTheme}
      />
    </ul>
  );
};

export default ThemeList;
