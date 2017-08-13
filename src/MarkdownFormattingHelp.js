import React, { PureComponent } from 'react';

import './App.css';

import { BlogPost } from './BlogPost';

export class MarkdownFormattingHelp extends PureComponent {

  // @TODO - have this always download sample.md

  render = () => {
    return (
      <div className="BlogAppWrapper">
        <BlogPost />
      </div>
    );
  };

}