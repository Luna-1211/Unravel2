
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("preloader").style.animation = "fade-out 2s ease-out";
    document.getElementById("preloader").style.opacity = "100";
  }, 5000);
  setTimeout(function() {
    document.getElementById("preloader").style.opacity = "0";
    document.getElementById("preloader").style.display = "none";
  }, 500);
});

let textIndex = 0;
const texts = [
  "",
"It consists of an anther, where pollen is produced, while the filament holds it up.",
"Fuahahahah! Correct, once again Miss Ambrose.",
"Let me just add, that if I were to split this flower in half, you’d see the female reproductive organ.",

"The pistil, containing the ovary, alongside the stigma where the pollen is received,",
"And the style, connecting the stigma to the ovary.",
"The doctor finally backs away, taking a deep sigh.",
"Such concepts truly are interesting.",
"He continues to walk further, his hand brushing onto every petal it comes across with.",
"Who would’ve thought that these same flowers would be so tiny far into the future?",
"Vulnerable little beings, relying on everything for its growth.",
"Birds, insects, mammals… Even the wind is a factor that helps with the growth of plants, or as we’d like to call these factors, pollinators.",
"This beautiful process...",
"Pollination?",
"Indeed, dear!",
"The doctor approaches another flower.",

"Pollination, the process wherein the flower’s anther generates pollen for the pollinators to take-",
"Bringing it to another flower’s stigma which results in fertilization.",
"With that, it’ll be capable of producing more flowers and fruits.",
"Oh!",
"Something that I find hilarious as well is the concept of sexual and asexual reproduction in plants.",
"Ah yes, I’m familiar with that.",
"Flowers capable of sexual reproduction is an unexpected discovery for me as well.",
"Right?",

"Sexual reproduction requires both male and female reproductive organs to create an offspring, in other words, a seed.",
"On the other hand, asexual reproduction only requires one.",
"And yet there are two ways for plants to asexually reproduce.",

"Artificial propagation, wherein an offspring grows from plant parts but requires the support of man-made methods.",
"And Vegetative propagation?",
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

"That is the male part of a flower, a stamen.": "Caster",
"It consists of an anther, where pollen is produced, while the filament holds it up.": "Caster",

"Fuahahahah! Correct, once again Miss Ambrose.": "Cire",
"Let me just add, that if I were to split this flower in half, you’d see the female reproductive organ.": "Cire",

"The pistil, containing the ovary, alongside the stigma where the pollen is received,": "Cire",
"And the style, connecting the stigma to the ovary.": "Cire",
"The doctor finally backs away, taking a deep sigh.": "Narrator",
"Such concepts truly are interesting.": "Cire",
"He continues to walk further, his hand brushing onto every petal it comes across with.": "Narrator",
"Who would’ve thought that these same flowers would be so tiny far into the future?": "Cire",
"Vulnerable little beings, relying on everything for its growth.": "Cire",
"Birds, insects, mammals… Even the wind is a factor that helps with the growth of plants, or as we’d like to call these factors, pollinators.": "Cire",
"This beautiful process...": "Cire",
"Pollination?": "Caster",
"Indeed, dear!": "Cire",
"The doctor approaches another flower.": "Narrator",

"Pollination, the process wherein the flower’s anther generates pollen for the pollinators to take-": "Cire",
"Bringing it to another flower’s stigma which results in fertilization.": "Cire",
"With that, it’ll be capable of producing more flowers and fruits.": "Cire",
"Oh!": "Cire",
"Something that I find hilarious as well is the concept of sexual and asexual reproduction in plants.": "Cire",
"Ah yes, I’m familiar with that.": "Caster",
"Flowers capable of sexual reproduction is an unexpected discovery for me as well.": "Caster",
"Right?": "Cire",

"Sexual reproduction requires both male and female reproductive organs to create an offspring, in other words, a seed.": "Cire",
"On the other hand, asexual reproduction only requires one.": "Caster",
"And yet there are two ways for plants to asexually reproduce.": "Cire",

"Artificial propagation, wherein an offspring grows from plant parts but requires the support of man-made methods.": "Caster",
"And Vegetative propagation?": "Cire",
  
};
  // Check if nameElement is not null
  if (nameElement) {
    window.addEventListener("click", () => {
      if (textIndex < texts.length - 1) {
        textElement.innerHTML = texts[++textIndex];
      }
      const currentText = textElement.innerHTML;
      nameElement.innerHTML = nameMapping[currentText] || "?";
      
      if (currentText === "Fuahahahah! Correct, once again Miss Ambrose.") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
      }
      
      if (currentText === "Pollination?") {
        characterPortrait_1.style.display = "block";
        characterPortrait_2.style.display = "none";
      }
      
      if (currentText === "Indeed, dear!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
      }
      
      if (currentText === "Pollination, the process wherein the flower’s anther generates pollen for the pollinators to take-") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "none";
        objs.style.display = "block";
        obj6.style.display = "block";
        obj6.style.width = "40%";
      }
     
      if (currentText === "Oh!") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        characterPortrait_2.src = 'cire_smiling-armcrossed.png';
        objs.style.display = "none";
        obj6.style.display = "none";
        obj6.style.width = "35%";
      }
      
      if (currentText === "Ah yes, I’m familiar with that.") {
        characterPortrait_1.style.display = "block";
        characterPortrait_1.src = 'caster_smiling.png';
        characterPortrait_2.style.display = "none";
      }
      
      if (currentText === "Right?") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
      }
      
      if (currentText === "On the other hand, asexual reproduction only requires one.") {
        characterPortrait_1.style.display = "block";
        characterPortrait_2.style.display = "none";
      }
      
      if (currentText === "And yet there are two ways for plants to asexually reproduce.") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
      }
      
      if (currentText === "Artificial propagation, wherein an offspring grows from plant parts but requires the support of man-made methods.") {
        characterPortrait_1.style.display = "block";
        characterPortrait_2.style.display = "none";
      }
      
      if (currentText === "And Vegetative propagation?") {
        characterPortrait_1.style.display = "none";
        characterPortrait_2.style.display = "block";
        option1Element.style.display = "block";
        option2Element.style.display = "block";
      }
      
      
    });
  } else {
    console.error("nameElement is null");
  }
  


