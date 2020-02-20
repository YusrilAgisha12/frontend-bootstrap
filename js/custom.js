$('#daftar').on('show.bs.modal', function(event){
    var button = $(event.relatedTarget);
    var paket = button.data('paket');//Basic, Medium, Expert

    var modal = $(this);
    modal.find('modal-title').text('Form Pendaftaran Paket '+paket);
    modal.find('.modal-body #nama-paket').val(paket);
})

$(function(){
    $('a[href*="#"]').on('click', function(event){
      event.preventDefault();

      var menu = $(this);
      $('html, body').animate({
        scrollTop : $(menu.attr('href')).offset().top
      }, 400);
    });
  });