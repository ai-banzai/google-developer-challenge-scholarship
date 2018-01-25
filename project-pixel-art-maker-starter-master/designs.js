// Select color input
let color="#000000";
$("#colorPicker").change(function(){
  color=this.value;
})

// Select size input
let height=1;
$("#inputHeight").change(function(){
  height=this.value;
})

let width=1;
$("#inputWidth").change(function(){
  width=this.value
})

// When size is submitted by the user, call makeGrid()
$("#submit").click(function(){makeGrid()});

function makeGrid() {

// Your code goes here!
console.log("submitted: " + height + ", " + width);
}