function  choice_1() {
    
  let textIndex_2 = 0;
  const texts_2 = [
    "",
"Vegetative Propagation is the development of a new plant through the parent plants’ fragments-",
"Such as their leaves or roots.Unlike Artificial propagation, it requires no support.",
"Correct again!",
"I must say, I’ m impressed.",
"You exceeded my expectations.",
"And I highly respect you for that.",
"The doctor wanders off ahead, leaving you looking through the flowers.",
"When you finally looked away, all you see of him is his head as it further creeps into the flowers.",
"Hold on, doctor !",
"Ack!",
"A sudden spark of pain hits your head, making you kneel down as you’re forced to hold your head up.",
"It’s definitely worse than a normal migraine.",
"But it slowly lifts away as seconds go by.",
"What in the...",
"Wait! Doctor, where are you going?",
"You disregard the occurrence. It’s better to catch up to the doctor.",
"Doctor!",
"The doctor’s familiar silhouette gets closer with every pant.",
"He turned to your call, obviously was busy munching on something at hand.",
"And-",
"...An avocado.",
"Oh! My apologies Miss Ambrose! I might’ve gotten a little distracted with the surroundings.",
"He chuckles, still chewing.",
"It’s... urgh...",
"Oh you must’ve tired yourself out, would you like an avocado?",
"Where’d you even get that? As far as I’ve seen there’s no kind of fruit here, yet...",
"Oh I brought it with me.",
"...Why???",
"For emergencies of course! A genius must not let their hunger go on!",
"Sure... But, an avocado?",
"Avocados are healthy and delicious.",
"I like avocados.",
"I’m alright... Thank you.",
"Do you like avocados too?",
"I do, actually.",
"Perfect!",
"How would you like some fruitful fun facts?",
"Did you know every layer of a fruit has a name?",
"For instance, pericarp, consisting of exocarp, mesocarp, and endocarp.",

"Take a look at this, the skin of the fruit is the exocarp.",
"Mesocarp is the flesh, or in our case, the edible part one consumes.",
"And lastly, the endocarp, a thin layer that separates the flesh and surrounds the seed.",
"You’re really interested in the study of plants, doctor.",
"Oh is it quite obvious?",
"Very.",
"Fuhuhuhu! I could talk about plants all day!",
"Back to the topic at hand.",
"He puts the half-eaten avocado into the pocket of his coat, leaving you confused how someone would be sane enough to do such a thing.",
"Oh yes, I think it’s around here if I’m right...",
"The doctor wanders off yet again, but this time, you follow closely.",
"...",
"You arrive in an area devoid of greeneries, except for one specific spot.",
"A tiny garden, planted with vegetables with the use of modern techniques.",
"I tried to conduct an experiment and see if vegetables in the present would be able to grow with the soil of the past.",
"It hasn’t been a while, but so far it’s doing well.",
"He yanks one of the onions out of the soil.",

"Care to tell me what kind of offspring this one’s called?",

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

"Vegetative Propagation is the development of a new plant through the parent plants’ fragments-": "Caster",
"Such as their leaves or roots.Unlike Artificial propagation, it requires no support.": "Caster",
"Correct again!": "Cire",
"I must say, I’ m impressed.": "Cire",
"You exceeded my expectations.": "Cire",
"And I highly respect you for that.": "Cire",
"The doctor wanders off ahead, leaving you looking through the flowers.": "Narrator",
"When you finally looked away, all you see of him is his head as it further creeps into the flowers.": "Narrator",
"Hold on, doctor !": "Caster",
"Ack!": "Caster",
"A sudden spark of pain hits your head, making you kneel down as you’re forced to hold your head up.": "Narrator",
"It’s definitely worse than a normal migraine.": "Narrator",
"But it slowly lifts away as seconds go by.": "Narrator",
"What in the...": "Caster",
"Wait! Doctor, where are you going?": "Caster",
"You disregard the occurrence. It’s better to catch up to the doctor.": "Narrator",
"Doctor!": "Caster",
"The doctor’s familiar silhouette gets closer with every pant.": "Narrator",
"He turned to your call, obviously was busy munching on something at hand.": "Narrator",
"And-": "Narrator",
"...An avocado.": "Narrator",
"Oh! My apologies Miss Ambrose! I might’ve gotten a little distracted with the surroundings.": "Cire",
"He chuckles, still chewing.": "Cire",
"It’s... urgh...": "Caster",
"Oh you must’ve tired yourself out, would you like an avocado?": "Cire",
"Where’d you even get that? As far as I’ve seen there’s no kind of fruit here, yet...": "Caster",
"Oh I brought it with me.": "Cire",
"...Why???": "Caster",
"For emergencies of course! A genius must not let their hunger go on!": "Cire",
"Sure... But, an avocado?": "Caster",
"Avocados are healthy and delicious.": "Cire",
"I like avocados.": "Cire",
"I’m alright... Thank you.": "Caster",
"Do you like avocados too?": "Cire",
"I do, actually.": "Caster",
"Perfect!": "Cire",
"How would you like some fruitful fun facts?": "Cire",
"Did you know every layer of a fruit has a name?": "Cire",
"For instance, pericarp, consisting of exocarp, mesocarp, and endocarp.": "Cire",

"Take a look at this, the skin of the fruit is the exocarp.": "Cire",
"Mesocarp is the flesh, or in our case, the edible part one consumes.": "Cire",
"And lastly, the endocarp, a thin layer that separates the flesh and surrounds the seed.": "Cire",
"You’re really interested in the study of plants, doctor.": "Caster",
"Oh is it quite obvious?": "Cire",
"Very.": "Caster",
"Fuhuhuhu! I could talk about plants all day!": "Cire",
"Back to the topic at hand.": "Cire",
"He puts the half-eaten avocado into the pocket of his coat, leaving you confused how someone would be sane enough to do such a thing.": "Narrator",
"Oh yes, I think it’s around here if I’m right...": "Cire",
"The doctor wanders off yet again, but this time, you follow closely.": "Narrator",
"...": "Caster",
"You arrive in an area devoid of greeneries, except for one specific spot.": "Narrator",
"A tiny garden, planted with vegetables with the use of modern techniques.": "Narrator",
"I tried to conduct an experiment and see if vegetables in the present would be able to grow with the soil of the past.": "Cire",
"It hasn’t been a while, but so far it’s doing well.": "Cire",
"He yanks one of the onions out of the soil.": "Narrator",

"Care to tell me what kind of offspring this one’s called?": "Cire",
  
};
// Check if nameElement is not null
if (nameElement) {
  window.addEventListener("click", () => {
    if (textIndex_2 < texts_2.length - 1) {
      textElement.innerHTML = texts_2[++textIndex_2];
    }
    const currentText = textElement.innerHTML;
    nameElement.innerHTML = nameMapping[currentText] || "?";
    
    option1Element.style.display = "none";
    option2Element.style.display = "none";
    
    if (currentText === "Vegetative Propagation is the development of a new plant through the parent plants’ fragments-") {
      characterPortrait_1.style.display = "block";
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Correct again!") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      characterPortrait_2.src = 'cire_proud.png';
    }
    
    if (currentText === "The doctor wanders off ahead, leaving you looking through the flowers.") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.src = 'caster_horrified.png';
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "...An avocado.") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "none";
      objs.style.display = "block";
      obj1.style.display = "block";
    }
    
    if (currentText === "Oh! My apologies Miss Ambrose! I might’ve gotten a little distracted with the surroundings.") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      characterPortrait_2.src = "cire_smiling-armcrossed.png";
      gameMain.style.backgroundImage = "url('/jungle.png')";
      
      objs.style.display = "none";
      obj1.style.display = "none";
    }
    
    if (currentText === "It’s... urgh...") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.src = 'caster_uhh.png';
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Oh you must’ve tired yourself out, would you like an avocado?") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      characterPortrait_2.src = "cire_smiling-armcrossed.png";
    }
    
    if (currentText === "Where’d you even get that? As far as I’ve seen there’s no kind of fruit here, yet...") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.src = 'caster_uhh.png';
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Oh I brought it with me.") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      characterPortrait_2.src = "cire_smiling-armcrossed.png";
    }
    
    if (currentText === "...Why???") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.src = 'caster_uhh.png';
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "For emergencies of course! A genius must not let their hunger go on!") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      characterPortrait_2.src = "cire_explaining.png";
    }
    
    if (currentText === "Sure... But, an avocado?") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.src = 'caster_uhh.png';
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Avocados are healthy and delicious.") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      characterPortrait_2.src = "cire_explaining.png";
    }
    
    if (currentText === "I’m alright... Thank you.") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.src = 'caster_uhh.png';
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Do you like avocados too?") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      characterPortrait_2.src = "cire_determined.png";
    }
    
    if (currentText === "I do, actually.") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.src = 'caster_uhh.png';
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Perfect!") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      characterPortrait_2.src = "cire_erm.png";
    }
    
    if (currentText === "For instance, pericarp, consisting of exocarp, mesocarp, and endocarp.") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      characterPortrait_2.src = "cire_erm.png";
      objs.style.display = "block";
      obj2.style.display = "block";
    }
    
    if (currentText === "You’re really interested in the study of plants, doctor.") {
      characterPortrait_1.style.display = "block";
      characterPortrait_2.style.display = "none";
      objs.style.display = "none";
      obj2.style.display = "none";
    }
    
    if (currentText === "Oh is it quite obvious?") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      characterPortrait_2.src = "cire_smiling-armcrossed.png";
    }
    
    if (currentText === "Very.") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.src = 'caster_smiling-closemouth.png';
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Fuhuhuhu! I could talk about plants all day!") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
    }
    
    if (currentText === "A tiny garden, planted with vegetables with the use of modern techniques.") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "none";
      gameMain.style.backgroundImage = "url('/garden.png')";
    }
    
    if (currentText === "I tried to conduct an experiment and see if vegetables in the present would be able to grow with the soil of the past.") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
    }
    
    if (currentText === "Care to tell me what kind of offspring this one’s called?") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "none";
      objs.style.display = "block";
      obj5.style.display = "block";
      option3Element.style.display = "block";
      option4Element.style.display = "block";
    }
    
    
  });
} else {
  console.error("nameElement is null");
}
}

