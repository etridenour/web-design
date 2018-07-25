// document.querySelectorAll('img').addEventListener('click', function(e){

//     console.log(e);
    // if(e.target.tagName == 'IMG'){
    //   alert('picture time');
    // }
// })

// var myImg = document.querySelectorAll('img');

// console.log(myImg);

// myImg.forEach(function(singleImg){

//     singleImg.addEventListener('click', function(e){
//         console.log(e);
//     })
// })

//  myImg[0].addEventListener('click', function(e){
//      console.log(e);

//  })



// var myImg = document.querySelector(".row");
// console.log(myImg);

// var asOver = document.querySelector('.as');
// asOver.addEventListener('mouseover',function(e){
//     e.target.className = 'as1';
// })

// var asOff = document.querySelector('.as');
// asOff.addEventListener('mouseout',function(e){
//     e.target.className = ''
// })

// var adOver = document.querySelector('.ad');
// adOver.addEventListener('mouseover',function(e){
//     e.target.className = 'as1';
// })

// var adOff = document.querySelector('.ad');
// adOff.addEventListener('mouseout',function(e){
//     e.target.className = '';
// })

// var bbOver = document.querySelector('.bb');
// bbOver.addEventListener('mouseover',function(e){
//     e.target.className = 'as1';
// })

// var bbOff = document.querySelector('.bb');
// bbOff.addEventListener('mouseout',function(e){
//     e.target.className = '';
// })


var imgClick = document.querySelectorAll("img");

imgClick.forEach(function(img){

    img.addEventListener('click',function(e){
        // e.target.className = 'bigPic';

        console.log(e.target.src);

         var bigPic = document.querySelectorAll(".bigPic");
        bigPic[0].src = e.target.src;

        // bigPic[0].src


    })
})




// addEventListener('click', function(e){
//     if(e.target.tagName == 'IMG'){
//         imgClick.scr='as.jpg'
//         e.target.className = 'bigPic';
//     }
// })


// myImg.addEventListener('mouseover', function(e){
//     if(e.target.tagName == 'IMG'){

//         e.target.className = ""
//         console.log(e);
//     }
// })


// myImg.addEventListener('mouseout', function(e){
//     if(e.target.tagName == 'IMG'){

//         e.target.className = ""
//         console.log(e);
//     }
// })

// myImg.forEach(function(singleImg){

//     singleImg.addEventListener('click', function(e){
//         console.log(e);
//     })
// })