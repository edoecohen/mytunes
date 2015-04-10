// AppView.js - Defines a backbone view class for the whole music app.

// MVC - View
// Model - App

var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerPicView = new PlayerPicView({model: this.model.get('currentSong')});
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});


    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    // this.model.on('change:songToAdd', function(model){
    //   this.songQueueView.addSong(model.get('songToAdd'));
    //   // console.log(model.get('songToAdd'));
    // }, this);

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
      this.playerPicView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerPicView.$el,
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
