console.log("script loaded");
$(document).ready(function(){

$('.center').slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
});


$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function(response){ 

        var mainSection=$("#clothn-acc-section");
        //Heading Section
        var headerTag=$("<h2>").addClass("header-tag").html("Clothing for Men and Women");
        mainSection.append(headerTag);

        //clothing section
        var clothingSection=$("<div>").addClass("cloths-id").attr("id","clothing");
        //accessories section
        var accessoriesSection=$("<div>").addClass("cloths-id").attr("id","accessories");
                
      for(var i=0;i<response.length;i++)
        {
            
            if(response[i].isAccessory===false)
            {   var clothCard=$("<div>").addClass("cloth-card").attr("id",response[i].id);
                var cardLink=$("<a>").attr("href","./productDetails.html?p="+response[i].id);
                clothCard.append(cardLink);

                var imgDiv=$("<div>").addClass("img-div");
                var modelImage=$("<img>").addClass("model-image").attr("src",response[i].preview);

                var detailsDiv=$("<div>").addClass("details-div");
                var cardHeading=$("<h3>").addClass("card-header").html(response[i].name);
                var paragraph=$("<h4>").addClass("para").html(response[i].brand);
                var price=$("<h5>").addClass("item-price").html("Rs"+" "+response[i].price);
            
                imgDiv.append(modelImage);
                detailsDiv.append(cardHeading);
                detailsDiv.append(paragraph);
                detailsDiv.append(price);
                cardLink.append(imgDiv);
                cardLink.append(detailsDiv);      
                clothingSection.append(clothCard);
            }
            if(response[i].isAccessory===true)
            {

                var clothCard=$("<div>").addClass("cloth-card").attr("id",response[i].id);
                var cardLink=$("<a>").attr("href","./productDetails.html?p="+response[i].id);
                clothCard.append(cardLink);

                var imgDiv=$("<div>").addClass("img-div");
                var modelImage=$("<img>").addClass("model-image").attr("src",response[i].preview);

                var detailsDiv=$("<div>").addClass("details-div");
                var cardHeading=$("<h3>").addClass("card-header").html(response[i].name);
                var paragraph=$("<h4>").addClass("para").html(response[i].brand);
                var price=$("<h5>").addClass("item-price").html("Rs"+" "+response[i].price);
            
                imgDiv.append(modelImage);
                detailsDiv.append(cardHeading);
                detailsDiv.append(paragraph);
                detailsDiv.append(price);
                cardLink.append(imgDiv);
                cardLink.append(detailsDiv);      
               accessoriesSection.append(clothCard);
                
                
            }
        
        
     
        }

        mainSection.append(clothingSection);
       //heading section
        var headerTag2=document.createElement("h2");
        headerTag2.innerHTML="Accessories for Men and Women";
        headerTag2.className="header-tag";
        mainSection.append(headerTag2);
        mainSection.append(accessoriesSection);

            
        //product details
  
  
})
})