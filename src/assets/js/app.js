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

//play video
$(".play-teaser").click(function(){
  $('.video-container').get(0).play();
  $(".video-container").attr("controls",true);
  $(".play-teaser").addClass('d-none')

});

$(".save").click(function(event){
    event.preventDefault();
    $(".save i").toggleClass('bi-bookmark')
    $(".save i").toggleClass('bi-bookmark-fill')
})


//menubar right

$(".menubar-right").click(function(){
    $(".menubar-right").toggleClass('d-none')
    $(".menu-right").toggleClass('d-block')
})

$(".close-right").click(function(){
    $(".menu-right").toggleClass('d-block')
})



//tab show
$(".list-tab .shape1").each(function(){
    $(this).click(function(event){
        $(".list-tab .shape1").each(function(){
            $(".list-tab .shape1").css({ WebkitTransform: 'rotate(-45deg)'});
        })
        $(this).toggleClass("rotateClass");
        $(event.target).parent().parent().parent().children().eq(1).toggleClass('d-none')
    })
})


