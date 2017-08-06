import React, { PureComponent } from 'react';
import Markdown from 'react-remarkable';

import { requestMarkdownService } from './request-markdown-service';

export class BlogPost extends PureComponent {
  state = { rawMarkdown: null };

  componentWillMount = () => {
    return requestMarkdownService()
      .then((rawMarkdown) => {
        this.setState({rawMarkdown});
      });
  };

  render = () => {
    return (
      <div>
        {this.state.rawMarkdown ?
          <Markdown source={this.state.rawMarkdown} /> : <div>loading ...</div> }
      </div>
    );
  };

}