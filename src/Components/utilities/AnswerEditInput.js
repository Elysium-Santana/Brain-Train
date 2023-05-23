import React from 'react';
import styles from './Utilities.module.css';

const AnswerEditInput = ({ label, name, type, checked, onChange, value }) => {
  return (
    <>
      <input
        style={{ width: '100%', fontSize: '1rem' }}
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
