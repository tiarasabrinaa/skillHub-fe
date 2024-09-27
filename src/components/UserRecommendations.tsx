import React from 'react';
import styles from './UserRecommendations.module.css';

interface UserProps {
  username: string;
  avatar: string;
}

const UserRecommendations: React.FC = () => {
  const users: UserProps[] = [
    { username: 'Thanos', avatar: '/assets/thanos-avatar.png' },
    { username: 'Thanos', avatar: '/assets/thanos-avatar.png' }
  ];

  return (
    <div className={styles.recommendations}>
      <h3>Recommended Users</h3>
      {users.map((user, index) => (
        <div key={index} className={styles.user}>
          <img src={user.avatar} alt={user.username} />
          <span>{user.username}</span>
          {/* Apply the new followButton class */}
          <button className={styles.followButton}>Follow</button>
        </div>
      ))}
    </div>
  );
};

export default UserRecommendations;
