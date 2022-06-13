//***!!!Structure!!!**
// NEEDS TO BE MEME NOT THOUGHT
// ***!! *

import React from 'react';
import { Link } from 'react-router-dom';

const MemeList = ({
  Memes,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!Memes.length) {
    return <h3>No Memes Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {Memes &&
        Memes.map((Memes) => (
          <div key={Memes._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${Memes.MemeAuthor}`}
                >
                  {Memes.MemeAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                   Meme date:{Memes.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    Meme Date: {Memes.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{Memes.MemeText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${Memes._id}`}
            >
              Join the discussion on this Meme.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MemeList;