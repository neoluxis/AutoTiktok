var running = false;
var start = confirm("Start?");

console.show(true); // Open console

if (start) {
  running = true;
  app.launchApp("抖音极速版");
  console.log("Open app");
  sleep(3000);
}

click(100, 100);

var counter = 0;
var swipeTime = 200;
var watchTime = 3000;
var like = false;
var likeCounter = 0;

while (running) {
  swipeTime = random(200, 400);
  watchTime = random(2000, 4000);
  like = random(0, 100) > 80;
  var success = swipe(500, 2000, 600, 500, swipeTime);
  if (success) {
    counter++;
    console.log("Swipe " + counter + " times");
    sleep(watchTime);
  } else {
    console.log("Breaking...");
    var quit = confirm("Quit?");
    if (quit) {
      running = false;
      console.log("Quit");
      confirm(
        "Swiped " + counter + " times and liked " + likeCounter + " times"
      );
    }
  }
  if (like) {
    likes();
    likeCounter++;
    console.log("Like " + likeCounter + " times");
  }
}

function likes() {
  click(500, 2000);
  sleep(200);
  click(500, 2000);
  sleep(600);
}
