import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';
import './syntax-highlighting/monokai.css';
// import './syntax-highlighting/dark.css';

import { BlogApp } from './App';
import { MarkdownFormattingHelp } from './MarkdownFormattingHelp';

// @TODO - add back when get secure domain
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>

    {/*<BlogApp />*/}

    <Switch>
      <Route exact path='/' component={BlogApp}/>
      <Route exact path='/markdown-formatting-help' component={MarkdownFormattingHelp}/>
      {/* both /roster and /roster/:number begin with /roster */}
      {/*<Route path='/roster' component={Roster}/>*/}
      {/*<Route path='/schedule' component={Schedule}/>*/}
    </Switch>
  </BrowserRouter>
), document.getElementById('blog-root'));
// registerServiceWorker();
