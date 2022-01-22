var currentAvatarName= document.getElementById("current-avatar-name");
var avatarName = document.getElementsByClassName("avatar-name");
var isMale = document.getElementById("male");
var isFemale = document.getElementById("female");
var maleAvatar= document.getElementsByClassName("male-avatar"); 
var femaleAvatar= document.getElementsByClassName("female-avatar"); 
var avatarNameComment = document.getElementById("avatar-name-comment");

function funnyComment(currentAvatarName, avatarNameComment){
    switch (currentAvatarName.value){
        case "Robin":{
            avatarNameComment.innerText="The true name.";
            break;
        }
        case "Reflet":{
            avatarNameComment.innerText="Somehow, it feels just right.";
            break;
        }
        case "Grima":{
            avatarNameComment.innerText="Wrong timeline.";
            break;
        }
        case "not Grima":{
            avatarNameComment.innerText="...are you for real?";
            break;
        }
        case "Chrom":{
            avatarNameComment.innerText="Chrom? Is that foreign?";
            break;
        }
        case "Frederick":{
            avatarNameComment.innerText="Are you attempting to impersonate me?";
            break;
        }
        case "Lissa":{
            avatarNameComment.innerText="Sure, that sounds fun!";
            break;
        }
        case "Vaike":{
            avatarNameComment.innerText="Your name may be Vaike, but you can't be THE Vaike!";
            break;
        }
        case "Marth":{
            avatarNameComment.innerText="Are there any more Marths I should know about!?";
            break;
        }
        case "Lucina":{
            avatarNameComment.innerText="Wait- did Father name me after you?";
            break;
        }
        case "Anna":{
            avatarNameComment.innerText="Dear, that name's copyrighted.";
            break;
        }
        default:{
            avatarNameComment.innerText="";
        }
    }
}

    for(let i=0; i<avatarName.length; i++){
        avatarName[i].innerHTML = currentAvatarName.value;
    }
    funnyComment(currentAvatarName, avatarNameComment);

    currentAvatarName.addEventListener("input", function(){
        console.log(currentAvatarName.value);
        for(let i=0; i<avatarName.length; i++){
            avatarName[i].innerHTML = currentAvatarName.value;
        }
        funnyComment(currentAvatarName, avatarNameComment);
    })

    for(let m = 0; m< maleAvatar.length; m++){
        if(isMale.checked){
            maleAvatar[m].style.display="inline";
        }   else{
            maleAvatar[m].style.display="none";
        }
    }
    for(let f = 0; f< femaleAvatar.length; f++){
        if(isFemale.checked){
            femaleAvatar[f].style.display="inline";
        }   else{
            femaleAvatar[f].style.display="none";
        }
    }
    
    isMale.addEventListener("click", function(){
        
        for(let m = 0; m< maleAvatar.length; m++){
            if(isMale.checked){
                maleAvatar[m].style.display="inline";
            }   else{
                maleAvatar[m].style.display="none";
            }
        }
        for(let f = 0; f< femaleAvatar.length; f++){
            if(isFemale.checked){
                femaleAvatar[f].style.display="inline";
            }   else{
                femaleAvatar[f].style.display="none";
            }
        }
        
    });

    isFemale.addEventListener("click", function(){
        for(let m = 0; m< maleAvatar.length; m++){
            if(isMale.checked){
                maleAvatar[m].style.display="inline";
            }   else{
                maleAvatar[m].style.display="none";
            }
        }
        for(let f = 0; f< femaleAvatar.length; f++){
            if(isFemale.checked){
                femaleAvatar[f].style.display="inline";
            }   else{
                femaleAvatar[f].style.display="none";
            }
        }
    })


var currentChapter = document.getElementById("chapters");
var allChapters = document.getElementsByClassName("chapter");

getChapterScript(allChapters, currentChapter);

    currentChapter.addEventListener("change", function(){
        
        for(let i=0; i<allChapters.length; i++){
            if(allChapters[i].id === currentChapter.value){
                allChapters[i].style.display="block";
            }   else{
                allChapters[i].style.display = "none";
            }
        }
    })


function getChapterScript(allChapters, currentChapter){
    for(let i=0; i<allChapters.length; i++){
        if(allChapters[i].id === currentChapter.value){
            allChapters[i].style.display="block";
        }   else{
            allChapters[i].style.display = "none";
        }
    }
}





// function includeHTML() {
//     var z, i, elmnt, file, xhttp;
//     /* Loop through a collection of all HTML elements: */
//     z = document.getElementsByTagName("*");
//     for (i = 0; i < z.length; i++) {
//       elmnt = z[i];
//       /*search for elements with a certain atrribute:*/
//       file = elmnt.getAttribute("w3-include-html");
//       if (file) {
//         /* Make an HTTP request using the attribute value as the file name: */
//         xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//           if (this.readyState == 4) {
//             if (this.status == 200) {elmnt.innerHTML = this.responseText;}
//             if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
//             /* Remove the attribute, and call this function once more: */
//             elmnt.removeAttribute("w3-include-html");
//             includeHTML();
//           }
//         }
//         xhttp.open("GET", file, true);
//         xhttp.send();
//         /* Exit the function: */
//         return;
//       }
//     }
//   }