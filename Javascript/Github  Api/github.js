class Github{
    constructor(){
        this.url="https://api.github.com/users/"
    }

    async getGithubData(username){
        const userResponse=await fetch(this.url+username);
        const repoResponse=await fetch(this.url+username+"/repos");

        const userData= await userResponse.json();
        const repoData=await repoResponse.json();

        return {
            user:userData,
            repo:repoData

        }

    }
}