
var express = require("express");
var http = require("http");
var parser = require("body-parser");
var app = express();
app.use(express.static(__dirname + '/client'));

app.use(parser.json());
app.use(parser.urlencoded({extened: true}));
http.createServer(app).listen(3000);
console.log('server is listening on port 3000');

app.post("/average",
  function(req,res){
     console.log("Request Received :" + req.body.numbers);
     var result = average(req.body.numbers);
     var reply = { 'result': result };
     res.json(reply);	
     console.log("Result :" + result + " sent back");
  }
);
app.post("/largestNumber",
  function(req,res){
     console.log("Request Received :" + req.body.numbers);
     var result = largestNumber(req.body.numbers);
     var reply = { 'result': result };
     res.json(reply);	
     console.log("Result :" + result + " sent back");
  }
);
app.post("/oneEven",
  function(req,res){
     console.log("Request Received :" + req.body.numbers);
     var result = oneEven(req.body.numbers);
     var reply = { 'result': result };
     res.json(reply);	
     console.log("Result :" + result + " sent back");
  }
);
app.post("/noOdd",
  function(req,res){
    console.log("Request Received :" + req.body.numbers);
     var result = noOdd(req.body.numbers);
    var reply = { 'result': result };
     res.json(reply);	
    console.log("Result :" + result + " sent back");
  }
);

app.post("/isStringFound",
  function(req,res){
     console.log("Request Received :" + req.body.mainString + " search string : " + req.body.searchString);
     var result = checkAvailability(req.body.mainString,req.body.searchString);
     var reply = { 'result': result };
     res.json(reply);	
     console.log("Result :" + result + " sent back");
  }
);
app.post("/stringFoundNTimes",
  function(req,res){
     console.log("Request Received :" + req.body.mainString + " search string : " + req.body.searchString+" Number of times: "+req.body.numbers);
     var result = checkStringNTimes(req.body.mainString,req.body.searchString,req.body.numbers);
     var reply = { 'result': result };
     res.json(reply);	
     console.log("Result :" + result + " sent back");
  }
);

var average=function(nums){
        console.log("Calculating Average for numbers " + nums);
    
	var sum=0;
	var averageCal,i;
	
	for(i=0;i<nums.length;i++)
	{
          sum=sum +parseInt( nums[i]);
        }
        
	averageCal=sum/(nums.length);
        return averageCal;
};

var largestNumber=function(nums){
	var largest;
	largest=nums[0];
	var i;
	for(i=0;i<nums.length;i++)
	{
		if(nums[i]>largest)
		{
			largest=nums[i];		
		}
	}
	return largest;
};

var oneEven = function (nums) {
   return nums.some(atLeastOneEven);
}
function atLeastOneEven(value){
	return (value%2==0);
}
var noOdd=function(nums){
	return nums.every(allEven);
};
function allEven(value){
	return (value%2==0);
}


function checkAvailability(arr, val) {
    for(i=0;i<arr.length;i++){
        if(arr[i] == val)
         return true;
    }
    return false;
}

function checkStringNTimes(arr,val,num){
	var count=0,
	    i;
	for(i=0;i<arr.length;i++){
		if(arr[i]==val){count++;}
	}
	if (count==num){return true;}
	else{return false;}
}
