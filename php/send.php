 <?php 
 $to= "assistenza@ilmaggiordomodelweb.it"; $subject = "Preventivo";
 $to2= "info@larosaservice.it";
include('variable.php');
include('message.php');
mail($to,$subject,$message,$intestazioni);
mail($email,$subject,$message,$intestazioni);
mail($to2,$subject,$message,$intestazioni);
?>
  
 <!--<p>Your email has been sent.</p><a href="../../index.html"> back </a>-->

<html>
<HEAD>
<link rel="stylesheet" href="../../font-awesome/css/font-awesome.min.css">
</HEAD>
<BODY>

<!--Sfondo nero-->
<div style="background-color:rgba(47, 47, 47, 0.92);font-family:‘Lucida Sans Unicode’, ‘Lucida Grande’, sans-serif;font-weight:200;margin:0 auto;max-width:960px;border-radius: 9px;">

    
<!--logo-->
<div style="display:block;margin:0 auto;padding:60px 0;text-align:center" align="center">
    <div style="display:block;margin:0 auto;text-align:center" align="center">
       <a href="http://www.larosaservice.it/" id="gkLogo">
       <img src="http://preventivo.larosaservice.it/images/Loghi/Service_catering.png" alt="Catering la Rosa Service | Location per un matrimonio perfetto" style="display:inline-block;min-height:80px" height="80" >
       </a>
   </div>    
</div>

<!--Inizio riquadro bianco-->
<div style="background-color:#fff;border-radius:3px;margin:0 auto;max-width:450px;padding:20px 50px;border: 2px solid #e78531;">

    
    <h2 style="color:#a7b3b8;font-size:22px;font-weight:400;line-height:22px;margin:10px 0">
     <p style="color:#000;text-align:center;"><strong>Preventivo La Rosa Service</strong></p>
 </h2>
<!--Testo-->  
<div style="display:block;font-size:14px;line-height:24px;margin:30px 0;white-space:pre-wrap;">
    <strong>Nome: </strong><?php echo $nome; ?> <br>
    <strong>Cognome: </strong><?php echo $cognome; ?> <br>
    <strong>Email: </strong><?php echo $email; ?> <br>
    <strong>Cellulare: </strong><?php echo $tel; ?> <br>
    <strong>Indirizzo: </strong><?php echo $adress; ?> <br>
    <strong>Data Evento:</strong><?php echo $data; ?> <br>
Le riportiamo in seguito il preventivo degli articoli da lei selezionati:
    
