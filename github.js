class github{
    constructor(){
        this.client_id = 'da05f516c8932ab5e055';
        this.client_Secret = 'e030b0889d34823c7e35d1e36d1fbae63ad6c87d';
        this.repos_count=5;
        this.repos_sort = 'created: asc';
    }
    //Method to get user
    async getUser(user){
        let userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_Secret}`);
        let repoResponse = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_Secret}&sort=${this.repos_sort}&per_page=${this.repos_count}`);

        let userData = await userResponse.json();
        let repoData = await repoResponse.json();
        //checking for http errors
        try{
            if(userResponse.status!=200 || repoResponse.status!=200){
                throw new httpError(userResponse);
            }
            else{
                return {
                    userData,
                    repoData

                }
            }
        }
        catch(err){
            return err;
        }
    }
}