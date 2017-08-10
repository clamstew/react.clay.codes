import React, { PureComponent } from 'react';
// import Markdown from 'react-remarkable';

import { Remarkable } from './ReactRemarkable';

import {
  requestMarkdownService,
  getBlogConfig,
  remarkableOptions,
  parseGreyMatter
} from './request-markdown-service';

// import spinner from './rotating-squares.svg';
import { Spinner } from './Spinner';

export class BlogPost extends PureComponent {
  state = { rawMarkdown: null, config: null };

  componentWillMount = () => {
    getBlogConfig().then((config) => {
        console.log('config', config);
        this.setState({config});
      });

    requestMarkdownService()
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