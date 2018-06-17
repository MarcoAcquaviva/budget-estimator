/*------------validation function-----------------
var count=0; // to count blank fields
function validation(event){
	//fetching radio button by name
	var radio_check = document.getElementsByName('bit');
	
	//fetching all inputs with same class name text_field and an html tag textarea 
	var input_field = document.getElementsByClassName('text_field');
	var text_area = document.getElementsByTagName('textarea');
	
	//validating radio button
	if(radio_check[0].checked== false && radio_check[1].checked== false){
	 var y = 0;
	}
	else{
	 var y = 1; 
	}
	
	//for loop to count blank inputs 
	for(var i=input_field.length;i>count;i--){
	if(input_field[i-1].value==''|| text_area.value=='')
		{
			count = count + 1;
		    
		}
	else{			
			count = 0;
		}
	}
	
	//Notifying validation 
		if(count!=0||y==0){
		
			alert("*All Fields are mandatory*");
			event.preventDefault();	
			}
			else{			
				return true;
			}
		
}*/
/*---------------------------------------------------------*/
ploc = 0;
pbaby = 0;
pposate = 0;
pbic = 0;
ppia = 0;
pmen = 0;
pfio = 0;
pauto = 0;

//Function that executes on click of first next button
function next_step1(){
//validating
	//nome
	if( document.preventivo.nome.value == "" )
         {
            alert( "Inserisci il Nome!" );
            document.preventivo.nome.focus() ;
            return false;
         }
	//cognome
		if( document.preventivo.cognome.value == "" )
         {
            alert( "Inserisci il Cognome!" );
            document.preventivo.cognome.focus() ;
            return false;
         }
	//email
	    var x = document.forms["preventivo"]["email"].value;
		var atpos = x.indexOf("@");
		var dotpos = x.lastIndexOf(".");

		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
         {
            alert( "Inserisci un email valida!" );
            document.preventivo.email.focus() ;
            return false;
         }
	//telefono
			var tel = document.forms["preventivo"]["cell"].value;
			var phoneno =  /^\s*([0-9]\d{2})(\s*)([0-9]\d{2})(\s*)(\d{4})\s*$/;
			if(!(tel.match(phoneno))) {
				alert("Inserisci un numero di telefono valido e senza spazi!");  
				return false;  
				} 
	//indirizzo
		if( document.preventivo.indirizzo.value == "" )
         {
            alert( "Inserisci l'indirizzo!" );
            document.preventivo.indirizzo.focus() ;
            return false;
         }
		 
//change box		 
	document.getElementById("first").style.display="none";
	document.getElementById("second").style.display="block";
	document.getElementById("active2").style.color="#dd973a";
//invio dati
var nome = document.getElementById("nome").value;
var cognome = document.getElementById("cognome").value;
var email = document.getElementById("email").value;
var cel = document.getElementById("cell").value;
var indirizzo = document.getElementById("indirizzo").value;
// Returns successful data submission message when the entered information is stored in database.
var dataString = 'name1=' + name + '&email1=' + email + '&cognome1=' + cognome + '&indirizzo1=' + indirizzo + '&cell1=' + cel;

// AJAX code to submit form.
$.ajax({
type: "POST",
url: "../../php/dati.php",
data: dataString,
cache: false,
success: function(html) {

}
});


	
	}
	
//Function that executes on click of first previous button	
function prev_step1(){
	document.getElementById("first").style.display="block";
	document.getElementById("second").style.display="none";
	document.getElementById("active1").style.color="#dd973a";
	document.getElementById("active2").style.color="gray";
	}
	
