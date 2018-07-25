// //Counter
// console.log('-----Counter-----')

// function counter () {
//     var count = 0;
//     var sCount = function () {
//       count++;
//       console.log(count);
//     }
//     return sCount;
//   }

//   var count1 = counter();
//   var count2 = counter();

//   count1();
//   count1();
//   count2();
//   count2();
//   count1();

// //Counter 2
// console.log('-----Counter 2-----')

// function counter (num) {
// var sCount = function () {
//     num++;
//     console.log(num);
// }
// return sCount;
// }

// var count1 = counter(3);
// var count2 = counter(9);

// count1();
// count2();


//Counter 3
console.log('-----Counter 3-----')

function counter (num) {
    var obj = {increment: function(){
        num++;
        console.log(num);
    }, decrement: function(){
        num--;
        console.log(num);
    }}
    return obj;
    }
   


var count5 = counter(3);
count5.increment();



 