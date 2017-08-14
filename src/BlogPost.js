import React, { PureComponent } from 'react';
import { get } from './util'
import { Remarkable } from './ReactRemarkable';

import {
  requestMarkdownService,
  remarkableOptions,
  parseGreyMatter
} from './request-markdown-service';

import { Spinner } from './Spinner';

export class BlogPost extends PureComponent {
  state = { rawMarkdown: null, greyMatter: {} }

  blogslug = () => get(this, 'props.match.params.blogslug')

  componentWillMount = () => {
    console.log('react router blog slug - in BlogPost.componentWillMount', this.blogslug())
  };

  componentWillReceiveProps = (nextProps) => {
    // console.log('nextProps.config', nextProps.config);
    requestMarkdownService({slug: this.blogslug(), config: nextProps.config})
      .then((rawMarkdown) => {
        const greyMatter = parseGreyMatter(rawMarkdown);
        console.log('greyMatter', greyMatter);
        setTimeout(() => {
          this.setState({rawMarkdown, greyMatter})
          this.props.onLoad(); // shows footer and other page elements
        }, 200);
      });
  };

  render = () => {
    return (
      <div>
        {this.state.greyMatter &&
          <div>
            {this.state.greyMatter.name && <h1>{this.state.greyMatter.name}</h1>}
          </div>
        }
        {this.state.rawMarkdown ?
          <Remarkable source={this.state.rawMarkdown}
                      container={'div'}
                      options={remarkableOptions()} /> : <Spinner /> }
      </div>
    );
  };

}