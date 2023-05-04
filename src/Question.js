import React, { useEffect, useRef, useState } from 'react';
import { quizQuestions } from './Questions';
import styles from './Question.module.css';

const Question = ({
  question,
  options,
  correctAnswer,
  index,
  setNextIndexQuiz,
  NextIndexQuiz,
  restart,
  filtro,
  pontos,
  id,
}) => {
  const [resposta, setResposta] = useState();
  const [pontuacao, setPontucao] = useState(filtro[index].pontos);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let filtroId = quizQuestions.findIndex((item) => item.id === id);
    console.log(filtroId);
    quizQuestions[filtroId].pontos = pontuacao;
  }, [pontuacao]);

  let intervalId;
  let timeInterval = 90;

  function colorOcilation() {
    if (timeInterval > 41) {
      timeInterval -= 4;
      intervalId = setTimeout(() => {
        setShow((show) => !show);
        colorOcilation();
      }, timeInterval);
    } else {
      goNextQuestion();
    }
  }

  function goNextQuestion() {
    setTimeout(
      () =>
        NextIndexQuiz < filtro.length - 1
          ? setNextIndexQuiz(NextIndexQuiz + 1)
          : restart(),

      [500],
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (resposta === correctAnswer) {
      setPontucao(pontuacao + 1);
      console.log('Acertou!!!');
    } else {
      console.log('Resposta Errada!!!');
      setPontucao(pontuacao - 2);
    }

    colorOcilation();
  }

  return (
    <form className={styles.questBox}>
      <h1> Pontuaçao: {pontos}</h1>

      <h1>{question}</h1>

      <div>
        {filtro &&
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
  );
};

export default Question;
