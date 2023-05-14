import React from 'react';
import styles from './Utilities.module.css';

const NavButton = ({ onClick, icon, children, disabled, value, style }) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={styles.navButton}
      disabled={disabled}
      value={value}
    >
      {icon}
      {children}
    </button>
  );
};

export default NavButton;
