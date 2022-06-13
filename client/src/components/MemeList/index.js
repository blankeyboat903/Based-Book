//***!!!Structure!!!**
// NEEDS TO BE MEME NOT THOUGHT
// ***!! *

import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';

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
                <image
                style={{ width: 400 }}
                cloudName="girthycloud" publicId="https://res.cloudinary.com/girthycloud/image/upload/v1654628121/cld-sample-5.jpg"
                />
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