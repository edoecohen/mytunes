// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.

// MVC - View
// Model - Song

var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
  className: 'songView',

  template: _.template('<td class="artist"><%= artist %></td><td><%= title %></td>'),

  events: {
    'click': function() {
      // this.model.play();
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
