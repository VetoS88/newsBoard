import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {articles} from './fixtures';
import ArticleList from './ArticlesList';

// const article = articles[0];

ReactDOM.render(<ArticleList articles={articles} />, document.getElementById('root'));
registerServiceWorker();
