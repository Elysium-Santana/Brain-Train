import React from 'react';
import styles from './Utilities.module.css';

const TextBlock = ({ children, cha, enterAnimate }) => {
  return (
    <p
      style={{
        fontSize:
          cha < 50
            ? '1.7rem'
            : cha < 80
            ? '1.5rem'
            : cha < 120
            ? '1.2rem'
            : '1rem',
      }}
      className={styles.textBlock + ` ${enterAnimate && enterAnimate}`}
    >
      {children}
    </p>
  );
};

export default TextBlock;
