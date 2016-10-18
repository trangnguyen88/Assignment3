
var main=function(){

};

var retrieveAverage = function() {
    var nums = { numbers : $(".excersice1 input").val().split(",").map(Number) };
    $.post('http://localhost:3000/average', nums, function(res) {
	average = res.result;        
	console.log(res.result);
        alert(res.result);
       
    })
   
};

var theLargest = function() {
    var nums = { numbers : $(".excersice2 input").val().split(",").map(Number) };
    $.post('http://localhost:3000/largestNumber', nums, function(res) {
	largestNumber = res.result;        
	console.log(res.result);
        alert(res.result);
       
    })
   
};

var atLeastOneEven=function(){
	var nums = { numbers : $(".excersice3 input").val().split(",").map(Number) };
   	 $.post('http://localhost:3000/oneEven', nums, function(res) {
	oneEven = res.result;        
	console.log(res.result);
        alert(res.result);
       
    })
};

var allAreEven=function(){
	var nums = { numbers : $(".excersice4 input").val().split(",").map(Number) };
   	 $.post('http://localhost:3000/noOdd', nums, function(res) {
	noOdd = res.result;        
	console.log(res.result);
        alert(res.result);
       
    })
};

var stringFound=function(){
	var nums = { mainString : $(".ex5").val().split(",") , searchString : $(".ex51 ").val() };
   	 $.post('http://localhost:3000/isStringFound', nums, function(res) {
	isStringFound = res.result;     
	console.log(res.result);
        alert(res.result);
       
    })
};

var stringFoundNTimes=function(){
	var nums = { mainString : $(".ex6").val().split(",") , searchString : $(".ex61 ").val(),numbers: $(".ex62").val() };
   	 $.post('http://localhost:3000/stringFoundNTimes', nums, function(res) {
	isStringFound = res.result;     
	console.log(res.result);
        alert(res.result);
       
    })
};

$(document).ready(main);
