import React from 'react';
import styles from './Utilities.module.css';

const TextBlock = ({ children, cha }) => {
  return (
    <p style={{ fontSize: cha < 80 && '2.7rem' }} className={styles.textBlock}>
      {children}
    </p>
  );
};

export default TextBlock;
