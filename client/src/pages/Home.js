// ********!!! This is the basic template for the Home.js Page... we need to push up the other files so we can fill this data out accordingly!!!!!****

import React from 'react';
import { useQuery } from '@apollo/client';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MemeForm from '../components/MemeForm';
import MemeList from '../components/MemeList';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

import { QUERY_MEME } from '../utils/queries';
import { QUERY_COMMENT } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MEME);
  const memes = data?.Memes || [];

  return (
    <main>
      
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >

        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <MemeList memes={memes}

            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;