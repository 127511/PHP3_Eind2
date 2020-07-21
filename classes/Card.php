<?php
class Card{
    private $id = 0;

    public function __construct($id){
        $this->id = $id;
    }

    public function render(){
        echo "<button type='button' class='card' id=\"".$this->id ."\"></button>";
    }
}
?>
