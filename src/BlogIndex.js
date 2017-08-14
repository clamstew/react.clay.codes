import React, { PureComponent } from 'react';
import { get } from './util'
import { getBlogConfig } from './request-markdown-service';

import { BlogIndexPreview } from './BlogIndexPreview'


export class BlogIndex extends PureComponent {
  state = { config: null };

  componentWillMount = () => {
    getBlogConfig().then((config) => {
        console.log('config', config);
        this.setState({config});
      });
  };


  posts = () => get(this, 'state.config.posts')
  hasPost = () => this.posts() && this.posts().length && this.posts().length > 0


  render = () => {
    return (
      <div>
        { this.hasPost() &&
          this.posts().map((p, i) => <BlogIndexPreview key={i} post={p}/> ) }
      </div>
    );
  };

}