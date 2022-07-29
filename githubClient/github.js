const GithubApi = require('./githubApi');

class Github{

  constructor (api){
      this.api = (api)
  }
  
  async fetch (path){
      await this.api.fetchRepositoryData(path, (repositoryData)=> {
        this.repositoryData = repositoryData;
      })
  }

  getRepoData () {
      return this.repositoryData;
  }
}

const githubApi = new GithubApi();
const github = new Github(githubApi);
github.fetch('sinatra/sinatra');
setTimeout(()=> console.log(github.getRepoData()),1000);


module.exports = Github;
