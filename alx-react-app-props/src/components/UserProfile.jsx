import React from 'react';
import '../index.css';
import UserDetails from './UserDetails';

const UserProfile = () => {
  return (
    <>
      <div className="profile">
        <h1>User Profile</h1>
        <UserDetails />
      </div>
    </>
  );
};

export default UserProfile;
