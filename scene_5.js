
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
  "Miss Ambrose! Come have a seat with me.",
  "I hope, “this” won’t become a distraction, Miss Ambrose.",
  "Oh, worry not, I don’t mind such.",
  "Praytell dear! What could I help you with?",
  "If you haven’t heard, Rim Bourne Academy will be participating in the National Student-Teaching Program.",
  "The program invites one student candidate from the participating schools to hold a presentation for everyone to attend.",
  "One’s ability to educate and engage is tested, and the best is given a scholarship alongside a letter of recommendation to any college they desire.",
  "I am given this responsibility.",
  "But I am indeed highly confident in my skills, at the same time, I mustn't underestimate the potential of my opponents.",
  "Thus why, I ask for your help to guarantee a win.",
  "The award isn’t the only thing on the line.",
  "The reputation of the school, the hopes of my fellow classmates…",
  "My name.",
  "I fear that everything would be nothing, and I must not fail.",
  "Mhm...mhm",
  "You have come to the right person person, Miss Ambrose.",
  "Oh?",
  "Or rather-",
  "The right time...",
  "You see-",
  "Bleh!...Too bitter...",
  "Pfft...Hahahaha!",
  "Please excuse my taste in brewing coffee",
  "I always forgot that people do have different preferences from me...",
  "The bitterness is on purpose..?",
  "Yes dear, I do agree the taste is.. Sickening but it does keep me up at night.",
  "Especially while doing my projects.",
  "That.. makes sense.",
  "Ahem, no need to worry, I’m alright.",
  "Would you not prefer me to get you a glass of water instead?",
  "No need, please do continue what you were saying.",
  "Good!",
  "(The tone of his voice is suddenly filled with excitement).",
  "You came at the perfect time!",
  "I’ve currently just finished my most precious project, but...",
  "(The way he stood up, he then takes a few steps before turning to me.)",
  "Come, dear.",
  "Let me show you what knowledge could actually make.",
  "(He walks up to one of the shelves, the one that piqued my interest a while ago.)",
  "(With a pull of a book, the shelf begins to drag itself forward, revealing a hidden door behind it.)",
  "(Well am I damned to hell…)",
  "(He glances at me, along with a terriying grin,)",
  "(As if saying,)",
  "\"Aren’t I impressive?\"",
  "Gulp...",
  "…Well? What are you waiting for?",
  "Come along now!",
  "..."
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
  "Miss Ambrose! Come have a seat with me.": "Dr. Cire",
  "I hope, “this” won’t become a distraction, Miss Ambrose.": "Dr. Cire",
  "Oh, worry not, I don’t mind such.": "Caster",
  "Praytell dear! What could I help you with?": "Dr. Cire",
  "If you haven’t heard, Rim Bourne Academy will be participating in the National Student-Teaching Program.": "Caster",
  "The program invites one student candidate from the participating schools to hold a presentation for everyone to attend.": "Caster",
  "One’s ability to educate and engage is tested, and the best is given a scholarship alongside a letter of recommendation to any college they desire.": "Caster",
  "I am given this responsibility.": "Caster",
  "But I am indeed highly confident in my skills, at the same time, I mustn't underestimate the potential of my opponents.": "Caster",
  "Thus why, I ask for your help to guarantee a win.": "Caster",
  "The award isn’t the only thing on the line.": "Caster",
  "The reputation of the school, the hopes of my fellow classmates…": "Caster",
  "My name.": "Caster",
  "I fear that everything would be nothing, and I must not fail.": "Caster",
  "Mhm...mhm": "Dr. Cire",
  "You have come to the right person person, Miss Ambrose.": "Dr. Cire",
  "Oh?": "Caster",
  "Or rather-": "Dr. Cire",
  "The right time...": "Dr. Cire",
  "You see-": "Dr. Cire",
  "Bleh!...Too bitter...": "Caster",
  "Pfft...Hahahaha!": "Dr. Cire",
  "Please excuse my taste in brewing coffee": "Dr. Cire",
  "I always forgot that people do have different preferences from me...": "Dr. Cire",
  "The bitterness is on purpose..?": "Caster",
  "Yes dear, I do agree the taste is.. Sickening but it does keep me up at night.": "Dr. Cire",
  "Especially while doing my projects.": "Dr. Cire",
  "That.. makes sense.": "Caster",
  "Ahem, no need to worry, I’m alright.": "Caster",
  "Would you not prefer me to get you a glass of water instead?": "Dr. Cire",
  "No need, please do continue what you were saying.": "Caster",
  "Good!": "Dr. Cire",
  "(The tone of his voice is suddenly filled with excitement).": "Caster",
  "You came at the perfect time!": "Dr. Cire",
  "I’ve currently just finished my most precious project, but...": "Dr. Cire",
  "(The way he stood up, he then takes a few steps before turning to me.)": "Caster",
  "Come, dear.": "Dr. Cire",
  "Let me show you what knowledge could actually make.": "Dr. Cire",
  "(He walks up to one of the shelves, the one that piqued my interest a while ago.)": "Caster",
  "(With a pull of a book, the shelf begins to drag itself forward, revealing a hidden door behind it.)": "Caster",
  "(Well am I damned to hell…)": "Caster",
  "(He glances at me, along with a terriying grin,)": "Caster",
  "(As if saying,)": "Caster",
  "\"Aren’t I impressive?\"": "Dr. Cire",
  "Gulp...": "Caster",
  "…Well? What are you waiting for?" : "Dr. Cire",
  "Come along now!": "Dr. Cire",
  "...": "Caster",
};
  // Check if nameElement is not null
  if (nameElement) {
    window.addEventListener("click", () => {
      if (textIndex < texts.length - 1) {
        textElement.innerHTML = texts[++textIndex];
      }
      const currentText = textElement.innerHTML;
      nameElement.innerHTML = nameMapping[currentText] || "?";
      
      if (currentText === "Miss Ambrose! Come have a seat with me.") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "Oh, worry not, I don’t mind such.") {
        characterPortrait_1.style.display = "block";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Praytell dear! What could I help you with?") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_smiling-armcrossed.png";
        }
      
      if (currentText === "If you haven’t heard, Rim Bourne Academy will be participating in the National Student-Teaching Program.") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_concern.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Mhm...mhm") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_explaining.png";
        }
      
      if (currentText === "Oh?") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_talking-smile.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Or rather-") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_explaining.png";
        }
      
      if (currentText === "Bleh!...Too bitter...") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_shocked.png";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Pfft...Hahahaha!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_explaining.png";
        }
      
      if (currentText === "The bitterness is on purpose..?") {
        characterPortrait_1.style.display = "block";
        characterPortrait_2.style.display = "none";
        }
        
      if (currentText === "Yes dear, I do agree the taste is.. Sickening but it does keep me up at night.") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_explaining.png";
        }
      
      if (currentText === "That.. makes sense.") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_concern.png";
        characterPortrait_2.style.display = "none";
      }
      
      if (currentText === "Would you not prefer me to get you a glass of water instead?") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_explaining.png";
      }
      
      if (currentText === "No need, please do continue what you were saying.") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_no-expression.png";
        characterPortrait_2.style.display = "none";
      }
      
      if (currentText === "Good!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_erm.png";
      }
      
      if (currentText === "(The tone of his voice is suddenly filled with excitement)") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_no-expression.png";
        characterPortrait_2.style.display = "none";
      }
      
      if (currentText === "You came at the perfect time!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_erm.png";
      }
      if (currentText === "(The way he stood up, he then takes a few steps before turning to me.)") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_no-expression.png";
        characterPortrait_2.style.display = "none";
      }
      
      if (currentText === "Come dear!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_psycho.png";
      }
      if (currentText === "(He walks up to one of the shelves, the one that piqued my interest a while ago.)") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
      }
      
      if (currentText === "Let me show you what knowledge could actually make.") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_psycho.png";
      }
      
      if (currentText === "(With a pull of a book, the shelf begins to drag itself forward, revealing a hidden door behind it.)") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
      }
      
      if (currentText === "(He glances at me, along with a terriying grin,)") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_psycho.png";
      }
      if (currentText === "Gulp...") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
      }
      
      if (currentText === "…Well? What are you waiting for?") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = "cire_freaky.png";
      }
      if (currentText === "...") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = "caster_uhh.png";
        characterPortrait_2.style.display = "none";
        setTimeout(function (){
          window.location.replace('scene_6.html')
        }, 2000);
      }
      option1Element.style.display = "none";
    });
  } else {
    console.error("nameElement is null");
  }