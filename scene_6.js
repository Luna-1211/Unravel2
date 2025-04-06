const manga1 = document.getElementById("manga_1");
const manga2 = document.getElementById("manga_2");
const manga3 = document.getElementById("manga_3");
const manga4 = document.getElementById("manga_4");
const manga5 = document.getElementById("manga_5");
const manga6 = document.getElementById("manga_6");
const manga7 = document.getElementById("manga_7");
const manga8 = document.getElementById("manga_8");


document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("preloader").style.animation = "fade-out 2s ease-out";
    document.getElementById("preloader").style.opacity = "100";
  }, 4000);
  
  setTimeout(function() {
    document.getElementById("preloader").style.opacity = "0";
    document.getElementById("preloader").style.display = "none";
    document.getElementById("cutscene").style.display = "block";
  }, 5000);
  
  setTimeout(function() {
    manga1.style.display = "block";
    manga1.style.animation = "1s enter_1 ease-in";
    manga2.style.display = "block";
    manga2.style.animation = "1s enter_2 ease-in";
  }, 2500);
  
  setTimeout(function() {
    manga1.style.display = "none";
    manga2.style.display = "none";
    manga3.style.display = "block";
    manga3.style.animation = "1s enter_1 ease-in";
    manga4.style.display = "block";
    manga4.style.animation = "1s enter_2 ease-in";
  }, 6500);
  
  setTimeout(function() {
    manga3.style.display = "none";
    manga4.style.display = "none";
    manga5.style.display = "block";
    manga5.style.animation = "1s enter_1 ease-in";
    manga6.style.display = "block";
    manga6.style.animation = "1s enter_2 ease-in";
  }, 10500);
  
  setTimeout(function() {
    manga5.style.display = "none";
    manga6.style.display = "none";
    manga7.style.display = "block";
    manga7.style.animation = "1s enter_1 ease-in";
    manga8.style.display = "block";
    manga8.style.animation = "1s enter_2 ease-in";
  }, 14500);
  
  setTimeout(function() {
    document.getElementById("cutscene").style.display = "none";
    manga7.style.display = "none";
    manga8.style.display = "none";
  }, 18500);
});

  let textIndex = 0;
