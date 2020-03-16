$(document).ready(function(){
  initMenu();
});

function initMenu() {

$('#ulmenu ul').hide();
$('#ulmenu ul:eq(1)').show();

$('#ulmenu li a').click(
  function() {
    var iselemnt = $(this).next();
    if((iselemnt.is('ul')) && (iselemnt.is(':visible'))) {
      return false;
    }

    if((iselemnt.is('ul')) && (!iselemnt.is(':visible'))) {
      $('#ulmenu ul:visible').slideUp('normal');
      iselemnt.slideDown('normal');
      return false;
    }
  }
);

}