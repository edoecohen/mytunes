// SongQueue.js - Defines a backbone model class for the song queue.

// MVC - Collection

var SongQueue = Songs.extend({

  initialize: function(){

    this.on("add", function(){
      if(this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(){
      this.shift();
        if(this.first()){
          this.playFirst();
        }
    });

    this.on('dequeue', function(song){
      this.remove(song);
    });

  },

  playFirst: function(){
    this.at(0).play();
  }

});