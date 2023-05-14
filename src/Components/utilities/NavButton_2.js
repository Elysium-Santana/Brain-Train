import React from 'react';
import styles from './Utilities.module.css';

const NavButton_2 = ({ children, onClick, value }) => {
  return (
    <>
      <button className={styles.navButton_2} onClick={onClick} value={value}>
        {children}
      </button>
    </>
  );
};

export default NavButton_2;
