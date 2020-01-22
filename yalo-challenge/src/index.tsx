import GithubSearch from './githubsearch';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './css/index.css';

export default class GithubSearchConfig {
    constructor() {
        ReactDOM.render(<GithubSearch />, $('#react-github')[0]);
    }
}

new GithubSearchConfig();