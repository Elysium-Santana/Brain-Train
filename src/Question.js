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
  filter,
  repeat,
  id,
}) => {
  const [resposta, setResposta] = useState();
  const [pontuacao, setPontucao] = useState(filter[index].pontos);
  const [filterRepeat, setFilterRepeat] = useState(filter[index].repeat);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState();

  useEffect(() => {
    let filterId = quizQuestions.findIndex((item) => item.id === id);
    quizQuestions[filterId].pontos = pontuacao;
    filter[index].repeat = filterRepeat;

    if (date) {
      quizQuestions[filterId].date = date;
    }
    dateAdd();
  }, [pontuacao]);

  function dateAdd() {
    const dataAtual = new Date();
    let diasAdicionais = 1;
    if (pontuacao > 3) {
      diasAdicionais = 15;
    } else if (pontuacao > 2) {
      diasAdicionais = 5;
    } else if (pontuacao > 1) {
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
        setShow((show) => !show);
        colorOcilation();
      }, timeInterval);
    } else {
      setTimeout(() => {
        goNextQuestion();
      }, 600);
    }
  }

  function goNextQuestion() {
    setResposta();

    if (NextIndexQuiz < filter.length - 1) {
      setNextIndexQuiz(NextIndexQuiz + 1);
    } else {
      restart();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (resposta === correctAnswer) {
      setPontucao(pontuacao + 1);
      setFilterRepeat(filterRepeat - 1);
    } else {
      setFilterRepeat(filterRepeat + 1);
      setPontucao(pontuacao - 2);
    }
    colorOcilation();
  }

  return (
    <>
      <InsertItem restart={restart} />
      <form className={styles.questBox}>
        <h1> Pontuaçao: {pontuacao}</h1>
        <h1> Data: {date}</h1>
        <h1> Repeat: {repeat}</h1>

        <h1>{question}</h1>

        <div>
          {filter.length > 0 &&
            options.map((item) => (
              <label
                className={`${styles.text} ${
                  show && (item === correctAnswer ? styles.yes : styles.no)
                } `}
                name="quest"
                key={item}
              >
                {item}{' '}
                <input
                  className={styles.radio}
                  name="quest"
                  type="radio"
                  value={resposta}
                  checked={resposta === item}
                  onChange={() => setResposta(item)}
                />
              </label>
            ))}
          <button disabled={!resposta} onClick={handleSubmit}>
            Confirmar{' '}
          </button>
        </div>
      </form>
    </>
  );
};

export default Question;
