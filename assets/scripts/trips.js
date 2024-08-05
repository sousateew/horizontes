let trips = [
     {
          name: "Recife",
          price: 900,
          image: "https://123milhas.com/img/best-destinations/country/melhores-destinos-franca.jpg"
     },
     {
          name: "Dubai",
          price: 15,
          image: "https://123milhas.com/img/best-destinations/country/melhores-destinos-estados-unidos.jpg"
     },
     {
          name: "Salvador",
          price: 1,
          image: "https://123milhas.com/img/best-destinations/city/melhores-destinos-salvador.jpg"
     },
     {
          name: "Salvador",
          price: 1,
          image: "https://123milhas.com/img/best-destinations/city/melhores-destinos-salvador.jpg"
     },
     {
          name: "Salvador",
          price: 1,
          image: "https://123milhas.com/img/best-destinations/city/melhores-destinos-salvador.jpg"
     },
]

function loadTrips() {
     let cardsContainer = cards

     trips.forEach(element => {
          console.log(element)
          let cardPath = `
               <div class="card">
                    <div class="card-img">
                         <img src="PLACEHOLDER_IMAGE" alt="PLACEHOLDER_NAME">
                         <div class="card-img-gradient"></div>

                         <h1>PLACEHOLDER_NAME</h1>
                    </div>

                    <div class="card-button">
                         <h1>R$ PLACEHOLDER_PRICE</h1>
                    </div>
               </div>
          `

          cardPath = cardPath.replaceAll("PLACEHOLDER_NAME", element.name)
          cardPath = cardPath.replaceAll("PLACEHOLDER_IMAGE", element.image)
          cardPath = cardPath.replaceAll("PLACEHOLDER_PRICE", element.price)

          cardsContainer.innerHTML += cardPath;
     })
}