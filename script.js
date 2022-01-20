var currentAvatarName= document.getElementById("current-avatar-name");
var avatarName = document.getElementsByClassName("avatar-name");

    for(let i=0; i<avatarName.length; i++){
        avatarName[i].innerHTML = currentAvatarName.value;
    }

    currentAvatarName.addEventListener("input", function(){
        console.log(currentAvatarName.value);
        for(let i=0; i<avatarName.length; i++){
            avatarName[i].innerHTML = currentAvatarName.value;
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