import React from 'react';
import styles from './Home.module.css';
import LinkButton_3 from '../utilities/LinkButton_3';
import Icons from '../utilities/Icons';
import BaseGlass from '../utilities/BaseGlass';
import TextBlock from '../utilities/TextBlock';

const Home = () => {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.text}>Brain Train</h1>
        <BaseGlass>
          <p className={styles.questionEdit}>
            {
              'Bem-vindo ao Brain Train - o aplicativo perfeito para treinar e melhorar sua capacidade de memorização! Com o Brain Train, você pode criar sua própria lista de temas personalizados, selecionar temas já existentes ou até mesmo misturar ambos!'
            }
          </p>

          <div>
            <h1 style={{ marginBottom: '1rem' }}>
              Selecione um tema para iniciar o treino!
            </h1>
            <ul className={styles.controlsBox}>
              <LinkButton_3
                to={'/ChooseTheme/predefined'}
                children={'Temas pré Definidos'}
                icon={<Icons children={'approval_delegation'} />}
              />
              <LinkButton_3
                to={'/ChooseTheme/allTrains'}
                children={'Todos os Treinos'}
                icon={<Icons children={'person_celebrate'} />}
              />
              <LinkButton_3
                to={'/ChooseTheme/customs'}
                children={'Personalizados'}
                icon={<Icons children={'design_services'} />}
              />
              <LinkButton_3
                to={'/ChooseTheme/create'}
                children={'Criar Treino'}
                icon={<Icons children={'construction'} />}
              />
            </ul>
          </div>
        </BaseGlass>
      </section>
    </>
  );
};

export default Home;
