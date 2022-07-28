class Github{

  constructor (api){
      this.api = (api)
  }
  
  fetch = (path) => {
      this.api.fetchRepositoryData(path)
      
  }

  getRepoData () {
      return fetchRepositoryData();
  }
}

module.exports = Github;