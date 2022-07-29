const got = require("got")

class GithubApi{
  constructor() {
    this.apiGit = 'https://api.github.com/repos/';
  }

  fetchRepositoryData(path, callbackFunction) {
		let url = this.apiGit + path;
		got(url)
		.then((response) => {
			callbackFunction(JSON.parse(response.body));
		});
	}

}

module.exports = GithubApi;

// const githubApi = require('./githubApi');
// const test = new GithubApi();
// test.fetchRepositoryData('sinatra/sinatra');