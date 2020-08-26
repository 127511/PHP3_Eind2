<?php
require 'Card.php';


class Field{
    public $difficulty;
    public function createField(){

      if($this->difficulty == 0){
        for ($i=1; $i < 17; $i++) {
            $button = new Card($i);
            $button->render($i);
            if ($i % 4 == 0) {
              echo "<br>";
            }
        }
      }
      else if($this->difficulty == 1){
        for ($i=1; $i < 37; $i++) {
            $button = new Card($i);
            $button->render($i);
            if ($i % 6 == 0) {
              echo "<br>";
            }
        }
      }
      else if($this->difficulty == 2){
        for ($i=1; $i < 65; $i++) {
            $button = new Card($i);
            $button->render($i);
            if ($i % 8 == 0) {
              echo "<br>";
            }
        }
      }



    }
}
?>