//Function that executes on click of second next button	
function next_step2(){
	//location
	if( document.preventivo.place.value == "0" )
         {
            alert( "Selezionare la location." );
            return false;
         }
	//data
	var data = new Date();
	var giorno = data.getDate();
	var anno = data.getFullYear();
	var mese = data.getMonth() + 1 ;
	var data2 = document.preventivo.data.value;
	/*anno bisestile*/


  /*validation data*/
	if (document.preventivo.data.value.substring(2,3) != "/" ||
             document.preventivo.data.value.substring(5,6) != "/" ||
             isNaN(document.preventivo.data.value.substring(0,2)) ||
             isNaN(document.preventivo.data.value.substring(3,5)) ||
             isNaN(document.preventivo.data.value.substring(6,10))) {
         
        alert("Inserire data in formato gg/mm/aaaa");
        document.preventivo.data.value = "";
        document.preventivo.data.focus();
        return false;
    }
   else if (document.preventivo.data.value.substring(0,2) > 31) {
        alert("Impossibile utilizzare un valore superiore a 31 per i giorni");
        document.preventivo.data.select();
        return false;
    }
	else if (document.preventivo.data.value.substring(3,5) > 12) {
        alert("Impossibile utilizzare un valore superiore a 12 per i mesi");
        document.preventivo.data.value = "";
        document.preventivo.data.focus();
        return false;
    }
    else if ( document.preventivo.data.value.substring(0,2) == giorno && document.preventivo.data.value.substring(3,5) == mese && document.preventivo.data.value.substring(6,10) == anno ) {
        alert("Impossibile utilizzare la data odierna");
        document.preventivo.data.value = "";
        document.preventivo.data.focus();
        return false;
    }
    else if (document.preventivo.data.value.substring(6,10) < anno ) {
        alert("Impossibile utilizzare un valore inferiore all'anno corrente");
        document.preventivo.data.value = "";
        document.preventivo.data.focus();
        return false;
    }
	    else if ( document.preventivo.data.value.substring(3,5) < mese && document.preventivo.data.value.substring(6,10) == anno ) {
        alert("Impossibile utilizzare una data passata");
        document.preventivo.data.value = "";
        document.preventivo.data.focus();
        return false;
    }
//button		
	document.getElementById("second").style.display="none";
	document.getElementById("third").style.display="block";
	document.getElementById("active3").style.color="#dd973a";
/*toglie la foto*/
	document.getElementById("menu-zero").style.display="none";
	document.getElementById("PalazzoMartino").style.display="none";
	document.getElementById("MontidellaPieve").style.display="none";
	document.getElementById("VillaMazzucchelliM").style.display="none";
	document.getElementById("VillaMazzucchelliR").style.display="none";
	document.getElementById("villasigurta").style.display="none";
	document.getElementById("cortecola").style.display="none";
	}
 
//Function that executes on click of second previous button 
 function prev_step2(){
	
//change box
	document.getElementById("third").style.display="none";
	document.getElementById("second").style.display="block";
	document.getElementById("active2").style.color="#dd973a";
	document.getElementById("active3").style.color="gray";
/*toglie la foto*/
	document.getElementById("menu-zero").style.display="block";
	}
	
//Function that executes on click of 3rd next button	
function next_step3(){
	//posate
		/*if( document.preventivo.s_posate.value == "0" )
         {
            alert( "Selezionare il tipo di posate." );
            return false;
         }*/
	//tavoli
		if( document.preventivo.s_tavoli.value == "0" )
         {
            alert( "Selezionare il tipo di tavolo." );
            return false;
         }
	//tovagliato
		if( document.preventivo.s_tovaglia.value == "0" )
         {
            alert( "Selezionare il tipo di tovaglia." );
            return false;
         }
	//sottopiatti
		if( document.preventivo.s_sotto.value == "0" )
         {
            alert( "Selezionare il tipo di sottopiatto." );
            return false;
         }
	
	//piatti
		if( document.preventivo.s_piatti.value == "0" )
         {
            alert( "Selezionare il tipo di piatto." );
            return false;
         }
	
	//bicchiere acqua
		if( document.preventivo.s_bicchieri.value == "0" )
         {
            alert( "Selezionare il tipo di bicchiere per l'acqua." );
            return false;
         }
	//bicchiere vino bianco
		if( document.preventivo.s_bvino.value == "0" )
         {
            alert( "Selezionare il tipo di Bicchiere per il vino Bianco." );
            return false;
         }
	//Bicchieri vino rosso
		if( document.preventivo.s_rvino.value == "0" )
         {
            alert( "Selezionare il tipo di bicchiere per il vino rosso." );
            return false;
         }
	//bicchiere flute
		if( document.preventivo.s_flute.value == "0" )
         {
            alert( "Selezionare il tipo di bicchiere Flute." );
            return false;
         }
	//sedie
		if( document.preventivo.s_sedie.value == "0" )
         {
            alert( "Selezionare il tipo di sedia." );
            return false;
         }
	
	document.getElementById("third").style.display="none";
	document.getElementById("four").style.display="block";
	document.getElementById("active4").style.color="#dd973a";
	/*toglie la foto*/
	document.getElementById("menu-zero").style.display="none";
	}
	//Function that executes on click of 3rd previous button 
 function prev_step3(){
	 
	document.getElementById("four").style.display="none";
	document.getElementById("third").style.display="block";
	document.getElementById("active3").style.color="#dd973a";
	document.getElementById("active4").style.color="gray";
/*mette la foto*/
	document.getElementById("menu-zero").style.display="block";
	}
	
//Function that executes on click of 4th next button	
function next_step4(){
	//menu
	if( document.preventivo.s_menu.value == "0" )
         {
            alert( "Selezionare il tipo di menu." );
            return false;
         }
	
	document.getElementById("four").style.display="none";
	document.getElementById("five").style.display="block";
	document.getElementById("active5").style.color="#dd973a";
	/*toglie la foto*/
	document.getElementById("menu-zero").style.display="none";
	}
		//Function that executes on click of 4th previous button 
 function prev_step4(){
	document.getElementById("five").style.display="none";
	document.getElementById("four").style.display="block";
	document.getElementById("active4").style.color="#dd973a";
	document.getElementById("active5").style.color="gray";
/*mette la foto*/
	document.getElementById("menu-zero").style.display="block";
	}
	//Function that executes on click of 5th next button	
