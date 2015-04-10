
var PlayerPicView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  tagName: 'div',
  className: 'playerPic',

  initialize: function() {
  },

  template: _.template('<div class="songDetails"><h1><%= artist %><h1><h2><%= title %></h2></div>'),

  setPic: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.css('background-image', 'url(' + this.model.get('image') + ')').html(this.template(this.model.attributes));
  }

});