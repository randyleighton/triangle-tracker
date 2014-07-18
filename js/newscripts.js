$(document).ready(function() {

  $("form#sides-input").submit(function(event) {

    event.preventDefault();
    var inputtedSideOne = $("#side-one").val();
    var inputtedSideTwo = $("#side-two").val();
    var inputtedSideThree = $("#side-three").val();

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
        var a = this.sideOne;
        var b = this.sideTwo;
        var c = this.sideThree;

        if ( (a<(b+c)) && (b<(a+c)) && (c<(a+b)) ) {
            if ( (a==b)&&(a==c)&&(b==c) ) {
              triangleTypes.equilateral.push(triangleSides);
              console.log("this is equilateral");
            } else if ( (a==b)||(a==c)||(b==c) ){
              triangleTypes.isosceles.push(triangleSides);
              console.log("this is isosceles");
            } else if ( (a!=b)&&(a!=c)&&(b!=c) ){
              triangleTypes.scalene.push(triangleSides);
              console.log("this is scalene");
            }
        } else {
          console.log("not an option");
        }
      }
    };
    triangleSides.triangleCheck()


  });
});







var triangle = {
  // sideOne:  inputtedSideOne,
  // sideTwo:  inputtedSideTwo,
  // sideThree: inputtedSideThree,
  triangleCheck: function() {
    if (((this.sideOne + this.sideTwo) > this.sideThree) && ((this.sideTwo + this.sideThree) > this.sideOne) && ((this.sideThree + this.sideOne) > this.sideTwo) ) {
      // this is testing to see if it IS a triangle.
       console.log("This IS a triangle");
       // return "Is a Triangle";

       if (this.sideOne === this.sideTwo && this.sideTwo === this.sideThree) {
          console.log("The triangle is: equilateral");
          // triangleTypes.equilateral.push(triangleSides);
          return "equilateral";

      } else if ( (this.sideOne === this.sideTwo) || (this.sideOne === this.sideThree) || (this.sideTwo === this.sideThree) ) {
          console.log("The triangle is: isoceles");
          // triangleTypes.isosceles.push(triangleSides);
          return "isosceles";
      } else {
          // triangleTypes.scalene.push(triangleSides);
          console.log("The triangle is: scalene");
          return "scalene";
      } //end the loop for type of triangle
    } else {
      console.log("Not an option");
      return "not a triangle"
    } // this ends if it is a triangle
  } // this ends the function
}
