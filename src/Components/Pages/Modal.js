import { useState } from 'react';
import NavButton from '../utilities/NavButton';
import { questions } from '../../Questions';
import AnswerEditInput from '../utilities/AnswerEditInput';
import styles from './Home.module.css';
import Boxbuttons from './Boxbuttons';

const Modal = ({
  message,
  setMessage,
  goTo,
  messageTexts,
  setBackground_color,
  deleteQuestion,
  data,
  deleteTheme,
  setData,
}) => {
  const [themeValue, setThemeValue] = useState('');

  function handleCreate() {
    questions.customQuestions.push({
      theme: themeValue,
      questions: [],
    });
    setMessage(null);
    setData(null);
    goTo(`create/${themeValue}`);
    setBackground_color(styles.create);
  }

  return (
    <>
      <section
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          top: '0',
          left: '0',
          backgroundColor: 'rgba(0, 0 , 0 , 0.5)',
          padding: '2rem',
          color: '#000',
          zIndex: '10',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.7)',
            padding: '2rem',
            minWidth: '370px',
            maxWidth: '500px',
            borderRadius: '4px',
          }}
        >
          <h1
            style={{
              color: '#555',
              fontSize: '1rem',
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            {message}
          </h1>
          {message === messageTexts[0] && (
            <>
              <AnswerEditInput
                type={'text'}
                maxLength="20"
                onChange={({ target }) => setThemeValue(target.value)}
                value={themeValue}
              />
              <Boxbuttons
                firstChildren={'Sim'}
                firstOnClick={handleCreate}
                firstDisabled={!themeValue}
                secondChildren={'Não'}
                secondOnClick={(event) => {
                  goTo('/');
                }}
              />
            </>
          )}
          {message === messageTexts[1] && (
            <NavButton
              children={'Voltar ao menu principal.'}
              onClick={() => goTo('/')}
            />
          )}
          {message === messageTexts[12] && (
            <NavButton
              children={'Ok'}
              onClick={() => {
                data && data.length === 0
                  ? setMessage(messageTexts[13])
                  : setMessage(null);
              }}
            />
          )}
          {message === messageTexts[13] && (
            <Boxbuttons
              firstChildren={'Sim'}
              firstOnClick={() => {
                setMessage(messageTexts[0]);
              }}
              secondChildren={'Não'}
              secondOnClick={() => {
                setMessage(null);
                goTo('/');
              }}
            />
          )}

          {message === messageTexts[2] ||
          message === messageTexts[14] ||
          message === messageTexts[15] ||
          message === messageTexts[3] ||
          message === messageTexts[4] ||
          message === messageTexts[5] ||
          message === messageTexts[7] ? (
            <NavButton
              children={'Ok'}
              onClick={() => {
                setMessage(null);
                message === messageTexts[7] &&
                  data &&
                  data[0].questions.length === 0 &&
                  setMessage(messageTexts[9]);
              }}
            />
          ) : null}
          {message === messageTexts[9] && (
            <Boxbuttons
              firstChildren={'Sim'}
              firstOnClick={() => {
                setMessage(null);
                goTo(`create/${data[0].theme}`);
              }}
              secondChildren={'Não'}
              secondOnClick={() => {
                setMessage(null);
                goTo('/');
              }}
            />
          )}
          {message === messageTexts[11] && (
            <Boxbuttons
              firstChildren={'Sim'}
              firstOnClick={() => {
                setMessage(null);
                deleteTheme();
              }}
              secondChildren={'Não'}
              secondOnClick={() => {
                setMessage(null);
              }}
            />
          )}
          {message === messageTexts[8] && (
            <NavButton
              children={'Ok'}
              onClick={() => {
                goTo('/Home/customs/form');
                setMessage(null);
              }}
            />
          )}

          {message === messageTexts[6] && (
            <>
              <Boxbuttons
                firstChildren={'Sim'}
                firstOnClick={() => {
                  setMessage(messageTexts[7]);
                  deleteQuestion();
                }}
                secondChildren={'Não'}
                secondOnClick={() => {
                  setMessage(null);
                }}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Modal;
