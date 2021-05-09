

document.querySelector(".js-go").addEventListener('click', function(){

    var input = document.querySelector("input").value;
    pushToDOM(input);
    

    
});


// function içerisinde tanımladıgın değişkenleri dışarda da kullanabilmek için  pushToDOM(input); kullanmak gerekiyor

document.querySelector(".js-userinput").addEventListener('keyup', function(e) {

    var input = document.querySelector("input").value;


    // 13 means enter

    if(e.which === 13) {

        pushToDOM(input);
    };

    



});

// giphy api key + limit
var url = "https://api.giphy.com/v1/gifs/search?q=dogs&api_key=gmrPn3D2KvMWNb6PryhYtjdbxAI2y3Np&limit=20&q=";

var GiphAJAXCall = new XMLHttpRequest();
GiphAJAXCall.open('GET', url);
GiphAJAXCall.send();


GiphAJAXCall.addEventListener('load',function(e){

   var data = e.target.response;
   pushToDOM(data);

});

// 


function pushToDOM(input) {


    var response = JSON.parse(input);
    var imageUrls = response.data;

    // var imageUrl = response.data[0].images.fixed_height.url; // json path. also for just one image


    imageUrls.forEach(function(image){  // loop
    
    var src = image.images.fixed_height.url;


    var container = document.querySelector(".js-container");
    container.innerHTML += "<img src="  + src + "\" class=\"container-image\">";



    });

  

   

}

