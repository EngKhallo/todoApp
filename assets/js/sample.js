var addbtn = document.querySelector(".btn");
//function for adding
function add(num1, num2, result) {
  return (result.innerHTML = parseInt(num1) + parseInt(num2));
}

//btn click functionality
addbtn.addEventListener("click", function () {
  var number1 = document.querySelector(".num1").value;
  var number2 = document.querySelector(".num2").value;
  var resultOutput = document.querySelector(".result");
  add(number1, number2, resultOutput);
  var sum = add(number1, number2, resultOutput);
  console.log(sum * 2);
});

var subbtn = document.querySelector(".subbtn");
// function
function subfunc(num1, num2, result) {
  return (result.innerHTML = parseInt(num1) - parseInt(num2));
}

subbtn.addEventListener("click", function () {
  var numb1 = document.querySelector(".nums1").value;
  var numb2 = document.querySelector(".nums2").value;
  var output = document.querySelector(".results");
  subfunc(numb1, numb2, output);
});

var multbtn = document.querySelector(".multbtn");
function multfunc(num1, num2, result) {
  return (result.innerHTML = parseInt(num1) + parseInt(num2));
}

multbtn.addEventListener("click", function(){
    
})
