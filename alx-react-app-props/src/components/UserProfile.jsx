import React, { useContext } from 'react';
import '../index.css';
import UserContext from './UserContext';

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <>
      <div className="profile">
        <h1>User Profile</h1>
        <div className="userinfo">
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;