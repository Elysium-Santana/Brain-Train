import React, { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import styles from './ChooseTheme.module.css';
import style from '../utilities/Utilities.module.css';
import TrainForm from './TrainForm';
import Icons from '../utilities/Icons';
import NavButton_2 from '../utilities/NavButton_2';
import BaseGlass from '../utilities/BaseGlass';
import ThemeList from './ThemeList';
import { questions } from '../../Questions';
import Modal from './Modal';
import CreateNewQuestion from './CreateNewQuestion';

const ChooseTheme = () => {
  const [background_color, setBackground_color] = useState();
  const [data, setData] = useState(null);
  const [message, setMessage] = useState();
  const [IndexFormQuestion, setIndexFormQuestion] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(null);
  const [showDeletables, setShowDeletables] = useState(null);
  const location = useLocation();

  const messageTexts = [
    'Crie um tema para seu treino diário.',
    'Desafio concluído.',
    'Vamos começar!!',
    'Nenhuma pendência com esse tema para hoje. Escolha outro tema ou tente mais tarde.',
    'Dados Repetidos. Por favor, cheque as respostas.',
    'Pergunta adicionada com sucesso!',
  ];

  const navigate = useNavigate();
  const { type } = useParams();

  useEffect(() => {
    setBackground_color(styles.choose);
    type === 'predefined' && setData(questions.pre_definidas);
    type === 'allTrains' &&
      setData([...questions.pre_definidas, ...questions.customQuestions]);
    type === 'customs' && setData(questions.customQuestions);
    type === 'create' && setMessage(messageTexts[0]);
  }, []);

  // function OriginAndThemeTCatch(name) {
  //   let origin = questions.pre_definidas.some((item) => item.theme === name);
  //   let indexTeme;
  //   if (origin) {
  //     indexTeme = questions.pre_definidas.findIndex(
  //       (item) => item.theme === name,
  //     );
  //   } else {
  //     indexTeme = questions.customQuestions.findIndex(
  //       (item) => item.theme === name,
  //     );
  //   }

  //   return origin
  //     ? [questions.pre_definidas[indexTeme]]
  //     : [questions.customQuestions[indexTeme]];
  // }
  // console.log(OriginAndThemeTCatch('Javascript'));

  function goTo(place) {
    navigate(place);
  }

  function deleteQuestion() {
    setData([
      {
        theme: data[0].theme,

        questions: data[0].questions.filter(
          (item) => item !== data[0].questions[IndexFormQuestion],
        ),
      },
    ]);
    // setIndexFormQuestion(0);
  }

  return (
    <>
      <section className={`${styles.section} ${background_color}`}>
        <header
          className={styles.header}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.5rem',
          }}
        >
          <NavButton_2
            children={<Icons children={'arrow_back_ios'} />}
            onClick={() => {
              setToggleMenu((toggleMenu) => !toggleMenu);
              setData(null);
              goTo('/');
              //VOLTAR
            }}
          />
          <nav
            style={{
              position: 'relative',
            }}
          >
            <NavButton_2
              children={<Icons children={'settings'} />}
              onClick={() => {
                if (location.pathname.includes('customs')) {
                  setToggleMenu((toggleMenu) => !toggleMenu);
                }
              }}
            />

            <ul
              className={toggleMenu && toggleMenu}
              style={{
                visibility: toggleMenu ? 'visible' : 'hidden',
                display: 'block',
                position: 'absolute',
                backgroundColor: '#fff',
                padding: '0',
                borderRadius: '10px',
                height: toggleMenu ? '300%' : '0%',
                transition: '.2s',
                overflowY: 'hidden',
              }}
            >
              <li style={{ borderBottom: '2px solid #eee' }}>
                <NavButton_2
                  children={<Icons children={'add_circle'} />}
                  value={''}
                  onClick={() => {
                    if (location.pathname.includes('form')) {
                      goTo(`create/${data[0].theme}`);
                    }
                    setToggleMenu((toggleMenu) => !toggleMenu);
                  }}
                />
              </li>
              <li style={{ borderBottom: '2px solid #eee' }}>
                <NavButton_2
                  children={<Icons children={'border_color'} />}
                  value={''}
                  onClick={() => {
                    if (location.pathname.includes('form')) {
                      goTo(`create/edit_213715`);
                    }
                    setToggleMenu((toggleMenu) => !toggleMenu);
                  }}
                />
              </li>
              <li style={{ borderBottom: '2px solid #eee' }}>
                <NavButton_2
                  children={<Icons children={'delete'} />}
                  onClick={() => {
                    setToggleMenu((toggleMenu) => !toggleMenu);

                    !location.pathname.includes('form') &&
                      location.pathname.includes('customs') &&
                      setShowDeletables(() => !showDeletables);

                    location.pathname.includes('form') && deleteQuestion();
                  }}
                />
              </li>
            </ul>
          </nav>
        </header>
        {message && (
          <Modal
            messageTexts={messageTexts}
            message={message}
            setMessage={setMessage}
            goTo={goTo}
            data={data}
            setData={setData}
            setBackground_color={setBackground_color}
          />
        )}
        <div className={style.baseGlass}>
          <Routes>
            <Route
              path="/"
              element={
                <ThemeList
                  data={data}
                  setData={setData}
                  setMessage={setMessage}
                  messageTexts={messageTexts}
                  setBackground_color={setBackground_color}
                  showDeletables={showDeletables}
                  setShowDeletables={setShowDeletables}
                />
              }
            />
            <Route
              path="/create/:type/"
              element={
                <CreateNewQuestion
                  goTo={goTo}
                  setData={setData}
                  setMessage={setMessage}
                  messageTexts={messageTexts}
                  setBackground_color={setBackground_color}
                  data={data}
                  IndexFormQuestion={IndexFormQuestion}
                />
              }
            />
            <Route
              path="/form"
              element={
                <TrainForm
                  setIndexFormQuestion={setIndexFormQuestion}
                  IndexFormQuestion={IndexFormQuestion}
                  goTo={goTo}
                  data={data}
                  setData={setData}
                  setMessage={setMessage}
                  messageTexts={messageTexts}
                  setBackground_color={setBackground_color}
                />
              }
            />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default ChooseTheme;
