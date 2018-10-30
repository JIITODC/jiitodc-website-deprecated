const title = document.getElementById("head-text");

const typewriter = new Typewriter(title, {
  loop: true,
});

typewriter
  .typeString("JODC")
  .pauseFor(2500)
  .deleteAll()
  .typeString("JIIT Open Dev Circle ")

  .start();

const topNav = document.querySelector(".topnav");
topNav.addEventListener('click', function(event) {
  if (topNav.className === "topnav") {
      topNav.className += " responsive";
  }
  else {
      topNav.className = "topnav";
  }
});
