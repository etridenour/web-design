

$(function() {

  
    $.get('/api', function(data){
      updateFeedback(data);
    });
  
    $('#feedbackForm').submit(function(e){
      e.preventDefault();
  
      $.post('/api', {
        name: $('#name').val(),
        faveDrum: $('#faveDrum').find(":selected").text(),
        formText: $('#formText').val(),
      }, updateFeedback)
    })

    $('.feedback-messages').on('click', function(e) {
        console.log(e.target.className);
        if (e.target.className == 'glyphicon glyphicon-remove') {
          $.ajax({
            url: 'api/' + e.target.id,
            type: 'DELETE',
            success: updateFeedback
          }); //ajax
        } // the target is a delete button
    }); //feedback messages
  
    function updateFeedback(data) {
     var output = '';
     $.each(data,function(key, item) {
       output += '     <div class="feedback-item item-list media-list">';
       output += '       <div class="feedback-item media">';
       output += '       <div class="media-left"><button id="deleteButton" class="feedback-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove">X</span></button></div>';
       output += '         <div class="feedback-info media-body">';
       output += '           <div class="feedback-head">';
       output += '             <div class="feedback-title"> <small class="feedback-name label label-info">User: ' + item.name + '</small></div>';
       output += '           </div>';
       output += '           <div class="feedback-message">' + item.formText + '</div>';
       output += '           <div class="feedback-message">Favorite Drummer: ' + item.faveDrum + '</div>';
       output += '         </div>';
       output += '       </div>';
       output += '     </div>';
       console.log(key);
     });
     $('.feedback-messages').html(output);
    }
  });