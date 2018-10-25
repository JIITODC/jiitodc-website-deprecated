;
function bar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
var title = document.getElementById('head-text');

var typewriter = new Typewriter(title, {
    loop: true
});

typewriter.typeString('JODC')
    .pauseFor(2500)
    .deleteAll()
    .typeString('JIIT Open Dev Circle')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Join Us')
    .pauseFor(2500)
    .deleteAll()
    
    .start();
   
