import React from 'react';
import styles from './Utilities.module.css';
import stylesForm from '../Pages/TrainForm.module.css';

const AnswerInput = ({
  label,
  name,
  type,
  checked,
  onChange,
  value,
  showAnsver,
  enterAnimate,
  index,
}) => {
  const cssVar = { '--i': index && index };
  return (
    <>
      <label
        style={cssVar}
        name={name}
        className={
          styles.answerInput +
          ` ${showAnsver && showAnsver}` +
          ` ${enterAnimate && enterAnimate}`
        }
        // style={{ fontSize: cha > 38 && '1.5rem' }}
      >
        {label}
        <input
          style={{ display: 'none' }}
          type={type}
          value={value}
          name={name}
          checked={checked}
          onChange={onChange}
          label={label}
        />
      </label>
    </>
  );
};

export default AnswerInput;
