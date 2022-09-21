async function pullData() {
  const url = "https://cantao.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fC:65&_from=1&_to=50"
  fetch(url )
  .then(response => response.json())
  .then(response => designCard(response))
  .catch(error => console.error(error))
}

function designCard(dataJson) {
  const dados = dataJson;
  const sectionCard = document.querySelector(".sectionCard");

  dados.map((item) => {
    const id = item.productId;
    const productNames = item.productName;
    const productImage = item.items[0].images[0].imageUrl;
    const price = item.items[0].sellers[0].commertialOffer.Price
    const priceBr = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


    let card = document.createElement("article");
    card.setAttribute("class", "card");
    sectionCard.appendChild(card);

    let imagem = document.createElement("img");
    imagem.setAttribute("src", productImage);
    imagem.setAttribute("class", "imagem");
    card.appendChild(imagem);
    imagem.innerHTML = productImage;

    let productName = document.createElement("p");
    productName.setAttribute("class", "productName");
    card.appendChild(productName);
    productName.textContent = productNames;

    let priceBrAtual = document.createElement("p")
    priceBrAtual.setAttribute('class', 'price')
    card.appendChild(priceBrAtual)
    priceBrAtual.textContent = priceBr



  });

$(function() {
  $(".hero-banner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:2,
    autoplay: true,
    autoplaySpeed:3000,
    dots:false,
    arrows:false,
    mobileFirst:true,
    

  });
})


$(function() {
  $(".imgs-category-flys").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,          
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
           }
      }
        ]

  });
})



if(window.screen.width < 767){
  $(".imgs-category").slick({
    slidesToShow: 1,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed:3000,
    dots: false,
    arrows: false,

 
});
  }     

  $(function() {
    $(".sectionCard").slick({
      slidesToShow: 4,
      slidesToScroll: 2,
      prevArrow: '<span class="priv_arrow"> <i class="fa-solid fa-angle-left"></i>"</span>',
      nextArrow: '<span class="next_arrow"> <i class="fa-solid fa-angle-right"></i>"</span>',
      autoplay: true,
      autoplaySpeed: 3000,
    
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
             }
        }
          ]
         
    });
  });

}



pullData();
designCard();


