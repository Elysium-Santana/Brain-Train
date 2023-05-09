import React from 'react';
import styles from './Utilities.module.css';

const AnswerInput = ({
  label,
  name,
  type,
  checked,
  onChange,
  value,
  showAnsver,
  cha,
}) => {
  return (
    <>
      <label
        name={name}
        className={styles.answerInput + ` ${showAnsver && showAnsver}`}
        style={{ fontSize: cha > 38 && '1.5rem' }}
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
