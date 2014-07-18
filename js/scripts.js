
$(document).ready(function() {
document.forms['sides-input'].elements['side-one'].focus()
  $("form#sides-input").submit(function(event) {

    event.preventDefault();
    var inputtedSideOne = parseInt($("#side-one").val());
    var inputtedSideTwo = parseInt($("#side-two").val());
    var inputtedSideThree = parseInt($("#side-three").val());
    var triangleSides = {
      sideOne:  inputtedSideOne,
      sideTwo:  inputtedSideTwo,
      sideThree: inputtedSideThree,
      triangleCheck: function() {

        if (((this.sideOne + this.sideTwo) > this.sideThree) && ((this.sideTwo + this.sideThree) > this.sideOne) && ((this.sideThree + this.sideOne) > this.sideTwo) ) {
           console.log("Test passed: Valid triangle");
           //do not return anything here.
           if (this.sideOne === this.sideTwo && this.sideTwo === this.sideThree) {
              console.log("Triangle type: equilateral");

              return $("#equil-triangle").append("<li>" + this.sideOne + ", " + this.sideTwo + ", " + this.sideThree + "</li>");

          } else if ( (this.sideOne === this.sideTwo) || (this.sideOne === this.sideThree) || (this.sideTwo === this.sideThree) ) {
              console.log("Triangle type: Isosceles");

              return $("#isos-triangle").append("<li>" + this.sideOne + ", " + this.sideTwo + ", " + this.sideThree + "</li>");
          } else {
              console.log("Triangle type: Scalene");

              return $("#scal-triangle").append("<li>" + this.sideOne + ", " + this.sideTwo + ", " + this.sideThree + "</li>");
          } //end the loop for type of triangle
        } else {
          console.log("Test Failed: Invalid triangle");

          return "invalid triangle";
        } // this ends if it is a triangle
      } // this ends the function
    }; //this ends var for object

    triangleSides.triangleCheck()

  });

$("#reset-text").click(function() {
        document.forms['sides-input'].elements['side-one'].focus();
    });

});
