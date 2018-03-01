import React, { Component } from "react";
import styles from './index.module.css';

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
      <div className={styles.hero}>
        <h1>About me.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula facilisis egestas. Phasellus at libero et neque molestie tempus. Morbi pulvinar orci quis suscipit porta. Sed scelerisque augue quis metus pharetra porta. Donec ut neque ut ipsum auctor vestibulum eu eget metus. Praesent sem metus, placerat ut lorem sed, venenatis rhoncus purus. Maecenas ut posuere turpis, et tristique quam.</p>

        <p>Vestibulum imperdiet nulla dolor, a aliquet sapien gravida vitae. Suspendisse ultrices auctor purus, a commodo arcu commodo ac. Etiam auctor lorem vel mauris bibendum tincidunt. Cras convallis tortor ligula, a hendrerit est sodales sed. Quisque non libero massa. Suspendisse rhoncus turpis turpis, et hendrerit tellus convallis vitae. Nulla posuere nunc sed augue vehicula pharetra. Morbi a ante purus.</p>
      </div>
      </div>
    );
  }
}

export default AboutPage;