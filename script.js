var currentAvatarName= document.getElementById("current-avatar-name");
var avatarName = document.getElementsByClassName("avatar-name");

window.onload = function(){
    currentAvatarName.addEventListener("input", function(){
        console.log(currentAvatarName.value);
        for(let i=0; i<avatarName.length; i++){
            avatarName[i].innerHTML = currentAvatarName.value;
        }
    })
}

