let upcomingEvents = []
let events = data.events
let currentDate = data.currentDate 

  for (let i = 0; i < events.length; i++) {
      if (currentDate < events[i].date){
        upcomingEvents.push(data.events[i]);
    }
  }
  
function armarCard(array) {
    let cardTemplate = ``;
    let updateCard = document.getElementById("card"); 
    
    for (let i = 0; i < upcomingEvents.length; i++) {
        cardTemplate += ` 
        <div class="card my-3" style="width: 18rem;">
          <img src="${upcomingEvents[i].image}" class="card-img-top" alt="pic">
          <div class="card-body">
            <h5 class="card-title">${upcomingEvents[i].name}</h5>
            <p class="card-text">${upcomingEvents[i].description}</p>
            <div class="card-body2">
            <p class="card-text">$ ${upcomingEvents[i].price}</p>
            <a href="#" class="btn btn-primary">Ver más</a>
            </div>
          </div>  
        </div>
        `
    }
    updateCard.innerHTML = cardTemplate;
    }
    
    armarCard(upcomingEvents);