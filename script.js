function check(){

	var question1 = document.game.question1.value;
	var question2 = document.game.question2.value;
	var question3 = document.game.question3.value;
	var question4 = document.game.question4.value;
	var question5 = document.game.question5.value;
	var question6 = document.game.question6.value;
	var question7 = document.game.question7.value;
	var correct = 0;


	if (question1 == "charlotte") {
		correct++;
}
	if (question2 == "Nipsey Hussle") {
		correct++;
}	
	if (question3 == "Post Malone") {
		correct++;
}
	if (question4 == "Dababy") {
		correct++;
}
	if (question5 == "Yes") {
		correct++;
}
	if (question6 == "False") {
		correct++;
}
	if (question7 == "165,000") {
		correct++;
}
	
 var messages = ["Impressive!", "Not so good!", "Cmon you can do better"];

 var logic;
 if (correct < 3) {
	logic = 1;
}

if (correct > 0 && correct < 7) {
	logic = 2;
}

if (correct > 5) {
	logic = 0;
}



	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[logic];
	document.getElementById("number_correct").innerHTML = "Thats " + correct + " correct.";

	}