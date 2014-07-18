$(document).ready(function() {
  $("form#sides-input").submit(function(event) {
    event.preventDefault();
    var sideOne = $("#input-one").val();
    var sideTwo = $("#input-two").val();
    var sideThree = $("#input-three").val();
    var allSides = [sideOne, sideTwo, sideThree];
    allSides.sort();

    if (allSides[0] + allSides[1] <== allSides[2]) {
      alert('That will not form a triangle. Please try again.');
    }
    else {
      var newTriangle = { firstSide: allSides[0],
                          secondSide: allSides[1],
                          thirdSide: allSides[2],
                          triangleType: function() {
                            if (this.firstSide === this.secondSide &&
                                this.secondSide === this.thirdSide){
                              return "equilateral";
                            }
                            else if (this.firstSide === this.secondSide ||
                                     this.secondSide === this.thirdSide || this.firstSide === this.thirdSide){
                              return "isoceles";
                            }
                            else {
                              return "scalene";
                            }
                          }
                        };
    }
  });

});
