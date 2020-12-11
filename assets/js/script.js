$(document).ready(function(){

        $('#number-val').on('change', function () {
            $('.val-show').val($(this).children("option:selected").val());
        });

        $('.add-btn').click(function(){
            var conn = $(this).attr('span-attr');
            var val = $('.pro-num-input[input-attr="'+conn+'"]').val();
            $('.pro-num-input[input-attr="'+conn+'"]').val(parseInt(val) + 1);
            if( val + 1 >= 1){
                $('.date-box').show();
              }
          });
          $('.min-btn').click(function(){
            var conn = $(this).attr('span-attr');
            var val = $('.pro-num-input[input-attr="'+conn+'"]').val();
            if( val > 1){
              $('.pro-num-input[input-attr="'+conn+'"]').val(parseInt(val) - 1);
            }
          });

});