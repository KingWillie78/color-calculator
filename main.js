const prompt =  require("prompt-sync")();

const question = prompt(
    "Combine or deconstruct colors?"
);

if (question === " Combine") {
    const color1 = prompt("Choose a color (red, yellow, or blue): ");
    const color2 = prompt("Choose a color (red, yellow, or blue)(Color must be different than the first choice): ");
    if (color1 === 'red' && color2 === 'yellow' || color1 === 'yellow' && color2 === 'red') {
    console.log('orange');}
    else if (color1 === 'red' && color2 === 'blue' || color1 === 'blue' && color2 === 'red') {
    console.log('purple');} 
    else if (color1 === 'yellow' && color2 === 'blue' || color1 === 'blue' && color2 === 'yellow') {
    console.log('green');} 
    else if (color1 === 'red' && color2 === 'red' || color1 === 'yellow' && color2 === 'yellow' || color1 === 'blue' && color2 === 'blue') {
    console.log('error');
    } 
}

if (question === " deconstruct") {
    const color = prompt("Choose a color (purple, orange or green): ");
    if (color === "purple") {
		console.log("Your colors are Red and Blue.");
	} else if (color === "green") {
		console.log("Your colors are Yellow and Blue.");
	} else if (color === "orange") {
		console.log("Your colors are Red and Yellow.");}
      else if (color !== 'purple' || color !== 'green' || color !== 'orange'); {
            console.log('error')}
    }