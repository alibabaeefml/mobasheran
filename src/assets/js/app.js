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



//tab list page useraccount

$(document).ready(function() {
    function changeTab(tab) {
    
        $('.tab').removeClass('active');
        $('.content').removeClass('active');

        $(tab).addClass('active');
        $('.content[data-tab="' + $(tab).data('tab') + '"]').addClass('active');
    }

    $('.tab').click(function() {
        changeTab(this);
    });
});



//change tab in page test

var arryTab = [];
var tabs = $('.tab-test');
var contentTabs = $('.content-test');
var nextIcons = $('.next-icon');
var privIcons = $('.priv-icon');

tabs.on('click', function(e) {
    var resultTab = $(this).data('tab');
    showContentTab(resultTab);
    arryTab = resultTab;
});

function showContentTab(resultTab) {
    contentTabs.each(function() {
    
        $(this).addClass('d-none');
        if (resultTab == $(this).data('tab')) {
            $(this).removeClass('d-none');
        }
    });
}

nextIcons.on('click', function() {
    arryTab++;
    if (arryTab > 10) {
        arryTab = 1;
    }
    tabs.removeClass('tab-active');
    tabs.each(function() {
        if (arryTab == $(this).data('tab')) {
            $(this).addClass('tab-active');
        }
    });
    showContentTab(arryTab);
});

privIcons.on('click', function() {
    arryTab--;
    if (arryTab < 1) {
        arryTab = 10;
    }
    tabs.removeClass('tab-active');
    tabs.each(function() {
        if (arryTab == $(this).data('tab')) {
            $(this).addClass('tab-active');
        }
    });
   showContentTab(arryTab);
});



//   $('.timer').startTimer();

//   $(document).ready(function(){
//     $(".scroll-top i").click(function(){
//       $("body,html").animate({scrollTop: 0},1000);
//     });
//   });

//   Fancybox.bind("[data-fancybox]", {});
  


//add icons menu right panel
const shapes=document.querySelectorAll('.shapes')

shapes.forEach(shape=>{
    shapes[1].classList.add('shape-institutes')
    shapes[2].classList.add('shape-library')
    shapes[3].classList.add('shape-edit-useraccount')
    shapes[4].classList.add('shape-request')
    shapes[5].classList.add('shape-exit')
})


// $('.shapes').each(function(shape) {
//     var shape1=$(".shapes")[1]
//     shape1.addClass('shape-institutes')
// })