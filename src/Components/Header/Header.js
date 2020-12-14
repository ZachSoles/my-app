import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header(props) {
  return (
    <div className = "hf">
        <h1 className = "hg" >{props.title}</h1>
    </div>
  );
}

export default Header;