if (Meteor.isClient) {
  
  Template.delta.events({
    
  });
  
  Template.pad.rendered = function(template){
    var delta = $('#delta');
    var el = this.find('#pad');
    Hammer(el).on('touch', function(e){
      console.log(e);
      delta[0].innerHTML = 'X=' + e.gesture.srcEvent.x + ' Y=' + e.gesture.srcEvent.y;
      $('#marker').css('left',e.gesture.srcEvent.x-10);
      $('#marker').css('top',e.gesture.srcEvent.y-10);
    });
  };
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