function choice_2() {

let textIndex_6 = 0;
const texts_6 = [
  "",
  "Ehh... Nope!",
  "Try again dear, the clue is in the name...",
  
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
  "Ehh... Nope!": "Cire",
  "Try again dear, the clue is in the name...": "Cire",
  
};
// Check if nameElement is not null
if (nameElement) {
  window.addEventListener("click", () => {
    if (textIndex_6 < texts_6.length - 1) {
      textElement.innerHTML = texts_6[++textIndex_6];
    }
    const currentText = textElement.innerHTML;
    nameElement.innerHTML = nameMapping[currentText] || "?";
    
    option1Element.style.display = "none";
    option2Element.style.display = "none";
    
    if (currentText === "Try again dear, the clue is in the name...") {
      option1Element.style.display = "block";
    }
    
  });
} else {
  console.error("nameElement is null");
}
}
function choice_3() {

let textIndex_4 = 0;
const texts_4 = [
  "",
  "Well, it’ s understandable to get the two confused as they’ re typically both round - like in shape.",
  "But incorrect!",
  
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
  "Well, it’ s understandable to get the two confused as they’ re typically both round - like in shape.": "Cire",
  "But incorrect!": "Cire",
  
};
// Check if nameElement is not null
if (nameElement) {
  window.addEventListener("click", () => {
    if (textIndex_3 < texts_4.length - 1) {
      textElement.innerHTML = texts_4[++textIndex_4];
    }
    const currentText = textElement.innerHTML;
    nameElement.innerHTML = nameMapping[currentText] || "?";
    
    option3Element.style.display = "none";
    option4Element.style.display = "none";
    
    if (currentText === "But incorrect!") {
      option4Element.style.display = "block";
    }
    
  });
} else {
  console.error("nameElement is null");
}
}

