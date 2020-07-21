<?php
require 'Card.php';


class Field{

    public function createField(){


        for ($i=0; $i < 10; $i++) {
            $button = new Card($i);
            $button->render($i);
        }
    }
}
?>
