import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Utilities.module.css';

const LinkButton_3 = ({ to, children, icon }) => {
  return (
    <>
      <Link className={styles.linkButton_3} to={to}>
        {icon}
        {children}
      </Link>
    </>
  );
};

export default LinkButton_3;
