import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BlogPost } from './BlogPost';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BlogPost />, document.getElementById('root'));
registerServiceWorker();
