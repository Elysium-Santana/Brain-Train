import React from 'react';
import LinkButton_1 from '../utilities.js/LinkButton_1';
import styles from './ChooseTheme.module.css';

const ThemeList = ({ data }) => {
  // console.log(data);
  return (
    <ul>
      {data &&
        data.map((item) => <LinkButton_1 to={'form'} children={item.theme} />)}
    </ul>
  );
};

export default ThemeList;
