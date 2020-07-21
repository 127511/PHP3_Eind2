<?php
require 'Card.php';


class Field{

    public function createField(){


        for ($i=1; $i < 13; $i++) {
            $button = new Card($i);
            $button->render($i);
            if ($i % 4 == 0) {
              echo "<br>";
            }
        }
    }
}
?>
