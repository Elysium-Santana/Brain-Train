import React, { useEffect, useRef } from 'react';
import styles from '../utilities/Utilities.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import NavButton from '../utilities/NavButton';
import { useState } from 'react';
import { questions } from '../../Questions';
import style from './ChooseTheme.module.css';

const CreateNewQuestion = ({
  toHome,
  setData,
  setMessage,
  messageTexts,
  data,
  setBackground_color,
  IndexFormQuestion,
}) => {
  const [question, setQuestion] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [wrongAnswer_1, setWrongAnswer_1] = useState('');
  const [wrongAnswer_2, setWrongAnswer_2] = useState('');
  const [wrongAnswer_3, setWrongAnswer_3] = useState('');
  const [theme, setTheme] = useState();
  const { type } = useParams();
  const textAreaFocus = useRef(null);
  useEffect(() => {
    setBackground_color(style.create);
    function editQuestion() {
      if (type === 'edit_213715' && data) {
        setTheme(data[0]?.theme);
        setQuestion(data[0].questions[IndexFormQuestion].question);
        setCorrectAnswer(
          data && data[0].questions[IndexFormQuestion].correctAnswer,
        );

        const options = data[0].questions[IndexFormQuestion].options.filter(
          (item) => item !== data[0].questions[IndexFormQuestion].correctAnswer,
        );

        setWrongAnswer_1(options[0]);
        setWrongAnswer_2(options[1]);
        setWrongAnswer_3(options[2]);
      }
    }
    editQuestion();
    setData(null);
  }, []);

  // function idMaker() {
  //   const id = question[0].reduce((a, c) => {
  //     return a > c.id ? a : c.id;
  //   }, 0);
  //   return id + 1;
  // }

  function handleSubmit(event) {
    event.preventDefault();
    const index = questions.customQuestions.findIndex((item) =>
      type !== 'edit_213715' ? item.theme === type : item.theme === theme,
    );

    const options = [
      wrongAnswer_1,
      wrongAnswer_2,
      wrongAnswer_3,
      correctAnswer,
    ];
    let equalAnsverCheck = options.filter((item) => {
      return options.indexOf(item) !== options.lastIndexOf(item);
    });
    if (equalAnsverCheck.length === 0) {
      let item = {
        question: question,
        options: options,
        correctAnswer: correctAnswer,
        id: '1',
        points: 0,
        repeat: 3,
        date: '1111-11-11',
      };
      questions.customQuestions[index].questions.push(item);
      type === 'edit_213715' &&
        questions.customQuestions[index].questions.splice(IndexFormQuestion, 1);
      setCorrectAnswer('');
      setWrongAnswer_1('');
      setWrongAnswer_2('');
      setWrongAnswer_3('');
      setQuestion('');
      setData([questions.customQuestions[index]]);
      textAreaFocus.current.focus();
      localStorage.setItem('definidas', JSON.stringify(questions));
      setMessage(messageTexts[5]);
    } else {
      setMessage(messageTexts[4]);
    }
  }

  return (
    <form style={{ width: '100%' }}>
      <textarea
        ref={textAreaFocus}
        className={styles.questionEdit}
        cols="30"
        rows="10"
        placeholder="Escreva sua Pergunta"
        value={question}
        onChange={({ target }) => setQuestion(target.value)}
      ></textarea>
      <input
        style={{ color: 'green' }}
        type="text"
        className={styles.answerEditInput}
        placeholder="Sua resposta CERTA"
        value={correctAnswer}
        onChange={({ target }) => setCorrectAnswer(target.value)}
      />
      <input
        type="text"
        style={{ color: 'red' }}
        className={styles.answerEditInput}
        placeholder="Sua resposta ERRADA"
        value={wrongAnswer_1}
        onChange={({ target }) => setWrongAnswer_1(target.value)}
      />
      <input
        type="text"
        style={{ color: 'red' }}
        className={styles.answerEditInput}
        placeholder="Sua resposta ERRADA"
        value={wrongAnswer_2}
        onChange={({ target }) => setWrongAnswer_2(target.value)}
      />
      <input
        type="text"
        style={{ color: 'red' }}
        className={styles.answerEditInput}
        placeholder="Sua resposta ERRADA"
        value={wrongAnswer_3}
        onChange={({ target }) => setWrongAnswer_3(target.value)}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2rem 0',
          gap: '1rem',
          width: '100%',
        }}
      >
        <NavButton
          children={'Criar'}
          onClick={handleSubmit}
          disabled={
            !question ||
            !correctAnswer ||
            !wrongAnswer_1 ||
            !wrongAnswer_2 ||
            !wrongAnswer_3
          }
        />
        <NavButton
          style={data && { color: 'green' }}
          children={data ? 'Começar!' : 'Cancelar'}
          onClick={(event) => {
            event.preventDefault();
            data ? toHome('/ChooseTheme/customs/form') : toHome('/');
          }}
        />
      </div>
    </form>
  );
};

export default CreateNewQuestion;
