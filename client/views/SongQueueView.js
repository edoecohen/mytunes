// SongQueueView.js - Defines a backbone view class for the song queue.
// MVC - View
// Model - Collection SongQueue

var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();

    this.listenTo(this.collection, 'add', function(){
      this.render();
    });
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({ model: song}).render();
      })
    );

  }

});
