$(document).ready(function () {
  $('.modal').modal();
});

window.onload = function () {
  var array = [
    "I would like to be in bedding forever if I can :D",
    "I wish I could get the money without working :D",
    "I would like to have a weekly holiday 8 :)",
    "I feel longing for the life that only eats and sleeps... :)",
    "Start seriously next year :D",
    "The goal of this year is not catching a cold.",
    "Let's do tomorrow what I can do tomorrow :D",
    "I hope for a world where everyone can live happily :)",
    "I just want to be a human being who is just playing games.",
    "This is fine :D",
    "I am going to go to sleep today wishing that I get rich when I get up :D",
    "By the time I come to work I have someone who wants to go home already :)"
  ];
  var msg = array[Math.floor(Math.random() * array.length)];
  $(".top-msg").text(msg);
}

$(function () {
  'use strict';

  $('a[href^=#]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// $(function () {
//   setTimeout(function () {
//     $('.image').addClass('hide');
//   }, 2000);
// });