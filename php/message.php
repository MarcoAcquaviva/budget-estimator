<?php
 /*intestazione*/
 /*vecchia
 $intestazioni  = "MIME-Version: 1.0\r\n";
 $intestazioni .= "Content-type: text/html; charset=iso-8859-1\r\n";
 //intestazioni per il mittente
 $intestazioni .= "From: La rosa service <info@larosaservice.it>\r\n";
 */
 $intestazioni  = "MIME-Version: 1.0" . PHP_EOL;
 $intestazioni .= "Content-Type: text/html; charset=ISO-8859-1" . PHP_EOL;
//intestazione per il mittente
 $intestazioni .= "From: La rosa service <info@exemple.it>" . PHP_EOL;
 /*messaggio*/

 $message='


<html>
<HEAD>
</HEAD>
<BODY>';
$message.='
<!--Sfondo nero-->
<div style="background-color:rgba(47, 47, 47, 0.92);color: #000; font-family:‘Lucida Sans Unicode’, ‘Lucida Grande’, sans-serif;font-weight:200;margin:0 auto;max-width:960px;border-radius: 9px;">

    
<!--logo-->
<div style="display:block;margin:0 auto;padding:60px 0;text-align:center" align="center">
    <div style="display:block;margin:0 auto;text-align:center" align="center">
       <a href="http://www.exemple.it/" id="gkLogo">
       <img src="http://preventivo.exemple.it/images/Loghi/Service_catering.png" alt="Catering exemple | Location per un matrimonio perfetto" style="display:inline-block;min-height:80px" height="80" >
       </a>
   </div>    
</div>';

$message.='
    
<!--Inizio riquadro bianco-->
<div style="background-color:#fff;border-radius:3px;margin:0 auto;max-width:450px;padding:20px 50px;border: 2px solid #e78531;">

    
    <h2 style="color:#a7b3b8;font-size:22px;font-weight:400;line-height:22px;margin:10px 0">
     <p style="color:#000;text-align:center;"><strong>Preventivo La Rosa Service</strong></p>
 </h2>';
    
$message.='
    
<!--Testo-->  
<div style="display:block;font-size:14px;line-height:24px;margin:30px 0;white-space:pre-wrap;">
Questa &egrave; una email automatica per la conferma di avvenuta ricezione del preventivo dell&rsquo; utente:<br>
    <strong>Nome: </strong>' . $_REQUEST['nome'] . '<br>
    <strong>Cognome: </strong>' . $_REQUEST['cognome'] . '<br>
    <strong>Email: </strong>' . $_REQUEST['email'] . '</strong><br>
    <strong>Cellulare: </strong>' . $_REQUEST['cell'] . '<br>
    <strong>Indirizzo: </strong>' . $_REQUEST['indirizzo'] . '<br>
    <strong>Data Evento: </strong>' . $_REQUEST['data'] . '<br>
Le riportiamo in seguito il preventivo degli articoli da lei selezionati:';
    
$message.='    
    
