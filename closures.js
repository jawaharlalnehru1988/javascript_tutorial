// function outerFunction(){
//     let textValue = "I am outer function";

//     function innerFunction(){
//         console.log(textValue);
//     }
    
//     return innerFunction;
// }

// const closureFunction = outerFunction();
// closureFunction();


// function counter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
        
//     }
// }

// const increment = counter();
// increment();
// increment();
// increment();


// for(let i = 0; i < 10; i++){
 
//         setTimeout(function(){
//             console.log(i);
//         }, 1000);

  
// }


// for(var i = 0; i < 10; i++){
//     (function(j){
//         setTimeout(function(){
//             console.log(j);
//         }, 1000);
//     })(i);
  
// }


function multiplier(x){
    return function(y){
        return x * y;
    }
}

const double = multiplier(2);
console.log(double(5));


