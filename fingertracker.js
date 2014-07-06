if (Meteor.isClient) {
  
  Template.delta.events({
    
  });
  
  Template.pad.rendered = function(template){
    var delta = $('#delta');
    var el = this.find('#pad');
    
    Hammer(el).on('touch drag transform', function(e){
      e.gesture.preventDefault();
      console.log(e);
      var touches = e.gesture.touches.length;
      //Single-touch
      e.target.children.markerO.style.left = e.gesture.touches[0].pageX-10 + 'px';
      e.target.children.markerO.style.top = e.gesture.touches[0].pageY-10 + 'px';
      //print deltas
      e.target.children.delta.innerHTML = '1 touch ' + String(e.gesture.touches[0].pageX-10) + ',' +  String(e.gesture.touches[0].pageY-10);  
      //multi-touch
      if(touches >= 2){
        e.target.children.markerD.style.left = e.gesture.touches[1].pageX-10 + 'px';
        e.target.children.markerD.style.top = e.gesture.touches[1].pageY-10 + 'px';
        //again print the deltas
        e.target.children.delta.innerHTML = '2 touches ' + String(e.gesture.touches[0].pageX-10) + ',' +     String(e.gesture.touches[0].pageY-10) + ' | ' + String(e.gesture.touches[1].pageX-10) + ',' +     String(e.gesture.touches[1].pageY-10);
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