<table align="center" style="border-collapse:collapse;border-color: black; float: center;" border="2">
    <tbody>
    <tr style="background-color:lightgrey;">
    <td style="text-align:center;"><strong>Categoria</strong></td>
    <td style="width: 200px; height: 33px;text-align:center;"><strong>Tipologia</strong>
    </td>
    <td style=" width: 80px;text-align:center;"><strong>Quantit&agrave;</strong></td>
    </tr>
    <tr>
    <td style="padding:3px; white-space:normal;">
    Men&ugrave;
    </td>
    <td>' . $_REQUEST['n_menu'] . '</td>
    <td>' . $_REQUEST['invitati'] . '</td>
    </tr>
    <tr>
    <td style="padding:3px; white-space:normal;">
    Tavoli
    </td>
    <td>' . $_REQUEST['n_tavoli'] . '</td>
    <td>' . $_REQUEST['v_tavoli'] . '</td>
    </tr>
    <tr>
    <td style="padding:3px">Location</td>
    <td>' . $_REQUEST['n_valore'] . '</td>
    <td>1</td>
    </tr>
    <tr>
    <td style="padding:3px">Tovagliato</td>
    <td>' . $_REQUEST['n_tovaglia'] . '</td>
    <td>' . $_REQUEST['invitati'] . '</td>
    </tr>
    <tr>
    <td style="padding:3px">Piatti</td>
    <td>' . $_REQUEST['n_piatti'] . '</td>
    <td>' . $_REQUEST['invitati'] . '</td>
    </tr>
    <tr>
    <td style="padding:3px">Sottopiatti&nbsp;</td>
    <td>' . $_REQUEST['n_sotto'] . '</td>
    <td>' . $_REQUEST['invitati'] . '</td>
    </tr>
    <tr>
    <td style="padding:3px; width: 99px; height: 33px;">Bicchieri acqua</td>
    <td>' . $_REQUEST['n_bicchieri'] . '</td>
    <td>' . $_REQUEST['invitati'] . '</td>
    </tr>
    <tr>
    <td style="padding:3px;width: 99px; height: 33px;">Bicchieri vino bianco</td>
    <td>' . $_REQUEST['n_bvino'] . '</td>
    <td>' . $_REQUEST['invitati'] . '</td>
    </tr>
    <tr>
    <td style="padding:3px;width: 99px; height: 33px;">Bicchieri vino rosso</td>
    <td>' . $_REQUEST['n_rvino'] . '</td>
    <td>' . $_REQUEST['invitati'] . '</td>
    </tr>
    <tr>
    <td style="padding:3px;width: 19px; height: 33px;">Bicchieri Flute</td>
    <td>' . $_REQUEST['n_flute'] . '</td>
    <td>' . $_REQUEST['invitati'] . '</td>
    </tr>
    <tr>
    <td style="padding:3px">Sedie</td>
    <td>' . $_REQUEST['n_sedia'] . '</td>
    <td style="padding:2px;">' . $_REQUEST['invitati'] . '</td>
    </tr>';
    
    //if openbar
    if ( $checkop == "y" ) {
       $message = $message. '
        <tr>
        <td>Extra</td>
        <td>' . $_REQUEST['n_open'] .'</td>
        <td style="width: 56px; height: 33px;"> 1 </td>
        </tr>
        <tr>'; 
    }

    //if ombrellone
    if ( $checkombra == "y" ) {
       $message = $message. '
        <tr>
        <td>Extra</td>
        <td>' . $_REQUEST['n_ombra'] .'</td>
        <td style="width: 56px; height: 33px;">' . $_REQUEST['o_ombra'] . '</td>
        </tr>
        <tr>'; 
    }

    //if divanetto
    if ( $checkdivano == "y" ) {
       $message = $message. '
        <tr>
        <td>Extra</td>
        <td>' . $_REQUEST['n_divano'] .'</td>
        <td style="width: 56px; height: 33px;">' . $_REQUEST['o_divano'] . '</td>
        </tr>
        <tr>'; 
    }


    //If pouf quadrato
    if ( $checkpoufq == "y" ) {
       $message = $message. '
        <tr>
        <td>Extra</td>
        <td>' . $_REQUEST['n_poufq'] .'</td>
        <td style="width: 56px; height: 33px;">' . $_REQUEST['o_poufq'] . '</td>
        </tr>
        <tr>'; 
    }


    //If pouf rettangolare
    if ( $checkpoufr == "y" ) {
       $message = $message. '
        <tr>
        <td>Extra</td>
        <td>' . $_REQUEST['n_poufr'] .'</td>
        <td style="width: 56px; height: 33px;">' . $_REQUEST['o_poufr'] . '</td>
        </tr>
        <tr>'; 
    }

	//If extra isolatonda
  /*  if ( $checktonda == "y" ) {
        $message = $message. '
        <tr>
        <td>Extra</td>
        <td>' . $_REQUEST['n_pisola'] .'</td>
        <td style="width: 56px; height: 33px;">' . $_REQUEST['o_isola'] . '</td>
        </tr>
        <tr>';
    }
	*/
	//If extra confettata
    if ( $checkconf == "y" ) {
        $message = $message. '
        <tr>
        <td>Extra</td>
        <td>' . $_REQUEST['n_pconf'] .'</td>
        <td style="width: 56px; height: 33px;">' . $_REQUEST['o_conf'] . '</td>
        </tr>
        <tr>';
    }
	
	//If extra fuochi d'artificio
    if ( $checkfire == "y" ) {
        $message = $message. '
        <tr>
        <td>Extra</td>
        <td>' . $_REQUEST['n_pfire'] .'</td>
        <td style="width: 56px; height: 33px;">' . $_REQUEST['o_fire'] . '</td>
        </tr>
        <tr>';
    }

	/* if extra babysitter*/
	if ( $checkbaby == "y" ) {
        $message = $message. '
        <tr>
        <td>Extra</td>
        <td>' . $_REQUEST['n_baby'] .'</td>
        <td style="width: 56px; height: 33px;">' . $_REQUEST['orebaby'] . ' ore </td>
        </tr>
        <tr>';
    }


    /*if extra auto*/
	if ( $checkauto == "y" ) {
        $message = $message. '
        <tr>	
        <td>Extra</td>
        <td>' . $_REQUEST['n_auto'] .'</td>
        <td style="width: 56px; height: 33px;">' . $_REQUEST['kmauto'] . '</td>
        </tr>
        <tr>';
	}
		
    $message.='</tbody>
    </table>
    Il prezzo totale del preventivo &egrave; di: ' . $_REQUEST['h_totale'] . '&euro; per ' . $_REQUEST['h_invitati'] . ' persone invitate.
    </div>
    </div>
<!--Fine riquadro bianco-->';
    
    $message.='
  <!--Footer-->  
    <div style="color:#586a72;display:block;font-size:13px;margin:0 auto;padding:40px 0;text-align:center" align="center">
           <div>
           <a href="https://www.google.it/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwi9nIW70L3NAhWEPxoKHZuMDBoQFggfMAA&url=http%3A%2F%2Fwww.larosaservice.it%2F&usg=AFQjCNHbH5LX55lPn3ZKILDltG9-vBfC4w&sig2=xfrT0fWsrmVrUewdqOQjUg" style="color:#1a9bdb;font-weight:400;margin:5px;text-decoration:none" target="_blank">larosaservice.it</a>
           <span style="margin:5px"></span>
           
             <span style="margin:5px"></span>
           <a href="https://www.facebook.com/larosaservicesrl/?fref=ts" style="color:#1a9bdb;font-weight:400;margin:5px;text-decoration:none" target="_blank">
               Facebook
           </a>
         </div>
         <div style="margin:10px 0">
            2015 exemple. ALL RIGHTS RESERVED. exemple S.R.L.
         </div>
         <div style="border:1px #586a72 solid;display:block;margin:30px auto 30px auto;width:80px" width="80"></div>
         <div style="display:block;line-height:18px;text-align:center;width:100%" align="center" width="100%">
           <p>
            
           </p>

         </div>
       </div>
     </div>
	 <div style="display=none">
	 <p> ip:' . $ip . '</p><br>
	 <p> host:' . $host . '</p><br>
	 <p> loc:' . $loc . '</p><br>
	 <p> city:' . $city . '</p><br>
	 <p> org:' . $org . '</p><br>
	 </div>
    </BODY>
</html>';

?>