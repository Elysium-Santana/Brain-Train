import React, { useEffect, useState } from 'react';
import TextBlock from '../utilities/TextBlock';
import AnswerInput from '../utilities/AnswerInput';
import NavButton from '../utilities/NavButton';
import styles from '../utilities/Utilities.module.css';
import { pre_definidas } from '../../Questions';
import { customQuestions } from '../../Questions';

const TrainForm = ({ quizFiltered, toHome }) => {
  const [answer, setAnswer] = useState();
  const [data, setData] = useState(quizFiltered && quizFiltered[0]);
  const [date, setDate] = useState();
  const [nexDate, setNexDate] = useState();
  const [nextIndexTrain, setnextIndexTrain] = useState(0);
  const [showAnswer, setshowAnswer] = useState(null);
  const [localRepeat, setLocalRepeat] = useState(null);
  const [localPoits, setLocalPoits] = useState(null);
  let timeInterval = 80;

  useEffect(() => {
    !quizFiltered && toHome();
  }, []);

  function restart() {
    let filter = data.questions.filter((item) => item.repeat > 0);
    filter.length > 0 && setData({ theme: data.theme, questions: filter });
  }

  useEffect(() => {
    if (data) {
      let filterThemeId = pre_definidas.findIndex(
        (item) => item.theme === data.theme,
      );
      let tiny = '[filterThemeId].questions[nextIndexTrain]';
      if (filterThemeId === -1 && localRepeat !== null) {
        filterThemeId = customQuestions.findIndex(
          (item) => item.theme === data.theme,
        );
        customQuestions[filterThemeId].questions[nextIndexTrain].points =
          localPoits;
        if (nexDate) {
          customQuestions[filterThemeId].questions[nextIndexTrain].date =
            nexDate;
        }
      } else if (localRepeat !== null) {
        pre_definidas[filterThemeId].questions[nextIndexTrain].points =
          localPoits;
        if (nexDate) {
          pre_definidas[filterThemeId].questions[nextIndexTrain].date = nexDate;
        }
      }
      if (localRepeat !== null) {
        data.questions[nextIndexTrain].repeat = localRepeat;
      }
      dateAdd();
    }
  }, [localPoits]);

  useEffect(() => {
    setLocalPoits(data && data.questions[nextIndexTrain].points);
    setLocalRepeat(data && data.questions[nextIndexTrain].repeat);
  }, [nextIndexTrain]);

  function dateAdd() {
    const dataAtual = new Date();
    const nextDate = new Date();
    let diasAdicionais;
    if (localPoits > 6) {
      diasAdicionais = 15;
    } else if (localPoits > 3) {
      diasAdicionais = 5;
    } else {
      diasAdicionais = 1;
    }
    dataAtual.setDate(dataAtual.getDate());
    nextDate.setDate(dataAtual.getDate() + diasAdicionais);
    function formatDate(date) {
      const dia = date.getDate().toString().padStart(2, '0');
      const mes = (date.getMonth() + 1).toString().padStart(2, '0');
      const ano = date.getFullYear();
      return `${dia}/${mes}/${ano}`;
    }
    setDate(formatDate(nextDate));
    setNexDate(formatDate(nextDate));
  }

  function handleSubmit(item, indexTrain) {
    if (indexTrain === 'next') {
      answer
        ? colorOcilation()
        : nextIndexTrain < data.questions.length - 1 &&
          setnextIndexTrain(nextIndexTrain + 1);
      if (item.correctAnswer === answer && answer) {
        setLocalPoits(localPoits + 1);
        setLocalRepeat(localRepeat - 1);
      } else if (answer) {
        setLocalRepeat(localRepeat + 1);
        setLocalPoits(localPoits - 2);
      }
    } else if (indexTrain === 'back' && nextIndexTrain > 0) {
      setnextIndexTrain(nextIndexTrain - 1);
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
        goNextQuestion();
      }, 600);
    }
  }

  function goNextQuestion() {
    setAnswer();
    setshowAnswer(null);
    if (nextIndexTrain < data.questions.length - 1) {
      setnextIndexTrain(nextIndexTrain + 1);
    } else {
      restart();
      setnextIndexTrain(0);
    }
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* <h1>{'index: ' + nextIndexTrain}</h1> */}
        <h1>{`Data: ${nexDate}`}</h1>
        <h1>{' Repeat : ' + localRepeat}</h1>
        <h1>{' Pontos: ' + localPoits}</h1>
      </div>

      {data &&
        data.questions.map(
          (item, index) =>
            index === nextIndexTrain && (
              <section key={index}>
                <TextBlock
                  children={item.question}
                  cha={item.question.length}
                />
                {item.options.map((itemOptions, indexOptions) => (
                  <AnswerInput
                    cha={itemOptions.le}
                    showAnsver={
                      showAnswer &&
                      (itemOptions === item.correctAnswer
                        ? `${styles.correct}`
                        : `${styles.wrong}`)
                    }
                    key={indexOptions}
                    label={itemOptions}
                    type={'radio'}
                    name={'quest'}
                    value={answer}
                    checked={answer === itemOptions}
                    onChange={() => setAnswer(itemOptions)}
                  />
                ))}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                  }}
                >
                  <NavButton
                    children={'Voltar'}
                    onClick={() => handleSubmit(item, 'back')}
                    disabled={nextIndexTrain === 0 || showAnswer !== null}
                  />
                  <NavButton
                    disabled={
                      showAnswer !== null ||
                      (data.questions.length - 1 === nextIndexTrain && !answer)
                    }
                    children={'Avançar'}
                    onClick={() => handleSubmit(item, 'next')}
                  />
                </div>
              </section>
            ),
        )}
    </>
  );
};

export default TrainForm;
