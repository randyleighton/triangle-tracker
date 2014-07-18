
$(document).ready(function() {

  $("form#sides-input").submit(function(event) {

    event.preventDefault();
    var inputtedSideOne = parseInt($("#side-one").val());
    var inputtedSideTwo = parseInt($("#side-two").val());
    var inputtedSideThree = parseInt($("#side-three").val());

    var triangleTypes = {
      equilateral: [],
      isosceles: [],
      scalene: []
    };

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

              return "equilateral";

          } else if ( (this.sideOne === this.sideTwo) || (this.sideOne === this.sideThree) || (this.sideTwo === this.sideThree) ) {
              console.log("Triangle type: Isosceles");

              return "isosceles";
          } else {
              console.log("Triangle type: Scalene");

              return "scalene";
          } //end the loop for type of triangle
        } else {
          console.log("Test Failed: Invalid triangle");

          return "invalid triangle";
        } // this ends if it is a triangle
      } // this ends the function
    }; //this ends var for object

    triangleSides.triangleCheck()
  });
});
