import React from 'react';
import NavButton from '../utilities/NavButton';

const Boxbuttons = ({
  firstChildren,
  secondChildren,
  secondOnClick,
  firstOnClick,
  secondDisabled,
  firstDisabled,
}) => {
  return (
    <div
      style={{
        border: '2px solid rgba(0, 0 , 0, 0.1)',
        display: 'flex',
        gap: '1rem',
        padding: '.5rem',
        marginTop: '.5rem',
        borderRadius: '4px',
      }}
    >
      <NavButton
        children={firstChildren}
        onClick={firstOnClick}
        disabled={firstDisabled}
      />
      <NavButton
        children={secondChildren}
        onClick={secondOnClick}
        disabled={secondDisabled}
      />
    </div>
  );
};

export default Boxbuttons;
