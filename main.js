// Problem 1 (omit last item in array)

// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
// var consoleAnimals = [];

// for(var i=0; i<4; i++){
	
// 	consoleAnimals.push(animals[i]);
// }

// console.log(consoleAnimals);


// Problem 2 (incrementing every other array item)

// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// var consoleAnimals = []; 

// for(var i=0; i<animals.length; i+=2){
	
// 	consoleAnimals.push(animals[i]);
// }

// console.log(consoleAnimals);

// Problem 3 (decrementing for loop)

// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
// var consoleAnimals = [];

// for(var i=4; i>=0; i--){
	
// 	consoleAnimals.push(animals[i]);
// }

// console.log(consoleAnimals);

// Problem 4

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
var consoleAnimals = [];

for(var i=0; i<animals.length; i++){
	console.log(animals[i])
	//console.log(i);
	if(i > 0 && i < animals.length-1) {
		console.log(animals[i]);
		// console.log(i);
	}
}
	
	







