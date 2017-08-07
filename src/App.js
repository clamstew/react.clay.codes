// use this file to put the footer header,
//
// we'll have another file for all posts page

import React, { PureComponent } from 'react';

import './App.css';

import { BlogPost } from './BlogPost';

export class BlogApp extends PureComponent {

  render = () => {
    return (
      <div className="BlogAppWrapper">
        <BlogPost />
      </div>
    );
  };

}