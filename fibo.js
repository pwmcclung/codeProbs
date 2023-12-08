// // function fiboEvenSum(n){
// //     let sum = 0;
// //     let arr = fiboMaker(n);
// //     for (let i = 0; i < arr.length; i++){
// //         if (arr[i] % 2 === 0){
// //             sum += arr[i];
// //         }
// //     }
// //     return sum;
// // }

// function fiboMaker(n){
//     let answer = [];
//     let x = 0;
//     let y = 1;
//     let z;
//     answer.push(x);
//     answer.push(y);
//     let i = 2;
//     while ( i <=n){
//         z = x + y;
//         x = y;
//         y = z;
//         answer.push(z);
//         i = i + 1;
//     }
//     let newArr = []
//     for (let i = 0; i < answer.length; i++){
//         if ( answer[i] < n){
//             newArr.push(answer[i]);
//         }
//     }
//     console.log(newArr)
// }

// // console.log(fiboEvenSum(8))
// // console.log(fiboEvenSum(10))
// // console.log(fiboEvenSum(34))
// // console.log(fiboEvenSum(60))

// console.log(fiboMaker(

// function largestPrimeFactor(number){
//     let arr2 = [];
//     let num = 1;
//     while ( num <= number){
//        if (primeFinder(num)){
//         arr2.push(num);
//        }
//        num++;
//     }
//     console.log(arr2);
// }

// function primeFinder(n){
//     for (let i = 2; i < n; i++){
//         if (n % i  === 0) return false;
        
//     };
//     return n;
// }
function largestPrimeFactor(n){
    let maxPrime = -1;
    while (n % 2 === 0){
        n = n / 2;
        maxPrime = 2;
    }
    while (n % 3 === 0){
        n = n / 3;
        maxPrime = 3;
    }
    for (let i = 5; i <=Math.sqrt(n); i += 6){
        while( n % i === 0){
            maxPrime = i;
            n = n / i;
        }
        while ( n % ( i + 2) === 0){
            maxPrime = i + 2;
            n = n / (i+2);
        }
    }
    return n > 4 ?n : maxPrime;
}
console.log(largestPrimeFactor(13195))