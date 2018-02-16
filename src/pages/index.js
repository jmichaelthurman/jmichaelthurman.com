import React from 'react';
import Article from '../components/Article';

import styles from './index.module.css';

const IndexPage = (props) => {
  const postEdges = props.data.allMarkdownRemark.edges;

  return (
    <div className={styles.indexContent}>
      <div className={styles.hero}>
        <h1>Hi.</h1>
        <p>
          I&apos;m Michael, a technologist with five years of full-time industry experience,
          generalizing in solutions using whichever tool seems to fit the problem at hand for large organizations, and ten years experience
          working with dynamic web sites for small non-profits. <br />
          I'm now focused on full stack systems hosted on major cloud providers. 
        </p>
      </div>
      {postEdges.map(post => (
        <Article
          title={post.node.frontmatter.title}
          date={post.node.frontmatter.date}
          excerpt={post.node.excerpt}
          slug={post.node.fields.slug}
          key={post.node.fields.slug}
        />
      ))}
    </div>
  );
};

export default IndexPage;

/* eslint no-undef: off */
export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
