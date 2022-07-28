const got = require("got")

class GithubApi{

  fetchRepositoryData = (path, callbackFunction) =>{ 
    let url = "https://api.github.com/repos/" + path
    got(url).then(response => {
      callbackFunction(JSON.parse(response.body));
    });
  }
}

class Github{

    constructor (api){
        this.api = (api)
    }
    
    fetch = (path) => {
        this.api.fetchRepositoryData(path)
        // return fetchedData
        
    }

    getRepoData () {
        return this.api.fetchRepositoryData();
        // return fetchedData
    }
}
module.exports = {GithubApi, Github};

// setTimeout(executeAfterDelayFunction, num*1000);

// const api = new GithubApi();

// const github = new Github(api);

// github.fetch('sinatra/sinatra');

// github.getRepoData();