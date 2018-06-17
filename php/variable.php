<?php
 /*Check from*/
$ip = $_SERVER['REMOTE_ADDR'];
$details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));
 $city = $details->city;
 $ip = $details->ip;
 $host = $details->hostname;
 $loc = $details->loc;
 $org = $details->org;
 /*dichiarazioni variabili*/
 /*step1*/
 $nome = $_POST["nome"]; 
 $cognome = $_POST["cognome"]; 
 $email = $_POST["email"]; 
 $tel = $_POST["cell"]; 
 $adress = $_POST["indirizzo"]; 
 /*step2  */
 $location = $_POST["n_valore"];
 $data = $_POST['data'];
 /*step3  */
 $tavoli = $_POST["n_tavoli"];
 $v_tavoli = $_POST["v_tavoli"];
 $tovaglia = $_POST["n_tovaglia"]; 
 $sotto = $_POST["n_sotto"];
 $posate = $_POST['n_posate'];
 $piatti = $_POST['n_piatti'];
 $bacqua = $_POST['n_bicchieri'];
 $bvino = $_POST["n_bvino"];
 $rvino = $_POST["n_rvino"]; 
 $bflute = $_POST["n_flute"]; 
 $sedie = $_POST['n_sedia'];
 /*step4  */
 $menu = $_POST['n_menu'];
 /*step5  */

 $checkop = $_REQUEST['bitop'];
 $open = $_POST['n_open'];

 $checkombra = $_REQUEST['bito'];
 $ombra = $_POST['n_ombra'];
 $q_ombra = $_REQUEST['o_ombra'];

 $checkdivano = $_REQUEST['bitd'];
 $divano = $_POST['n_divano'];
 $q_divano = $_REQUEST['o_divano'];

 $checkpoufq = $_REQUEST['bitpq'];
 $poufquadra = $_POST['n_poufq'];
 $q_poufq = $_REQUEST['o_poufq'];

 $checkpoufr = $_REQUEST['bitpr'];
 $poufr = $_POST['n_poufr'];
 $q_poufr = $_REQUEST['o_poufr'];
 
/* $checktonda = $_REQUEST['biti'];
 $pisola = $_POST['n_pisola'];
 $q_isola = $_REQUEST['o_isola'];*/
 
 $checkconf = $_REQUEST['bitc'];
 $conf = $_POST['n_pconf'];
 
 $checkfire = $_REQUEST['bitf'];
 $fire = $_POST['n_pfire'];

 $baby = $_POST['n_baby'];
 $checkbaby = $_REQUEST['bit'];
 $orebaby = $_REQUEST['orebaby'];
 
 $checkauto = $_REQUEST['bita'];
 $auto = $_POST['n_auto'];
 $kmauto = $_REQUEST['kmauto'];

 /*step6 */
 $invitati = $_POST['h_invitati'];
 $tot = $_POST['h_totale'];

?>