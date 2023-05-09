import React from 'react';
import styles from './Utilities.module.css';

const NavButton = ({ onClick, icon, children, disabled }) => {
  return (
    <button onClick={onClick} className={styles.navButton} disabled={disabled}>
      {icon}
      {children}
    </button>
  );
};

export default NavButton;
