
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// Create a new model 1st way
var Animal = Backbone.Model.extend({
    initialize: function(){
        console.log("Animal model initialized.");
    },
    walk: function(){
        console.log("Animal is walking...");
    }
});
var animal = new Animal();

// Dog can extend to animal model like below 
var Dog = Animal.extend({
    initialize: function(){
        console.log("Dog model initialized.");
    },

    // Overriding method of parent model Animal
    walk: function(){

    // how we can call parent method also in backboneJs?, like we use 'Super' keyword in Java
    // to call parent methods/ properties. lets see
    Animal.prototype.walk.apply(this);

        console.log("Dog is walking...");
    }
});

var dog = new Dog();

dog.walk();