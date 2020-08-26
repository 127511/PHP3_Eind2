let randomNumbers;
if ($('#64').length > 0) {
  randomNumbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32];
} else if ($('#36').length > 0) {
  randomNumbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18];
} else if ($('#16').length > 0) {
  randomNumbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
}




shuffleArray(randomNumbers);

let flippedCards = 0;
let card = $(".card");
let numberOfClickedCard;
let idOfClickedCard;
card.click(function(event){
  var id = event.target.id;

  if (flippedCards == 0){
      if(!event.target.classList.contains("flipped")){
        $(this).html(randomNumbers[(id-1)]);
        numberOfClickedCard = randomNumbers[(id-1)];
        idOfClickedCard = id;
        flippedCards++;
        event.target.classList.add("flipped");
      } else {
        console.log("card is already flipped");
      }
  } else
  if (flippedCards == 1){
      if(!event.target.classList.contains("flipped")){
        $(this).html(randomNumbers[(id-1)]);
        flippedCards++;
        event.target.classList.add("flipped");
        if (randomNumbers[(id-1)] == numberOfClickedCard) {
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
