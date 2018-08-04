$(function(){

    returnArray = [1,2,3,4];

    var itemBar= $('<select>');
    $('#list').html(itemBar);
    console.log(returnArray);
    returnArray.forEach(function (e){
        // listName = e.name;
        let $printArray= $('<option>', {
        'text': e
        });
        $(itemBar).append($printArray);
    })

})