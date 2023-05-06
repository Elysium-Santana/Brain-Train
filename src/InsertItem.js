import React, { useState } from 'react';
import { quizQuestions } from './Questions';

const InsertItem = ({ restart }) => {
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswer_1, setWrongAnswer_1] = useState('');
  const [wrongAnswer_2, setWrongAnswer_2] = useState('');
  const [wrongAnswer_3, setWrongAnswer_3] = useState('');

  function idMaker() {
    const id = quizQuestions.reduce((a, c) => {
      return a > c.id ? a : c.id;
    }, 0);
    return id + 1;
  }

  function handleSubmit(event) {
    event.preventDefault();

    let options = [];
    options.push(wrongAnswer_1, wrongAnswer_2, wrongAnswer_3, correctAnswer);

    let item = {
      question: question,
      options: options.sort(() => Math.random() - 0.5),
      correctAnswer: correctAnswer,
      id: idMaker(),
      pontos: 6,
      repeat: 3,
      date: '',
    };
    quizQuestions.push(item);
    setCorrectAnswer('');
    setWrongAnswer_1('');
    setWrongAnswer_2('');
    setWrongAnswer_3('');
    setQuestion('');
    restart();
    console.log(quizQuestions);
  }

  return (
    <>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
        }}
      >
        <label>Pergunta</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          value={question}
          onChange={({ target }) => setQuestion(target.value)}
        ></textarea>

        <input
          placeholder="Resposta Correta"
          value={correctAnswer}
          onChange={({ target }) => setCorrectAnswer(target.value)}
        />

        <input
          placeholder="Resposta Errada"
          value={wrongAnswer_1}
          type="text"
          onChange={({ target }) => setWrongAnswer_1(target.value)}
        />

        <input
          placeholder="Resposta Errada"
          type="text"
          value={wrongAnswer_2}
          onChange={({ target }) => setWrongAnswer_2(target.value)}
        />

        <input
          placeholder="Resposta Errada"
          type="text"
          value={wrongAnswer_3}
          onChange={({ target }) => setWrongAnswer_3(target.value)}
        />
        <button
          onClick={handleSubmit}
          disabled={
            !question ||
            !correctAnswer ||
            !wrongAnswer_1 ||
            !wrongAnswer_2 ||
            !wrongAnswer_3
          }
        >
          Insert
        </button>
      </form>
    </>
  );
};

export default InsertItem;
