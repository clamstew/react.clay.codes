import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

import { get, formatDateTimeForDisplay } from './util'

export class BlogIndexPreview extends PureComponent {
  post = () => get(this, 'props.post')

  render = () => {
    const post = this.post();
    return (
      <div>
        { post ?
          <div>
            <h1>{ post.name }</h1>

            { post.createDate && <p><em>{formatDateTimeForDisplay(post.createDate)}</em></p>}

            <p>{ post.description }</p>

            { post.slug &&
              <div>
                <Link to={{ pathname: '/blog/' +post.slug }}>View Post</Link>
              </div>
            }
          </div>
          : null
        }
      </div>
    );
  };
}