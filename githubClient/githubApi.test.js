const GithubApi = require('./GithubApi')
const Github = require('./Github')

describe('Github client', () => {
    it('should return a JS object with the repo information', () => {
        const  mockedApi = {
          fetchRepositoryData: (repoName, callBack) => {
            callBack({
              name: 'sinatra/sinatra',
              description: 'some fake description'
            });
          }
        }
        const github = new Github(mockedApi);
        github.fetch('sinatra/sinatra');
        expect(github.getRepoData()).toEqual({
          name: 'sinatra/sinatra',
          description: 'some fake description'
        })
    });
});