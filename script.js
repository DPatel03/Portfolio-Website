document.getElementById("fun-fact-btn").addEventListener("click", function () {
  var funFact = document.getElementById("fun-fact");
  if (funFact.style.display === "none") {
    funFact.style.display = "block";
  } else {
    funFact.style.display = "none";
  }
});
