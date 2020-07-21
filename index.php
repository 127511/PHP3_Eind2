<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="master.css">
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
        require 'classes/Field.php';
        $field = new Field;
        echo $field->createField();
     ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="clickHandler.js" charset="utf-8"></script>
  </body>
</html>
