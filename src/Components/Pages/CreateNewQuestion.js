import React, { useEffect, useRef } from 'react';
import styles from '../utilities/Utilities.module.css';
import { useParams } from 'react-router-dom';
import NavButton from '../utilities/NavButton';
import { useState } from 'react';
import { questions } from '../../Questions';
import background from './ChooseTheme.module.css';
import stylesCreate from './CreateNewQuestion.module.css';

const CreateNewQuestion = ({
  goTo,
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
  const { param } = useParams();

  const textAreaFocus = useRef(null);

  useEffect(() => {
    setBackground_color(background.create);
    function editQuestion() {
      if (param === 'edit' && data) {
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
    // setData(null);
  }, []);

  const filds = [
    question.trim().split(' '),
    correctAnswer.trim().split(' '),
    wrongAnswer_1.trim().split(' '),
    wrongAnswer_2.trim().split(' '),
    wrongAnswer_3.trim().split(' '),
  ];

  function maxChaForWord(word) {
    const WordTest = word.some((item) => {
      const tooBigWord = item.length > 17;
      return tooBigWord;
    });
    return WordTest;
  }

  let tooBigWordsController = filds.some((item) => {
    const tooBigWord = maxChaForWord(item) === true;
    return tooBigWord;
  });

  console.log(tooBigWordsController);

  function handleSubmit(event) {
    event.preventDefault();
    const index = questions.customQuestions.findIndex((item) =>
      param !== 'edit' ? item.theme === param : item.theme === theme,
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
    if (equalAnsverCheck.length === 0 && !tooBigWordsController) {
      let item = {
        question: question,
        options: options,
        correctAnswer: correctAnswer,
        points: 0,
        repeat: 3,
        date: '1111-11-11',
      };
      questions.customQuestions[index].questions.push(item);
      param === 'edit' &&
        questions.customQuestions[index].questions.splice(IndexFormQuestion, 1);
      setCorrectAnswer('');
      setWrongAnswer_1('');
      setWrongAnswer_2('');
      setWrongAnswer_3('');
      setQuestion('');
      setData([questions.customQuestions[index]]);
      textAreaFocus.current.focus();
      localStorage.setItem('definidas', JSON.stringify(questions));
      param === 'edit'
        ? setMessage(messageTexts[8])
        : setMessage(messageTexts[5]);
    } else if (tooBigWordsController) {
      setMessage(messageTexts[14]);
    } else {
      setMessage(messageTexts[4]);
    }
  }

  return (
    <form style={{ width: '100%' }} className={stylesCreate.form}>
      <div className={stylesCreate.questionBox}>
        <textarea
          maxLength="180"
          ref={textAreaFocus}
          className={styles.questionEdit}
          cols="30"
          rows="7"
          placeholder="Escreva sua Pergunta"
          value={question}
          onChange={({ target }) => setQuestion(target.value)}
        ></textarea>
        <span>{question.length + '/180'}</span>
      </div>

      <div className={stylesCreate.answersBox}>
        <li>
          <input
            maxLength="60"
            style={{ color: 'green', border: '2px solid green ' }}
            param="text"
            className={styles.answerEditInput}
            placeholder="Resposta CORRETA"
            value={correctAnswer}
            onChange={({ target }) => setCorrectAnswer(target.value)}
          />
          <span>{correctAnswer.length + '/60'}</span>
        </li>
        <li>
          <input
            maxLength="60"
            param="text"
            style={{ color: 'red', border: '2px solid red ' }}
            className={styles.answerEditInput}
            placeholder="Resposta INCORRETA"
            value={wrongAnswer_1}
            onChange={({ target }) => setWrongAnswer_1(target.value)}
          />
          <span>{wrongAnswer_1.length + '/60'}</span>
        </li>
        <li>
          <input
            maxLength="60"
            param="text"
            style={{ color: 'red', border: '2px solid red ' }}
            className={styles.answerEditInput}
            placeholder="Resposta INCORRETA"
            value={wrongAnswer_2}
            onChange={({ target }) => setWrongAnswer_2(target.value)}
          />
          <span>{wrongAnswer_2.length + '/60'}</span>
        </li>
        <li>
          <input
            maxLength="60"
            param="text"
            style={{ color: 'red', border: '2px solid red ' }}
            className={styles.answerEditInput}
            placeholder="Resposta INCORRETA"
            value={wrongAnswer_3}
            onChange={({ target }) => setWrongAnswer_3(target.value)}
          />
          <span>{wrongAnswer_3.length + '/60'}</span>
        </li>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          width: '100%',
        }}
        className={stylesCreate.buttonsBox}
      >
        <NavButton
          children={param === 'edit' ? 'Editar' : 'Criar'}
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
          // style={data && { color: 'green' }}
          children={data[0].questions.length > 0 ? 'Treinar' : 'voltar ao menu'}
          // children={data ? 'Começar!' : 'Cancelar'}
          onClick={(event) => {
            event.preventDefault();
            data[0].questions.length > 0
              ? goTo('/ChooseTheme/customs/form')
              : goTo('/');
          }}
        />
      </div>
    </form>
  );
};

export default CreateNewQuestion;
