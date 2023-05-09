import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import styles from './ChooseTheme.module.css';
import TrainForm from './TrainForm';
import Icons from '../utilities/Icons';
import LinkButton_2 from '../utilities/LinkButton_2';
import BaseGlass from '../utilities/BaseGlass';
import ThemeList from './ThemeList';
import { pre_definidas } from '../../Questions';
import { customQuestions } from '../../Questions';

const ChooseTheme = () => {
  const [background_color, setBackground_color] = useState(styles.choose);
  const [data, setData] = useState();
  const [date, setDate] = useState();
  const [quizFiltered, setQuizFiltered] = useState();

  const { type } = useParams();
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
  console.log(dateFormated);

  useEffect(() => {
    type === 'predefined' && setData(pre_definidas);
    type === 'allTrains' && setData([...pre_definidas, ...customQuestions]);
    type === 'customs' && setData(customQuestions);
  }, []);

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
              />

              <LinkButton_2
                children={<Icons children={'add_circle'} />}
                onClick={() => setData(styles.create)}
              />
            </ul>
          </nav>
        </header>

        <BaseGlass>
          <Routes>
            <Route
              path="/"
              element={
                <ThemeList
                  data={data}
                  setQuizFiltered={setQuizFiltered}
                  dateFormated={dateFormated}
                />
              }
            />
            <Route
              path="/form"
              element={
                <TrainForm quizFiltered={quizFiltered} toHome={toHome} />
              }
            />
          </Routes>
        </BaseGlass>
      </section>
    </>
  );
};

export default ChooseTheme;
