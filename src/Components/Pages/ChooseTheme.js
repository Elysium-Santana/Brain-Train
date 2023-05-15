import React, { useEffect, useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import styles from './ChooseTheme.module.css';
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
  const [isCustomOrigin, setIsCustomOrigin] = useState(null);
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
    type === 'criate' && setMessage(messageTexts[0]);
  }, []);

  function OriginAndThemeTCatch(name) {
    let origin = questions.pre_definidas.some((item) => item.theme === name);
    let indexTeme;
    if (origin) {
      indexTeme = questions.pre_definidas.findIndex(
        (item) => item.theme === name,
      );
    } else {
      indexTeme = questions.customQuestions.findIndex(
        (item) => item.theme === name,
      );
    }

    return origin
      ? [questions.pre_definidas[indexTeme]]
      : [questions.customQuestions[indexTeme]];
  }
  // console.log(OriginAndThemeTCatch('Javascript'));

  function chekcCustomOrigin(name) {
    setIsCustomOrigin(
      questions.customQuestions.some((item) => item.theme === name),
    );
  }

  function toHome(place) {
    navigate(place);
  }

  return (
    <>
      <section className={`${styles.section} ${background_color}`}>
        <header className={styles.header}>
          <nav>
            <ul>
              <NavButton_2
                children={<Icons children={'arrow_back_ios'} />}
                onClick={() => {
                  setData(null);
                  toHome('/');
                }}
              />
              <NavButton_2
                children={<Icons children={'add_circle'} />}
                value={''}
                onClick={() => {
                  if (
                    isCustomOrigin === true &&
                    location.pathname.includes('form')
                  ) {
                    setIsCustomOrigin(null);
                    toHome(`create/${data[0].theme}`);
                  }
                }}
              />
              <NavButton_2
                children={<Icons children={'border_color'} />}
                value={''}
                onClick={() => {
                  if (
                    isCustomOrigin === true &&
                    location.pathname.includes('form')
                  ) {
                    // setIsCustomOrigin(null);
                    toHome(`create/edit_213715`);
                  }
                }}
              />
            </ul>
          </nav>
        </header>
        {message && (
          <Modal
            chekcCustomOrigin={chekcCustomOrigin}
            messageTexts={messageTexts}
            message={message}
            setMessage={setMessage}
            toHome={toHome}
            data={data}
            setData={setData}
            setBackground_color={setBackground_color}
          />
        )}
        <BaseGlass>
          <Routes>
            <Route
              path="/"
              element={
                <ThemeList
                  OriginAndThemeTCatch={OriginAndThemeTCatch}
                  chekcCustomOrigin={chekcCustomOrigin}
                  data={data}
                  setData={setData}
                  setMessage={setMessage}
                  messageTexts={messageTexts}
                  setBackground_color={setBackground_color}
                />
              }
            />
            <Route
              path="/create/:type/"
              element={
                <CreateNewQuestion
                  toHome={toHome}
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
                  toHome={toHome}
                  data={data}
                  setData={setData}
                  setMessage={setMessage}
                  messageTexts={messageTexts}
                  isCustomOrigin={isCustomOrigin}
                  setBackground_color={setBackground_color}
                />
              }
            />
          </Routes>
        </BaseGlass>
      </section>
    </>
  );
};

export default ChooseTheme;
