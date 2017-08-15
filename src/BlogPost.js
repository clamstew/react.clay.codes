import React, { PureComponent } from 'react';
import { get, formatDateTimeForDisplay } from './util'
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

  componentWillReceiveProps = (nextProps) => {
    requestMarkdownService({slug: this.blogslug(), config: nextProps.config})
      .then((rawMarkdown) => {
        const greyMatter = parseGreyMatter(rawMarkdown);
        setTimeout(() => {
          this.setState({rawMarkdown, greyMatter})
          this.props.onLoad(); // shows footer and other page elements
        }, 90);
      });
  };

  render = () => {
    return (
      <div>
        {this.state.greyMatter &&
          <div>
            {this.state.greyMatter.name && <h1>{this.state.greyMatter.name}</h1>}
            {this.state.greyMatter.createDate && <p><em>{formatDateTimeForDisplay(this.state.greyMatter.createDate)}</em></p>}
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