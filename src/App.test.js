import React from 'react';
import ReactDOM from 'react-dom';

import { BlogPost } from './BlogPost';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlogPost />, div);
});
