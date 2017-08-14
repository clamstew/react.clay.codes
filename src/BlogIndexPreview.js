import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

import { get } from './util'

export class BlogIndexPreview extends PureComponent {
  post = () => get(this, 'props.post')

  render = () => {
    const post = this.post();
    return (
      <div>
        { post ?
          <div>
            <h1>{ post.name }</h1>

            <p>{ post.description }</p>

            { post.slug &&
              <div>
                <Link to={{ pathname: 'blog', query: {blogslug: post.slug }}}>View Post</Link>
              </div>
            }
          </div>
          : null
        }
      </div>
    );
  };
}