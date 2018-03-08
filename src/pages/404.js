import React from 'react';
import Link from 'gatsby-link';
import styles from './index.module.css';

const ErrorPage = () => (
  <div className={styles.indexContent}>
    <div className={styles.hero}>
      <h1>Ooooops!</h1>
      <p>This is not the page you're looking for...</p>
      <Link to="/">back home</Link>
    </div>
  </div>
);

export default ErrorPage;
