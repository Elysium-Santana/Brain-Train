import React from 'react';
import styles from './Utilities.module.css';

const AnswerInput = ({ label, name, checked, onClick, type, onChange }) => {
  return (
    <>
      <label name={name} className={styles.answerInput}>
        {label}
        <input
          style={{ display: 'none' }}
          type={type}
          name={name}
          checked={checked}
          onClick={onClick}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default AnswerInput;
