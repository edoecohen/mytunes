// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
      this.render();
  },

  addSong: function(song) {
    this.collection.add(song);
    console.log(this.collection);
    //this.add(song);
    // this.model.add("aasfas")
    // console.log("TEST")
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th class="queueList">Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
