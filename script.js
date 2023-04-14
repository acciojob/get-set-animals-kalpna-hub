//complete this code
class Animal {
	constructor = (species){
		this.species = species;
	}
getSpecies(){
	return this.species;
}
makeSound(){
	console.log("The " + this.species + "make a sound.");
}
}
class Cat extends Animal {
	purr(){
		console.log("This " + this.species + " purrs.");
	}
}
class Dog extends Animal {
bark(){
		console.log("This " + this.species + " barks.");
}
}



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
