import { useState } from 'react';
import NavButton from '../utilities/NavButton';
import { questions } from '../../Questions';
import AnswerEditInput from '../utilities/AnswerEditInput';
import styles from './ChooseTheme.module.css';

const Modal = ({
  message,
  setMessage,
  toHome,
  messageTexts,
  setBackground_color,
  chekcCustomOrigin,
}) => {
  const [themeValue, setThemeValue] = useState('');

  function handlesubmit(event) {
    event.preventDefault();
    questions.customQuestions.push({
      theme: themeValue,
      questions: [],
    });
    setMessage(null);
    toHome(`create/${themeValue}`);
    setBackground_color(styles.create);
    chekcCustomOrigin(themeValue);
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
        }}
      >
        <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: 400 }}>
          {message}
        </h1>
        {message === messageTexts[1] ? (
          <NavButton
            children={'Voltar ao menu principal.'}
            onClick={() => toHome('/')}
          />
        ) : message === messageTexts[0] ? (
          <>
            <AnswerEditInput
              type={'text'}
              onChange={({ target }) => setThemeValue(target.value)}
              value={themeValue}
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
                children={'Sim'}
                onClick={handlesubmit}
                disabled={!themeValue}
              />
              <NavButton
                children={'Não'}
                onClick={(event) => {
                  event.preventDefault();
                  toHome('/');
                }}
              />
            </div>
          </>
        ) : message === messageTexts[5] ? (
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
              children={'OK'}
              onClick={(event) => {
                event.preventDefault();
                setMessage(null);
              }}
            />
          </div>
        ) : (
          <NavButton children={'Ok'} onClick={() => setMessage(null)} />
        )}
      </section>
    </>
  );
};

export default Modal;
