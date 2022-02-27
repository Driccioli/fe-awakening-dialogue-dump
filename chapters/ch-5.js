chapterDialogue = [
    {
        "character": "",
        "dialogue" : ""
    },
];

document.write(`
<div class="chapter" id="ch-5">
<h2>Chapter 5: The Exalt and the King</h2>
`);

chapterDialogue.forEach(dialogueLine => {
  document.write(`
  <div class="new-text-box">

<svg width="600" height="120">
  <polygon 
          points="20 0, 580 0, 600 20, 600 100, 580 120, 20 120, 0 100, 0 20 " 
          fill="#F2CDA0" stroke="#660000" stroke-width="2"
  />

</svg> 
  <div class="new-who-is-speaking">
    ${dialogueLine.character}
  </div>
  <div class="new-text-box-dialogue">
    ${dialogueLine.dialogue}        
  </div>
</div>
`);
});


document.write(`</div>`);