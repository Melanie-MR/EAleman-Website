<?php
    $destino="melanie.mr.uba@gmail.com";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $msg = $_POST["msg"];
    $content ="Name: ". $name "\nEmail: " . $email . "\nMessage: " . $msg;
    mail($destino, "Contact", $content);
    header("Location: thanks.html");


?>