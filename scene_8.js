
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("preloader").style.animation = "fade-out 2s ease-out";
    document.getElementById("preloader").style.opacity = "100";
  }, 2000);
  setTimeout(function() {
    document.getElementById("preloader").style.opacity = "0";
    document.getElementById("preloader").style.display = "none";
  }, 3000);
});

  let textIndex = 0;
const texts = [
  "",
  "Oh wow.",
  "The view that awaits you is.. magnificent.",
  "A peaceful greenery of lands with no modernized buildings found.",
  "The atmosphere is filled with an aromatic scent. So powerful yet beautiful.",
  "On a hill they stood, looking below, enormous flowers of different kinds met her gaze.",
  "How gorgeous...",
  "Where are we?",
  "The same period as when I got the flower back in the Art Gallery, of course!",
  "Hold on, didn’t you say the oxygen levels were difficult to adapt to?",
  "Oh don’t worry! I fixed that problem!",
  "The Argentum Tempus has a function that adjusts the user’s oxygen level to what they need no matter the time period",
  "Thus no kind of changes will affect them!",
  "That’s how I used my experience to fix a problem, dear!",
  "Oh yes, speaking of the time-travelling machine, I thought it’ll teleport with us and we would be able to return.. However, it.. isn’t here?",
  "No no no! Miss Ambrose I would never bring such delicate work to potentially dangerous places!",
  "During my past test runs, I almost got stuck in the middle of a war because of the machine getting slightly damaged!",
  "Which is why I programmed The Argentum Tempus to recognize us as variables of our original time, and will automatically return us back depending on how long it can keep us in this current period, or once it detects a change in our body such as dangers or injuries!",
  "Basically, it’s our lifeline and you don’t have to worry. Put your trust in me.",
  "(\"Put your trust in me\" Obviously, there's literally no one else around here.)",
  "I see...",
  "That’s a lot of work...",
  "And impressive as well.",
  "Muehehe! It is I, of course!",
  "Now come walk with me.",
  "He walks down the hill, into the field of flowers. You follow.",
];

const textElement = document.getElementById("text");
const gameMain = document.getElementById("game");
const nameElement = document.getElementById("names");
const dialogue = document.getElementById("dialogues");
const option1Element = document.getElementById("c_1");
const option2Element = document.getElementById("c_2");
const option3Element = document.getElementById("c_3");
const option4Element = document.getElementById("c_4");
const characterPortrait_1 = document.getElementById("portrait-1");
const characterPortrait_2 = document.getElementById("portrait-2");

const nameMapping = {
  
"Oh wow.": "Caster",

"The view that awaits you is.. magnificent.": "Narrator",

"A peaceful greenery of lands with no modernized buildings found.": "Narrator",

"The atmosphere is filled with an aromatic scent. So powerful yet beautiful.": "Narrator",

"On a hill they stood, looking below, enormous flowers of different kinds met her gaze.": "Narrator",

"How gorgeous...": "Caster",

"Where are we?": "Caster",

"The same period as when I got the flower back in the Art Gallery, of course!": "Cire",

"Hold on, didn’t you say the oxygen levels were difficult to adapt to?": "Caster",

"Oh don’t worry! I fixed that problem!": "Cire",

"The Argentum Tempus has a function that adjusts the user’s oxygen level to what they need no matter the time period": "Cire",

"Thus no kind of changes will affect them!": "Cire",

"That’s how I used my experience to fix a problem, dear!": "Cire",

"Oh yes, speaking of the time-travelling machine, I thought it’ll teleport with us and we would be able to return.. However, it.. isn’t here?": "Caster",

"No no no! Miss Ambrose I would never bring such delicate work to potentially dangerous places!": "Cire",

"During my past test runs, I almost got stuck in the middle of a war because of the machine getting slightly damaged!": "Cire",

"Which is why I programmed The Argentum Tempus to recognize us as variables of our original time, and will automatically return us back depending on how long it can keep us in this current period, or once it detects a change in our body such as dangers or injuries!": "Cire",

"Basically, it’s our lifeline and you don’t have to worry. Put your trust in me.": "Cire",

"(\"Put your trust in me\" Obviously, there's literally no one else around here.)" : "Caster",

"I see...": "Caster",

"That’s a lot of work...": "Caster",

"And impressive as well.": "Caster",

"Muehehe! It is I, of course!": "Cire",

"Now come walk with me.": "Cire",

"He walks down the hill, into the field of flowers. You follow.": "Narrator",
};
  // Check if nameElement is not null
  if (nameElement) {
    window.addEventListener("click", () => {
      if (textIndex < texts.length - 1) {
        textElement.innerHTML = texts[++textIndex];
      }
      const currentText = textElement.innerHTML;
      nameElement.innerHTML = nameMapping[currentText] || "?";
      
      if (currentText === "Oh wow.") {
        characterPortrait_1.style.display = "block";
        characterPortrait_2.style.display = "none";
        dialogue.style.display = "block";
      }
      
      if (currentText === "The same period as when I got the flower back in the Art Gallery, of course!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "Hold on, didn’t you say the oxygen levels were difficult to adapt to?") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = 'caster_concern.png';
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Oh don’t worry! I fixed that problem!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = 'cire_determined.png';
        }
      
      if (currentText === "Oh yes, speaking of the time-travelling machine, I thought it’ll teleport with us and we would be able to return.. However, it.. isn’t here?") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = 'caster_smiling.png';
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "No no no! Miss Ambrose I would never bring such delicate work to potentially dangerous places!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = 'cire_smiling-armcrossed.png';
        }
      
      if (currentText === "(\"Put your trust in me\" Obviously, there's literally no one else around here.)") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = 'caster_no-expression.png';
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Muehehe! It is I, of course!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = 'cire_erm.png';
        }
      
      if (currentText === "He walks down the hill, into the field of flowers. You follow.") {
        setTimeout(function () {
          window.location.replace('scene_9.html');
          }, 2000);
        }
      
      option1Element.style.display = "none";
    });
  } else {
    console.error("nameElement is null");
  }