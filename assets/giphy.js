$("#gifsearch").on("click", function(event){
    event.preventDefault();

    var GifSearch = $("#GifsHere").val();
})
  
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" +
    GifSearch + "&apikey=ywF3Af3q7keHOOoSZaiytkMJVLYma7gF"
  
    $.ajax({
        url:queryUrl,
        method: "GET"
    }).then(function(response){
$("#GifsHere").text(JSON.stringify(response));
var results = response.data;
var animu=["Fairy Tail", "Naruto", "Fullmtal Alchemist", "Haikyuu"]

function renderButtons() {

      $("#GifsHere").empty();
      for(var i=0; i<results*animu.length; i++){
var a = $("<button>");
a.addClass("Gipphys")
a.attr("data-name",animu[i]);
a.text(animu[i]);
$("#GifaHere").append(a);
}
}
 $("#add-gif").on("click", function(event){
     event.preventDefault();

     var animuzzie = $("#Gif-Search").val().trim();

     animu.push(animuzzie);

     renderButtons();
 })

 renderButtons();
    })