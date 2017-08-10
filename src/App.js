// use this file to put the footer header,
//
// we'll have another file for all posts page

import React, { PureComponent } from 'react';

import './App.css';

import { Header } from './Header';
import { BlogPost } from './BlogPost';
import { Footer } from './Footer';

export class BlogApp extends PureComponent {
  state = { rawMarkdownLoaded: false };

  updateLoadStatus = () => {
    this.setState({rawMarkdownLoaded: true});
  };

  render = () => {
    return (
      <div>
        <Header />
        <div className="BlogAppWrapper">
          <BlogPost {...this.state} onLoad={() => {this.updateLoadStatus()}} />
        </div>
        {this.state.rawMarkdownLoaded && <Footer />}
      </div>
    );
  };

}