<table align="center" style="border-collapse:collapse;border-color: black; float: center;" border="2">
    <tbody>
    <tr style="background-color:lightgrey;">
    <td style="text-align:center;"><strong>Categoria</strong></td>
    <td style="width: 200px; height: 33px;text-align:center;"><strong>Tipologia</strong>
    </td>
    <td style=" width: 80px;text-align:center;"><strong>Quantit&agrave;</strong></td>
    </tr>
    <tr>
    <td style="padding:3px">
    Men&ugrave;
    </td>
    <td ><?php echo $menu; ?></td>
    <td><?php echo $invitati; ?></td>
    </tr>
    <tr>
    <td style="padding:3px">
    Tavoli
    </td>
    <td><?php echo $tavoli; ?></td>
    <td><?php echo $v_tavoli; ?></td>
    </tr>
    <tr>
    <td style="padding:3px">Location</td>
    <td><?php echo $location; ?></td>
    <td>1</td>
    </tr>
    <tr>
    <td style="padding:3px">Tovagliato</td>
    <td><?php echo $tovaglia; ?></td>
    <td><?php echo $v_tavoli; ?></td>
    </tr>
    <tr>
    <td style="padding:3px">Piatti</td>
    <td><?php echo $piatti; ?></td>
    <td><?php echo $invitati; ?></td>
    </tr>
    <tr>
    <td style="padding:3px">Sottopiatti</td>
    <td><?php echo $sotto; ?></td>
    <td><?php echo $invitati; ?></td>
    </tr>
    <tr>
    <td style="padding:3px; width: 99px; height: 33px;">Bicchieri acqua</td>
    <td><?php echo $bacqua; ?></td>
    <td><?php echo $invitati; ?></td>
    </tr>
    <tr>
    <td style="padding:3px;width: 99px; height: 33px;">
    <p>Bicchieri vino bianco</p>
    </td>
    <td><?php echo $bvino; ?></td>
    <td><?php echo $invitati; ?></td>
    </tr>
    <tr>
    <td style="padding:3px;width: 99px; height: 33px;">Bicchieri vino rosso</td>
    <td><?php echo $rvino; ?></td>
    <td><?php echo $invitati; ?></td>
    </tr>
    <tr>
    <td style="padding:3px;width: 19px; height: 33px;">Bicchieri Flute</td>
    <td><?php echo $bflute; ?></td>
    <td><?php echo $invitati; ?></td>
    </tr>
    <tr>
    <td style="padding:3px">Sedie</td>
    <td><?php echo $sedie; ?></td>
    <td style="padding:2px;"><?php echo $invitati; ?></td>
    </tr>
	<?php if( $checkop == "y" ) : ?> 
	<tr>
    <td>Extra</td>
    <td><?php echo $open; ?></td>
    <td style="width: 56px; height: 33px;"> 1 </td>
    </tr>
	<?php endif; ?>
	<?php if ( $checkombra == "y" ) : ?> 
	<tr>
    <td>Extra</td>
    <td><?php echo $ombra; ?></td>
    <td style="width: 56px; height: 33px;"><?php echo $q_ombra ?> </td>
    </tr>
	<?php endif; ?>
	<?php if ( $checkdivano == "y" ) : ?> 
	<tr>
    <td>Extra</td>
    <td><?php echo $divano; ?></td>
    <td style="width: 56px; height: 33px;"> <?php $q_divano ?> </td>
    </tr>
	<?php endif; ?>
	<?php if ( $checkpoufq == "y" ) : ?> 
	<tr>
    <td>Extra</td>
    <td><?php echo $poufquadra; ?></td>
    <td style="width: 56px; height: 33px;"> <?php echo $q_poufq ?> </td>
    </tr>
	<?php endif; ?>
	<?php if ( $checkpoufr == "y" ) : ?> 
	<tr>
    <td>Extra</td>
    <td><?php echo $poufr; ?></td>
    <td style="width: 56px; height: 33px;"> <?php echo $q_poufr ?> </td>
    </tr>
	<?php endif; ?>
	<?php/* if ( $checktonda == "y" ) : ?> 
	<tr>
    <td>Extra</td>
    <td><?php echo $pisola; ?></td>
    <td style="width: 56px; height: 33px;"> <?php $q_isola ?> </td>
    </tr>
	<?php endif; */?>
	<?php if ( $checkbaby == "y" ) : ?> 
	<tr>
    <td>Extra</td>
    <td><?php echo $baby; ?></td>
    <td style="width: 56px; height: 33px;"> <?php echo $orebaby ?> </td>
    </tr>
	<?php endif; ?>
	<?php if ( $checkauto == "y" ) : ?> 
	<tr>
    <td>Extra</td>
    <td><?php echo $auto; ?></td>
    <td style="width: 56px; height: 33px;"> <?php echo $kmauto ?> </td>
    </tr>
	<?php endif; ?>
	

    </tbody>
    </table><br>Il prezzo totale del preventivo &egrave; di: <?php echo $tot; ?>&euro;  per <?php echo $invitati ?> persone invitate.</div><br>
	<button onclick="Stampa()"><i class="fa fa-print" aria-hidden="true"></i> Stampa </button>
	<script>
	function Stampa() {
    window.print();
}
</script>
    </div>
<!--Fine riquadro bianco-->
    
    
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
            2015 LA ROSA SERVICE. ALL RIGHTS RESERVED. LA ROSA SERVICE S.R.L.
         </div>
         <div style="border:1px #586a72 solid;display:block;margin:30px auto 30px auto;width:80px" width="80"></div>
         <div style="display:block;line-height:18px;text-align:center;width:100%" align="center" width="100%">
           <p>
            VIA B. CELLINI, 25016 GHEDI (BS) - P. IVA E C.F. 02879710982 - TEL: 3464125498 E FAX: 0309057188
            <br>DESIGNED BY IL MAGGIORDOMO DEL WEB
           </p>

         </div>
       </div>
     </div>
    </BODY>
</html>
 