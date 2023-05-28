import React from 'react';
import styles from './Menu.module.css';
import LinkButton_3 from '../utilities/LinkButton_3';
import Icons from '../utilities/Icons';
import BaseGlass from '../utilities/BaseGlass';
import TextBlock from '../utilities/TextBlock';

const Menu = () => {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.text}>Brain Train</h1>
        <BaseGlass>
          <p className={styles.questionEdit} style={{ overflowY: 'scroll' }}>
            Bem-vindo ao Brain Train, o aplicativo que irá ajudá-lo a treinar
            seus conhecimentos! Aqui você pode criar uma lista personalizada de
            temas sobre os assuntos que está estudando no momento. <br />
            <br /> O aplicativo oferece a possibilidade personalizar um quiz
            para testar seu conhecimento e consolidar o que aprendeu. Além
            disso, o Brain Train possui um modo de treino diário especial que
            identifica as questões que você mais erra com frequência. O objetivo
            é estimular sua memorização e fortalecer seus pontos fracos. <br />
            <br />
            Quanto mais acertar uma questão, mais distante no tempo ela voltará
            a aparecer no treino. Caso erre uma pergunta, ela será penalizada,
            retornando com mais frequência e mais próxima da data atual.
            <br />
            <br /> O Brain Train adapta-se ao seu desempenho, focando nas áreas
            em que você mais precisa de prática. <br />
            <br />
            Nosso objetivo é ajudá-lo a melhorar constantemente seus
            conhecimentos e obter um aprendizado efetivo.
          </p>

          <div>
            <h1 style={{ marginBottom: '1rem' }}>
              Selecione um tema para iniciar o treino!
            </h1>
            <ul className={styles.controlsBox}>
              <LinkButton_3
                to={'/Home/predefined'}
                children={'Temas pré Definidos'}
                icon={<Icons children={'approval_delegation'} />}
              />
              <LinkButton_3
                to={'/Home/allTrains'}
                children={'Todos os Treinos'}
                icon={<Icons children={'person_celebrate'} />}
              />
              <LinkButton_3
                to={'/Home/customs'}
                children={'Personalizados'}
                icon={<Icons children={'design_services'} />}
              />
              <LinkButton_3
                to={'/Home/create'}
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

export default Menu;
