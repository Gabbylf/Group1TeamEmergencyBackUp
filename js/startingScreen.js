// startingScreen.js -- This page plays the loading screen/starting animations and moves onto the next page through user interaction.

var button = $("#continue-button");

// replace walking animation with eating animation
button.click(function() {
    $("#graphic").empty();
    $("#graphic").append('<img src="img/eating.gif" width=650px>');
    // animation plays, then fades out, then goes to diagnosis page
    setTimeout(function() {
        $("#graphic").fadeOut(2000);
    }, 1000);
    setTimeout(function() {
        location.href = "./02_diagnosis/index.html";
    }, 4000);
});

// about.js - describes hepatitis A and common symptoms

// show about div and hide all other divs
// about section
$("#about").show();
$("#what-explanation").hide();
$("#transmission-explanation").hide();
$("#common-symptoms-explanation").hide();
$("#other-symptoms").hide();
$("#continue").hide();
// hide animation section
$("#animation").hide();
// hide main section and contents
$("#main").hide();

// for about section
// variables to track which tabs have been seen (max 3)
var tab = 0;
var what = false;
var transmission = false;
var commonSymptoms =false;
// counter for how many symptoms have been shown (max 3)
var symptom = 0;

// function to show continue button once all 3 common symptoms have been revealed
function reveal() {
    // reveal other symptoms if all 3 symptoms have been checked
    if (symptom == 3) {
        $("#other-symptoms").show();
        // also reveal continue button if all 3 symptoms have been checked AND all 3 tabs have been checked
        if (tab == 3) {
            $("#continue").show();
    }
}};

// tab to reveal what hep a is
$("#what").click(function() {
    if (what == false) {
        tab += 1;
        what = true;
    };
    $("#transmission-explanation").hide();
    $("#common-symptoms-explanation").hide();
    $("#what-explanation").show();
    // check if everything has been shown
    reveal();
});
// tab to reveal how it's transmitted
$("#transmission").click(function() {
    if (transmission == false) {
        tab += 1;
        transmission = true;
    };
    $("#transmission-explanation").show();
    $("#common-symptoms-explanation").hide();
    $("#what-explanation").hide();
    // check if everything has been shown
    reveal();
});
// tab to reveal common symptoms
$("#common-symptoms").click(function() {
    if (commonSymptoms == false) {
        tab += 1;
        commonSymptoms = true;
    };
    $("#transmission-explanation").hide();
    $("#common-symptoms-explanation").show();
    $("#what-explanation").hide();
    // check if everything has been shown
    reveal();
});

// reveal symptom images after clicking on each symptom button and check to see if all symptom buttons have been clicked
$("#symptom-1").click(function() {
    console.log("clicked");
    $("#symptom-1").after('<img src="img/symptom1.png" width=250px>');
    $("#symptom-1").remove();
    symptom += 1;
    // check if everything has been shown
    reveal();
});

$("#symptom-2").click(function() {
    console.log("clicked");
    // image is a placeholder for now
    $("#symptom-2").after('<img src="img/symptom2.png" width=250px>');
    $("#symptom-2").remove();
    symptom += 1;
    // check if everything has been shown
    reveal();
});

$("#symptom-3").click(function() {
    console.log("clicked");
    // image is a placeholder for now
    $("#symptom-3").after('<img src="img/symptom3.png" width=250px>');
    $("#symptom-3").remove();
    symptom +=1;
    // check if everything has been shown
    reveal();
});

// when continue button is clicked
$("#continue").click(function() {
    $("#about").hide();
    $("#animation").show();
    // animation plays, then hides, then shows main content
    setTimeout(function() {
        // hide animation div and show main div
        $("#animation").hide();
        $("#main").show();
    }, 2000);
});
/*
Some thing for later use?
$("#body.liver").click(function(){
    $("#liver").show();
})

$("#body.digestive").click(function(){
    $("#digestive-system").show();
})

$("#body.joint").click(function(){
    $("#joint-pain").show();
})
*/

function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = (popup.style.display === 'none') ? 'block' : 'none';
  }
  
  document.getElementById('button-liver').addEventListener('click', function() {
    togglePopup('popup-liver');
  });
  
  document.getElementById('button-digestive-system').addEventListener('click', function() {
    togglePopup('popup-digestive-system');
  });
  
  document.getElementById('button-joint-pain').addEventListener('click', function() {
    togglePopup('popup-joint-pain');
  });
  
  document.body.addEventListener('click', function(event) {
    var clickedElement = event.target;
    var popups = document.getElementsByClassName('popup');
    
    Array.from(popups).forEach(function(popup) {
      var button = document.getElementById('button-' + popup.id.substring(6));
      
      if (popup.style.display === 'block' && clickedElement !== button && !popup.contains(clickedElement)) {
        popup.style.display = 'none';
      }
    });
  });

  $("#diagnosis-button").click(function(){
    location.href = "../03_main/index.html"
});