
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// Create a new View object
// BackboneJs
// Views> Creating Views
// Its not a html page or something like this,
// Its the object responsible for below things
// Render the content.
// REspond to DOM events ( click, drag & drops, etc).
// More like Controllers in MVC
// Have a DOM elements


// 1st scenario
// var SongView = Backbone.View.extend({
//     render: function () {
//         this.$el.html("Hello world");
//         return this;
//     }
// });

// //this way helps chanining method shortly 

// var songView = new SongView({el: "#container"});
// songView.render();

// this view is responsible for rendering the content inside the #container 
// as well as responding to any event raised by this #container



// el vs $el properties
// el - this property is a jQuery selector that references to the DOM elements that this view owns.

// $el - This property is a JQuery object that contains this DOM element.

// remove initialization of el property?
// Hello words gone from UI
// but inspect and check
// we can see default DOM element
// That means If you dont mention specific DOM element when instantiating view then backbone creates automatically a DOM element div for that view but this DOM element is not in memory, its not inserted into html also and thats why we dont see hello word on UI

// //2nd Scenario
// but by writting below code backbone create default empty div and put Hello World inside it

// var SongView = Backbone.View.extends({
// render: function(){
// this.$el.html("Hello world");
// retun this;
// }
// });

// //this way helps chanining method shortly 

// // var songView = new SongView();
// // songView.render();

// // $("#container").html(songView.$el);


// //3rd scenario - we can add class, attribute, id to empty default div attached with viewvar 

// SongView = Backbone.View.extends({

//     tagName: "span",
// className: "song",
// id: "1234",
// attributes: {
// "data-genre":"Jazz"
// },

// render: function(){
// this.$el.html("Hello world");
// return this;
// }
// });

// //this way helps chanining method shortly 

// var songView = new SongView();
// songView.render();

// $("#container").html(songView.$el);


// 4th IMP
// We should return a reference to the view at the end of the render method. This is used for  chaining method call

// keep first part of code as is and made change below in second part

SongView = Backbone.View.extend({

    tagName: "span",

    className: "song",

    id: "1234",

    attributes: {
        "data-genre": "Jazz"
    },

    render: function () {
        this.$el.html("Hello world");
        return this;
    }
});

//this way helps chanining method shortly 

var songView = new SongView();

$("#container").html(songView.render().$el);
// mostly used

// Every view has a reference to a DOM element and is responsible for
//  rendering anything inside that element or responding to events raised from there.
