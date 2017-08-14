// use this file to put the footer header,
//
// we'll have another file for all posts page

import React, { PureComponent } from 'react';
import { get } from './util'

import './App.css';

import { Header } from './Header';
import { BlogPost } from './BlogPost';
import { Footer } from './Footer';

import { getBlogConfig } from './request-markdown-service';

export class BlogApp extends PureComponent {
  state = { rawMarkdownLoaded: false, config: null };

  updateLoadStatus = () => {
    this.setState({rawMarkdownLoaded: true});
  };

  componentWillMount = () => {
    getBlogConfig().then((config) => {
        console.log('config', config);
        this.setState({config});
      });
  };

  render = () => {
    console.log('react router blog slug', get(this, 'props'))
    return (
      <div>
        <Header />
        <div className="BlogAppWrapper">
          <BlogPost {...this.state} {...this.props} onLoad={() => {this.updateLoadStatus()}} />
        </div>
        {this.state.rawMarkdownLoaded && <Footer />}
      </div>
    );
  };

}