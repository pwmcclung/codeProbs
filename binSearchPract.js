// this is a walkthrough of a function expression that 
// performs binary search
// binary search is an effiecient algo that
// finds an element in a sorted array or returns -1
// this is a function expression that takes to parameters, an array and a target value
var doSearch = function(array, targetValue) {
    // in binary search you first establish a smallest value and a larget value
    // min is the smallest value and it is at index 0
	var min = 0;
    // max is the largest value and it is at the end of the array
	var max = array.length - 1;
    //this initializes a guess variable
    var guess;
    // we use a while loop to go from the smallest to the largest values
     while(min <= max){
        // this line of code places the value of the middle element as guess
        // this uses math.floor and min plus max divided by 2
        guess = Math.floor((min + max ) / 2);
        // if else conditional statements
        //if the item of array at the guess element is the target value
        //return guess
        if(array[guess]===targetValue){ return guess;  }
        //else if the element at the guess element is less than the target value, min is set to 
        // being equal to guess plus 1
        else if(array[guess]< targetValue){ min = guess + 1;}
        //else if guess is greater that target value,
        // max is set to being guess minus one
        else{ max = guess - 1; }
        
    }
    //at the end of teh while loop if the target is not found, we return -1
    return -1;
};


var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = doSearch(primes, 73);
println("Found prime at index " + result);