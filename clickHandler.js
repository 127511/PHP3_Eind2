let randomNumbers = [1,2,5,4,3,1,5,4,2,3];
let flippedCards = 0;
let card = $(".card");
let numberOfClickedCard;
let idOfClickedCard;
randomNumbers
card.click(function(event){
  var id = event.target.id;

  if (flippedCards == 0){
      if(!event.target.classList.contains("flipped")){
        $(this).html(randomNumbers[id]);
        numberOfClickedCard = randomNumbers[id];
        idOfClickedCard = id;
        flippedCards++;
        event.target.classList.add("flipped");
      } else {
        console.log("card is already flipped");
      }
  } else
  if (flippedCards == 1){
      if(!event.target.classList.contains("flipped")){
        $(this).html(randomNumbers[id]);
        if (randomNumbers[id] == numberOfClickedCard) {
          console.log("true");
          flippedCards = 0;
          numberOfClickedCard = undefined;
          idOfClickedCard = undefined;
        } else {
          console.log("false");
          setTimeout(function(){
            flippedCards = 0;
            $("#" + idOfClickedCard).html("");
            $("#" + id).html("");
            document.getElementById(idOfClickedCard).classList.remove("flipped");
            document.getElementById(id).classList.remove("flipped");
            flippedCards = 0;
            numberOfClickedCard = undefined;
            idOfClickedCard = undefined;
          }, 1000);


        }
    } else {
      console.log("card is already flipped");
    }
}


});
