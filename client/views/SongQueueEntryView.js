// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',
  className: 'songView',

  template: _.template('<td class="artist"><%= artist %></td><td class="song"><%= title %></td><td></td><td></td><td class="remove detail">&#9747;</td>'),

  events: {
    'click .remove': function() {
      // this.model.play();
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
