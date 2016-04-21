function animateContactMe()
{
  $('.contactMeSection').slideToggle("slow",function(){});
  $('html,body').animate({ scrollTop: 9999 }, 'slow');
}
