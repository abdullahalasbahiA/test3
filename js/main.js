/*global $, window*/
$(function () {
  'use strict';
  
  //Adjust Slider Height
  var windowHeight = $(window).outerHeight(),
    upperHeight  = $(".upper-bar").innerHeight(),
    navHeight    = $(".navbar").innerHeight();
  $('.slider, .d').height(windowHeight - (upperHeight + navHeight));
  $('.testimonial-carousel').height(500);
  
  //Featured Work Shuffle
  $('.featured-work ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.shuffle-images .col-sm').css('opacity', 1);
    } else {
      $('.shuffle-images .col-sm').css('opacity', '.08');
      $($(this).data('class')).parent().css('opacity', 1);
    }
  });
  
  //Fit Text
  $(".carousel-header").fitText(0.7, {
    maxFontSize: "50px"
  });
  
  
  $(".company-overview-header").fitText(0.7, {
    minFontSize: "30px",
    maxFontSize: "50px"
  });
  
  $(".featured-work-header").fitText(0.7, {
    minFontSize: "10px",
    maxFontSize: "50px"
  });
  
  $(".latest-post-header").fitText(0.7, {
    minFontSize: "10px",
    maxFontSize: "50px"
  });
  
  $(".pricing-table-header").fitText(0.7, {
    minFontSize: "10px",
    maxFontSize: "50px"
  });
  
  
});
















