import React from 'react';
import Article from '../components/Article';

import styles from './index.module.css';

const ErrorPage = () => {
  const error = 'true';
  return (
    <div className={styles.indexContent}>
      <div className={styles.hero}>
        <h1>Ooops!</h1>
        <p>
          This is not the page you were seeking. <br />
          Maybe, go <a href="https://www.jmichaelthurman.com">home</a> and try again?
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
