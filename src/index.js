import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
// import { browserHistory } from 'react-router';

import './index.css';
import './syntax-highlighting/monokai.css';
// import './syntax-highlighting/dark.css';

import { BlogApp } from './App';
import { MarkdownFormattingHelp } from './MarkdownFormattingHelp';
import { BlogIndex } from './BlogIndex';

// @TODO - add back when get secure domain
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path='/blog/:blogslug' component={BlogApp} />
      <Route exact path='/markdown-formatting-help' component={MarkdownFormattingHelp} />
      <Route exact path='/' component={BlogIndex} />
    </div>
  </BrowserRouter>
), document.getElementById('blog-root'));
// registerServiceWorker();
