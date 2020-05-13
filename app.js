$(document).ready(function() { 

    $("#body_container").css("display", "block");
    $("#image_container").css("display", "none");
    $("#form_content").css("display", "none");
    $("#row").css("background", "#ffffff")

    $("#header").css("background", "transparent");
    $("#header").css("width", "100%");
    $("#header").css("height", "15%");

    $("#body").css("background", "transparent");
    $("#body").css("width", "100%");
    $("#body").css("height", "80%");
    
    $("#footer").css("background", "DarkGoldenRod");
    $("#footer").css("width", "100%");
    $("#footer").css("height", "5%");

    $("#navigation_header").css("padding-top", "20px");
    $("#navigation_header").css("padding-bottom", "20px");

    $("#navigation_buttons").css("height" , "20px")
    $("#navigation_buttons").css("height" , "20px")
    
    $("#body_content").css("background", "transparent");

    $("#personal_photo").css("height", "200px");
    $("#personal_photo").css("width", "200px");
    
    $("#body_content").css("padding-top", "0px");
    $(".magic-image").css("height", "380px")
    $(".magic-image").css("width", "400px")

    $("#image_content").css("padding-top", "100px");
    $("#form_content").css("padding-top", "100px");

    $("#body").css("background", "transparent");
    $("#body").css("width", "100%");
    $("#body").css("height", "80%");
 
    $("#main-body").css("background","url('balons.jpg')");
   
   $("#bruh1").click(function() {
    $("#body_container").css("display", "block");
    $("#image_container").css("display", "none");
    $("#form_content").css("display", "none");
    $("#main-body").css("background","url('balons.jpg')");
    $("#footer").css("background", "DarkGoldenRod");
    $(".poga1").css("background", "#ff9e00");
    $(".poga2").css("background", "#ffb843");
    $(".poga3").css("background", "#ffc86e");
   });

   $("#bruh2").click(function() {
    $("#body_container").css("display", "none");
    $("#image_container").css("display", "block");
    $("#form_content").css("display", "none");
    $("#main-body").css("background","url('kokz.jpg')");
    $("#footer").css("background", "OliveDrab");
    $(".poga1").css("background", "#345D36");
    $(".poga2").css("background", "#4B814D");
    $(".poga3").css("background", "#60A263");
   });

   $("#bruh3").click(function() {
    $("#body_container").css("display", "none");
    $("#image_container").css("display", "none");
    $("#form_content").css("display", "block");
    $("#main-body").css("background","url('plava.jpg')");
    $("#footer").css("background", "Peru");
    $(".poga1").css("background", "#BB8B36");
    $(".poga2").css("background", "#DAA23F");
    $(".poga3").css("background", "#F5B647");
   });

});