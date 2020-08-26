<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Memory</title>
    <link rel="stylesheet" href="master.css">
  </head>
  <body>
    <h1>Memory</h1>
    <h3>Select Difficulty</h3>
    <form method="post">
      <button name="0" class="diffButton">Easy</button> <br>
      <button name="1" class="diffButton">Normal</button> <br>
      <button name="2" class="diffButton">Hard</button> <br>
    </form>
  </body>
</html>
<?php
if (isset($_POST['0'])) {
  echo "<script> location.href='play.php?diff=0'; </script>";
}
if (isset($_POST['1'])) {
  echo "<script> location.href='play.php?diff=1'; </script>";
}
if (isset($_POST['2'])) {
  echo "<script> location.href='play.php?diff=2'; </script>";
}
 ?>
