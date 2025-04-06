const audio = new Audio('/Obsessed (Intro Version).mp3');
const fx_1 = new Audio('/Click.mp3');


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
      
      const texts = ["", "Kay, I hope he's here this time..."];
      
    const nameElement = document.getElementById("names");
      
      window.addEventListener("click", () => {
        if (textIndex < texts.length - 1) {
          document.getElementById("text").innerHTML = texts[++textIndex];
        }
        if (document.getElementById("text").innerHTML === "Kay, I hope he's here this time...") {
          document.getElementById("c_1").style.display = "block";
        }
        nameElement.innerHTML = "Caster";
  });
  
function choice_1() {
  let textIndex_2 = 0;
  const texts_2 = [
    "",
    "...",
    "[Loud noises!...]",
    "?!",
    "Mmm?",
    "My goodness!-",
    "I apologise for my tardiness, Miss Ambrose",
    "I didn't mean to make you wait for some time...",
    "Come in, come in...",
    "Now I hope you don't mind the place-",
    "I wasn't quite expecting a visitor today.",
    "As for the delay in response to your knock...",
    "I apologise once more...",
    "people who often persue me are fools.",
    "A lot of people recently come rushing to me to seek answers rather than finding it on their own.",
    "Some of them are even known as genuises...",
    "Quite shameless in my opinion.",
    "Thus, why it is great to see a face like yours. Make yourself comfortable dear!",
    "Ahh...yes thank you.",
    "Its kind of suprising that you even know me...",
    "Of course! It’s rare to find one as talented as you are!",
    "Current titleholder of the highest GPA in Rim Bourne Academy.",
    "Renowned for her exquisite skills with the violin, oh who wouldn’t have heard of you dear?",
    "I’m quite an enthusiast as well actually!",
    "Such a high praise...it honestly make me quite anxious.",
    "It’s an honour to receive flattering remarks from you Dr. Cire. But I’d like to set this aside for now and..",
    "Ah yes, yes, I’d love to aid you of your needs, dear.",
    "Let me prepare a cup of coffee for us to talk over with.",
    "That is if.. Coffee is alright?",
    "Yes, please.",
    "I’ll be back in a bit, feel free to check around!",
    "...",
    "(Phew, strangely, his presence is pressuring..)",
    "(But he seems like a friendly fellow.)",
    "There are a lot of interesting works here, shall I look around?",
  ];
  
  const textElement = document.getElementById("text");
  const gameMain = document.getElementById("game");
  const dialogue = document.getElementById("dialogues");
  const option1Element = document.getElementById("c_1");
  const option2Element = document.getElementById("c_2");
  const option3Element = document.getElementById("c_3");
  const option4Element = document.getElementById("c_4");
  const characterPortrait_1 = document.getElementById("chc_1");
  const characterPortrait_2 = document.getElementById("chc_2");
  
  const nameMapping = {
    "?!": "Caster",
    "Mmm?": "Dr. Cire",
    "My goodness!-": "Dr. Cire",
    "I apologise for my tardiness, Miss Ambrose": "Dr. Cire",
    "I didn't mean to make you wait for some time...": "Dr. Cire",
    "Come in, come in...": "Dr. Cire",
    "Now I hope you don't mind the place-": "Dr. Cire",
    "I wasn't quite expecting a visitor today.": "Dr. Cire",
    "As for the delay in response to your knock...": "Dr. Cire",
    "I apologise once more...": "Dr. Cire",
    "people who often persue me are fools.": "Dr. Cire",
    "A lot of people recently come rushing to me to seek answers rather than finding it on their own.": "Dr. Cire",
    "Some of them are even known as genuises...": "Dr. Cire",
    "Quite shameless in my opinion.": "Dr. Cire",
    "Thus, why it is great to see a face like yours. Make yourself comfortable dear!": "Dr. Cire",
    "Ahh...yes thank you.": "Caster",
    "Its kind of suprising that you even know me...": "Caster",
    "Of course! It’s rare to find one as talented as you are!": "Dr. Cire",
    "Current titleholder of the highest GPA in Rim Bourne Academy.": "Dr. Cire",
    "Renowned for her exquisite skills with the violin, oh who wouldn’t have heard of you dear?": "Dr. Cire",
    "I’m quite an enthusiast as well actually!": "Dr. Cire",
    "Such a high praise...it honestly make me quite anxious.": "Caster",
    "It’s an honour to receive flattering remarks from you Dr. Cire. But I’d like to set this aside for now and..": "Caster",
    "Ah yes, yes, I’d love to aid you of your needs, dear.": "Dr. Cire",
    "Let me prepare a cup of coffee for us to talk over with.": "Dr. Cire",
    "That is if.. Coffee is alright?": "Dr. Cire",
    "Yes, please.": "Caster",
    "I’ll be back in a bit, feel free to check around!": "Dr. Cire",
    "...": "Caster",
    "(Phew, strangely, his presence is pressuring..)": "Caster",
    "(But he seems like a friendly fellow.)": "Caster",
    "There are a lot of interesting works here, shall I look around?": "Caster",
  };
  // Check if nameElement is not null
 if (nameElement) {
  window.addEventListener("click", () => {
    if (textIndex_2 < texts_2.length - 1) {
      textElement.innerHTML = texts_2[++textIndex_2];
    }
    const currentText = textElement.innerHTML;
    nameElement.innerHTML = nameMapping[currentText] || "?";
    
    if (currentText === "Mmm?") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
    }
    
    if (currentText === "My goodness!-") {
      characterPortrait_2.src = 'cire_proud.png';
      characterPortrait_2.style.width = "120%";
      characterPortrait_2.style.height = "100%";
    }
    
    if (currentText === "Now I hope you don't mind the place-") {
      characterPortrait_2.src = 'cire_smiling-armcrossed.png';
      gameMain.style.backgroundImage = "url('office.png')"
    }
    
    if (currentText === "Ahh...yes thank you.") {
      characterPortrait_1.src = 'caster_talking-smile.png';
      characterPortrait_1.style.display = "block";
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Of course! It’s rare to find one as talented as you are!") {
      characterPortrait_2.src = 'cire_smiling-armcrossed.png';
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
    }
    
    if (currentText === "Such a high praise...it honestly make me quite anxious.") {
      characterPortrait_1.src = 'caster_concern.png';
      characterPortrait_1.style.display = "block";
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Ah yes, yes, I’d love to aid you of your needs, dear.") {
      characterPortrait_2.src = 'cire_erm.png';
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
    }
    
    if (currentText === "Yes, please.") {
      characterPortrait_1.src = 'caster_talking-smile.png';
      characterPortrait_1.style.display = "block";
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "I’ll be back in a bit, feel free to check around!") {
      characterPortrait_2.src = 'cire_smiling-armcrossed.png';
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
    }
    
    if (currentText === "...") {
      characterPortrait_1.src = 'caster_no-expression.png';
      characterPortrait_2.style.display = "none";
      characterPortrait_1.style.display = "block";
    }
    
    if (currentText === "There are a lot of interesting works here, shall I look around?") {
     option3Element.style.display = "block"; 
     option4Element.style.display = "block"; 
    }
    option1Element.style.display = "none";
  });
} else {
  console.error("nameElement is null");
  }
}

function choice_3() {
      
  window.location.replace('scene_4int.html');
      
}


function choice_4() {
  
  window.location.replace('scene_5.html');
  
}