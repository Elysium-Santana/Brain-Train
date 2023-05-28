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
import ThemeList from './ThemeList';
import { questions } from '../../Questions';
import Modal from './Modal';
import CreateNewQuestion from './CreateNewQuestion';
import settingsOff from '../../img/settingsOff.svg';
import CortexBateryIcon from '../utilities/CortexBateryIcon';

const ChooseTheme = () => {
  const [background_color, setBackground_color] = useState();
  const [data, setData] = useState(null);
  const [message, setMessage] = useState();
  const [IndexFormQuestion, setIndexFormQuestion] = useState(0);
  const [toggleMenu, setToggleMenu] = useState(null);
  const [showDeletables, setShowDeletables] = useState(false);
  const [deletables, setDeletables] = useState([]);
  const [localRepeat, setLocalRepeat] = useState(null);
  const location = useLocation();

  const messageTexts = [
    'Crie um tema para seu treino diário.',
    'Desafio concluído.',
    'Vamos começar!!',
    'Nenhuma pendência com esse tema para hoje. Escolha outro tema ou tente mais tarde.',
    'Dados Repetidos. Por favor, cheque os campos.',
    'Questão adicionada com sucesso!',
    'Tem certeza de que deseja excluir essa questão? ',
    'Questão excluída.',
    'Conteúdo editado.',
    'Sua lista de questões para esse tema esta vazia. Deseja adicionar uma questão? ',
    'Deseja salvar as alterações?',
    'Todas as questões contidas neste tema serão excluídas. Deseja excluir o tema? ',
    'Tema excluído.',
    'Sua lista de temas esta vazia. Deseja criar um tema?',
    'Palavras grandes demais podem dificultar sua memorização. Por favor, cheque os campos.',
    'Ação indisponível. Para ter acesso a conteúdos customizaveis, volte ao menu inicial e selecione a opção "Personalizados".',
  ];

  const navigate = useNavigate();
  const { param } = useParams();

  useEffect(() => {
    setShowDeletables(!showDeletables);
  }, [location]);

  useEffect(() => {
    setBackground_color(styles.choose);
    param === 'predefined' && setData(questions.predefined);
    param === 'allTrains' &&
      setData([...questions.predefined, ...questions.customQuestions]);
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

  function deleteTheme() {
    setData(data.filter((item) => !deletables.includes(item.theme)));
    setDeletables([]);
    setMessage(messageTexts[12]);
  }

  return (
    <>
      <section className={`${styles.section} ${background_color}`}>
        <header className={styles.header}>
          <NavButton_2
            children={<Icons children={'arrow_back_ios'} />}
            onClick={() => {
              setToggleMenu((toggleMenu) => !toggleMenu);
              setData(null);
              goTo('/');
              //VOLTAR
            }}
          />
          {location.pathname.includes('form') && data && (
            <div className={styles.status}>
              <ul>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <Icons children={'calendar_month'} />
                  <p>
                    {data &&
                    data[0].questions[IndexFormQuestion].date !== '1111-11-11'
                      ? data[0].questions[IndexFormQuestion].date
                          .split('-')
                          .reverse()
                          .join('/')
                      : '00/00/0000'}
                  </p>
                </li>
                <li>
                  <CortexBateryIcon nivel={localRepeat} />
                  <p>{data && data[0].theme}</p>
                </li>
              </ul>
            </div>
          )}
          <nav
            style={{
              position: 'relative',
            }}
          >
            {location.pathname.includes('customs') &&
            !location.pathname.includes('create') ? (
              <NavButton_2
                children={<Icons children={'settings'} />}
                onClick={() => {
                  setToggleMenu((toggleMenu) => !toggleMenu);
                }}
              />
            ) : (
              <NavButton_2
                onClick={() =>
                  !location.pathname.includes('create') &&
                  setMessage(messageTexts[15])
                }
                children={<img src={settingsOff} />}
              />
            )}

            <ul
              className={styles.menu}
              style={{
                visibility: toggleMenu ? 'visible' : 'hidden',

                height: toggleMenu
                  ? location.pathname.includes('form')
                    ? '300%'
                    : '200%'
                  : '0%',
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
              {location.pathname.includes('form') && (
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
              )}

              <li style={{ borderBottom: '2px solid #eee' }}>
                <NavButton_2
                  children={<Icons children={'delete'} />}
                  onClick={() => {
                    setToggleMenu((toggleMenu) => !toggleMenu);

                    !location.pathname.includes('form') &&
                      location.pathname.includes('customs') &&
                      setShowDeletables(() => !showDeletables);
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
            IndexFormQuestion={IndexFormQuestion}
            setIndexFormQuestion={setIndexFormQuestion}
            deleteTheme={deleteTheme}
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
                  deletables={deletables}
                  setDeletables={setDeletables}
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
                  localRepeat={localRepeat}
                  setLocalRepeat={setLocalRepeat}
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
