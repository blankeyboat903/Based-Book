//***!!!Structure!!!**
// NEEDS TO BE MEME NOT THOUGHT
// ***!! *

import React from 'react';
import { Link } from 'react-router-dom';

const MemeList = ({
  memes,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!memes.length) {
    return <h3>No Memes Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {memes &&
        memes.map((meme) => (
          <div key={meme._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${meme.thoughtAuthor}`}
                >
                  {meme.thoughtAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this meme on {meme.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this meme on {meme.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{meme.thoughtText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${meme._id}`}
            >
              Join the discussion on this meme.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MemeList;