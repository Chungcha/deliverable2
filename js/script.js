var tempQuest = "What is the temperature (in Fahrenheit?)";

var tempFahr = prompt(tempQuest, "in Fahrenheit");

var tempCloth;

var eventQuest = "What type of event are you attending?";

var eventType = prompt(eventQuest, "casual, semi-formal, formal");

var eventCloth;


if (tempFahr < 54) {
 (tempCloth = "a coat");
}
else if (tempFahr > 70){
(tempCloth = "no jacket");
}
else {
(tempCloth = "a jacket");
}


if (eventType === "casual") {
 (eventCloth = "something comfy");
}
else if (eventType === "semi-formal"){
(eventCloth = "a polo");
}
else if (eventType === "formal"){
(eventCloth = "a suit");
}
else {
  (eventCloth = "")
};

var result = "Since it is " + tempFahr + " and you are going to " + eventType + " event, you should wear " + eventCloth + " and " + tempCloth + "."

console.log(result);
alert(result);
