

window.onload = function() {
  $('header').load('ajax/nav.html');


  
  var $recaptcha = document.querySelector('#g-recaptcha-response');

  if($recaptcha) {
    $recaptcha.setAttribute("required", "required");
  }
};



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  var hidden = false;
  if(hidden) {
   $("#container-carousel").show();
 }
 else {
   $("#container-carousel").hide();	
   hidden = true;
 }
}



function checkScrollBar() {
    var hContent = $("body").height(); // get the height of your content
    var hWindow = $(window).height();  // get the height of the visitor's browser window

    // if the height of your content is bigger than the height of the 
    // browser window, we have a scroll bar
    if(hContent>=hWindow) { 
      $("#footer").css('position', 'absolute');    
    }

    return false;
  }



  $(document).ready(function () {
    if(window.location.href.indexOf("gracias") > -1) {
      setTimeout(function()  { location.replace('http://plan-pymes.com') }, 5000);
    }
  });


















  $(function() {

    $('#iconserv1').hover(function() {

      $('#iconserv1 path').css({fill: 'rgb(201, 92, 26)', transition: '0.25s'});

      $('.texto-servicio1').css({color: 'rgb(201, 92, 26)', transition: '0.25s'});

    }, function() {

    // on mouseout, reset the background colour

    $('#iconserv1 path').css({fill: '#FFF', transition: '0.25s'});

    $('.texto-servicio1').css({color: '#FFF', transition: '0.25s'});

  });

  });



  $(function() {

    $('#iconserv2').hover(function() {

      $('#iconserv2 path').css({fill: 'rgb(201, 92, 26)', transition: '0.25s'});

      $('#iconserv2 circle').css({fill: 'rgb(201, 92, 26)', transition: '0.25s'});

      $('.texto-servicio2').css({color: 'rgb(201, 92, 26)', transition: '0.25s'});

    }, function() {

    // on mouseout, reset the background colour

    $('#iconserv2 path').css({fill: '#FFF', transition: '0.25s'});

    $('#iconserv2 circle').css({fill: '#FFF', transition: '0.25s'});    

    $('.texto-servicio2').css({color: '#FFF', transition: '0.25s'});

  });

  });





  $(function() {

    $('#iconserv3').hover(function() {    

      $('#iconserv3 path').css({fill: 'rgb(201, 92, 26)', transition: '0.25s'});

      $('.texto-servicio3').css({color: 'rgb(201, 92, 26)', transition: '0.25s'});

    }, function() {

    // on mouseout, reset the background colour

    $('#iconserv3 path').css({fill: '#FFF', transition: '0.25s'});

    $('.texto-servicio3').css({color: '#FFF', transition: '0.25s'});

  });

  });



  $(function() {

    $('#iconserv4').hover(function() {    

      $('#iconserv4 path').css({fill: 'rgb(201, 92, 26)', transition: '0.25s'});

      $('.texto-servicio4').css({color: 'rgb(201, 92, 26)', transition: '0.25s'});

    }, function() {

    // on mouseout, reset the background colour

    $('#iconserv4 path').css({fill: '#FFF', transition: '0.25s'});

    $('.texto-servicio4').css({color: '#FFF', transition: '0.25s'});

  });

  });



  $(function() {

    $('#iconserv5').hover(function() {    

      $('#iconserv5 path').css({fill: 'rgb(201, 92, 26)', transition: '0.25s'});

      $('.texto-servicio5').css({color: 'rgb(201, 92, 26)', transition: '0.25s'});

    }, function() {

    // on mouseout, reset the background colour

    $('#iconserv5 path').css({fill: '#FFF', transition: '0.25s'});

    $('.texto-servicio5').css({color: '#FFF', transition: '0.25s'});

  });

  });



  $(function() {

    $('#iconserv6').hover(function() {    

      $('#iconserv6 path').css({fill: 'rgb(201, 92, 26)', transition: '0.25s'});

      $('.texto-servicio6').css({color: 'rgb(201, 92, 26)', transition: '0.25s'});

    }, function() {

    // on mouseout, reset the background colour

    $('#iconserv6 path').css({fill: '#FFF', transition: '0.25s'});

    $('.texto-servicio6').css({color: '#FFF', transition: '0.25s'});

  });

  });



  $(function() {

    $('#iconserv7').hover(function() {    

      $('#iconserv7 path').css({fill: 'rgb(201, 92, 26)', transition: '0.25s'});

      $('.texto-servicio7').css({color: 'rgb(201, 92, 26)', transition: '0.25s'});

    }, function() {

    // on mouseout, reset the background colour

    $('#iconserv7 path').css({fill: '#FFF', transition: '0.25s'});

    $('.texto-servicio7').css({color: '#FFF', transition: '0.25s'});

  });

  });



  $(function() {

    $('#iconserv8').hover(function() {    

      $('#iconserv8 path').css({fill: 'rgb(201, 92, 26)', transition: '0.25s'});

      $('.texto-servicio8').css({color: 'rgb(201, 92, 26)', transition: '0.25s'});

    }, function() {

    // on mouseout, reset the background colour

    $('#iconserv8 path').css({fill: '#FFF', transition: '0.25s'});

    $('.texto-servicio8').css({color: '#FFF', transition: '0.25s'});

  });

  });



  $(function() {

    $('#iconserv9').hover(function() {    

      $('#iconserv9 path').css({fill: 'rgb(201, 92, 26)', transition: '0.25s'});

      $('.texto-servicio9').css({color: 'rgb(201, 92, 26)', transition: '0.25s'});

    }, function() {

    // on mouseout, reset the background colour

    $('#iconserv9 path').css({fill: '#FFF', transition: '0.25s'});

    $('.texto-servicio9').css({color: '#FFF', transition: '0.25s'});

  });

  });



  $(function() {

    $('#iconserv10').hover(function() {    

      $('#iconserv10 path').css({fill: 'rgb(201, 92, 26)', transition: '0.25s'});

      $('.texto-servicio10').css({color: 'rgb(201, 92, 26)', transition: '0.25s'});

    }, function() {

    // on mouseout, reset the background colour

    $('#iconserv10 path').css({fill: '#FFF', transition: '0.25s'});

    $('.texto-servicio10').css({color: '#FFF', transition: '0.25s'});

  });

  });



  $(function() {

    $('#iconserv11').hover(function() {    

      $('#iconserv11 path').css({fill: 'rgb(201, 92, 26)', transition: '0.25s'});

      $('.texto-servicio11').css({color: 'rgb(201, 92, 26)', transition: '0.25s'});

    }, function() {

    // on mouseout, reset the background colour

    $('#iconserv11 path').css({fill: '#FFF', transition: '0.25s'});

    $('.texto-servicio11').css({color: '#FFF', transition: '0.25s'});

  });

  });



// $(function() {

//   $('#glyphdiv11').hover(function() {

//     $('.texto-servicio11').css({color: 'rgb(201, 92, 26)', transition: '0.25s'});

//   }, function() {

//     // on mouseout, reset the background colour

//     $('.texto-servicio11').css({color: '#FFF', transition: '0.25s'});

//   });

// });



$(function() {

  $('#iconserv12').hover(function() {    

    $('#iconserv12 path').css({fill: 'rgb(201, 92, 26)', transition: '0.25s'});

    $('.texto-servicio12').css({color: 'rgb(201, 92, 26)', transition: '0.25s'});

  }, function() {

    // on mouseout, reset the background colour

    $('#iconserv12 path').css({fill: '#FFF', transition: '0.25s'});

    $('.texto-servicio12').css({color: '#FFF', transition: '0.25s'});

  });

});











$("#dropdown-masinfo").click (function () {

  $header = $(this);

  $footer = $("#dropdown-vermenos");



  $(".content").slideDown(500);



  $header.hide();

  $footer.show();



  $("#dropdown-vermenos").click (function() {





    $(".content").slideUp(200);

    $footer.hide()

    $header.show();



    

  });

});