const texts = [
  "",
  "Upon entering, a scent became evident as a whiff caused you to wince",
  "As if the air started to choke you.",
  "Your head spun for a second.",
  "Everything felt fuzzy.",
  "It stung, like a needle. Maybe worse.",
  "It didn’t help that you’re starting to find it difficult to breathe.",
  "Urgh!",
  "You cover your nose with the fabric of your palms.",
  "Time felt slow. Every second is like a lifetime’s worth. Yet you gradually got used to the distasteful scent.",
  "inhale...exhale",
  "What once was a poison suddenly became a graceful fragrance.",
  "It tempts you, pulling you into a daze.",
  "What is this?",
  "You were about to take a peek when suddenly a hand ruffled on your shoulder.",
  "Are you alright, dear?",
  "My, my how foolish of me to disregard your needs. I apologize once again.",
  "Shall we return to the other room for now miss Caster?",
  "No need...",
  "I’ll.. manage.",
  "Finally, you get a glimpse of the interior.",
  "And the origin of the scent.",
  "Eh?!",
  "Huh?!",
  "WHAT!?",
  "Fuahahaha!",
  "Not something you’d expect is it?",
  "How?...",
  "How?????",
  "That’s...",
  "Incredible? Extraordinary? Astonishing? Breath-taking? Alluring? Preposterous? Unimaginable?",
  "...Impossible?",
  "You stood with your mouth agape.",
  "A scene that supposedly could only be witnessed in dreams, stood in front of you.",
  "Are you awake? Is this reality? Did you get knocked out earlier? Should you pinch yourself to see?",
  "Or are you going insane?",
  "Yet, through these worrisome thoughts is fascination.",
  "Stunned in a state of confusion, a smile still manages to creep up to your face.",
  "The older gentleman chuckles in accomplishment.",
  "Ehehe! Did you really think a genius such as I would be working in such a simple, rotten, and unadorned lab?",
  "It’s not even worthy enough to be called a laboratorium!",
  "He scoffs as he strolls away to take a seat.",
  "The audacity for people to ask for a sight of that place.",
  "Then gasp and shower me with praise as if it’s sooo impressive!",
  "How dare they assume it’s a place deserving for someone such as I?",
  "But then, why are your accomplishments displaced there?",
  "Such filth is as meaningless as a pen without its writer.",
  "Anyone can attain those if they actually tried!",
  "To be an inventor means you created the impossible!",
  "Or to be precise, made way for the impossible.",
  "Invention isn’t just to create for the inconvenience, it’s to create the unknown while traversing in it!",
  "Risks, dear!",
  "He gazes at you fanatically.",
  "Knowledge is everything.",
  "How have I achieved… that?",
  "The doctor points at the humongous flower, you follow.",
  "With further examination, you realise it’s been strapped to chords and wires, pumping its required nutrients and keeping it alive for as long as it can be.",
  "You walk up to it, brushing the smooth petals.",
  "Did you make this?",
  "Make? Pfft!",
  "Even better!",
  "The doctor swiftly stands up.",
  "As I mentioned before, we make way for the impossible.",
  "And that is exactly what yours truly did!",
  "You feel a pair of hands placed at your back, pushing you in a direction.",
  "With no choice, you of course, have to oblige.",

  
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
  "Upon entering, a scent became evident as a whiff caused you to wince": "Narrator",
  "As if the air started to choke you.": "Narrator",
  "Your head spun for a second.": "Narrator",
  "Everything felt fuzzy.": "Narrator",
  "It stung, like a needle. Maybe worse.": "Narrator",
  "It didn’t help that you’re starting to find it difficult to breathe.": "Narrator",
  "Urgh!": "Caster",
  "You cover your nose with the fabric of your palms.": "Narrator",
  "Time felt slow. Every second is like a lifetime’s worth. Yet you gradually got used to the distasteful scent.": "Narrator",
  "inhale...exhale": "Caster",
  "What once was a poison suddenly became a graceful fragrance.": "Narrator",
  "It tempts you, pulling you into a daze.": "Narrator",
  "What is this?": "Caster",
  "You were about to take a peek when suddenly a hand ruffled on your shoulder.": "Narrator",
  "Are you alright, dear?": "Cire",
  "My, my how foolish of me to disregard your needs. I apologize once again.": "Cire",
  "Shall we return to the other room for now miss Caster?": "Cire",
  "No need...": "Caster",
  "I’ll.. manage.": "Caster",
  "Finally, you get a glimpse of the interior.": "Narrator",
  "And the origin of the scent.": "Narrator",
  "Eh?!": "Caster",
  "Huh?!": "Caster",
  "WHAT!?": "Caster",
  "Fuahahaha!": "Cire",
  "Not something you’d expect is it?": "Cire",
  "How?...": "Caster",
  "How?????": "Caster",
  "That’s...": "Caster",
  "Incredible? Extraordinary? Astonishing? Breath-taking? Alluring? Preposterous? Unimaginable?": "Cire",
  "...Impossible?": "Cire",
  "You stood with your mouth agape.": "Narrator",
  "A scene that supposedly could only be witnessed in dreams, stood in front of you.": "Narrator",
  "Are you awake? Is this reality? Did you get knocked out earlier? Should you pinch yourself to see?": "Narrator",
  "Or are you going insane?": "Narrator",
  "Yet, through these worrisome thoughts is fascination.": "Narrator",
  "Stunned in a state of confusion, a smile still manages to creep up to your face.": "Narrator",
  "The older gentleman chuckles in accomplishment.": "Narrator",
  "Ehehe! Did you really think a genius such as I would be working in such a simple, rotten, and unadorned lab?": "Cire",
  "It’s not even worthy enough to be called a laboratorium!": "Cire",
  "He scoffs as he strolls away to take a seat.": "Narrator",
  "The audacity for people to ask for a sight of that place.": "Cire",
  "Then gasp and shower me with praise as if it’s sooo impressive!": "Cire",
  "How dare they assume it’s a place deserving for someone such as I?": "Cire",
  "But then, why are your accomplishments displaced there?": "Cire",
  "Such filth is as meaningless as a pen without its writer.": "Cire",
  "Anyone can attain those if they actually tried!": "Cire",
  "To be an inventor means you created the impossible!": "Cire",
  "Or to be precise, made way for the impossible.": "Cire",
  "Invention isn’t just to create for the inconvenience, it’s to create the unknown while traversing in it!": "Cire",
  "Risks, dear!": "Cire",
  "He gazes at you fanatically.": "Narrator",
  "Knowledge is everything.": "Cire",
  "How have I achieved… that?": "Cire",
  "The doctor points at the humongous flower, you follow.": "Narrator",
  "With further examination, you realise it’s been strapped to chords and wires, pumping its required nutrients and keeping it alive for as long as it can be.": "Cire",
  "You walk up to it, brushing the smooth petals.": "Narrator",
  "Did you make this?": "Caster",
  "Make? Pfft!": "Cire",
  "Even better!": "Cire",
  "The doctor swiftly stands up.": "Narrator",
  "As I mentioned before, we make way for the impossible.": "Cire",
  "And that is exactly what yours truly did!": "Cire",
  "You feel a pair of hands placed at your back, pushing you in a direction.": "Narrator",
  "With no choice, you of course, have to oblige.": "Cire",
  
  
};
  // Check if nameElement is not null
  if (nameElement) {
    window.addEventListener("click", () => {
      if (textIndex < texts.length - 1) {
        textElement.innerHTML = texts[++textIndex];
      }
      const currentText = textElement.innerHTML;
      nameElement.innerHTML = nameMapping[currentText] || "?";
      
      if (currentText === "Urgh!") {
        characterPortrait_1.style.display = "block";
      }
      
      if (currentText === "What is this?") {
        characterPortrait_1.src = "caster_concern.png";
      }
      
      if (currentText === "Are you alright, dear?") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
      }
      
      if (currentText === "My, my how foolish of me to disregard your needs. I apologize once again.") {
        characterPortrait_2.src = "cire_proud.png";
      }
      
      if (currentText === "No need...") {
        characterPortrait_1.style.display = "block";
        characterPortrait_2.style.display = "none";
      }
      
      if (currentText === "Finally, you get a glimpse of the interior.") {
        characterPortrait_1.style.display = "none";
      }
      
      if (currentText === "And the origin of the scent.") {
        document.getElementById("blackscreen").style.opacity = "10";
      }
      
      if (currentText === "Eh?!") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_shocked.png";
        document.getElementById("blackscreen").style.opacity = "0";
      }
      
      if (currentText === "Fuahahaha!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_maniac.png";
      }
      
      if (currentText === "How?...") {
        characterPortrait_1.style.display = "block";
        characterPortrait_2.style.display = "none";
        characterPortrait_1.src = "caster_shocked.png";
      }
      
      if (currentText === "Incredible? Extraordinary? Astonishing? Breath-taking? Alluring? Preposterous? Unimaginable?") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_maniac.png";
      }
      
      if (currentText === "A scene that supposedly could only be witnessed in dreams, stood in front of you.") {
        document.getElementById("blackscreen").style.opacity = "10";
      }
      
      if (currentText === "Ehehe! Did you really think a genius such as I would be working in such a simple, rotten, and unadorned lab?") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_psycho.png";
        document.getElementById("blackscreen").style.opacity = "0";
      }
      
      if (currentText === "The audacity for people to ask for a sight of that place.") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
      }
      
      if (currentText === "Knowledge is everything.") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_smiling-armcrossed.png";
      }
      
      if (currentText === "Did you make this?" ){
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_questioning.png";
        characterPortrait_2.style.display = "none";
      }  
      
      if (currentText === "Make? Pfft!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_maniac.png";
      }
    
      if (currentText === "With no choice, you of course, have to oblige.") {
        setTimeout(function() {
          window.location.replace('scene_7.html');
            }, 4000);
      }
      
      option1Element.style.display = "none";
    });
  } else {
    console.error("nameElement is null");
  }