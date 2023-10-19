
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
        tagName: "li",
        render: function(){
            this.$el.html(this.model.get("title"));
            return this;
        }
    });

    // var songView = new SongView({el: "#container", model: song});
    // songView.render();

    // Create view of Collection
    var SongsView = Backbone.View.extend({
        render: function () {
            var self = this;
            this.model.each(function(song){
                var songView = new SongView({ model: song });
                self.$el.append(songView.render().$el);
            });
        }
    });

    var songsView = new SongsView({el: "#songs", model: songs});
    songsView.render();