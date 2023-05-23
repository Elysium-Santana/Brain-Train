import React from 'react';
import styles from './Utilities.module.css';

const TextBlock = ({ children, cha }) => {
  return <p className={styles.textBlock}>{children}</p>;
};

export default TextBlock;
