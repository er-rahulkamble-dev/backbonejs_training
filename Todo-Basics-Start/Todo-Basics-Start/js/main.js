
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// Create a new model 1st way
// var Song = Backbone.Model.extend({
//     initialize: function(){
//         console.log("New song has been created.");
//     }
// });
// var song = new Song();


// Create a new model 2st way
var Song = Backbone.Model.extend({
    //optional default value for this model
    defaults:{
        genre: "Jazz"
    }
});
var song = new Song();

// To set attributes of song model
song.set("title", "Blues in Green");
song.set({
artist:"Miles Davis",
 publisedYear: "1959",
});

// console output:
// type  'song' to get all object details
// s {cid: 'c1', attributes: {…}, _changing: false, _previousAttributes: {…}, changed: {…}, …}
// attributes: 
// artist: "Miles Davis"
// genre: "Jazz"
// publisedYear: "1959"
// title: "Blues in Green"
// [[Prototype]]: Object
// changed: {artist: 'Miles Davis', publisedYear: '1959'}
// cid: "c1"
// _changing: false
// _pending: false
// _previousAttributes: {genre: 'Jazz', title: 'Blues in Green'}
// [[Prototype]]: 
// e.Model

// To get values of particular attribute
song.get("pbulishYear");
// To unset and remove attribute genre use below method
// song.unset("genre");

// or we can unset and remove all the attributes at once using below method:
// song.clear();

// To check the particular mode contains the specific attribute or not use below method:
song.has("title");  // returns true or false
