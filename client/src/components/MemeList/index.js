//***!!!Structure!!!**
// NEEDS TO BE MEME NOT THOUGHT
// ***!! *

import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';

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
                <image
                style={{ width: 400 }}
                cloudName="girthycloud" publicId="https://res.cloudinary.com/girthycloud/image/upload/v1654628121/cld-sample-5.jpg"
                />
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/thoughts/${meme._id}`}
            >
              Join the discussion on this Meme.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default MemeList;