import React, { useEffect, useState } from 'react';
import TextBlock from '../utilities/TextBlock';
import AnswerInput from '../utilities/AnswerInput';
import NavButton from '../utilities/NavButton';
import styles from '../utilities/Utilities.module.css';
import stylesForm from '../Pages/TrainForm.module.css';
import background from './Home.module.css';
import { questions } from '../../Questions';
import Icons from '../utilities/Icons';
import { useLocation } from 'react-router-dom';

const TrainForm = ({
  goTo,
  data,
  setMessage,
  messageTexts,
  setBackground_color,
  setIndexFormQuestion,
  IndexFormQuestion,
  localRepeat,
  setLocalRepeat,
}) => {
  const [answer, setAnswer] = useState();
  const [themeSelected, setThemeSelected] = useState(data && data[0]);
  const [nexDate, setNexDate] = useState();
  const [showAnswer, setshowAnswer] = useState(null);
  const [localPoits, setLocalPoits] = useState(null);
  const [enterAnimate, setEnterAnimate] = useState();
  const location = useLocation();
  let timeInterval = 80;
  let filter;

  useEffect(() => {
    setBackground_color(background.train);
    !themeSelected && goTo('/');
    setEnterAnimate(true);
  }, []);

  useEffect(() => {
    if (location.pathname.includes('customs') && data) {
      setThemeSelected(data && data[0]);
      const themes = questions.customQuestions.filter(
        (item) => item.theme !== data[0].theme,
      );
      questions.customQuestions = [data[0], ...themes];
    }
  }, [data]);

  useEffect(() => {
    if (themeSelected) {
      if (localPoits !== null) {
        themeSelected.questions[IndexFormQuestion].points = localPoits;
      }
      if (nexDate && answer) {
        themeSelected.questions[IndexFormQuestion].date = nexDate;
      }
      if (localRepeat !== null) {
        themeSelected.questions[IndexFormQuestion].repeat = localRepeat;
      }
    }

    dateAdd();
  }, [localPoits]);

  useEffect(() => {
    setLocalPoits(
      themeSelected && themeSelected.questions[IndexFormQuestion].points,
    );
    setLocalRepeat(
      themeSelected && themeSelected.questions[IndexFormQuestion].repeat,
    );
  }, [IndexFormQuestion]);

  function restart() {
    filter = themeSelected.questions.filter((item) => {
      item.options.sort(() => Math.random() - 0.5);
      return item.repeat > 0 || item.point < 1;
    });

    if (filter.length > 0) {
      setThemeSelected({ theme: themeSelected.theme, questions: filter });
    } else {
      setThemeSelected(null);
      setMessage(messageTexts[1]);
      localStorage.setItem('defined', JSON.stringify(questions));
    }
  }

  function dateAdd() {
    const dataAtual = new Date();
    const nextDate = new Date();
    let diasAdicionais = 0;
    if (localPoits > 6) {
      diasAdicionais = 0;
    } else if (localPoits > 3) {
      diasAdicionais = 0;
    } else if (localPoits > 1) {
      diasAdicionais = 0;
    }
    nextDate.setDate(dataAtual.getDate() + diasAdicionais);
    function formatDate(date) {
      const dia = date.getDate().toString().padStart(2, '0');
      const mes = (date.getMonth() + 1).toString().padStart(2, '0');
      const ano = date.getFullYear();
      return `${ano}-${mes}-${dia}`;
    }
    setNexDate(formatDate(nextDate));
  }

  function handleSubmit(item, indexTrain) {
    if (indexTrain === 'next') {
      answer
        ? colorOcilation()
        : IndexFormQuestion < themeSelected.questions.length - 1 &&
          setIndexFormQuestion(IndexFormQuestion + 1);
      if (item.correctAnswer === answer && answer && localPoits < 10) {
        setLocalPoits(localPoits + 1);
        setLocalRepeat(localRepeat - 1);
      } else if (answer) {
        setLocalRepeat(localRepeat + 1);
        setLocalPoits(localPoits - 2);
      }
    } else if (indexTrain === 'back' && IndexFormQuestion > 0) {
      setIndexFormQuestion(IndexFormQuestion - 1);
      setAnswer();
    }
  }

  function colorOcilation() {
    if (timeInterval > 41) {
      timeInterval -= 3;
      setTimeout(() => {
        setshowAnswer((showAnswer) => !showAnswer);
        colorOcilation();
      }, timeInterval);
    } else {
      setTimeout(() => {
        setEnterAnimate(null);
        animateTime();
      }, 600);
    }
  }
  function animateTime() {
    setTimeout(() => {
      goNextQuestion();
      setTimeout(() => {
        setEnterAnimate(true);
      }, 200);
    }, 500);
  }
  function goNextQuestion() {
    setAnswer();
    setshowAnswer(null);
    if (IndexFormQuestion < themeSelected.questions.length - 1) {
      setIndexFormQuestion(IndexFormQuestion + 1);
    } else {
      setIndexFormQuestion(0);
      restart();
    }
  }

  return (
    <>
      {themeSelected &&
        themeSelected.questions.length > 0 &&
        themeSelected.questions.map(
          (item, index) =>
            index === IndexFormQuestion && (
              <section key={index} className={stylesForm.section}>
                <div className={stylesForm.question}>
                  <TextBlock
                    enterAnimate={enterAnimate && `${styles.active}`}
                    children={item.question}
                    cha={item.question.length}
                  />
                </div>
                <div className={stylesForm.answerBox}>
                  {item.options.map((itemOptions, indexOptions) => (
                    <AnswerInput
                      enterAnimate={enterAnimate && `${styles.active}`}
                      showAnsver={
                        showAnswer &&
                        (itemOptions === item.correctAnswer
                          ? `${styles.correct}`
                          : `${styles.wrong}`)
                      }
                      key={indexOptions}
                      index={indexOptions}
                      label={itemOptions}
                      type={'radio'}
                      name={'quest'}
                      value={answer}
                      checked={answer === itemOptions}
                      onChange={() => setAnswer(itemOptions)}
                    />
                  ))}
                </div>
                <div
                  className={stylesForm.boxButtons}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <NavButton
                    children={'Voltar'}
                    onClick={() => handleSubmit(item, 'back')}
                    disabled={IndexFormQuestion === 0 || showAnswer !== null}
                    backIcon={
                      <Icons
                        children={`${
                          IndexFormQuestion === 0 ? 'lock' : 'arrow_back_ios'
                        }`}
                      />
                    }
                  />
                  <NavButton
                    style={answer && { color: 'green' }}
                    disabled={
                      showAnswer !== null ||
                      (themeSelected.questions.length - 1 ===
                        IndexFormQuestion &&
                        !answer)
                    }
                    onClick={() => handleSubmit(item, 'next')}
                    children={answer ? 'Confirmar' : 'Avançar'}
                    frontIcon={
                      !answer && (
                        <Icons
                          children={`${
                            themeSelected.questions.length - 1 !==
                            IndexFormQuestion
                              ? 'arrow_forward_ios'
                              : 'lock'
                          }`}
                        />
                      )
                    }
                    backIcon={answer && <Icons children={'ads_click'} />}
                  />
                </div>
              </section>
            ),
        )}
    </>
  );
};

export default TrainForm;
