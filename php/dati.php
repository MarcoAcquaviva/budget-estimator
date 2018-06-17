<?php
// Fetching Values From URL
$name2 = $_POST['nome1'];
$email2 = $_POST['email1'];
$cognome2 = $_POST['cognome1'];
$indirizzo2 = $_POST['indirizzo1'];
$cell2 = $_POST['cell1'];
$to = "info@exemple.it";


 $intestazioni  = "MIME-Version: 1.0" . PHP_EOL;
 $intestazioni .= "Content-Type: text/html; charset=ISO-8859-1" . PHP_EOL;
//intestazione per il mittente
 $intestazioni .= "From: La rosa service <info@exemple.it>" . PHP_EOL;
 $subject= "Nuovo utente Preventivo";
 /*messaggio*/
 
$message ='Nuovo utente:<br> Nome: ' . $name2 . '<br> Cognome: ' . $cognome2 . '<br> Email: ' . $email2 . '<br> Indirizzo: ' . $indirizzo2 . '<br> Telefono: ' . $cell2 . '<br>Buona Giornata';
mail($to,$subject,$message,$intestazioni);
?>