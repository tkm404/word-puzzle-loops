function firstPuzzle() {
let quoteOne = liFirst;
console.log(quoteOne);
const quoteOneArray = quoteOne.split("");
quoteOneArray.forEach(function(element) {
	if (element.toLowerCase() === "a" || "e" || "i" || "o" || "u") {
		return quoteOne.replaceAll(element, "*")
	} else {
		return quoteOne
	}
});
}

window.onload = function(event) {
  event.preventDefault();
  const div = document.createElement("div")
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