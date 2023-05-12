import React, { useEffect } from 'react';
import { pre_definidas } from '../../Questions';

const Storage = () => {
  useEffect(() => {
    localStorage.setItem('definidas', JSON.stringify(pre_definidas));
  }, []);
  return <div>Storage</div>;
};

export default Storage;
