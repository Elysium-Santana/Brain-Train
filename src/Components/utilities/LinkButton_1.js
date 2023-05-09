import React from 'react';
import styles from './Utilities.module.css';

const LinkButton_1 = ({ to, children, onClick, key }) => {
  return (
    <>
      <input
        type="button"
        className={styles.linkButton_1}
        to={to}
        onClick={onClick}
        key={key}
        value={children}
      />
    </>
  );
};

export default LinkButton_1;
