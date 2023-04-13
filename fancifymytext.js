function displayAlert() {
    alert("Hello World!");
  }
  
function biggerText() {
    displayAlert();
    document.getElementById("textInput").style.fontSize = "24pt";
  }
  
  function fancyText() {
    if (document.getElementById("fancyRadio").checked) {
      document.getElementById("textInput").style.fontWeight = "bold";
      document.getElementById("textInput").style.color = "blue";
      document.getElementById("textInput").style.textDecoration = "underline";
    }
  }
  
  function boringText() {
    if (document.getElementById("boringRadio").checked) {
      document.getElementById("textInput").style.fontWeight = "normal";
      document.getElementById("textInput").style.color = "black";
      document.getElementById("textInput").style.textDecoration = "none";
    }
  }
  
  function mooText() {
    var text = document.getElementById("textInput").value;
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
      var words = sentences[i].split(" ");
      var lastWord = words.pop();
      var mooWord = lastWord.toUpperCase() + "-Moo";
      words.push(mooWord);
      sentences[i] = words.join(" ");
    }
    text = sentences.join(".");
    document.getElementById("textInput").value = text;
  }