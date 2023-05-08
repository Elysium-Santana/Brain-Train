import React, { useState } from 'react';
import TextBlock from '../utilities.js/TextBlock';
import AnswerInput from '../utilities.js/AnswerInput';
import { pre_definidas } from '../../Questions';

const TrainForm = () => {
  const [answer, setAnswer] = useState();

  return (
    <>
      <form>
        <h1>{answer}</h1>
        <TextBlock
          children={pre_definidas[0].questions[0].question}
          cha={pre_definidas[0].questions[0].question.length}
        />

        {pre_definidas[0].questions[0].options.map((item, index) => (
          <AnswerInput
            key={index}
            label={item}
            type={'radio'}
            name={'quest'}
            value={answer}
            checked={answer === item}
            onChange={() => setAnswer(item)}
          />
        ))}

        {/* <LinkButton_1 children={'Resposta 1'} />
        <LinkButton_1 children={'Resposta 2'} />
        <LinkButton_1 children={'Resposta 3'} />
        <LinkButton_1 children={'Resposta 4'} /> */}
      </form>
    </>
  );
};

export default TrainForm;
