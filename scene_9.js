
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

"Oh wow...",

"Ehe, made you say \"oh wow\"",

"Look at these... Such rarity can’t be found in our current era...",

"They’re the same flowers we take care of, similar concepts, needs, and yet, so different.",
"The doctor walks towards one of the flowers, opening the petals for a better view of the inside.",


"Everything has an origin. Once life begins, it’ll grow to have a purpose. And as time continues, fate will find its end.",

"Just like this seed, take a look.",

"...",

"Are you aware that seeds originate from these kinds of plants?",

"Precisely. In other words, gymnosperms and angiosperms, correct?",

"Mhm! Gymnosperms means \"naked seed\", they’re known for producing seeds.",

"On the other hand, Angiosperms are flowering plants that have specialized male and female reproductive organs.",

"Teheh! Could you believe that flowers can have organs as well?",

"There are even two kinds of seeds, actually.",

"Monocot and Dicot.",

"These seeds contain cotyledons, in other words, the leaf that first emerges from a seed.",

"By its name, Monocot and Dicot have...",
  
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
const objs = document.getElementById("objects");
const obj1 = document.getElementById("obj_1");
const obj2 = document.getElementById("obj_2");
const obj3 = document.getElementById("obj_3");
const obj4 = document.getElementById("obj_4");
const obj5 = document.getElementById("obj_5");

const nameMapping = {

"Oh wow...": "Caster",

"Ehe, made you say \"oh wow\"": "Cire",

"Look at these... Such rarity can’t be found in our current era...": "Caster",

"They’re the same flowers we take care of, similar concepts, needs, and yet, so different.": "Cire",

"The doctor walks towards one of the flowers, opening the petals for a better view of the inside.": "Narrator",


"Everything has an origin. Once life begins, it’ll grow to have a purpose. And as time continues, fate will find its end.": "Cire",

"Just like this seed, take a look.": "Cire",

"...": "Caster",

"Are you aware that seeds originate from these kinds of plants?": "Cire",

"Precisely. In other words, gymnosperms and angiosperms, correct?": "Caster",

"Mhm! Gymnosperms means \"naked seed\", they’re known for producing seeds.": "Cire",

"On the other hand, Angiosperms are flowering plants that have specialized male and female reproductive organs.": "Cire",

"Teheh! Could you believe that flowers can have organs as well?": "Cire",

"There are even two kinds of seeds, actually.": "Cire",

"Monocot and Dicot.": "Cire",

"These seeds contain cotyledons, in other words, the leaf that first emerges from a seed.": "Cire",

"By its name, Monocot and Dicot have...": "Cire",
  
};
  // Check if nameElement is not null
  if (nameElement) {
    window.addEventListener("click", () => {
      if (textIndex < texts.length - 1) {
        textElement.innerHTML = texts[++textIndex];
      }
      const currentText = textElement.innerHTML;
      nameElement.innerHTML = nameMapping[currentText] || "?";
      
      if (currentText === "Oh wow...") {
        characterPortrait_1.style.display = "block";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Ehe, made you say \"oh wow\"") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        }
      
      if (currentText === "Look at these... Such rarity can’t be found in our current era...") {
        characterPortrait_1.style.display = "block";
        characterPortrait_2.style.display = "none";
        }
      
      if (currentText === "Everything has an origin. Once life begins, it’ll grow to have a purpose. And as time continues, fate will find its end.") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        objs.style.display = "block";
        obj3.style.display = "block";
        }
      
      if (currentText === "By its name, Monocot and Dicot have...") {
        option3Element.style.display = "block";
        option4Element.style.display = "block";
        }
      
    });
  } else {
    console.error("nameElement is null");
  }
  
