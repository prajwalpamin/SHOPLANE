
function imagechange(data1,data2,d3){
    console.log(data2);
    $(data1).click(function(){
      $("img").removeClass("active")
      data1.addClass("active");
      $("#thumbnail").attr("src",d3)
      })
    
    }

var productId = window.location.search.split('=')[1];
console.log(productId)
var currentObj = null;
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+productId,function(response){
    currentObj = response;
    console.log(response)
    var thumbnailSection=$("#thumbnail-sec");
    
    var imgSection=$("<div>").addClass("img-section");
    var imgDescription=$("<div>").addClass("img-desc");

    thumbnailSection.append(imgSection);
    thumbnailSection.append(imgDescription);

    //product image
    var imgProduct=$("<img>").attr("id","thumbnail").attr("src",response.photos[0]);
    imgSection.append(imgProduct);

    //product decription
    var imgDescInnerDiv=$("<div>").addClass("desc-inner");
    imgDescription.append(imgDescInnerDiv);

    var name1=$("<h1>").addClass("product-name").html(response.name);
    var brand=$("<h4>").html(response.brand);
    var price=$("<h3>").html("Price: Rs ");
    var spanPrice=$("<span>").html(response.price);
    price.append(spanPrice);
    var description=$("<div>").addClass("description");
    var descTitle=$("<h3>").html("Description");
    var para=$("<p>").html(response.description);
    //navigating previw
    var previwSection=$("<div>").addClass("preview-section");
    var previewHead=$("<h3>").html("Product Preview");
    var imgDiv=$("<div>").addClass("image-div");

    for(var i=0;i<response.photos.length;i++){
        var image=$("<img>").attr("src",response.photos[i]).attr("id","img"+i).addClass("");
        imgDiv.append(image);
        if(i==0){image.addClass("active");}
        imgDiv.append(image);
        imagechange(image,i,response.photos[i]);  
    
    }
    var buttonDiv=$("<div>");
    var addToCartButton=$("<button>").html("Add to Cart").attr("id","button-to-cart");

    buttonDiv.append(addToCartButton);
    imgDescription.append(buttonDiv);
    previwSection.append(previewHead);
    previwSection.append(imgDiv);

    description.append(descTitle);
    description.append(para);
    imgDescInnerDiv.append(name1);
    imgDescInnerDiv.append(brand);
    imgDescInnerDiv.append(price);
    imgDescInnerDiv.append(description);
    imgDescInnerDiv.append(previwSection);

    $("#button-to-cart").click(function() {  
    $('#button-to-cart').addClass('bigger');
    setTimeout(function() {
        $('#button-to-cart').removeClass('bigger');
    }, 2000)

    var productList = window.localStorage.getItem('product-list');
    productList = productList === null || productList === '' ? [] : productList;
    productList = productList.length > 0 ? JSON.parse(productList) : [];

    // productList.push(currentObj);
    // window.localStorage.setItem('product-list', JSON.stringify(productList));
    console.log(productList);

    var foundAtPos = -1;
    for(var i=0; i < productList.length; i++) {
        // console.log(productList[i].id);
        if(parseInt(productList[i].id) == parseInt(currentObj.id)) {
            foundAtPos = i;
        }
    }

    if(foundAtPos > -1) {
        productList[foundAtPos].count = productList[foundAtPos].count + 1;
        console.log(productList[foundAtPos].count);
        window.localStorage.setItem('product-list', JSON.stringify(productList));
    } else {
        currentObj.count = 1;
        productList.push(currentObj);
        console.log(productList);
        window.localStorage.setItem('product-list', JSON.stringify(productList));
    }

    var totalCount = 0;
    for(var i=0; i<productList.length; i++) {
        totalCount = totalCount + productList[i].count;
    }

    $('#cart-count').html(totalCount);})


     
})

$("#button-to-cart").click(function() {
    console.log("hii")
    $('#button-to-cart').addClass('bigger');
    setTimeout(function() {
        $('#button-to-cart').removeClass('bigger');
    }, 200)

    var productList = window.localStorage.getItem('product-list');
    productList = productList === null || productList === '' ? [] : productList;
    productList = productList.length > 0 ? JSON.parse(productList) : [];

    // productList.push(currentObj);
    // window.localStorage.setItem('product-list', JSON.stringify(productList));
    console.log(productList);

    var foundAtPos = -1;
    for(var i=0; i < productList.length; i++) {
        // console.log(productList[i].id);
        if(parseInt(productList[i].id) == parseInt(currentObj.id)) {
            foundAtPos = i;
        }
    }

    if(foundAtPos > -1) {
        productList[foundAtPos].count = productList[foundAtPos].count + 1;
        console.log(productList[foundAtPos].count);
        window.localStorage.setItem('product-list', JSON.stringify(productList));
    } else {
        currentObj.count = 1;
        productList.push(currentObj);
        console.log(productList);
        window.localStorage.setItem('product-list', JSON.stringify(productList));
    }

    var totalCount = 0;
    for(var i=0; i<productList.length; i++) {
        totalCount = totalCount + productList[i].count;
    }

    $('#cart-count').html(totalCount);
})