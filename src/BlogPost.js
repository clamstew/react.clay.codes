import React, { PureComponent } from 'react';
// import Markdown from 'react-remarkable';
import { get } from './util'
import { Remarkable } from './ReactRemarkable';

import {
  requestMarkdownService,
  // getBlogConfig,
  remarkableOptions,
  parseGreyMatter
} from './request-markdown-service';

// import spinner from './rotating-squares.svg';
import { Spinner } from './Spinner';

export class BlogPost extends PureComponent {
  state = { rawMarkdown: null }

  blogslug = () => get(this, 'props.match.params.blogslug')

  componentWillMount = () => {
    console.log('react router blog slug - in BlogPost.componentWillMount', this.blogslug())
    requestMarkdownService(this.blogslug())
      .then((rawMarkdown) => {
        const greyMatter = parseGreyMatter(rawMarkdown);
        console.log('greyMatter', greyMatter);
        setTimeout(() => {
          this.setState({rawMarkdown})
          this.props.onLoad(); // shows footer and other page elements
        }, 200);
      });
  };

  render = () => {
    console.log('react router blog slug - in BlogPost', this.blogslug())
    return (
      <div>
        {this.state.rawMarkdown ?
          <Remarkable source={this.state.rawMarkdown}
                      container={'div'}
                      options={remarkableOptions()} /> : <Spinner /> }
      </div>
    );
  };

}