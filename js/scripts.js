// NOTE: backend

function myPlace(location, date, landmark, notes){
  this.myLocation = location;
  this.myDate = date;
  this.myLandmark = landmark;
  this.myNotes = notes;
}

myPlace.prototype.locationName = function(){
  return this.myLocation;
}


// NOTE: frontend
$(document).ready(function(){
  $("form#new-location").submit(function(event){
    event.preventDefault();

    var userLocation = $("input#new-location").val();
    var userDate = $("input#new-date").val();
    var userLandmark = $("input#new-landmark").val();
    var userNotes = $("input#new-notes").val();

    var newPlace = new myPlace(userLocation, userDate, userLandmark, userNotes);

    $("ul#places").append("<li><span class='myplace'>" + newPlace.myLocation + "</span></li>");

    $("input#new-location").val("");
    $("input#new-date").val("");
    $("input#new-landmark").val("");
    $("input#new-notes").val("");

    $(".myplace").last().click(function(){
      $("#show-place").show();
      $("#show-place h2").text(newPlace.myLocation);
      $(".location").text(newPlace.myLocation);
      $(".date").text(newPlace.myDate);
      $(".landmark").text(newPlace.myLandmark);
      $(".notes").text(newPlace.myNotes);

    })
  })

})
