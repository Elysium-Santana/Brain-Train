import React, { useEffect, useState } from 'react';
import { quizQuestions } from './Questions';
import styles from './Question.module.css';
import InsertItem from './InsertItem';

const Question = ({
  question,
  options,
  correctAnswer,
  index,
  setNextIndexQuiz,
  NextIndexQuiz,
  restart,
  quizFiltered,
  repeat,
  id,
}) => {
  const [answer, setAnswer] = useState();
  const [localPoits, setLocalPoits] = useState(quizFiltered[index].poits);
  const [filterRepeat, setFilterRepeat] = useState(quizFiltered[index].repeat);
  const [showAnswers, setshowAnswers] = useState(false);
  const [date, setDate] = useState();

  useEffect(() => {
    let filterId = quizQuestions.findIndex((item) => item.id === id);
    quizQuestions[filterId].poits = localPoits;
    quizFiltered[index].repeat = filterRepeat;

    if (date) {
      quizQuestions[filterId].date = date;
    }
    dateAdd();
  }, [localPoits]);

  function dateAdd() {
    const dataAtual = new Date();
    let diasAdicionais = 1;
    if (localPoits > 3) {
      diasAdicionais = 15;
    } else if (localPoits > 2) {
      diasAdicionais = 5;
    } else if (localPoits > 1) {
      diasAdicionais = 1;
    }
    dataAtual.setDate(dataAtual.getDate() + diasAdicionais);

    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataAtual.getFullYear();

    setDate(`${dia}/${mes}/${ano}`);
  }

  let timeInterval = 80;
  function colorOcilation() {
    if (timeInterval > 41) {
      timeInterval -= 3;
      setTimeout(() => {
        setshowAnswers((showAnswers) => !showAnswers);
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

    if (NextIndexQuiz < quizFiltered.length - 1) {
      setNextIndexQuiz(NextIndexQuiz + 1);
    } else {
      restart();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (answer === correctAnswer) {
      setLocalPoits(localPoits + 1);
      setFilterRepeat(filterRepeat - 1);
    } else {
      setFilterRepeat(filterRepeat + 1);
      setLocalPoits(localPoits - 2);
    }
    colorOcilation();
  }

  return (
    <>
      <InsertItem restart={restart} />
      <form className={styles.questBox}>
        <h1> Pontuaçao: {localPoits}</h1>
        <h1> Data: {date}</h1>
        <h1> Repeat: {repeat}</h1>

        <h1>{question}</h1>

        <div>
          {quizFiltered.length > 0 &&
            options.map((item) => (
              <label
                className={`${styles.text} ${
                  showAnswers &&
                  (item === correctAnswer ? styles.yes : styles.no)
                } `}
                name="quest"
                key={item}
              >
                {item}{' '}
                <input
                  className={styles.radio}
                  name="quest"
                  type="radio"
                  value={answer}
                  checked={answer === item}
                  onChange={() => setAnswer(item)}
                />
              </label>
            ))}
          <button disabled={!answer} onClick={handleSubmit}>
            Confirmar{' '}
          </button>
        </div>
      </form>
    </>
  );
};

export default Question;
