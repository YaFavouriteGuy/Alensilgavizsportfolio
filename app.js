$(document).ready(function() { 

    $("#body_container").css("display", "block");
    $("#image_container").css("display", "none");
    $("#form_content").css("display", "none");

    $("#header").css("background", "transparent");
    $("#header").css("width", "100%");
    $("#header").css("height", "15%");

    $("#body").css("background", "transparent");
    $("#body").css("width", "100%");
    $("#body").css("height", "80%");
    
    $("#footer").css("background", "grey");
    $("#footer").css("width", "100%");
    $("#footer").css("height", "5%");

    $("#navigation_header").css("padding-top", "20px");
    $("#navigation_header").css("padding-bottom", "20px");

    $("#navigation_buttons").css("height" , "20px")
    $("#navigation_buttons").css("height" , "20px")
    
    $("#body_content").css("background", "transparent");

    $("#personal_photo").css("height", "250px");
    $("#personal_photo").css("width", "1110px");
    
    $("#body_content").css("padding-top", "0px");
    $(".magic-image").css("height", "380px")
    $(".magic-image").css("width", "400px")

    $("#image_content").css("padding-top", "100px");
    $("#form_content").css("padding-top", "100px");
   
   $("#bruh1").click(function() {
    $("#body_container").css("display", "block");
    $("#image_container").css("display", "none");
    $("#form_content").css("display", "none");
    $("#main-body").css("background","url('balons.jpg')");
   });

   $("#bruh2").click(function() {
    $("#body_container").css("display", "none");
    $("#image_container").css("display", "block");
    $("#form_content").css("display", "none");
    $("#main-body").css("background","url('koki.jpg')");

   });

   $("#bruh3").click(function() {
    $("#body_container").css("display", "none");
    $("#image_container").css("display", "none");
    $("#form_content").css("display", "block");
    $("#main-body").css("background","url('plava.jpg')");
   });


});