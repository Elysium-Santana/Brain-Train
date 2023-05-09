import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Utilities.module.css';

const LinkButton_2 = ({ to, children, onClick }) => {
  return (
    <>
      <Link className={styles.linkButton_2} to={to} onClick={onClick}>
        {children}
      </Link>
    </>
  );
};

export default LinkButton_2;
