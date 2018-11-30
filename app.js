// Init github class
const user = new github;
//Init UI class
const ui = new UI;
//Init search box
const searchBox = document.querySelector("#searchBox");
//Add keyup event listener to the search box
searchBox.addEventListener('keyup', getUser);

//Get User
function getUser(e){
    if(e.target.value!=''){
    user.getUser(e.target.value)
    .then(data =>{
        ui.showUser(data.userData);
        ui.showRepos(data.repoData);
    })
    .catch(err => {
        //Not Found show Alert
        ui.showAlert('User Not Found','alert alert-danger');
        //Clear UI
        ui.clearUI();
        //Log the error
        console.log(err);
    });
    }
    else{
        ui.clearUI();
    }
}
