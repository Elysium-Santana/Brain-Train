import React, { children } from 'react';
import styles from './Utilities.module.css';

const QuestionEdit = ({ children, placeholder }) => {
  return (
    <>
      <textarea
        className={styles.questionEdit}
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder={placeholder}
      >
        {children}
      </textarea>
    </>
  );
};

export default QuestionEdit;
