let randomNumbers = [1,1,2,2,3,3,4,4,5,5];
shuffleArray(randomNumbers);
let flippedCards = 0;
let card = $(".card");
let numberOfClickedCard;
let idOfClickedCard;
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
        flippedCards++;
        event.target.classList.add("flipped");
        if (randomNumbers[id] == numberOfClickedCard) {
          console.log("true");
          numberOfClickedCard = undefined;
          idOfClickedCard = undefined;
          flippedCards = 0;
        } else {
          console.log("false");
          setTimeout(function(){
            $("#" + idOfClickedCard).html("");
            $("#" + id).html("");
            document.getElementById(idOfClickedCard).classList.remove("flipped");
            document.getElementById(id).classList.remove("flipped");
            numberOfClickedCard = undefined;
            idOfClickedCard = undefined;
            flippedCards = 0;
          }, 1000);


        }
    } else {
      console.log("card is already flipped");
    }
}


});
function shuffleArray(array){
  for(let i = array.length-1; i > 0; i--){
  const j = Math.floor(Math.random() * i);
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
}
