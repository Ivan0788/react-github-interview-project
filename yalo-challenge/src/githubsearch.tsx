import apigithubcontroller from './Singletons/apigithubcontroller';
import SearchBar from './Components/SearchBar';
import * as React from 'react';
import * as _ from 'lodash';

const DEBOUNCE_DELAY = 500;

export default class GithubSearch extends React.Component<any, any> {
    private github: apigithubcontroller = apigithubcontroller.getInstance();

    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        return  <div>
                   <SearchBar OnChange={this.handleOnChange} Placeholder="Search Username" Type="username"/>
                </div>
    }

    private handleOnChange = () => {
        this.debounceSearch();
    }

    private debounceSearch = _.debounce(this.getRepositories, DEBOUNCE_DELAY);

    private async getRepositories() {
        let username: string = $("#search-bar-username").val().toString();
        let userRepos: any;

        if (username.length > 0)
            userRepos = await this.github.GetUserRepos(username);

        console.log(userRepos);
    }
}