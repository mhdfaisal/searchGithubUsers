const user = new github;
const ui = new UI;
user.getUser('bradtraversy')
    .then(data =>{
        ui.showUser(data.userData);
        ui.showRepos(data.repoData);
    })
    .catch(err => console.log(err));