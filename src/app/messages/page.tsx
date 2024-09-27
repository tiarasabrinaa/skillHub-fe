import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import Post from '../../components/Post';
import UserRecommendations from '../../components/UserRecommendations';
import styles from './Home.module.css';

const HomePage = () => {
  return (
    <MainLayout>
      <div className={styles.homePage}>
        <div className={styles.feed}>
          <Post
            title="Frontend vs Backend" 
            description="Frontend development focuses on the user interface, including layout, animations, and navigation, using JavaScript, HTML, and CSS. In contrast, backend development handles the server-side logic, such as coding, debugging, and database management."
            frontendText="Focuses on layout, animations, content organization, navigation, graphics."
            backendText="Focuses on building code, debugging, database management."
          />
          <Post 
            title="Frontend vs Backend" 
            description="Frontend development focuses on the user interface, including layout, animations, and navigation, using JavaScript, HTML, and CSS. In contrast, backend development handles the server-side logic, such as coding, debugging, and database management."
            frontendText="Focuses on layout, animations, content organization, navigation, graphics."
            backendText="Focuses on building code, debugging, database management."
          />
        </div>
        <aside className={styles.sidebar}>
          <UserRecommendations />
        </aside>
      </div>
    </MainLayout>
  );
};

export default HomePage;
