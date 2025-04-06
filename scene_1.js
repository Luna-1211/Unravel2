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
      
      const texts = ["", "Good morning everyone", "Today I will be announcing the name of the student who will have the honor to represent our school in the National Student Teacher Program of 1856", "If I call your name please stand up", "Ms. Ambrose", "Here.", "Congratulations, you will be representing our school on the upcoming event...", "Like always, we expect a high quality performance from you.", "Its an honor to be the one representing us all in the eyes of our competitors...", "I promise that I shall meet and exceed expectations."];
      
      const c_names = document.getElementById("names");
      
      window.addEventListener("click", () => {
        if (textIndex < texts.length - 1) {
          document.getElementById("text").innerHTML = texts[++textIndex];
        }
        if (document.getElementById("text").innerHTML === "Good morning everyone") {
          c_names.innerHTML = "Prof. Vin";
          document.getElementById("chc_2").style.display = "block";
          document.getElementById("chc_1").style.display = "none";
        }
        if (document.getElementById("text").innerHTML === "Congratulations, you will be representing our school on the upcoming event...") {
          c_names.innerHTML = "Prof. Vin";
          document.getElementById("chc_2").style.display = "block";
          document.getElementById("chc_1").style.display = "none";
        }
        if (document.getElementById("text").innerHTML === "Here.") {
          c_names.innerHTML = "Caster";
          document.getElementById("chc_2").style.display = "none";
          document.getElementById("chc_1").style.display = "block";
        }
        if (document.getElementById("text").innerHTML === "Its an honor to be the one representing us all in the eyes of our competitors...") {
          c_names.innerHTML = "Caster";
          document.getElementById("chc_2").style.display = "none";
          document.getElementById("chc_1").style.display = "block";
        }
        if (document.getElementById("text").innerHTML === "I promise that I shall meet and exceed expectations.") {
          setTimeout(function () {
            window.location.replace('scene_2.html');
          }, 4000);
        }
        
      });
      