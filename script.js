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
            avatarNameComment.innerHTML="The true name.";
            break;
        }
        case "Reflet":{
            avatarNameComment.innerHTML="Sounds strangely familiar...";
            break;
        }
        case "Grima":{
            avatarNameComment.innerHTML="Wrong timeline.";
            break;
        }
        case "not Grima":{
            avatarNameComment.innerHTML="...are you for real?";
            break;
        }
        case "Chrom":{
            avatarNameComment.innerHTML="Chrom? Is that foreign?";
            break;
        }
        case "Frederick":{
            avatarNameComment.innerHTML="Are you attempting to impersonate me?";
            break;
        }
        case "Lissa":{
            avatarNameComment.innerHTML="Ooh! Imagine the pranks we could do together!";
            break;
        }
        case "Sumia":{
            avatarNameComment.innerHTML="Umm... sure?";
            break;
        }
        case "Sully":{
            avatarNameComment.innerHTML="HEY! Go and copy someone else!";
            break;
        }
        case "Stahl":{
            avatarNameComment.innerHTML="I don't really get it, but alright.";
            break;
        }
        case "Virion":{
            avatarNameComment.innerHTML="Ah, imitation IS the greatest form of flattery.";
            break;
        }
        case "Miriel":{
            avatarNameComment.innerHTML="Statistically speaking, this was bound to happen eventually.";
            break;
        }
        case "Vaike":{
            avatarNameComment.innerHTML="Your name may be Vaike, but you can't be THE Vaike!";
            break;
        }
        case "Teach":{
            avatarNameComment.innerHTML="HEY! There can be only one Teach around here!";
            break;
        }
        case "Kellam":{
            avatarNameComment.innerHTML="You forgot I was here, didn't you?";
            break;
        }
        case "Lon'qu":{
            avatarNameComment.innerHTML="...No.";
            break;
        }
        case "Ricken":{
            avatarNameComment.innerHTML="So wait, do you look like me or do we just have the same name?";
            break;
        }
        case "Maribelle":{
            avatarNameComment.innerHTML="How astoundingly rude of you!";
            break;
        }
        case "Gaius":{
            avatarNameComment.innerHTML="Eh, go ahead, Bubbles. I don't really care.";
            break;
        }
        case "Asugi":{
            avatarNameComment.innerHTML="Really? You could at least TRY.";
            break;
        }
        case "Cordelia":{
            avatarNameComment.innerHTML="I'm not sure how to feel about this...";
            break;
        }
        case "Caeldori":{
            avatarNameComment.innerHTML="Please, don't treat me like a role model. ..I don't deserve it.";
            break;
        }
        case "Gregor":{
            avatarNameComment.innerHTML="...You, too?";
            break;
        }
        case "Nowi":{
            avatarNameComment.innerHTML="Ooh! Are you a dragon, too?";
            break;
        }
        case "Libra":{
            avatarNameComment.innerHTML="Clearly Lady Naga works in mysterious ways...";
            break;
        }
        case "Tharja":{
            avatarNameComment.innerHTML="Now, if you wanted me to notice you, you didn't need to do a thing...";
            break;
        }
        case "Rhajat":{
            avatarNameComment.innerHTML="Had it been anyone else, I'd have cursed them until death.";
            break;
        }
        case "Basilio":{
            avatarNameComment.innerHTML="Ha ha ha! Now, that's a new one!";
            break;
        }
        case "Flavia":{
            avatarNameComment.innerHTML="Oh, is that a challenge!?";
            break;
        }
        case "Olivia":{
            avatarNameComment.innerHTML="P-Please don't do that.";
            break;
        }
        case "Cherche":{
            avatarNameComment.innerHTML="I don't really mind.";
            break;
        }
        case "Minerva":{
            avatarNameComment.innerHTML="Oh, you're so cute!";
            break;
        }
        case "Marth":{
            avatarNameComment.innerHTML="Are there any more Marths I should know about!?";
            break;
        }
        case "Lucina":{
            avatarNameComment.innerHTML="Wait- did Father name me after you?";
            break;
        }
        case "Owain":{
            avatarNameComment.innerHTML="I see- you must be my evil doppleganger!";
            break;
        }
        case "Inigo":{
            avatarNameComment.innerHTML="Oh, you! No need to flatter me.";
            break;
        }
        case "Severa":{
            avatarNameComment.innerHTML="Name yourself ANYTHING else!";
            break;
        }
        case "Odin":{
            avatarNameComment.innerHTML="That name- it sounds like a hero of legend!";
            break;
        }
        case "Laslow":{
            avatarNameComment.innerHTML="Ah, what a lovely name!";
            break;
        }
        case "Selena":{
            avatarNameComment.innerHTML="Huh. ..nice name, I guess?";
            break;
        }
        case "Gangrel":{
            avatarNameComment.innerHTML="If you want to sink that low, be my guest! Bwa ha!";
            break;
        }
        case "Aversa":{
            avatarNameComment.innerHTML="I don't know if I should feel flattered or insulted.";
            break;
        }
        case "Walhart":{
            avatarNameComment.innerHTML="You DARE mock me like this!?";
            break;
        }
        case "Validar":{
            avatarNameComment.innerHTML="Gya ha ha! Finally starting to accept your fate?";
            break;
        }
        case "Naga":{
            avatarNameComment.innerHTML="You cannot, Fellblood.";
            break;
        }
        case "Emmeryn":{
            avatarNameComment.innerHTML="...";
            break;
        }
        case "Anna":{
            avatarNameComment.innerHTML="Dear, that name's copyrighted.";
            break;
        }
        case "Mark":{
            avatarNameComment.innerHTML="*Lyn rapidly approaching*";
            break;
        }
        case "Kris":{
            avatarNameComment.innerHTML="Wasn't that the name of... someone?";
            break;
        }
        case "Corrin":{
            avatarNameComment.innerHTML="Well, the dragon part checks out at least...";
            break;
        }
        case "Kiran":{
            avatarNameComment.innerHTML="<b>'FIRE EMBLEM-'</b>";
            break;
        }
        case "Byleth":{
            avatarNameComment.innerHTML="All things considered, you WOULD be a good teacher...";
            break;
        }
        case "Iturbide":
        case "Snow":
        case "Rose":
        case "Tipper":{
            avatarNameComment.innerHTML="<3";
            break;
        }
        case "AAAAAAAAA":{
            avatarNameComment.innerHTML="Not very creative...?";
            break;
        }
        case "Bitch":{
            avatarNameComment.innerHTML="*Validar sneezes*";
            break;
        }
        case "E":{
            avatarNameComment.innerHTML="🇪";
            break;
        }
        case "Kaga":{
            avatarNameComment.innerHTML="Do you believe God hates his own creation?";
            break;
        }
        case "Dedede":{
            avatarNameComment.innerHTML="The king of the show.";
            break;
        }
        case "???":{
            avatarNameComment.innerHTML="Hilarious.";
            break;
        }
        case "...":{
            avatarNameComment.innerHTML="...";
            break;
        }
        case "":{
            avatarNameComment.innerHTML="Please write a name.";
            setTimeout(()=>{if(currentAvatarName.value === "")avatarNameComment.innerHTML="..well you CAN leave it empty, but- isn't it weird?"}, 7000);
            break;
        }
        default:{
            avatarNameComment.innerHTML="This is your avatar.";
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


const currentChapter = document.getElementById("chapters");
const allChapters = document.getElementsByClassName("chapter");
const background = document.getElementById("app");

getChapterScript(allChapters, currentChapter);
getBackground(currentChapter, background);

    currentChapter.addEventListener("change", function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
        getBackground(currentChapter, background);
        for(let i=0; i<allChapters.length; i++) {
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



function getBackground(currentChapter, background){
    switch(currentChapter.value){
        case "premonition":{
            background.style.backgroundImage = "url('./img/premonition-bg.png')";
            break;
        }
        case "prologue":{
            background.style.backgroundImage = "url('./img/prologue-bg.jpeg')";
            break;
        }
        case "ch-1":{
            background.style.backgroundImage = "url('./img/ch-1-bg.jpeg')";
            break;
        }
        case "ch-3":{
            background.style.backgroundImage = "url('./img/ch-3-bg.jpeg')";
            break;
        }
        case "ch-4":{
            background.style.backgroundImage = "url('./img/ch-4-bg.jpeg')";
            break;
        }
        case "ch-6":{
            background.style.backgroundImage = "url('./img/ch-6-bg.jpeg')";
            break;
        }
        case "ch-9":{
            background.style.backgroundImage = "url('./img/ch-9-bg.jpeg')";
            break;
        }
        case "ch-10":{
            background.style.backgroundImage = "url('./img/ch-10-bg.jpeg')";
            break;
        }
        case "ch-11":{
            background.style.backgroundImage = "url('./img/ch-11-bg.png')";
            break;
        }
        default:{
            background.style.backgroundImage = "url('./img/cooler-bg.png')";
            break;
        }
    }
    console.log(background);
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