import apigithubcontroller from './singletons/apigithubcontroller';
import Searcher from './Components/searcher';
import * as React from 'react';
import * as _ from 'lodash';

const DEBOUNCE_DELAY = 500;

export default class GithubSearch extends React.Component<any, any> {
    private github: apigithubcontroller = apigithubcontroller.getInstance();

    constructor(props: any) {
        super(props);
        this.state = {}
    }

    private handleOnClick = () => {
        this.debounceSearch();
    }

    private debounceSearch = _.debounce(this.getRepositories, DEBOUNCE_DELAY);

    private async getRepositories() {
        let username: string = $("#searcher-main").val().toString();
        let userRepos: any;

        if (username.length > 0)
            userRepos = await this.github.GetUserRepos(username);

        console.log(userRepos);
    }

    private createHeader(): JSX.Element {
        return  <div className="github-searcher-header">
                    <div className="title">GitHub Searcher</div>
                    <button className="bookmark-button"></button>
                </div>
    }

    private createBody(): JSX.Element {
        return  <div className="github-searcher-body">
                    <Searcher Placeholder="Search by Username" OnClick={this.handleOnClick} Id="main"/>
                    <div className="repo-list">
                        
                    </div>
                </div>
    }

    private createFooter(): JSX.Element {
        return  <div className="github-searcher-footer">

                </div>
    }

    render() {
        return  <div>
                    <div className="github-searcher-container">
                        {this.createHeader()}
                        {this.createBody()}
                        {this.createFooter()}
                    </div>
                </div>
    }
}