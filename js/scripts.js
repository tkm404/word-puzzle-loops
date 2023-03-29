function firstPuzzle(text) {
	let puzzleArray = text.split("");
	let output = text;
	puzzleArray.forEach(function(element) {
		if (element.toLowerCase().includes("a")) {
			output = output.replace("a", "-");
		} else if (element === "e") {
			output = output.replace("e", "-");
		} else if (element === "i") {
			output = output.replace("i", "-");
		} else if (element === "o") {
			output = output.replace("o", "-");
		} else if (element === "u") {
			output = output.replace("u", "-");
		}
	});
	return output;
}

function puzzleBox1() {
	event.preventDefault();
	const passage = document.getElementById("text-passage").value;
	console.log(document.getElementById("text-passage"))
	const makePuzzle = firstPuzzle(passage);
	document.getElementById("outputBox").innerText = makePuzzle;
	document.getElementById("text-passage").setAttribute("class", "hidden");
	document.getElementById("answer-button").removeAttribute("class");
}

function answerPuzzle() {
event.preventDefault();
document.getElementById("text-passage").removeAttribute("class");
}

window.addEventListener("load", function() {
	document.querySelector("button#button-man").addEventListener("click", puzzleBox1)
	document.querySelector("button#answer-button").addEventListener("click", answerPuzzle)
});

window.onload = function(event) {
  event.preventDefault();
	const head = document.createElement("h1")
	document.querySelector("body").prepend(head);
	head.append("Word Puzzle");
  const div = document.createElement("div");
  document.querySelector("body").append(div)
  const p = document.createElement("p");
  document.querySelector("div").append(p);
  p.append("Can you solve the riddle?");
  const ul = document.createElement("ul");
  div.append(ul);
  const liFirst = document.createElement("li");
  const liSecond = document.createElement("li");
  const liThird = document.createElement("li");
  ul.append(liFirst, liSecond, liThird);
	liFirst.append("Believe you can and you're halfway there. Theodore Roosevlet");
	liSecond.append("Knowledge is Power. Francis Bacon");
	liThird.append("Be the change that you wish to see in the world. Mahatma Ghandi");
}

