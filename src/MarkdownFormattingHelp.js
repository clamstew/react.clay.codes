import React, { PureComponent } from 'react';

import './App.css';

import { BlogPost } from './BlogPost';

export class MarkdownFormattingHelp extends PureComponent {

  render = () => {
    return (
      <div className="BlogAppWrapper">
        <BlogPost />
      </div>
    );
  };

}