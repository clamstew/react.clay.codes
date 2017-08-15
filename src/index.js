import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect } from 'react-router-dom'

import './index.css';
import './syntax-highlighting/monokai.css';
// import './syntax-highlighting/dark.css';

import { BlogApp } from './App';
import { MarkdownFormattingHelp } from './MarkdownFormattingHelp';
import { BlogIndex } from './BlogIndex';

// @TODO - add back when get secure domain
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <HashRouter>
    <div>
      <Route path='/blog/:blogslug' component={BlogApp} />
      <Route exact path='/markdown-formatting-help' component={MarkdownFormattingHelp} />
      <Route exact path='/blog' component={BlogIndex} />
      <Redirect from="*" to="blog" />
    </div>
  </HashRouter>
), document.getElementById('blog-root'));
// registerServiceWorker();
