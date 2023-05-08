import React from 'react';
import styles from './Utilities.module.css';

const TextBlock = ({ children, cha }) => {
  console.log(cha);
  return (
    <p style={{ fontSize: cha < 50 && '3rem' }} className={styles.textBlock}>
      {children}
    </p>
  );
};

export default TextBlock;
