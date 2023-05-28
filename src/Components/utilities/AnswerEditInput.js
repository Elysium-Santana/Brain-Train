import React from 'react';
import styles from './Utilities.module.css';

const AnswerEditInput = ({
  label,
  name,
  type,
  checked,
  onChange,
  value,
  maxLength,
}) => {
  return (
    <>
      <input
        maxLength={maxLength}
        style={{ width: '100%', fontSize: '1rem', textAlign: 'center' }}
        className={styles.answerEditInput}
        type={type}
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        label={label}
      />
    </>
  );
};

export default AnswerEditInput;
