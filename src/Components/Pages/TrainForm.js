import React, { useEffect, useState } from 'react';
import TextBlock from '../utilities/TextBlock';
import AnswerInput from '../utilities/AnswerInput';
import NavButton from '../utilities/NavButton';
import styles from '../utilities/Utilities.module.css';
import { questions } from '../../Questions';

const TrainForm = ({ toHome, data, setMessage }) => {
  const [answer, setAnswer] = useState();
  const [themeSelected, setThemeSelected] = useState(data && data[0]);
  const [date, setDate] = useState(null);
  const [nexDate, setNexDate] = useState();
  const [nextIndexTrain, setnextIndexTrain] = useState(0);
  const [showAnswer, setshowAnswer] = useState(null);
  const [localRepeat, setLocalRepeat] = useState(null);
  const [localPoits, setLocalPoits] = useState(null);
  let timeInterval = 80;
  let filter;

  useEffect(() => {
    !themeSelected && toHome();
  }, []);

  useEffect(() => {
    if (themeSelected) {
      if (localPoits !== null) {
        themeSelected.questions[nextIndexTrain].points = localPoits;
      }
      if (nexDate && answer) {
        themeSelected.questions[nextIndexTrain].date = nexDate;
      }
      if (localRepeat !== null) {
        themeSelected.questions[nextIndexTrain].repeat = localRepeat;
      }
    }

    dateAdd();
  }, [localPoits]);

  useEffect(() => {
    setLocalPoits(
      themeSelected && themeSelected.questions[nextIndexTrain].points,
    );
    setLocalRepeat(
      themeSelected && themeSelected.questions[nextIndexTrain].repeat,
    );
  }, [nextIndexTrain]);

  function restart() {
    filter = themeSelected.questions.filter((item) => {
      item.options.sort(() => Math.random() - 0.5);
      return item.repeat > 0;
    });

    if (filter.length > 0) {
      setThemeSelected({ theme: themeSelected.theme, questions: filter });
      console.log(questions);
    } else {
      setThemeSelected(null);
      console.log('foi');
      localStorage.setItem('definidas', JSON.stringify(questions));
    }
  }

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
      return `${ano}-${mes}-${dia}`;
    }
    setDate(formatDate(nextDate));
    setNexDate(formatDate(nextDate));
  }

  function handleSubmit(item, indexTrain) {
    const acertoMessages = [
      'Boa, você é fera!',
      'Acertô miseravi! :D',
      'Uau, mandou bem!',
      'Show de bola! Acertou direitinho!',
    ];
    const erroMessages = [
      'Errou feio, hein?',
      'Todo mundo erraaaa ♫',
      'Não foi dessa vez!',
      'Errou, mas não desista!',
      'Todo mundo erraaaa ♫',
    ];

    if (indexTrain === 'next') {
      answer
        ? colorOcilation()
        : nextIndexTrain < themeSelected.questions.length - 1 &&
          setnextIndexTrain(nextIndexTrain + 1);
      if (item.correctAnswer === answer && answer) {
        setMessage(
          acertoMessages[Math.floor(Math.random() * acertoMessages.length)],
        );
        setLocalPoits(localPoits + 1);
        setLocalRepeat(localRepeat - 1);
      } else if (answer) {
        setMessage(
          erroMessages[Math.floor(Math.random() * erroMessages.length)],
        );
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
    const proximaPerguntaMessages = [
      'Essa é fácil ou difícil?',
      'Achou fácil?',
      'Sabe a resposta?',
      'Vamos lá!',
    ];
    setMessage(
      proximaPerguntaMessages[
        Math.floor(Math.random() * proximaPerguntaMessages.length)
      ],
    );
    setAnswer();
    setshowAnswer(null);
    if (nextIndexTrain < themeSelected.questions.length - 1) {
      setnextIndexTrain(nextIndexTrain + 1);
    } else {
      setnextIndexTrain(0);
      restart();
    }
  }
  return (
    <>
      {themeSelected && (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* <h1>{'index: ' + nextIndexTrain}</h1> */}
          <h1>{`Data: ${themeSelected.questions[nextIndexTrain].date
            .split('-')
            .reverse()
            .join('/')}`}</h1>

          <h1>{' Repeat : ' + localRepeat}</h1>
          <h1>{' Pontos: ' + localPoits}</h1>
        </div>
      )}

      {themeSelected &&
        themeSelected.questions.map(
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
                      (themeSelected.questions.length - 1 === nextIndexTrain &&
                        !answer)
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
