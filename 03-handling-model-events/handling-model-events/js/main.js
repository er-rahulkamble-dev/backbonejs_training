
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.


//learn concept of Real-time notifications



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
    "artist": "Miles Davis",
    listners: 0
});

//To get created object is valid or not we can call isValid() method
song.isValid();

//To get last validation error message we can user validationError
var lastError = song.validationError;


    var SongView = Backbone.View.extend({
        initialize: function(){
        //  this.model.on("change", this.render, this); 
         this.model.on("change", this.render, this);   
        },

        onModelChange: function(){
            this.$el.addClass("changeCss");
        },

        events: {
            "click": "onClick"  //handler, will render something defined on click event.
        },

        onClick: function(event){
            var lisCount = this.model.get('listners');
            this.model.set('listners', lisCount + 1);
            console.log("listen clicked.");
            this.$el.css({
                'font-size': '24px',
                'color': '#FF5733',
                'font-weight': 'bold',
              });
            return this;
        },

        tagName: "li",
        render: function(){
            this.$el.html("Song: "+this.model.get("title") +" [Listeners: "+this.model.get("listners") +"] "+ "<button>Listen</button>");
            return this;
        }
    });

    var songView = new SongView({el: "#container", model: song});
    songView.render();
