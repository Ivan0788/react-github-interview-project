const BASE_URL = "https://api.github.com";

export default class apigithubcontroller {
    private static instance: apigithubcontroller = new apigithubcontroller();

    private constructor() {
    }

    public static getInstance(): apigithubcontroller {
        return this.instance;
    }

    public async GetUserRepos(username: string): Promise<any> {
        return fetch(`${BASE_URL}/users/${username}/repos?per_page=250`, {
            method: 'GET',
        }).then(response => response.json());
    }

    public async GetSearch(query: string): Promise<any> {
        return fetch(`${BASE_URL}/search/repositories?q=${query}`, {
            method: 'GET',
        }).then(response => response.json());
    }
}