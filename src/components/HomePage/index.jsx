import React from 'react';
import UserProfile from '../UserProfile.jsx';
import Layout from './Layout/Layout';
import NewFeed from './NewFeed/index';

const HomePage = ({isHomePage}) => {
  return (
    <Layout>
      {isHomePage ? <NewFeed /> : <UserProfile />}
    </Layout> 
  );
};

export default HomePage;