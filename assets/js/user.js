$(document).ready(function() {
  $('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas').toggleClass('active');
  });
    $("#create_user").validate({
    rules:{
        name:{
        required:true
        },
        email:{
        required:true,
        email:true},
        age:{
        required:true,
        number:true
        }
    }
    });
});


