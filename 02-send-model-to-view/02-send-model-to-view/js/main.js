
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// 1st create model song
var Song = Backbone.Model.extend({
    validate: function (attrs) {
        if (!attrs.title) {
            return "title is required."
        }
    }
});

var song = new Song({
    "title": "Blues in Green",
    "genre": "Jazz",
    "publishedOn": "1959",
    "artist": "Miles Davis"
});

var song2 = new Song();
// To set attributes of song model
song2.set("title", "Bam Bam Leheri");
song2.set({
    artist: "Hassal 2.0",
    publisedYear: "2023",
});

//To get created object is valid or not we can call isValid() method
song.isValid();

//To get last validation error message we can user validationError
var lastError = song.validationError;

//Create collection of Songs

var Songs = Backbone.Collection.extend({
    model: Song
});
var songs = new Songs([
    new Song ({title:"Paisa", publishedOn:"2022", artist:"Hrithik Hroshan"}),
    new Song ({title: "Shoorveer", publishedOn:"2023", artist: "Pranav"}),
    new Song ({title: "Tandav", publishedOn:"2020", artist: ""})
]);

songs.add(song);

//Default DOM element will be <div> used by backbone to print models inside container
// and if you want to display collection of models in semantic DOM elements of HTML5 
// then check or part for this section
    // Create view of model

    // var SongView = Backbone.View.extend({
    //     render: function(){
    //         this.$el.html(this.model.get("title"));
    //         return this;
    //     }
    // });

    // // var songView = new SongView({el: "#container", model: song});
    // // songView.render();

    // // Create view of Collection
    // var SongsView = Backbone.View.extend({
    //     render: function () {
    //         var self = this;
    //         this.model.each(function(song){
    //             var songView = new SongView({ model: song });
    //             self.$el.append(songView.render().$el);
    //         });
    //     }
    // });

    // var songsView = new SongsView({el: "#container", model: songs});
    // songsView.render();

// Or part: defined tagName to print each element of collection in 
// semantic element of html i.e. <li> under <ul> by backbone js
    // Create view of model

    var SongView = Backbone.View.extend({
        events: {
            "click": "onClick",  //handler, will render something defined on click event.
            "click .bookmark": "onClickBookMark"
        },

        onClick: function(event){
            $('#container').text(this.model.get('title') + ", Listen clicked.");  // this will write a text inside DOM element <div id= "container" ></>
            console.log("listen clicked.");
        },

        onClickBookMark: function(event){
            //event the argument is a standard JQuery event, which has a method called 
            // stop propagation, which we can use to stop the event form being dispatched to any other
            // handlers in the chain (like here we have Two handlers onClick, onClickBookMark and if u click on either of 
            // handler then both handlers call at same time so to avoid this use below method) 
            event.stopPropagation(); //check out by removing this line
            //
            $('#container').text(this.model.get('title') + ", bookmark clicked.");  // this will write a text inside DOM element <div id= "container" ></>
            console.log("bookmark clicked.");
        },
        tagName: "li",
        render: function(){
            this.$el.html(this.model.get("title") + "<button>Listen</button>  <button class = 'bookmark'>bookmark</button>");
            return this;
        }
    });

    // var songView = new SongView({el: "#container", model: song});
    // songView.render();

    // Create view of Collection
    var SongsView = Backbone.View.extend({
        render: function () {

  

            //Below this.model refer as a collection songs send while instantiating
            // where underscore library's method each iterate over collection
            // at every iteration function(song) is executed with the song referring 
            // to the current song

            //We simply put that song in a song view, render it, and append it to the DOM element of our songs view
            // So the collection views are responsible for delagting the render to the model views.
            // They just iterate the collection and create a child view for each model inside the collection

            // there is a problem when you don't maintain a separate var for 'this' 
            // if you are javascript ninja then you should know that this code is going to throw an error.
            // Why?
            // Because the context of 'this' changes here inside this callback function.
            //We want this to refer to the view iteslf.

            // A common convention is to keep a copy of this and store it in a variable called self.
            // 
            var self = this;
            this.model.each(function(song){
                var songView = new SongView({ model: song });
                self.$el.append(songView.render().$el);
            });

        }
    });

    var songsView = new SongsView({el: "#songs", model: songs});
    songsView.render();