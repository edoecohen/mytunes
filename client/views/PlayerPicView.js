
var PlayerPicView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: 'img',
  className: 'playerPic',

  initialize: function() {
    this.render();
  },

  setSong: function(song){
    this.model = song;
    this.$el.find('img').attr('src', this.model.get('image'));
    //this.render();
  },

  // return this.$el.attr('src', this.model ? this.model.get('url') : '');

  render: function(){
    //this.$el.append('<img></img>')
    // this.$el.append('<img src="./images/aaliyah1.jpeg"></img>');
    this.$el.attr('src', this.model.get('image'));
  }

});
