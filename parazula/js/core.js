$(document).ready(function() {
  'use strict';

  $('.form-item-step button.next').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.form-item-step').next().addClass('active');
    $(this).parents('.form-item-step').removeClass('active');
  })
;
  $('.form-item-step .prev-btn').on('click', function(e) {
    e.preventDefault();
    $(this).parents('.form-item-step').prev().addClass('active');
    $(this).parents('.form-item-step').removeClass('active');
  });


  $('.bi-files').click(function(){
      var x = $(this).prev()[0].outerText;
      if(x.length > 0){
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(x).select();
        document.execCommand("copy");
        $temp.remove();
        Swal.fire({
          title: x +" <span> kopyalandı.</span>",
          showConfirmButton: false,
          timer:3000
        })
      }
  });

  $('.money').mask("#.##0", {reverse: true});
  $('.phone').mask('(000) 000 00 00');
  $(".jpa input").jqueryPincodeAutotab();

})