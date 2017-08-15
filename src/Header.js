
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

import './Header.css';


export class Header extends PureComponent {

  render = () => {
    return (
      <div className="HeaderWrapper">
        ReactBlogJs
        <div className="NavItem">
          <Link to={{pathname: '/blog'}}>Home</Link>
        </div>
      </div>
    );
  };

}