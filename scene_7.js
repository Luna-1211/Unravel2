
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("preloader").style.animation = "fade-out 2s ease-out";
    document.getElementById("preloader").style.opacity = "100";
  }, 4000);
  setTimeout(function() {
    document.getElementById("preloader").style.opacity = "0";
    document.getElementById("preloader").style.display = "none";
  }, 5000);
});

  let textIndex = 0;
const texts = [
  "",
  "You found yourself set in front of an unrecognizable structure covered in a thick layer of fabric.",
  "Probably twice as tall as you are.",
  "The doctor grips onto the fabric.",
  "Drum roll please!!",
  "I present to you, a time-travelling machine!",
  "Or as I’d like to call-",
  "The Argentum Tempus!",
  "The fabric is pulled off, dangling through the air for a second.",
  "Under reveals a construct of complication.",
  "TA-DA!",
  "...",
  "You listened enthusiastically to the doctor, yet..",
  "You wouldn’t expect something like that to be a “time machine” with its simple feature.",
  "A...time machine?",
  "\"Has he lost his mind or something?\"",
  "Oh? Why the loss of interest?",
  "Is it perhaps, you think this is just insanity?",
  "My apologies... No...I...",
  "What can you say?",
  "You search around for words.",
  "At least one that would describe whatever you’re thinking right now.",
  "But all that you found were questions racing throughout your mind.",
  "It.. would make sense for one to find it inimaginable, yes.",
  "You touch the glass surface of the structure, clear and clean for your reflection to be visible.",
  "You glance at the doctor.",
  "But as you said, that is the kind of creation an inventor must create...",
  "Precisely! I went through numerous trials and errors to accomplish such a feat!",
  "After a decade of dedication for this project of mine, I’ve finally succeeded!",
  "My blood and sweat stains every inch of this masterpiece, countless debts and insults I had to risk throughout my career.",
  "But all was worth it!",
  "However, this is still just the prototype.",
  "Pardon me, JUST the prototype?",
  "It is working, yes. I’ve done test runs before, some were a success as I was able to travel to a different time.",
  "Yet, there are still limits.",
  "When in a different period, I can only stay for a few minutes before I’m forcefully taken back to my original time period.",
  "Unfortunately, I haven’t got a clue on why this is the case.",
  "There are also times when the attempt failed, causing me minor psychological effects such as dizziness and headaches.",
  "You test it yourself!?",
  "Why of course! How else will I ensure it’s working properly?",
  "Are you insane!?",
  "Do you have no regards for your safety!?",
  "These are risks I must take in order to find answers, dear.",
  "Look at where those chances got me.",
  "*sigh*",
  "So, how is the flower relevant?",
  "Oh yes!",
  "The Argentum Tempus is able to bring one to HUNDREDS of millions of years to the past.",
  "One of the test runs I’ve done, I successfully entered the Cretaceous period, the era of flowering plants.",
  "However, the atmospheric oxygen levels were difficult to adjust to, thus I stayed no longer.",
  "I left earlier as planned,",
  "But! Not until I also took a “little souvenir” with me!",
  "He chuckles at the sight of the enormous flower.",
  "Oh, so that’s where you got it...",
  "Indeed!",
  "I suppose that is proof that everything you’ve told is the truth.",
  "Huh!? And here I thought you believed in me from the start!",
  "But this...",
  "...",
  "This is...",
  "This is perfect.",
  "Oh?",
  "This is just the thing I need to win!",
  "You’re truly incredible, Dr. Cire.",
  "Pardon my shamelessness but, I’d like to use this creation of yours for my presentation.",
  "Oh?",
  "I could show them something that only existed in the past like, yes, the flowers!",
  "I can teach about flowers while showing the details directly from the flower itself.",
  "This is amazing!",
  "This is a guaranteed win for me!",
  "Excitement fills your emotions.",
  "You imagined the different possibilities and reactions of people during your presentation.",
  "The shocked faces of the students, the rain of praises, even a parade of flowers.",
  "Suddenly, a thought crosses your mind.",
  "Wait... Is that possible?",
  "Of course dear! I’ve already agreed to help you too!",
  "I mean...",
  "Will it be safe?",
  "Ah.",
  "The atmosphere drops cold.",
  "The doctor’s enthusiasm disappears for a split second, instead, you saw...",
  "Disappointment.",
  "!?",
  "Now, now dear!",
  "Shall I remind you why you’re here?",
  "You ask for my help because you don’t want to disappoint anyone, correct?",
  "Would you really risk to see them frown upon you instead of a guarantee smile on their faces?",
  "But...",
  "This is your only chance, dear.",
  "Who knows when an opportunity like this will cross your path again?",
  "This is also for your own good.",
  "Besides, look at me! I’ve time-travelled multiple times but I’m still in one-piece!",
  "You have a point...",
  "He places a comforting hand on your shoulder.",
  "But for some odd reason,",
  "It felt threatening.",
  "Do what's best, dear. Don’t be afraid to take the risk.",
  "I’ve sacrificed everything for knowledge, and it led me to the greatest achievement.",
  "Knowledge is everything, miss Ambrose. I highly suggest not to worry about those tiny chances of uncertainties.",
  "...",
  "It’s up to you.",
  
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
"You found yourself set in front of an unrecognizable structure covered in a thick layer of fabric.": "Narrator",
"The doctor grips onto the fabric.":  "Narrator",
"Probably twice as tall as you are.": "Narrator",
"Drum roll please!!": "Cire",
"I present to you, a time-travelling machine!": "Cire",
"Or as I’d like to call-": "Cire",
"The Argentum Tempus!": "Cire",
"The fabric is pulled off, dangling through the air for a second.": "Narrator",
"Under reveals a construct of complication.": "Narrator",
"TA-DA!": "Cire",
"...": "Caster",
"You listened enthusiastically to the doctor, yet..": "Narrator",
"You wouldn’t expect something like that to be a “time machine” with its simple feature.": "Narrator",
"A...time machine?": "Caster",
"\"Has he lost his mind or something?\"": "Caster",
"Oh? Why the loss of interest?": "Cire",
"Is it perhaps, you think this is just insanity?": "Cire",
"My apologies... No...I...": "Caster",
"What can you say?": "Cire",
"You search around for words.": "Narrator",
"At least one that would describe whatever you’re thinking right now.": "Narrator",
"But all that you found were questions racing throughout your mind.": "Narrator",
"It.. would make sense for one to find it inimaginable, yes.": "Caster",
"You touch the glass surface of the structure, clear and clean for your reflection to be visible.": "Narrator",
"You glance at the doctor.": "Narrator",
"But as you said, that is the kind of creation an inventor must create...": "Caster",
"Precisely! I went through numerous trials and errors to accomplish such a feat!": "Cire",
"After a decade of dedication for this project of mine, I’ve finally succeeded!": "Cire",
"My blood and sweat stains every inch of this masterpiece, countless debts and insults I had to risk throughout my career.": "Cire",
"But all was worth it!": "Cire",
"However, this is still just the prototype.": "Cire",
"Pardon me, JUST the prototype?": "Caster",
"It is working, yes. I’ve done test runs before, some were a success as I was able to travel to a different time.": "Cire",
"Yet, there are still limits.": "Cire",
"When in a different period, I can only stay for a few minutes before I’m forcefully taken back to my original time period.": "Cire",
"Unfortunately, I haven’t got a clue on why this is the case.": "Cire",
"There are also times when the attempt failed, causing me minor psychological effects such as dizziness and headaches.": "Cire",
"You test it yourself!?": "Caster",
"Why of course! How else will I ensure it’s working properly?": "Cire",
"Are you insane!?": "Caster",
"Do you have no regards for your safety!?": "Caster",
"These are risks I must take in order to find answers, dear.": "Cire",
"Look at where those chances got me.": "Cire",
"*sigh*": "Caster",
"So, how is the flower relevant?": "Caster",
"Oh yes!": "Cire",
"The Argentum Tempus is able to bring one to HUNDREDS of millions of years to the past.": "Cire",
"One of the test runs I’ve done, I successfully entered the Cretaceous period, the era of flowering plants.": "Cire",
"However, the atmospheric oxygen levels were difficult to adjust to, thus I stayed no longer.": "Cire",
"I left earlier as planned,": "Cire",
"But! Not until I also took a “little souvenir” with me!": "Cire",
"He chuckles at the sight of the enormous flower.": "Narrator",
"Oh, so that’s where you got it...": "Caster",
"Indeed!": "Cire",
"I suppose that is proof that everything you’ve told is the truth.": "Caster",
"Huh!? And here I thought you believed in me from the start!": "Cire",
"But this...": "Caster",
"This is...": "Caster",
"This is perfect.": "Caster",
"Oh?": "Cire",
"This is just the thing I need to win!": "Caster",
"You’re truly incredible, Dr. Cire.": "Caster",
"Pardon my shamelessness but, I’d like to use this creation of yours for my presentation.": "Caster",
"Oh?": "Cire",
"I could show them something that only existed in the past like, yes, the flowers!": "Caster",
"I can teach about flowers while showing the details directly from the flower itself.": "Caster",
"This is amazing!": "Caster",
"This is a guaranteed win for me!": "Caster",
"Excitement fills your emotions.": "Narrator",
"You imagined the different possibilities and reactions of people during your presentation.": "Narrator",
"The shocked faces of the students, the rain of praises, even a parade of flowers.": "Narrator",
"Suddenly, a thought crosses your mind.": "Narrator",
"Wait... Is that possible?": "Caster",
"Of course dear! I’ve already agreed to help you too!": "Cire",
"I mean...": "Caster",
"Will it be safe?": "Caster",
"Ah.": "Cire",
"The atmosphere drops cold.": "Narrator",
"The doctor’s enthusiasm disappears for a split second, instead, you saw...": "Narrator",
"Disappointment.": "Narrator",
"!?": "Caster",
"Now, now dear!": "Cire",
"Shall I remind you why you’re here?": "Cire",
"You ask for my help because you don’t want to disappoint anyone, correct?": "Cire",
"Would you really risk to see them frown upon you instead of a guarantee smile on their faces?": "Cire",
"But...": "Caster",
"This is your only chance, dear.": "Cire",
"Who knows when an opportunity like this will cross your path again?": "Cire",
"This is also for your own good.": "Cire",
"Besides, look at me! I’ve time-travelled multiple times but I’m still in one-piece!": "Cire",
"You have a point..." : "Caster",
"He places a comforting hand on your shoulder." : "Narrator",
"But for some odd reason,": "Narrator",
"It felt threatening.": "Narrator",
"Do what's best, dear. Don’t be afraid to take the risk." : "Cire",
"I’ve sacrificed everything for knowledge, and it led me to the greatest achievement.": "Cire",
"Knowledge is everything, miss Ambrose. I highly suggest not to worry about those tiny chances of uncertainties.": "Cire",
"...": "Caster",
"It’s up to you.": "Cire",
  
};
  // Check if nameElement is not null
  if (nameElement) {
    window.addEventListener("click", () => {
      if (textIndex < texts.length - 1) {
        textElement.innerHTML = texts[++textIndex];
      }
      const currentText = textElement.innerHTML;
      nameElement.innerHTML = nameMapping[currentText] || "?";
      
      if (currentText === "You found yourself set in front of an unrecognizable structure covered in a thick layer of fabric.") {
        characterPortrait_1.style.display = "block";
        }
      
      if (currentText === "Drum roll please!!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "Under reveals a construct of complication.") {
        document.getElementById("blackscreen").style.opacity = "10";
        }
      
      if (currentText === "A...time machine?") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
        document.getElementById("blackscreen").style.opacity = "0";
        }
      
      if (currentText === "Oh? Why the loss of interest?") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.src = "cire_smiling-armcrossed.png";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "My apologies... No...I...") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "What can you say?") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.src = "cire_smiling-armcrossed.png";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "You search around for words.") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Precisely! I went through numerous trials and errors to accomplish such a feat!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.src = "cire_explaining.png";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "Pardon me, JUST the prototype?") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "It is working, yes. I’ve done test runs before, some were a success as I was able to travel to a different time.") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.src = "cire_explaining.png";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "You test it yourself!?") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Why of course! How else will I ensure it’s working properly?") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.src = "cire_explaining.png";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "Are you insane!?") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "These are risks I must take in order to find answers, dear.") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.src = "cire_smiling-armcrossed.png";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "*sigh*") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Oh yes!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.src = "cire_smiling-armcrossed.png";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "But this...") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "This is perfect.") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_talking-smile.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Of course dear! I’ve already agreed to help you too!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.src = "cire_smiling-armcrossed.png";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "Will it be safe?") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Ah.") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.src = "cire_erm2.png";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "But...") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "This is your only chance, dear.") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.src = "cire_erm2.png";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "You have a point...") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Do what's best, dear. Don’t be afraid to take the risk.") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.src = "cire_determined.png";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "It’s up to you.") {
          option1Element.style.display = "block";
          option2Element.style.display = "block";
        }
    });
  } else {
    console.error("nameElement is null");
  }
  
  function choice_1() {
    window.location.replace ('scene_8.html');
  }
  
  
  function choice_2() {
    
    let textIndex2 = 0;
const texts2 = [
  "",
  "My apologies, doctor...",
  "I take back my words, I shall find ways elsewhere.",
  "I fear for my own well-being, I hope you understand.",
  "Apologies again, it’s been a wonderful experience to have with you today.",
  "Thank you for your time and your efforts.",
  "...",
  "I see...",
  "You’re just like the others.",
  "Pardon?",
  "Pfft. How selfish.",
  "Go on... take your leave now.",
  "Thank you for everything",
  
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
  "My apologies, doctor...": "Caster",
  "I take back my words, I shall find ways elsewhere.": "Caster",
  "I fear for my own well-being, I hope you understand.": "Caster",
  "Apologies again, it’s been a wonderful experience to have with you today.": "Caster",
  "Thank you for your time and your efforts.": "Caster",
  "...": "Cire",
  "I see...": "Cire",
  "You’re just like the others.": "Cire",
  "Pardon?": "Caster",
  "Pfft. How selfish.": "Cire",
  "Go on... take your leave now.": "Cire",
  "Thank you for everything": "Caster",
  
};
// Check if nameElement is not null
if (nameElement) {
  window.addEventListener("click", () => {
        if (textIndex2 < texts2.length - 1) {
          textElement.innerHTML = texts2[++textIndex2];
        }
        const currentText = textElement.innerHTML;
        nameElement.innerHTML = nameMapping[currentText] || "?";
        
        
        if (currentText === "My apologies, doctor...") {
          characterPortrait_1.style.display = "block";
          characterPortrait_1.src = "caster_no-expression.png";
          characterPortrait_2.style.display = "none";
        }
        
        if (currentText === "I see...") {
          characterPortrait_1.style.display = "none";
          characterPortrait_2.src = "cire_psycho.png";
          characterPortrait_2.style.display = "block";
        }
        
        if (currentText === "Pardon?") {
          characterPortrait_1.style.display = "block";
          characterPortrait_1.src = "caster_uhh.png";
          characterPortrait_2.style.display = "none";
        }
        
        if (currentText === "Pfft. How selfish.") {
          characterPortrait_1.style.display = "none";
          characterPortrait_2.src = "cire_psycho.png";
          characterPortrait_2.style.display = "block";
        }
        
        if (currentText === "Thank you for everything") {
          characterPortrait_1.style.display = "block";
          characterPortrait_1.src = "caster_no-expression.png";
          characterPortrait_2.style.display = "none";
          setTimeout(function() {
            if (confirm("You have chosen to end here. Would you like to continue and proceed to the next scene instead?")) {
              window.location.replace("scene_8.html");
            } else {
              window.location.replace("/index.html");
            }
          }, 4000);
        }
        

      option1Element.style.display = "none";
      option2Element.style.display = "none";

});
}    
  }