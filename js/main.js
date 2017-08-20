// function Animal() {
//   this.name = "Animal";
//
//   this.toString = function() {
//     return "My name is " + this.name;
//   }
// }
//
// function Feline() {
//   this.name = "Feline";
// }
//
// function Cat() {
//   this.name = "Cat";
// }
//
// // Set object inheritance relationship
// Feline.prototype = new Animal();
// Cat.prototype = Feline.prototype;
//
// // Constructor are reset, so need to set them back
// Feline.prototype.constructor = Feline;
// Cat.prototype.constructor = Cat;
//
// var siameseCat = new Cat();
//
// document.write(siameseCat.toString(), "<br />");
//
// Cat.prototype.sound = "Meow";
//
// document.write(siameseCat.sound);
window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

$('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

jQuery(document).ready(function(){
  var offset = 250;
  var duration = 500;

  jQuery(window).scroll(function(){
    if(jQuery(this).scrollTop() > offset){
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });

  jQuery('.back-to-top').click(function(event){
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  });

  new WOW().init();

  $(document).ready(function(){
    var first = true;
    var $progressbars = $(".progress-bar");
    var $j2ee = $('.skills-j2ee');
    var $webdev = $('.skills-webdev');
    var $sql = $('.skills-sql');
    var $misc = $('.skills-misc');
    var $tools = $('.skills-tools');

    function loadAllBars(elem){
      elem.each(function(){
        var $el = $(this);
        var origWidth = $el.width();
        $el.width(0);
        $el.animate({width: origWidth}, 1000);
      });
    }

    $(document).bind('scroll', function(ev){
      var scrollOffset = $(document).scrollTop();
      var containerOffset = $("#skills").offset().top - window.innerHeight + 300;
      if(scrollOffset > containerOffset){
        $webdev.hide();
        $sql.hide();
        $misc.hide();
        $tools.hide();
        $j2ee.show();
        loadAllBars($(".skills-j2ee .progress-bar"));
        $(document).unbind('scroll');
      }
    })

    $('#btn-j2ee').click(function(){
      if (!$j2ee.is(':visible')) {
        $webdev.hide();
        $sql.hide();
        $misc.hide();
        $tools.hide();
        $j2ee.show();
        $('#btn-j2ee').addClass("btn-selected");
        $('#btn-webdev').removeClass("btn-selected");
        $('#btn-sql').removeClass("btn-selected");
        $('#btn-misc').removeClass("btn-selected");
        $('#btn-tools').removeClass("btn-selected");
        loadAllBars($(".skills-j2ee .progress-bar"));
      }
    })

    $('#btn-webdev').click(function(){
      if (!$webdev.is(':visible')) {
        $sql.hide();
        $misc.hide();
        $tools.hide();
        $j2ee.hide();
        $webdev.show();
        $('#btn-j2ee').removeClass("btn-selected");
        $('#btn-webdev').addClass("btn-selected");
        $('#btn-sql').removeClass("btn-selected");
        $('#btn-misc').removeClass("btn-selected");
        $('#btn-tools').removeClass("btn-selected");
        loadAllBars($(".skills-webdev .progress-bar"));
      }
    })

    $('#btn-sql').click(function(){
      if (!$sql.is(':visible')) {
        $misc.hide();
        $tools.hide();
        $j2ee.hide();
        $webdev.hide();
        $sql.show();
        $('#btn-j2ee').removeClass("btn-selected");
        $('#btn-webdev').removeClass("btn-selected");
        $('#btn-sql').addClass("btn-selected");
        $('#btn-misc').removeClass("btn-selected");
        $('#btn-tools').removeClass("btn-selected");
        loadAllBars($(".skills-sql .progress-bar"));
      }
    })

    $('#btn-misc').click(function(){
      if (!$misc.is(':visible')) {
        $tools.hide();
        $j2ee.hide();
        $webdev.hide();
        $sql.hide();
        $misc.show();
        $('#btn-j2ee').removeClass("btn-selected");
        $('#btn-webdev').removeClass("btn-selected");
        $('#btn-sql').removeClass("btn-selected");
        $('#btn-misc').addClass("btn-selected");
        $('#btn-tools').removeClass("btn-selected");
        loadAllBars($(".skills-misc .progress-bar"));
      }
    })

    $('#btn-tools').click(function(){
      if (!$tools.is(':visible')) {
        $j2ee.hide();
        $webdev.hide();
        $sql.hide();
        $misc.hide();
        $tools.show();
        $('#btn-j2ee').removeClass("btn-selected");
        $('#btn-webdev').removeClass("btn-selected");
        $('#btn-sql').removeClass("btn-selected");
        $('#btn-misc').removeClass("btn-selected");
        $('#btn-tools').addClass("btn-selected");
        loadAllBars($(".skills-tools .progress-bar"));
      }
    })
  })
});
