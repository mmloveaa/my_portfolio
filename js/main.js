$(document).ready(function() {
    // $("#mypic").mouseenter(function() {
    //     $("#mypic").attr("src","img/profile.png");
    // });
    $("#mypic").mouseleave(function() {
        $("#mypic").attr("src","img/Superpic.jpg");
    });
});

var hideModal = function() {
    modalContainer.removeClass('show')
    // modalContainer.hide();
  };

  var showModal = function() {
    modalContainer.addClass('show')
    // modalContainer.show();
  };

  var showModalButton = $('#modal-show');
  (showModalButton).on('click', showModal)

  var closeModalButton = $('#modal-hide');
  closeModalButton.on('click', hideModal);


  var submitEmail = function(evt){
   var thankYouNote = $('#email-header');
   var thankYouNoteForm = $('#email-signup');
   thankYouNoteForm.hide();
   thankYouNote.text("Thanks!")
   setTimeout(hideModal, 2000);
 };

 var emailForm = $('#email-signup');
 emailForm.on('submit', submitEmail)
