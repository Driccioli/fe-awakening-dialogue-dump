const chapterDialogue = [
    {
        "character": "Chrom",
        "dialogue" : "Up there!"
    },
    {
        "character": "Validar",
        "dialogue" : "You fool! <br> *laughs* Die!"
    },
    {
        "character": "Chrom",
        "dialogue" : "This is it! <br> Our final battle!"
    },
    {
        "character": "Chrom",
        "dialogue" : "You're one of us, <span class=\"avatar-name\">Robin</span>, and no \"destiny\" can change that."
    },
    {
        "character": "Chrom",
        "dialogue" : "Now let's kill this dastard and be done with it!"
    },
    {
        "character": "Chrom",
        "dialogue" : "<span class=\"avatar-name\">Robin</span>, we have to get close. Let's move!"
    },
    {
        "character": "Chrom",
        "dialogue" : "All right, my turn."
    },
    {
        "character": "Chrom",
        "dialogue" : "Go ahead, Robin!"
    },
    {
        "character": "Validar",
        "dialogue" : "Ha ha ha! Why do you resist?"
    },
    {
        "character": "Chrom",
        "dialogue" : "Good, he's almost within reach. <br> Let's move in and strike!"
    },
    {
        "character": "Validar",
        "dialogue" : "Gya ha ha! Fools! Struggle all you want!<br> You cannot unwrite what is already written!"
    },
    {
        "character": "Chrom",
        "dialogue" : "Robin, I...I'm Sorry. Just..run while you can..."
    },
    {
        "character": "Validar",
        "dialogue" : "Gya ha ha! You can't escape it! <br>That's why it's called destiny!"
    },
    {
        "character": "Chrom",
        "dialogue" : "Robin! No! <br>This can't be how it ends!"
    },
    {
        "character": "Validar",
        "dialogue" : "Heh heh heh... GYA HA HA HA!"
    },
    {
        "character": "Validar",
        "dialogue" : "This isn't over... Damn you BOTH!"
    },
    {
        "character": "Chrom",
        "dialogue" : "Are you all right? <br>That's the end of him. "
    },
    {
        "character": "Chrom",
        "dialogue" : "Thanks to you we carried the day. <br> We can rest easy now."
    },
    {
        "character": "Chrom",
        "dialogue" : "At long last..."
    },
    {
        "character": "Chrom",
        "dialogue" : "...What's wrong? Hey, hang on—"
    },
    {
        "character": "Chrom",
        "dialogue" : "This is not your— your fault..."
    },
    {
        "character": "Chrom",
        "dialogue" : " Promise me you'll escape from this place... Please, go..."
    },
];

    document.write(`
        <div class="chapter" id="premonition">
        <h2>Premonition: Invisible Ties</h2>
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


