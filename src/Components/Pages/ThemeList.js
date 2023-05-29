import React, { useEffect, useState } from 'react';
import styles from '../utilities/Utilities.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { questions } from '../../Questions';

const ThemeList = ({
  data,
  setData,
  setMessage,
  setBackground_color,
  messageTexts,
  showDeletables,
  setShowDeletables,
  deletables,
  setDeletables,
}) => {
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
      setData(null);
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

  return (
    <>
      <ul className={styles.themeList}>
        {data &&
          data.map((item, index) => (
            <li
              style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}
              key={index}
            >
              <input
                className={styles.linkButton_1}
                type="button"
                value={item.theme}
                onClick={selectTheme}
              />
              <input
                value={item.theme}
                style={{
                  width: '30px',
                  height: '30px',
                  display: !showDeletables ? 'block' : 'none',
                }}
                type="checkbox"
                checked={deletables.includes(item.theme)}
                name={item.theme}
                onChange={handleChange}
              />
            </li>
          ))}
      </ul>

      {!showDeletables && data && data.length > 0 && (
        <div
          style={{
            gridColumn: '1/-1',
            paddingTop: '1rem',
            borderTop: '2px solid rgba( 0, 0 ,0 ,0.2)',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <input
            style={{ width: '200px' }}
            className={styles.navButton}
            type="button"
            value="Deletar"
            onClick={() => {
              deletables.length > 0 && setMessage(messageTexts[11]);
            }}
          />
        </div>
      )}
    </>
  );
};

export default ThemeList;
