let currentDate = data.currentDate
let events = data.events

function armarCard(array) {
let cardTemplate = ``;
let updateCard = document.getElementById("card"); 

for (let i = 0; i < events.length; i++) {
    cardTemplate += ` 
    <div class="card my-3" style="width: 18rem;">
      <img src="${events[i].image}" class="card-img-top" alt="pic">
      <div class="card-body">
        <h5 class="card-title">${events[i].name}</h5>
        <p class="card-text">${events[i].description}</p>
        <div class="card-body2">
        <p class="card-text">$ ${events[i].price}</p>
        <a href="#" class="btn btn-primary">Ver más</a>
        </div>
      </div>  
    </div>
    `
}
updateCard.innerHTML = cardTemplate;
}

armarCard(events);