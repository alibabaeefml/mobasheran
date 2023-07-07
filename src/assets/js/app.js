// animate on scroll
AOS.init({
    
})

// sidebar
$('#open_sidebar_btn').click(() => {
    $('#sidebar').animate({ right: '0' }, () => $('#sidebar').addClass('active'));
});
$('#close_sidebar_btn').click(() => {
    $('#sidebar').removeClass('active');
    $('#sidebar').animate({ right: '-100%' });
});
$('#sidebar').click((e) => {
    if (e.target.id == 'sidebar') {

        $('#sidebar').removeClass('active');
        $('#sidebar').animate({ right: '-100%' })
    }
});

// tab
$('.tabs-stage div').hide();
$('.tabs-stage div:first').show();
$('.tabs-nav li:first').addClass('tab-active');

$('.tabs-nav a').on('click', function(event){
  event.preventDefault();
  $('.tabs-nav li').removeClass('tab-active');
  $(this).parent().addClass('tab-active');
  $('.tabs-stage div').hide();
  $($(this).attr('href')).show();
});