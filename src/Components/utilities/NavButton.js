import React from 'react';
import styles from './Utilities.module.css';

const NavButton = ({
  onClick,
  backIcon,
  frontIcon,
  children,
  disabled,
  value,
  style,
}) => {
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '.3rem',
      }}
      onClick={onClick}
      className={styles.navButton}
      disabled={disabled}
      value={value}
    >
      {backIcon}
      {children}
      {frontIcon}
    </button>
  );
};

export default NavButton;
