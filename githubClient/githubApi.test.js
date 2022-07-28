const {GithubApi, Github} = require('./GithubApi')

describe('GithubApi', () => {
    it('This method will delegate to `GithubApi.fetchRepositoryData()', () => {
        const api = new GithubApi();
        const github = new Github(api);
        github.fetch('sinatra/sinatra');
        expect(github.getRepoData()).toBe('')
    });

});