const audio = document.getElementById("myAudio");
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
      
      const texts = ["", "sigh", "Promise to meet expectations huh?", "I made that grand respond but now I don't even know where to go from here.", "Better read the rules for now.", "Huh?...", "Theres's no rules about receiving any external help...", "Then perhaps...", "Maybe I should ask people I know for some assistance...", "Fortunately...", "I know just the guy who can help me."];
      
      
      window.addEventListener("click", () => {
        if (textIndex < texts.length - 1) {
          document.getElementById("text").innerHTML = texts[++textIndex];
        } 
        if (document.getElementById("text").innerHTML === "sigh") {
          document.getElementById("names").innerHTML = "Caster";
        }
        if (document.getElementById("text").innerHTML === "Promise to meet expectations huh?") {
          document.getElementById("text").style.fontStyle = "italic";
        }
        if (document.getElementById("text").innerHTML === "I made that grand respond but now I don't even know where to go from here.") {
          document.getElementById("text").style.fontStyle = "normal";
        }
        if (document.getElementById("text").innerHTML === "Huh?...") {
          document.getElementById("chc_1").src = "caster_concern.png";
          document.getElementById("chc_1").style.width = "120%";
          document.getElementById("chc_1").style.height = "100%";
        }
        if (document.getElementById("text").innerHTML === "Fortunately...") {
          document.getElementById("chc_1").src = "caster_talking-smile.png";
          document.getElementById("chc_1").style.width = "120%";
          document.getElementById("chc_1").style.height = "100%";
        }
        if (document.getElementById("text").innerHTML === "I know just the guy who can help me.") {
          setTimeout(function () {
            window.location.replace("scene_3.html");
          }, 3000);
        }
  });