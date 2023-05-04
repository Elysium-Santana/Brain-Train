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
}) => {
  const [resposta, setResposta] = useState();
  const [pontuacao, setPontucao] = useState(quizQuestions[index].pontos);
  const [show, setShow] = useState(null);
  const textRef = useRef(null);

  useEffect(() => {
    quizQuestions[index].pontos = pontuacao;
  }, [pontuacao]);

  const finaly = quizQuestions.every((item) => item.pontos > 1);

  function handleSubmit(event) {
    event.preventDefault();
    setShow(true);

    if (resposta === correctAnswer) {
      // setPontucao(pontuacao + 1);
      console.log('Acertou!!!');
    } else {
      console.log('Resposta Errada!!!');
      // setPontucao(pontuacao - 2);
    }

    setTimeout(
      () =>
        NextIndexQuiz < quizQuestions.length - 1
          ? setNextIndexQuiz(NextIndexQuiz + 1)
          : !finaly && setNextIndexQuiz(0),
      [500],
    );
  }

  return (
    <form className={styles.questBox}>
      <h1> Pontuaçao: {resposta}</h1>

      <h1>{question}</h1>

      <div>
        {options.map((item) => (
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
        <button disabled={!resposta || finaly} onClick={handleSubmit}>
          Confirmar{' '}
        </button>
      </div>
    </form>
  );
};

export default Question;