function choice_3() {
    
let textIndex_2 = 0;
const texts_2 = [
  "",
"The term “Mono” means one while “Di” means two. Thus Monocot has one cotyledon while Dicot has two.",
"Ding ding ding!",
"Well done, dear.",
"I’m quite sure this is common knowledge... But thank you...",
"Oh! Take a look at this!",
"He swiftly turns to another flower, holding its petals down once again.",
"As I’ve mentioned, the angiosperms’s reproductive organs are the flowers, containing both female and male reproductive organs.",
"He scurries around the inside of the flower, searching for something.",
"Then take a look back at the other, awaiting for a response.",
"It’s as if the doctor is testing your knowledge.",
  
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
const objs = document.getElementById("objects");
const obj1 = document.getElementById("obj_1");
const obj2 = document.getElementById("obj_2");
const obj3 = document.getElementById("obj_3");
const obj4 = document.getElementById("obj_4");
const obj5 = document.getElementById("obj_5");
const obj6 = document.getElementById("obj_6");

const nameMapping = {
  
"The term “Mono” means one while “Di” means two. Thus Monocot has one cotyledon while Dicot has two.": "Caster",

"Ding ding ding!": "Cire",

"Well done, dear.": "Cire",

"I’m quite sure this is common knowledge... But thank you...": "Caster",

"Oh! Take a look at this!": "Cire",

"He swiftly turns to another flower, holding its petals down once again.": "Narrator",

"As I’ve mentioned, the angiosperms’s reproductive organs are the flowers, containing both female and male reproductive organs.": "Cire",

"He scurries around the inside of the flower, searching for something.": "Narrator",

"Then take a look back at the other, awaiting for a response.": "Narrator",

"It’s as if the doctor is testing your knowledge.": "Narrator",
  
};
// Check if nameElement is not null
if (nameElement) {
  window.addEventListener("click", () => {
    if (textIndex_2 < texts_2.length - 1) {
      textElement.innerHTML = texts_2[++textIndex_2];
    }
    const currentText = textElement.innerHTML;
    nameElement.innerHTML = nameMapping[currentText] || "?";
    
    if (currentText === "The term “Mono” means one while “Di” means two. Thus Monocot has one cotyledon while Dicot has two.") {
      characterPortrait_1.style.display = "block"
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Ding ding ding!") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block"
      characterPortrait_2.src = 'cire_determined.png';
      objs.style.display = "none";
      obj3.style.display = "none";
    }
    
    if (currentText === "I’m quite sure this is common knowledge... But thank you...") {
      characterPortrait_1.style.display = "block"
      characterPortrait_1.src = 'caster_concern.png';
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "It’s as if the doctor is testing your knowledge.") {
      objs.style.display = "block";
      obj6.style.display = "block";
      option1Element.style.display = "block";
      option2Element.style.display = "block";
    }
  
  option3Element.style.display = "none";
  option4Element.style.display = "none";
    
});
  } else {
    console.error("nameElement is null");
  }
}

function choice_4() {
  
let textIndex_3 = 0;
const texts_3 = [
  "",
  "Pfft...",
  "Its actually the other way around missy...",
  
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
  "Pfft...": "Cire",
  "Its actually the other way around missy...": "Cire",
  
};
// Check if nameElement is not null
if (nameElement) {
  window.addEventListener("click", () => {
    if (textIndex_3 < texts_3.length - 1) {
      textElement.innerHTML = texts_3[++textIndex_3];
    }
    const currentText = textElement.innerHTML;
    nameElement.innerHTML = nameMapping[currentText] || "?";
  
  option3Element.style.display = "none";
  option4Element.style.display = "none";
    
    if (currentText === "Its actually the other way around missy...") {
        option3Element.style.display = "block";
    }
    
  });
} else {
  console.error("nameElement is null");
}
}

function choice_2() {
  
  let textIndex_4 = 0;
  const texts_4 = [
    "",
    "Incorrect!",
    "Tsk, tsk... try again",
    
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
    "Incorrect!": "Cire",
    "Tsk, tsk... try again": "Cire",
    
  };
  // Check if nameElement is not null
  if (nameElement) {
    window.addEventListener("click", () => {
      if (textIndex_4 < texts_4.length - 1) {
        textElement.innerHTML = texts_4[++textIndex_4];
      }
      const currentText = textElement.innerHTML;
      nameElement.innerHTML = nameMapping[currentText] || "?";
      
      option1Element.style.display = "none";
      option2Element.style.display = "none";
      
      if (currentText === "Tsk, tsk... try again") {
        option1Element.style.display = "block";
      }
      
    });
  } else {
    console.error("nameElement is null");
  }
  
}

function choice_1() {
  window.location.replace('scene_10.html');
}