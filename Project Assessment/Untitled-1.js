function myFunction() {
    var MentalHealthPage = document.getElementById("MentalHealthPage");
    if (MentalHealthPage.style.display === "none") {
        MentalHealthPage.style.display = "block";
        HomePage.style.display = "none";
        ExercisePage.style.display = "none";
        AdvicePage.style.display = "none";
        document.getElementById("MentalHealth").disabled = true;
        document.getElementById("Exercise1").disabled = false;
        document.getElementById("Advice1").disabled = false;
        document.getElementById("home1").disabled = false;
    } else {
        MentalHealthPage.style.display = "none";
    }
  }


function myFunction3() {
    var ExercisePage = document.getElementById("ExercisePage");
    if (ExercisePage.style.display === "none") {
        ExercisePage.style.display = "block";
        HomePage.style.display = "none";
        MentalHealthPage.style.display = "none";
        AdvicePage.style.display = "none";
        document.getElementById("MentalHealth").disabled = false;
        document.getElementById("Exercise1").disabled = true;
        document.getElementById("home1").disabled = false;
        document.getElementById("Advice1").disabled = false;
    } else {
        ExercisePage.style.display = "none";
    }
  }


function myFunction5() {
    var AdvicePage = document.getElementById("AdvicePage");
    if (AdvicePage.style.display === "none") {
        AdvicePage.style.display = "block";
        HomePage.style.display = "none";
        MentalHealthPage.style.display = "none";
        ExercisePage.style.display = "none";
        document.getElementById("MentalHealth").disabled = false;
        document.getElementById("Exercise1").disabled = false;
        document.getElementById("Advice1").disabled = true;
        document.getElementById("home1").disabled = false;
    } else {
        AdvicePage.style.display = "none";
    }
  }


function myFunction6() {
    var HomePage = document.getElementById("HomePage");
    if (HomePage.style.display === "none") {
        HomePage.style.display = "block";
        MentalHealthPage.style.display = "none";
        ExercisePage.style.display = "none";
        AdvicePage.style.display = "none";
        document.getElementById("home1").disabled = true;
        document.getElementById("MentalHealth").disabled = false;
        document.getElementById("Exercise1").disabled = false;
        document.getElementById("Advice1").disabled = false;
    } else {
        HomePage.style.display = "none";
    }
  }








