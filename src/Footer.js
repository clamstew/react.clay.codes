
import React, { PureComponent } from 'react';

import './Footer.css';


export class Footer extends PureComponent {

  render = () => {
    return (
      <div className="FooterWrap">
        ReactBlog - Made with <span style={{'color': 'red'}} className="heart">♥</span> by <a href="https://github.com/clamstew">@clamstew</a>
      </div>
    );
  };

}