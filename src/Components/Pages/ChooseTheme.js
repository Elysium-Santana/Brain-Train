import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import styles from './ChooseTheme.module.css';
import TrainForm from './TrainForm';
import Icons from '../utilities.js/Icons';
import LinkButton_2 from '../utilities.js/LinkButton_2';
import BaseGlass from '../utilities.js/BaseGlass';
import ThemeList from './ThemeList';
import { pre_definidas } from '../../Questions';
import { customQuestions } from '../../Questions';

const ChooseTheme = () => {
  const [background_color, setBackground_color] = useState(styles.choose);
  const [data, setData] = useState();
  const [quizFiltered, setFiltered] = useState(null);
  const { type } = useParams();

  useEffect(() => {
    type === 'predefined' && setData(pre_definidas);
    type === 'allTrains' && setData([...pre_definidas, ...customQuestions]);
    type === 'customs' && setData(customQuestions);
  }, []);

  useEffect(() => {}, []);

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

        <h1>Selecione um tema para iniciar o treino!</h1>

        <BaseGlass>
          <Routes>
            <Route path="/" element={<ThemeList data={data} />} />
            <Route path="form" element={<TrainForm setData={setData} />} />
            <Route path="form" element={<TrainForm setData={setData} />} />
          </Routes>
        </BaseGlass>
      </section>
    </>
  );
};

export default ChooseTheme;
