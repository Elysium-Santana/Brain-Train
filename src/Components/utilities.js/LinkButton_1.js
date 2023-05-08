import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Utilities.module.css';

const LinkButton_1 = ({ to, children, onClick }) => {
  return (
    <>
      <Link className={styles.linkButton_1} to={to} onClick={onClick}>
        {children}
      </Link>
    </>
  );
};

export default LinkButton_1;
