$("h1").css("color", "white");// css property add
$("h2").addClass("text");//css class add
$("h3").text("<em>bye<em>");//text change
$("h4").html("<em>bye<em>");//html change
$("button").text("don't click me");//button text change all button selected
$("a").attr("href", "https://www.youtube.com");//link change

// event listener
$("h1").click(function (){
    $("h1").css("color", "purple");// css property add
});
// event listener on buttons
for(var i = 0; i < $("button").length; i++){
    $("button").eq(i).click(function (){
        $(this).css("color", "purple");// css property add
    $("h1").css("color", "purple");// css property add
    });
}
$("input").keypress(function(event)
{
    $("h1").text(event.key);// text change
    console.log(event.key);// text change
});
$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");// css property add
});
$("button").on("click", function(){
    $("h5").slideUp().slideDown().animate({margin: "20px"});// css property add  
});