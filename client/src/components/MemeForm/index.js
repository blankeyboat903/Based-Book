// ***!!!Structure
// NEEDS TO BE MEME NOT THOUGHT
// ***!! *

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_MEME } from '../../utils/mutations';
import { QUERY_MEME } from '../../utils/queries';

import Auth from '../../utils/auth';

const MemeForm = () => {
  const [MemeText, setMemeText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);

  const [addMeme, { error }] = useMutation(ADD_MEME, {
    update(cache, { data: { addMeme } }) {
      try {
        const { Memes } = cache.readQuery({ query: QUERY_MEME });

        cache.writeQuery({
          query: QUERY_MEME,
          data: { Memes: [addMeme, ...Memes] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
    //   const { me } = cache.readQuery({ query: QUERY_ME });
    //   cache.writeQuery({
    //     query: QUERY_ME,
    //     data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
    //   });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   const { data } = await addThought({
    //     variables: {
    //       thoughtText,
    //       thoughtAuthor: Auth.getProfile().data.username,
    //     },
    //   });

    //   setThoughtText('');
    // } catch (err) {
    //   console.error(err);
    // }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'MemeText' && value.length <= 280) {
      setMemeText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Caption goes here.</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textareagit
                placeholder="Here's a new thought..."
                value={MemeText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textareagit>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Meme
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login.js">login</Link> or <Link to="/signup.js">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default MemeForm;