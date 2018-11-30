class UI{
    constructor(){
        this.profile = document.querySelector('#profile');
        this.repos = document.querySelector('#repos');
    }
    //Function to show user data
    showUser(data){
        this.profile.innerHTML = `
            <div class="container">
            <div class="card card-body">
            <div class="row">
            <div class="col-md-3">
            <img src="${data.avatar_url}"
            class="img-fluid">
            <a href="${data.html_url}" class="btn btn-block btn-info mt-3" target="_blank">View Profile</a>
            </div>
            <div class="col-md-9">
            <a href="#" class="btn btn-primary">Public Repos: ${data.public_repos}</a>
            <a href="#" class="btn btn-secondary">Public Gists: ${data.public_gists}</a>
            <a href="#" class="btn btn-success">Followers: ${data.followers}</a>
            <a href="#" class="btn btn-info">Following: ${data.following}</a>
            <ul class="list-group mt-3">
            <li class="list-group-item">Company : ${data.company}</li>
            <li class="list-group-item">Website/Blog : ${data.blog}</li>
            <li class="list-group-item">Location : ${data.location}</li>
            <li class="list-group-item">Member Since : ${data.created_at}</li>
            </div>
            </div>
            </div>
            </div>`
    }

    //Function to show repositories
    showRepos(repositories){
       let output = '';
       repositories.forEach(item => {
            output+=`
                <div class="card card-body">
                    <div class="row">
                    <div class="col-md-6">
                    <a href="#">${item.name}</a>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-primary btn-sm">Stars: ${item.stargazers_count}</button>
                        <button class="btn btn-success btn-sm">Watchers: ${item.watchers}</button>
                        <button class="btn btn-warning btn-sm">Forks: ${item.forks_count}</button>
                    </div>
                    </div>
                </div>
            `
       });

       this.repos.innerHTML = `
       <div class="container">
       <h3 class="my-4">Latest Repos</h3>
        ${output}
       </div>
       
       `
    }

    //clearUI
    clearUI(){
        this.profile.innerHTML='';
        this.repos.innerHTML='';
    }

    //showAlert
    showAlert(message,className){
        if(document.querySelector('.alert')!=null){
            this.clearAlert();
        }
        //Creating an alert div
        let div = document.createElement('div');
        div.className = className;
        div.textContent = message;
        //Parent element
        const parentDiv = document.querySelector('.searchBoxContainer');
        parentDiv.insertBefore(div, parentDiv.firstElementChild);
        //set timeout after 2s to clear the alert
        setTimeout(()=>this.clearAlert(), 1000);

    }
    //Clear Alerts
    clearAlert(){
       document.querySelector('.alert').remove();
    }
}
 