function choice_4() {

let textIndex_5 = 0;
const texts_5 = [
  "",
"An onion counts as a bulb.",
"Indeed. Bulbs are crops that grow underground with a stem base, which consists of a bud covered by layers of their own skins or leaves, onions are a good example.",
"He puts the onion down and trails off to another part of the garden.",
"He pulls out another crop.",
"You catch a glimpse of a potato this time.",

"Ah, that’s a tuber.",
"Correcto!",
"You’re able to differentiate them as tubers due to how they produce “eyes” all over their surface.",
"These “eyes” are capable of growing a stem with another tuber.",
"The doctor stood up, brushing his palms to remove excess soil.",
"However, as he looks around the premises, something gets his attention.",
"And once again, he rushes ahead, giving you no time to react.",
"Oh what is this time...",
"Miss Ambrose! Come here, quickly!",
"As you walk towards him, you study his sudden interest.",
"A plant as big as the others, yet its leaves are covered with questionable dots.",
"Look at this magnificent creature! You got spores all over!",
"Spores?",

"I’ve never seen spores up this close...",
"Not to mention, big enough for the naked eye to see...",
"These beauties are the unit of asexual reproduction.",
"They need not another cell to reproduce as the only cell they need is themselves.",
"Isn’t it fascinating how such a large spore came from a singular, tiny unit?",
"He glances in a different direction.",
"Oh! Come with me, Miss Ambrose.",
"You follow him while he trails off to another area.",
"He kneels down, scrapping the soil off to reveal a sort of vine connecting two herb plants.",
"A stolon? Or a random stem of a plant?",
"Actually, both!",
"That is indeed a stolon. A horizontal stem found beneath the soil that connects one plant to another.",
"This is my first time witnessing such a thing… Normally it’d just be drawn over my textbooks.",
"It’s similar to how a baby is connected to the mother inside the womb...",
"Both the parent and offspring are connected to each other...",
"A perfect analogy to describe such a phenomenon, Miss Ambrose!",
"What do we have over there?",
"He runs towards another direction.",
"Oh when will this kid get tired?",

"You’re led to a plant, different from the rest.",
"It’s big as usual, with its leaves capable of becoming umbrellas to hide under.",
"It seems too… crowded? For a singular plant.",
"The roots are tangled in different ways the stems clash onto each other, making it difficult for the sun’s rays to pass through.",
"The doctor takes out a tiny knife from his coat and cuts a portion of a stem off.",
"He kneels down, rummaging through the soil, and plants the stem into it.",
"Doctor? Why the sudden gardening?",
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
  
"An onion counts as a bulb.": "Caster",

"Indeed. Bulbs are crops that grow underground with a stem base, which consists of a bud covered by layers of their own skins or leaves, onions are a good example.": "Cire",

"He puts the onion down and trails off to another part of the garden.": "Narrator",

"He pulls out another crop.": "Narrator",

"You catch a glimpse of a potato this time.": "Narrator",

"Ah, that’s a tuber.": "Caster",

"Correcto!": "Cire",

"You’re able to differentiate them as tubers due to how they produce “eyes” all over their surface.": "Cire",

"These “eyes” are capable of growing a stem with another tuber.": "Cire",

"The doctor stood up, brushing his palms to remove excess soil.": "Narrator",

"However, as he looks around the premises, something gets his attention.": "Narrator",

"And once again, he rushes ahead, giving you no time to react.": "Narrator",

"Oh what is this time...": "Caster",

"Miss Ambrose! Come here, quickly!": "Cire",

"As you walk towards him, you study his sudden interest.": "Narrator",

"A plant as big as the others, yet its leaves are covered with questionable dots.":"Narrator",

"Look at this magnificent creature! You got spores all over!": "Cire",
"Spores?": "Caster",

"I’ve never seen spores up this close...": "Caster",

"Not to mention, big enough for the naked eye to see...": "Caster",

"These beauties are the unit of asexual reproduction.": "Cire",

"They need not another cell to reproduce as the only cell theyneed is themselves.": "Cire",

"Isn’t it fascinating how such a large spore came from a singular, tiny unit?": "Cire",

"He glances in a different direction.": "Narrator",

"Oh! Come with me, Miss Ambrose.": "Cire",

"You follow him while he trails off to another area.": "Narrator",

"He kneels down, scrapping the soil off to reveal a sort of vine connecting two herb plants.": "Narrator",

"A stolon? Or a random stem of a plant?": "Caster",

"Actually, both!": "Cire",

"That is indeed a stolon. A horizontal stem found beneath the soil that connects one plant to another.": "Cire",

"This is my first time witnessing such a thing… Normally it’d just be drawn over my textbooks.": "Caster",

"It’s similar to how a baby is connected to the mother inside the womb...": "Caster",

"Both the parent and offspring are connected to each other...": "Caster",

"A perfect analogy to describe such a phenomenon, Miss Ambrose!": "Cire",

"What do we have over there?": "Cire",

"He runs towards another direction.": "Narrator",

"(Oh when will this kid get tired?)": "Cire",

"You’re led to a plant, different from the rest.": "Narrator",

"It’s big as usual, with its leaves capable of becoming umbrellas to hide under.": "Narrator",

"It seems too… crowded? For a singular plant.":" Narrator",

"The roots are tangled in different ways the stems clash onto each other, making it difficult for the sun’s rays to pass through.": "Narrator",

"The doctor takes out a tiny knife from his coat and cuts a portion of a stem off.": "Narrator",

"He kneels down, rummaging through the soil, and plants the stem into it.": "Narrator",

"Doctor? Why the sudden gardening?": "Caster",
  
};
// Check if nameElement is not null
if (nameElement) {
  window.addEventListener("click", () => {
    if (textIndex_5 < texts_5.length - 1) {
      textElement.innerHTML = texts_5[++textIndex_5];
    }
    const currentText = textElement.innerHTML;
    nameElement.innerHTML = nameMapping[currentText] || "?";
    
    option3Element.style.display = "none";
    option4Element.style.display = "none";
    
    if (currentText === "An onion counts as a bulb.") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.srs = 'caster_no-expression.png';
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "He puts the onion down and trails off to another part of the garden.") {
      characterPortrait_1.style.display = "block";
      characterPortrait_2.style.display = "none";
      objs.style.display = "none";
      obj5.style.display = "none";
    }
    
    if (currentText === "An onion counts as a bulb.") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.srs = 'caster_talking-smile.png';
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Correcto!") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
    }
    
    if (currentText === "Oh what is this time...") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.srs = 'caster_uhh.png';
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Look at this magnificent creature! You got spores all over!") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      characterPortrait_2.src = 'cire_proud.png';
    }
    
    if (currentText === "Spores?") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.srs = 'caster_uhh.png';
      characterPortrait_2.style.display = "none";
      objs.style.display = "block";
      obj3.style.display = "block";
    }
    
    if (currentText === "These beauties are the unit of asexual reproduction.") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
    }
    
    if (currentText === "Oh! Come with me, Miss Ambrose.") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      objs.style.display = "none";
      obj3.style.display = "none";
    }
    
    if (currentText === "A stolon? Or a random stem of a plant?") {
      characterPortrait_1.style.display = "block";
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Actually, both!") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      characterPortrait_2.src = 'cire_erm.png';
    }
    
    if (currentText === "This is my first time witnessing such a thing… Normally it’d just be drawn over my textbooks.") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.src = "caster_smiling.png";
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "A perfect analogy to describe such a phenomenon, Miss Ambrose!") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "block";
      characterPortrait_2.src = 'cire_proud.png';
    }
    
    if (currentText === "(Oh when will this kid get tired?)") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.src = "caster_no-expression.png";
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "You’re led to a plant, different from the rest.") {
      characterPortrait_1.style.display = "none";
      characterPortrait_2.style.display = "none";
    }
    
    if (currentText === "Doctor? Why the sudden gardening?") {
      characterPortrait_1.style.display = "block";
      characterPortrait_1.src = "caster_uhh.png";
      characterPortrait_2.style.display = "none";
      setTimeout(function () {
        window.alert("Hi! we hope you find our game interesting... before leaving may we ask you to answer our survey, your collaboration will be very appreciated!");
        window.location.replace('');
      }, 4000);
    }
});
} else {
    console.error("nameElement is null");
}
}