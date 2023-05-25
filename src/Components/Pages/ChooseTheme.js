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
    'Questão adicionada com sucesso!',
    'Tem certeza de que deseja excluir essa questão? ',
    'Dados excluídos',
    'Conteúdo editado.',
    'Sua lista de questões para esse tema esta vazia. Deseja adicionar uma questão? ',
    'Deseja salvar as alterações?',
  ];

  const navigate = useNavigate();
  const { param } = useParams();

  useEffect(() => {
    setBackground_color(styles.choose);
    param === 'predefined' && setData(questions.pre_definidas);
    param === 'allTrains' &&
      setData([...questions.pre_definidas, ...questions.customQuestions]);
    param === 'customs' && setData(questions.customQuestions);
    param === 'create' && setMessage(messageTexts[0]);
  }, []);

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
    setIndexFormQuestion(0);
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
                    } else if (
                      location.pathname.includes('customs') &&
                      !location.pathname.includes('form')
                    ) {
                      setMessage(messageTexts[0]);
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
                      goTo(`create/edit`);
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

                    // location.pathname.includes('form') && deleteQuestion();
                    location.pathname.includes('form') &&
                      setMessage(messageTexts[6]);
                  }}
                />
              </li>
            </ul>
          </nav>
        </header>
        {message && (
          <Modal
            data={data}
            deleteQuestion={deleteQuestion}
            messageTexts={messageTexts}
            message={message}
            setMessage={setMessage}
            goTo={goTo}
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
              path="/create/:param/"
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
