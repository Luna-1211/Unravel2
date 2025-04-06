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
      
      const texts = ["", "Finally here...", "...", "So uhh...", "I guess I should just knock?"];
      
      
      
      const texts_4 = ["...", "(Loud noises!)", "Oh I guess he is here...", "Um...hello?!", "Dr. Cire?!", "Its me Caster-!", "C-caster Ambrose?", "Um...hello?", "(Footsteps...)"]; 
      
      const name = document.getElementById("names");
      
      
      window.addEventListener("click", () => {
        if (textIndex < texts.length - 1) {
          document.getElementById("text").innerHTML = texts[++textIndex];
        }
        if (document.getElementById("text").innerHTML === "Finally here...") {
          name.innerHTML = "Caster";
        }
        if (document.getElementById("text").innerHTML === "I guess I should just knock?") {
          const opt_1 = document.getElementById("c_1").style.display = "block";
          const opt_2 = document.getElementById("c_2").style.display = "block";
        }

  });
  
  function choice_1() {
      
  
  let textIndex_2 = 0;
  
      const texts_2 = ["", "Huh?", "Is there no one inside?", "Should I...knock again?"];
  
  window.addEventListener("click", () => {    
    if (textIndex_2 < texts_2.length - 1) {
      document.getElementById("text").innerHTML = texts_2[++textIndex_2];
    }
    if (document.getElementById("text").innerHTML === "Should I...knock again?") {
      const opt_3 = document.getElementById("c_3").style.display = "block";
      const opt_4 = document.getElementById("c_4").style.display = "block";
    }
    const opt_1 = document.getElementById("c_1").style.display = "none";
    
    const opt_2 = document.getElementById("c_2").style.display = "none";
    
  });
}

  function choice_2() {
      
  
  let textIndex_2 = 0;
  
      const texts_2 = ["", "Huh?", "Is there no one inside?", "Should I...knock again?"];
  
  window.addEventListener("click", () => {    
    if (textIndex_2 < texts_2.length - 1) {
      document.getElementById("text").innerHTML = texts_2[++textIndex_2];
    }
    if (document.getElementById("text").innerHTML === "Should I...knock again?") {
      const opt_3 = document.getElementById("c_3").style.display = "block";
      const opt_4 = document.getElementById("c_4").style.display = "block";
    }
    const opt_1 = document.getElementById("c_1").style.display = "none";
    
    const opt_2 = document.getElementById("c_2").style.display = "none";
    
  });
}

  function choice_3() {
      
  
  let textIndex_3 = 0;
  
      const texts_3 = ["...", "\"Hmm...Maybe he's not home.\"", "(Loud noises!)", "Or...there might be someone...", "Uh...hello?!", "Dr. Cire?!", "Its me Caster-!", "C-caster Ambrose?", "Uh...hello?", "(Footsteps...)"];
  
  window.addEventListener("click", () => {    
    if (textIndex_3 < texts_3.length - 1) {
      document.getElementById("text").innerHTML = texts_3[++textIndex_3];
    }
    if (document.getElementById("text").innerHTML === "(Footsteps...)") {
      setTimeout(function () {
        window.location.replace('scene_3.2.html')
      }, 2000);
    }
    const opt_3 = document.getElementById("c_3").style.display = "none";
    
    const opt_4 = document.getElementById("c_4").style.display = "none";
    
  });
}

function choice_4() {
  
  let textIndex_4 = 0;
  
  
    const texts_4 = ["", "...", "Well it looks like the Dr.Cire is not here...", "Maybe I'll just comeback later."]
  
  window.addEventListener("click", () => {
      if (textIndex_4 < texts_4.length - 1) {
        document.getElementById("text").innerHTML = texts_4[++textIndex_4];
      }
      if (document.getElementById("text").innerHTML === "Maybe I'll just comeback later.") {
        setTimeout(function (){
          window.location.replace('scene_4.html');
        }, 2000);
      }
      const opt_3 = document.getElementById("c_3").style.display = "none";

      const opt_4 = document.getElementById("c_4").style.display = "none";
      
      });
}