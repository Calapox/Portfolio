function nextWord(){
    var x = document.getElementById("nadoDiv");
    var y = document.getElementById("annyeongDiv");
    var c = document.getElementById("salanghaeDiv")
    if (x.style.display === "none" && y.style.display === "none") {
      x.style.display = "inline-block";
      y.style.display = "none";
      c.style.display = "none";
    } else if (y.style.display === "none" && c.style.display === "none") {
      x.style.display = "none";
      y.style.display = "inline-block";
      c.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    c.style.display = "inline-block";      
  }
}

function showHello() {
    var x = document.getElementById("annyeongID");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function showMeToo(){
    var x = document.getElementById("nadoID");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function showLoveYou(){
    var x = document.getElementById("salanghaeID");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }  

