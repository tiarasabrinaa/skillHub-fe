import React from 'react';
import styles from './Post.module.css';

// Define the PostProps interface to accept a `post` object
interface PostProps {
  post: {
    title: string;
    description: string;
    frontendText: string;
    backendText: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div className={styles.post}>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <div className={styles.content}>
        <div className={styles.frontend}>
          <h3>Frontend</h3>
          <p>{post.frontendText}</p>
        </div>
        <div className={styles.backend}>
          <h3>Backend</h3>
          <p>{post.backendText}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
