if (Meteor.isClient) {
  
  Template.delta.events({
    
  });
  
  Template.pad.rendered = function(template){
    var delta = $('#delta');
    var el = this.find('#pad');
    Hammer(el).on('touch', function(e){
      e.gesture.preventDefault();
      console.log(e);
      var touches = e.gesture.touches.length;
      e.target.children.delta.innerHTML = 'Single touch/click';
      e.target.children.markerO.style.left = e.gesture.touches[0].pageX-10 + 'px';
      e.target.children.markerO.style.top = e.gesture.touches[0].pageY-10 + 'px';      
      if(touches >= 2){
        e.target.children.delta.innerHTML = 'Multi touch ' + touches + ' | ';
        e.target.children.markerD.style.left = e.gesture.touches[1].pageX-10 + 'px';
        e.target.children.markerD.style.top = e.gesture.touches[1].pageY-10 + 'px';
      }      
    });
  }; 
}//meteor is no longer client

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    // sudo rm -rf theInternet <<-- the most dangerous code in the world?
  });
}
