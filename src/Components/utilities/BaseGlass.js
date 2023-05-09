import React from 'react';
import styles from './Utilities.module.css';

const BaseGlass = ({ children }) => {
  return <div className={styles.baseGlass}>{children}</div>;
};

export default BaseGlass;
