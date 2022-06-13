import React from 'react';
import {  Link } from "react-router-dom";

const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/accountInfo">Account</Link>
    </li>
    <li>
      <Link to="/MemeList">Memes</Link>
    </li>
  </div>
  );
}
export default navbar;