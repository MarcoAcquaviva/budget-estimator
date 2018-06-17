 <?php 
 $to= "marco.acquaviva@ilmaggiordomodelweb.it"; $subject = "Preventivo";
 /*dichiarazioni variabili*/
 /*html*/
 $colore_sfondo="#fff";
 $colore_testo="#FFFF80";
 $font="'Open Sans', Arial, sans-serif";
 $font_size=2;
 /*step1*/
 $nome = $_POST["nome"]; 
 $cognome = $_POST["cognome"]; 
 $email = $_POST["email"]; 
 $tel = $_POST["cell"]; 
 $adress = $_POST["indirizzo"]; 
 /*step2  */
 $location = $_POST["h_valore"];
 $data = $_POST['data'];
 /*step3  */
 $posate = $_POST['h_posate'];
 $bicchieri = $_POST['h_bicchieri'];
 $piatti = $_POST['h_piatti'];
 /*step4  */
 $menu = $_POST['h_menu'];
 /*step5  */
 $fiori = $_POST['h__fiori'];
 $baby = $_POST['h_baby'];
 $auto = $_POST['h_auto'];
 /*step6 */
 $invitati = $_post['h_invitati'];
 $tot = $_POST['h_totale'];
 /*intestazione*/
 $intestazioni  = "MIME-Version: 1.0\r\n";
 $intestazioni .= "Content-type: text/html; charset=iso-8859-1\r\n";
 /*intestazioni per il mittente*/
 $intestazioni .= "From: La rosa service <info@larosaservice.it>\r\n";
  
 /*messaggio*/

 
 $message="<html><head><title></title></head><body bgcolor=\"" . $colore_sfondo . "\">"; 
 /*header*/
 $message= '<div style="margin: 72px 0;"> <a href="http://www.larosaservice.it/" id="gkLogo">
        <img src="http://www.larosaservice.it/images/Logo-LaRosa.png" alt="Catering la Rosa Service | Location per un matrimonio perfetto">
     </a> </div>';
 /*body*/
 /*intestazione*/
 $message.="<div><font face=\"" . $font . "\" size=\"" . $font_size . "\" colore=\"" . $colore_testo . "\">Questa email ti &egrave stata inviata dal sito La Rosa Service. <br> L'utente  " . $_POST['nome'] . "&nbsp;" . $_POST['cognome'] . " (a cui puoi rispondere a: " . $_POST['email'] . ") . <br> Telefeno: &nbsp;" . $_POST['cell']; "</a> </font> </div>";
 /*step2*/
 $message.='<div><p> Il costo della location &egrave di ' . $_REQUEST["h_valore"] . "&euro; </p><br><p> La data scelta &egrave" . $_REQUEST['data'] . "</p> </div>";
 /*step3*/
 $message.= '<div> <p> Il costo delle posate al pezzo &egrave di: ' . $_REQUEST['h_posate'] . "&euro; </p><br><p> Il costo del bicchiere &egrave di" . $_REQUEST['h_bicchieri'] . " &euro; </p><br> <p> Il costo dei piatti &egrave; : " . $_REQUEST['h_piatti'] . "&euro;</p></div><br>";
 /*step4*/
 $message.= '<div><p> Il costo del men&ugrave; &egrave; di : ' . $_REQUEST['h_menu'] . " &euro; </p></div> ";
 /*step5*/
 $message.= '<div><p> Il costo dei fiori &egrave di : ' . $_REQUEST['h_fiori'] . " &euro</p><br><p> Il costo della babysitter &egrave; di: "  . $_REQUEST['h_baby'] . " &euro;</p><br><p> Il costo per il noleggio auto &egrave; di " . $_REQUEST['h_auto'] . " &euro;</p></div><br>" ;
 /*step6*/
 $message.= '<div><p> Il numero degli invitati &egrave di : ' . $_REQUEST['h_invitati'] . "</p><br><p> Il totale &egrave di " . $_REQUEST['h_totale'] . " &euro;</p></div><br>";

 $message.= '<div style=" text-align: center; margin: 85px 0; width: 100%; color:#3c3b3b;background:#e78531;line-height: 2;">© 2015 La Rosa Service. All Rights Reserved. La Rosa service s.r.l.<br>
via B. Cellini,  25016 Ghedi (BS) -  P. IVA e C.F. 02879710982 -  Tel: 3464125498 - Fax: 0309057188 <br> Designed by Il Maggiordomo del Web </div> ';
 $message.="</body></html>";
 
 mail($to,$subject,$message,$intestazioni);
 mail($email,$subject,$message,$intestazioni);
 
 
 ?>
  
 <p>Your email has been sent.</p><a href="../../index.html"> back </a>
  
 