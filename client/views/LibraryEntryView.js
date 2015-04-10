// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.

// MVC - View
// Model - Song

var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  className: 'songView',

  template: _.template('<td class="artist"><%= artist %></td><td class="song"><%= title %></td><td><%= plays %></td><td class="playSong detail">&#9654;</td><td class="addToQueue detail">&#9835;</td>'),

  events: {
    'click .addToQueue': function() {
      this.model.enqueue();
    },
    'click .playSong': function(){
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
