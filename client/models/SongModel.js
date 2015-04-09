// SongModel.js - Defines a backbone model class for songs.

// MVC - Model

var SongModel = Backbone.Model.extend({

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  play: function(){
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  }

});
