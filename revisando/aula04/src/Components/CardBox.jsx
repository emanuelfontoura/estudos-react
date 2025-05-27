import React from 'react';
import styles from './CardBox.module.css';

const CardBox = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default CardBox;