function next_step5(){
/*openbar*/
	var ok = false;
	var i = 0;
	var openbar = document.getElementsByName("bitop");
	while(!ok && i < openbar.length){
		if(openbar[i].checked) ok = true;
		i++;
	}
	if(!ok) {
		alert("Seleziona se desideri l'open bar");
		return false;
	}
/*ombra*/
	var oko = false;
	var io = 0;
	var combra = document.getElementsByName("bito");
	while(!oko && io < combra.length){
		if(combra[io].checked) oko = true;
		io++;
	}
	if(!oko) {
		alert("Seleziona se desideri l'ombrellone");
		return false;
	}
/*divanetto*/
	var okd = false;
	var id = 0;
	var cdivano = document.getElementsByName("bitd");
	while(!okd && id < cdivano.length){
		if(cdivano[id].checked) okd = true;
		id++;
	}
	if(!okd) {
		alert("Seleziona se desideri il divanetto");
		return false;
	}	
/*poufquadrato*/
	var okpq = false;
	var ipq = 0;
	var cpq = document.getElementsByName("bitpq");
	while(!okpq && ipq < cpq.length){
		if(cpq[ipq].checked) okpq = true;
		ipq++;
	}
	if(!okpq) {
		alert("Seleziona se desideri il pouf quadrato");
		return false;
	}	
/*poufrettangolare*/
	var okpr = false;
	var ipr = 0;
	var cpr = document.getElementsByName("bitpr");
	while(!okpr && ipr < cpr.length){
		if(cpr[ipr].checked) okpr = true;
		ipr++;
	}
	if(!okpr) {
		alert("Seleziona se desideri il pouf rettangolare");
		return false;
	}	
/*isola*/
	/*var oki = false;
	var ii = 0;
	var ci = document.getElementsByName("biti");
	while(!oki && ii < ci.length){
		if(ci[ii].checked) oki = true;
		ii++;
	}
	if(!oki) {
		alert("Seleziona se desideri l'isola tonda");
		return false;
	}	*/	
/*confettata*/
	var okconf = false;
	var iconf = 0;
	var cconf = document.getElementsByName("bitc");
	while(!okconf && iconf < cconf.length){
		if(cconf[iconf].checked) okconf = true;
		iconf++;
	}
	if(!okconf) {
		alert("Seleziona se desideri il tavolo confettata");
		return false;
	}		
/*fuochi d'artitificio*/
	var okfire = false;
	var ifire = 0;
	var cfire = document.getElementsByName("bitf");
	while(!okfire && ifire < cfire.length){
		if(cfire[ifire].checked) okfire = true;
		ifire++;
	}
	if(!okfire) {
		alert("Seleziona se desideri i fuochi d'artificio");
		return false;
	}		
	
/*babysitter*/
	var okb = false;
	var ib = 0;
	var cb = document.getElementsByName("bit");
	var vb = document.getElementById("yb").value;
	var nb = document.getElementById("nb").value;
	var ob = document.getElementById("q_baby").value;
	while(!okb && ib < cb.length){
		if(cb[ib].checked) okb = true;
		ib++;
	}
	if(!okb) {
		alert("Seleziona se desideri la babysitter");
		return false;
	}	

	/*if( vb == "yb" && ob == 0){
		alert("inserisci le ore di babysitter");
		return false;
	}*/
	/*if ( ib = 1 && ob == "") {
		alert( "Inserisci le ore di babysitter!" );
        document.preventivo.orebaby.focus() ;
        return false;
	}
	else if ( nb == "n" && ob == ""){
		return true;
	}*/
/*automobile*/	
	var oka = false;
	var ia = 0;
	var ca = document.getElementsByName("bita");
	var va = document.getElementById("ya").value;
	var pa = document.getElementById("s_auto").value;
	var kma = document.getElementById("km_auto").value;
	while(!oka && ia < ca.length){
		if(ca[ia].checked) oka = true;
		ia++;
	}
	if(!oka) {
		alert("Seleziona se desideri noleggiare un'automobile");
		return false;
	}	


	
/*display next step*/	
	document.getElementById("five").style.display="none";
	document.getElementById("six").style.display="block";
	document.getElementById("active6").style.color="#dd973a";
	/*toglie la foto*/
	document.getElementById("menu-zero").style.display="none";
	}
		//Function that executes on click of 5th previous button 
 function prev_step5(){
	document.getElementById("invitati").value = "";
	document.getElementById("six").style.display="none";
	document.getElementById("five").style.display="block";
	document.getElementById("active5").style.color="#dd973a";
	document.getElementById("active6").style.color="gray";
	}