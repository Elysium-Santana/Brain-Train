import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import styles from './ChooseTheme.module.css';
import TrainForm from './TrainForm';
import Icons from '../utilities/Icons';
import LinkButton_2 from '../utilities/LinkButton_2';
import BaseGlass from '../utilities/BaseGlass';
import ThemeList from './ThemeList';
import { questions } from '../../Questions';

const ChooseTheme = () => {
  const [background_color, setBackground_color] = useState(styles.choose);
  const [data, setData] = useState();
  const [message, setMessage] = useState('Escolha um assunto para treinar!');
  const [quizFiltered, setQuizFiltered] = useState();

  const { type } = useParams();

  useEffect(() => {
    type === 'predefined' && setData(questions.pre_definidas);
    type === 'allTrains' &&
      setData([...questions.pre_definidas, ...questions.customQuestions]);
    type === 'customs' && setData(questions.customQuestions);

    const userLoggedRecovery = window.localStorage.getItem('user');
    if (userLoggedRecovery) {
      setData(JSON.parse(userLoggedRecovery));
      console.log(userLoggedRecovery);
    }
  }, []);

  const navigate = useNavigate();

  const dataAtual = new Date();

  dataAtual.setDate(dataAtual.getDate());
  function formatDate(date) {
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const ano = date.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
  const dateFormated = formatDate(dataAtual);

  function toHome() {
    navigate('/');
  }

  return (
    <>
      <section className={`${styles.section} ${background_color}`}>
        <header className={styles.header}>
          <nav>
            <ul>
              <LinkButton_2
                to={'/'}
                children={<Icons children={'arrow_back_ios'} />}
                onClick={() => setData(null)}
              />

              <LinkButton_2
                children={<Icons children={'add_circle'} />}
                onClick={() => setBackground_color(styles.create)}
              />
            </ul>
          </nav>
        </header>
        <h1>{message}</h1>

        <BaseGlass>
          <Routes>
            <Route
              path="/"
              element={
                <ThemeList
                  data={data}
                  setData={setData}
                  setMessage={setMessage}
                  setBackground_color={setBackground_color}
                />
              }
            />
            <Route
              path="/form"
              element={
                <TrainForm
                  quizFiltered={quizFiltered}
                  toHome={toHome}
                  data={data}
                  setData={setData}
                  setMessage={setMessage}
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
