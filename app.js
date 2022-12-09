//classes
const github = new Github;
const ui = new UI; 
//Get Elements
const searchUser = document.getElementById('searchUser'); 

//Event Listeners
searchUser.addEventListener('keyup', fromUserText);

//Functions for event listeners
function fromUserText(e){
    const userText = e.target.value;
    if(userText !== ''){
        //Make http call
        github.getUser(userText).then(data => 
            {
               if(data.profile.message === 'Not Found' ) {
                //Show alert
                ui.showAlert('User not found', 'alert alert-danger')
               } else {
                //Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
               }
            });
    } else {
        // Clear Profile 
        ui.clearProfile();
    }
}