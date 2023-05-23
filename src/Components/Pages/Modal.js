import { useState } from 'react';
import NavButton from '../utilities/NavButton';
import { questions } from '../../Questions';
import AnswerEditInput from '../utilities/AnswerEditInput';
import styles from './ChooseTheme.module.css';
import Boxbuttons from './Boxbuttons';

const Modal = ({
  message,
  setMessage,
  goTo,
  messageTexts,
  setBackground_color,
  chekcCustomOrigin,
}) => {
  const [themeValue, setThemeValue] = useState('');

  function handleCreate(event) {
    // event.preventDefault();
    questions.customQuestions.push({
      theme: themeValue,
      questions: [],
    });
    setMessage(null);
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
            minWidth: '400px',
            borderRadius: '4px',
          }}
        >
          <h1 style={{ color: '#555', fontSize: '1rem', marginBottom: '1rem' }}>
            {message}
          </h1>
          {message === messageTexts[0] && (
            <>
              <AnswerEditInput
                type={'text'}
                onChange={({ target }) => setThemeValue(target.value)}
                value={themeValue}
              />
              <Boxbuttons
                firstChildren={'Sim'}
                firstOnClick={handleCreate}
                firstDisabled={!themeValue}
                secondChildren={'Não'}
                secondOnClick={(event) => {
                  event.preventDefault();
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

          {message === messageTexts[2] ||
          message === messageTexts[3] ||
          message === messageTexts[4] ||
          message === messageTexts[5] ? (
            <NavButton children={'Ok'} onClick={() => setMessage(null)} />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Modal;
