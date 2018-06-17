//global variable
ploc = 0;
pbaby = 0;
pposate = 0;
pbic = 2;
ppia = 0;
pmen = 0;
pfio = 0;
pauto = 0;
ptav = 0;
ptov = 0;
psot = 0;
pbvin = 0;
pflut = 0;
pombra = 0;
pdiva = 0;
ppoufq = 0;
ppoufr = 0;
pisola = 0;
popen = 0;
prvin = 0;
pbvin = 0;
psed = 0;
pconf = 0;
pfire = 0;

myFunction();

function prezzolocation(){
	var x = document.getElementById("place").value;
    //document.getElementById("valore").innerHTML = "Prezzo: " + x + "&euro;"; 
    document.getElementById("h_valore").value = ploc ;
	
	if (x == 0){
	document.getElementById("menu-zero").style.display="none";
	document.getElementById("n_valore").value = "Nessuna location"
	document.getElementById("h_valore").value = ploc;
	}	else if (x == "Martino"){
		ploc = 2000;
		document.getElementById("PalazzoMartino").style.display="block";
		document.getElementById("MontidellaPieve").style.display="none";
		document.getElementById("VillaMazzucchelliM").style.display="none";
		document.getElementById("VillaMazzucchelliR").style.display="none";
		document.getElementById("villasigurta").style.display="none";
		document.getElementById("cortecola").style.display="none";
		document.getElementById("menu-zero").style.display="none";
		document.getElementById("n_valore").value = "Palazzo Martino";
		document.getElementById("h_valore").value = ploc;
	}	else if (x == "Pieve"){
		ploc = 3000;
		document.getElementById("PalazzoMartino").style.display="none";
		document.getElementById("MontidellaPieve").style.display="block";
		document.getElementById("VillaMazzucchelliM").style.display="none";
		document.getElementById("VillaMazzucchelliR").style.display="none";		
		document.getElementById("villasigurta").style.display="none";
		document.getElementById("cortecola").style.display="none";		
		document.getElementById("menu-zero").style.display="none";
		document.getElementById("n_valore").value = "Palazzo Monti della Pieve"
		document.getElementById("h_valore").value = ploc;
	}	else if (x == "MazzucchelliR"){
		ploc = 4200;
		document.getElementById("PalazzoMartino").style.display="none";
		document.getElementById("MontidellaPieve").style.display="none";
		document.getElementById("VillaMazzucchelliM").style.display="none";
		document.getElementById("VillaMazzucchelliR").style.display="block";
		document.getElementById("villasigurta").style.display="none";
		document.getElementById("cortecola").style.display="none";
		document.getElementById("menu-zero").style.display="none";
		document.getElementById("n_valore").value = "Villa Mazzucchelli(Reale)";
		document.getElementById("h_valore").value = ploc;
	}	else if (x == "MazzucchelliM"){
		ploc = 2500;
		document.getElementById("PalazzoMartino").style.display="none";
		document.getElementById("MontidellaPieve").style.display="none";
		document.getElementById("VillaMazzucchelliM").style.display="block";
		document.getElementById("VillaMazzucchelliR").style.display="none";
		document.getElementById("villasigurta").style.display="none";
		document.getElementById("cortecola").style.display="none";
		document.getElementById("menu-zero").style.display="none";
		document.getElementById("n_valore").value = "Villa Mazzucchelli(Museo)";
		document.getElementById("h_valore").value = ploc;
	}	else if (x == "Sigurta"){
		ploc = 3500;
		document.getElementById("PalazzoMartino").style.display="none";
		document.getElementById("MontidellaPieve").style.display="none";
		document.getElementById("VillaMazzucchelliM").style.display="none";
		document.getElementById("VillaMazzucchelliR").style.display="none";
		document.getElementById("villasigurta").style.display="block";
		document.getElementById("cortecola").style.display="none";
		document.getElementById("menu-zero").style.display="none";
		document.getElementById("n_valore").value = "Villa Sigurt&agrave;";
		document.getElementById("h_valore").value = ploc;
	}	else if (x == "Corte"){
		ploc = 2500;
		document.getElementById("PalazzoMartino").style.display="none";
		document.getElementById("MontidellaPieve").style.display="none";
		document.getElementById("VillaMazzucchelliM").style.display="none";
		document.getElementById("VillaMazzucchelliR").style.display="none";
		document.getElementById("villasigurta").style.display="none";
		document.getElementById("cortecola").style.display="block";
		document.getElementById("menu-zero").style.display="none";
		document.getElementById("n_valore").value = "Corte Cola";
		document.getElementById("h_valore").value = ploc;
	}
}

/*step3*/
/*tavoli*/
function prezzotavoli(){
	var x = document.getElementById("s_tavoli").value;
    //document.getElementById("valore_tavolo").innerHTML = "Prezzo: " + x + "&euro;";

	
	if (x == 0){
		ptav = 0;
		ntav = "no tavolo";
		document.getElementById("menu-zero").style.display="none";
		document.getElementById("h_tavoli").value =  ptav;
		document.getElementById("n_tavoli").value =  ntav;
	}
	else if (x == 8){
		ptav = 0;
		ntav = "8 persone";
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Tavoli/Tavolo-tondo-8-persone.jpg";
		document.getElementById("h_tavoli").value =  ptav;
		document.getElementById("n_tavoli").value =  ntav;
	}
	else if (x == 10){
		ptav = 0;
		ntav = "10 persone";
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Tavoli/Tavolo-tondo-10-persone.jpg";
		document.getElementById("h_tavoli").value =  ptav;
		document.getElementById("n_tavoli").value =  ntav;
	}
	else if (x == "reale"){
		ptav = 0.5 ;
		ntav = "Tavolo reale";
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Tavoli/Tavolo-reale.jpg";
		document.getElementById("h_tavoli").value =  ptav;
		document.getElementById("n_tavoli").value =  ntav;
	}
	
		if (tavolata == 0){
		vtav = 0;
		document.getElementById("v_tavoli").value =  vtav;
	}
	else if (tavolata == 8){
		ntavoli = (inv / 8 );
		vtav = ntavoli.toFixed(2);
		document.getElementById("v_tavoli").value =  vtav;
	}
	else if (tavolata == 10){
		ntavoli = (inv / 10 );
		vtav = ntavoli.toFixed(2);
		document.getElementById("v_tavoli").value =  vtav;
	}
	else if (tavolata == "reale"){
		vtav = inv;
		document.getElementById("v_tavoli").value =  vtav;
	}
}


/*tovaglia*/
function prezzotovaglia(){
	var x = document.getElementById("s_tovaglia").value;
    //document.getElementById("valore_tovaglia").innerHTML = "Prezzo: " + x + "&euro;";

	
	if (x == 0){
		ptov = 0;
		ntov = "no tovaglia";
		document.getElementById("menu-zero").style.display="none";
		document.getElementById("h_tovaglia").value =  ptov;
		document.getElementById("n_tovaglia").value =  ntov;
	}
	else if (x == "lino"){
		ptov = 0;
		ntov = "Tovaglia Bianca Lino e cotone";
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Tovagliato/Tovaglia-bianca-lino-e-cotone.jpg";
		document.getElementById("h_tovaglia").value =  ptov;
		document.getElementById("n_tovaglia").value =  ntov;
	}
	else if (x == "avorio"){
		ptov = 0;
		ntov = "Tovaglia avorio Damascato";
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Tovagliato/Tovaglia-color-avorio-damascato.jpg";
		document.getElementById("h_tovaglia").value =  ptov;
		document.getElementById("n_tovaglia").value =  ntov;
	}
	else if (x == "scelta"){
		ptov = 1 ;
		ntov = "Tovaglia colore a scelta";
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Tovagliato/Tovaglie-colori-a-scelta.jpg";
		document.getElementById("h_tovaglia").value =  ptov;
		document.getElementById("n_tovaglia").value =  ntov;
	}
}


/*sottopiatti*/
function prezzosotto(){
	var x = document.getElementById("s_sotto").value;
    //document.getElementById("valore_sotto").innerHTML = "Prezzo: " + x + "&euro;";

	
	if (x == 0){
		psot = 0;
		nsot = "no tovaglia";
		document.getElementById("menu-zero").style.display="none";
		document.getElementById("h_sotto").value =  psot;
		document.getElementById("n_sotto").value =  nsot;
	}
	else if (x == "vetro"){
		psot = 0;
		nsot = "Sottopiatto in vetro bordo liscio";
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Sottopiatti/Sottopiatto-in-vetro-bordo-liscio.jpg";
		document.getElementById("h_sotto").value =  psot;
		document.getElementById("n_sotto").value =  nsot;
	}
	else if (x == "ceramica"){
		psot = 0;
		nsot = "Sottopiatto in ceramica bianca";
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Sottopiatti/Sottopiatto-in-ceramica-bianco.jpg";
		document.getElementById("h_sotto").value =  psot;
		document.getElementById("n_sotto").value =  nsot;
	}
	else if (x == "satina"){
		psot = 0.5 ;
		nsot = "Sottopiatto in vetro bordo satinato";
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Sottopiatti/Sottopiatto-in-vetro-bordo-satinato.jpg";
		document.getElementById("h_sotto").value =  psot;
		document.getElementById("n_sotto").value =  nsot;
	}
}


/*piatti*/
function prezzopiatti(){
	var x = document.getElementById("s_piatti").value;
	ppia = x;
    //document.getElementById("valore_piatti").innerHTML = "Prezzo: " + x + "&euro;";
    //document.getElementById("h_piatti").value = ppia;
	
	if (x == "ceramica"){
	ppia = 0;
	npia = "Piatti in ceramica tondi";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Piatti/Piatti-ceramica-tondi.jpg";
	document.getElementById("h_piatti").value =  ppia;
	document.getElementById("n_piatti").value =  npia;
	}
	else if (x == "quadrati"){
	ppia = 1.50;
	npia = "Piatti quadrati bianchi";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Piatti/Piatti-quadrati-bianchi.jpg";
	document.getElementById("h_piatti").value =  ppia;
	document.getElementById("n_piatti").value =  npia;
	}
	else if (x == 0){
	document.getElementById("menu-zero").style.display="none";
	}
}


/*bicchieri*/
/*acqua*/
function prezzobicchieri(){
	var x = document.getElementById("s_bicchieri").value;
    //document.getElementById("valore_bicchieri").innerHTML = "Prezzo: " + x + "&euro;";
    //document.getElementById("h_bicchieri").value =  pbic ;
	
	if (x == "tumbler"){
	pbic = 0;
	nbic = "Bicchiere Tumbler";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Bicchieri/Acqua/Tumbler.jpg";
	document.getElementById("h_bicchieri").value =  pbic;
	document.getElementById("n_bicchieri").value =  nbic;
	}
	else if (x == "ideal"){
	n = 0.40;
	pbic = n.toFixed(2);
	nbic = "Bicchiere Tumbler Ideal Harmony";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Bicchieri/Acqua/Tumbler-Ideal-Harmony.jpg";
	document.getElementById("h_bicchieri").value =  pbic;
	document.getElementById("n_bicchieri").value =  nbic;
	}
	else if (x == "cortina"){
	prezzo = 0.40;
	pbic = prezzo;
	nbic = "Bicchiere Tumbler Cortina";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Bicchieri/Acqua/Tumbler-cortina.jpg";
	document.getElementById("h_bicchieri").value =  pbic;
	document.getElementById("n_bicchieri").value =  nbic;
	}
	else if (x == 0){
	document.getElementById("menu-zero").style.display="none";
	}
}


/*vinobianco*/
function prezzobvino(){
	var x = document.getElementById("s_bvino").value;
    //document.getElementById("valore_bicchieri").innerHTML = "Prezzo: " + x + "&euro;";
    //document.getElementById("h_bicchieri").value =  pbic ;
	
	if (x == "Cabernet"){
	pbvin = 0;
	nbvin = "Calice cristallo Cabernet";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Bicchieri/Vino bianco/Calice-cristallo-Cabernet.jpg";
	document.getElementById("h_bvino").value =  pbvin;
	document.getElementById("n_bvino").value =  nbvin;
	}
	else if (x == "Sandra"){
	pbvin = 0.50;
	nbvin = "Calice cristallo Sandra";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Bicchieri/Vino bianco/Calice-cristallo-Sandra.jpg";
	document.getElementById("h_bvino").value =  pbvin;
	document.getElementById("n_bvino").value =  nbvin;
	}
	else if (x == 0){
	document.getElementById("menu-zero").style.display="none";
	}
}


/*vinorosso*/
function prezzorvino(){
	var x = document.getElementById("s_rvino").value;
    //document.getElementById("valore_bicchieri").innerHTML = "Prezzo: " + x + "&euro;";
    //document.getElementById("h_bicchieri").value =  pbic ;
	
	if (x == "Baloon"){
	prvin = 0;
	nrvin = "Bicchiere Baloon";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Bicchieri/Vino rosso/Baloon-vino-rosso.jpg";
	document.getElementById("h_rvino").value =  prvin;
	document.getElementById("n_rvino").value =  nrvin;
	}
	else if (x == "Sandra"){
	prvin = 0.50;
	nrvin = "Calice cristallo Sandra";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Bicchieri/Vino rosso/Calice-cristallo-Sandra.jpg";
	document.getElementById("h_rvino").value =  prvin;
	document.getElementById("n_rvino").value =  nrvin;
	}
	else if (x == 0){
	document.getElementById("menu-zero").style.display="none";
	}
}


/*flute*/
function prezzoflute(){
	var x = document.getElementById("s_flute").value;
    //document.getElementById("valore_flute").innerHTML = "Prezzo: " + x + "&euro;";
    //document.getElementById("h_flute").value =  pbic ;
	
	if (x == "Tulipano"){
	pflut = 0;
	nflut = "Flute Tulipano";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Bicchieri/Flute/Flute-tulipano.jpg";
	document.getElementById("h_flute").value =  pflut;
	document.getElementById("n_flute").value =  nflut;
	}
	else if (x == "Franciacorta"){
	pflut = 0.60;
	nflut = "Flute cristallo Franciacorta";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Bicchieri/Flute/Flute-cristallo-Franciacorta.jpg";
	document.getElementById("h_flute").value =  pflut;
	document.getElementById("n_flute").value =  nflut;
	}
		else if (x == "Sandra"){
	pflut = 0.50;
	nflut = "Flute cristallo Sandra";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Bicchieri/Flute/Flute-cristallo-Sandra.jpg";
	document.getElementById("h_flute").value =  pflut;
	document.getElementById("n_flute").value =  nflut;
	}
	else if (x == 0){
	document.getElementById("menu-zero").style.display="none";
	}
}


/*sedie*/
function prezzosedie(){
	var x = document.getElementById("s_sedie").value;
    //document.getElementById("valore_flute").innerHTML = "Prezzo: " + x + "&euro;";
    //document.getElementById("h_flute").value =  pbic ;
	
	if (x == "tb"){
	psed = 0;
	nsed = "Sedia Thonet vestina bianca";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Sedie/Thonet-vestita-bianca.jpg";
	document.getElementById("h_sedia").value =  psed;
	document.getElementById("n_sedia").value =  nsed;
	}
	else if (x == "ta"){
	psed = 0;
	nsed = "Sedia Thonet vestina avorio";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Sedie/Thonet-vestita-avorio.jpg";
	document.getElementById("h_sedia").value =  psed;
	document.getElementById("n_sedia").value =  nsed;
	}
		else if (x == "chiavarina"){
	psed = 1.50;
	nsed = "Sedia chiavarina bianca";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Sedie/Sedia-chiavarina-bianca.jpg";
	document.getElementById("h_sedia").value =  psed;
	document.getElementById("n_sedia").value =  nsed;
	}
			else if (x == "parigina"){
	psed = 2.50;
	nsed = "Sedia parigina decap&egrave;";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Sedie/Sedia-parigina-decape.jpg";
	document.getElementById("h_sedia").value =  psed;
	document.getElementById("n_sedia").value =  nsed;
	}
	else if (x == 0){
	document.getElementById("menu-zero").style.display="none";
	}
}


/*posate
function prezzoposate(){
	var x = document.getElementById("s_posate").value;
	pposate = x;
    document.getElementById("valore_posate").innerHTML = "Prezzo: " + x + "&euro;";
    document.getElementById("h_posate").value =  pposate;
	
		if (x == 10){
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/fargento.png";
	}
	else if (x == 9){
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/foro.png";
	}
	else if (x == 0){
	document.getElementById("menu-zero").style.display="none";
	}

//somma totale	
	var a = parseInt(ploc);
	var b = parseInt(pbaby);
	var c = parseInt(pposate);
	var d = parseInt(pbic);
	var e = parseInt(ppia);
	var f = parseInt(pmen);
	var g = parseInt(pfio);
	var h = parseInt(pauto);
	var totale =  a + b + c + d + e + f + g + h;
	
    document.getElementById("valore_totale").innerHTML = "Totale: " + totale + "&euro;";
}
*/


/*step4*/
/*menu*/
function prezzomenu(){
	var x = document.getElementById("s_menu").value;
	//tmen = x;
    //document.getElementById("valore_menu").innerHTML = "Prezzo: " + x + "&euro;";
    //document.getElementById("h_menu").value = tmen;
	document.getElementById("h_menu").value = pmen;
	
	if ( x == 0){
		pmen = 0;
		document.getElementById("h_menu").value = pmen;
		document.getElementById("menu-zero").style.display="none";
	}
    else if (x == "classico"){
		pmen = 80;
		tmen = "Men&ugrave; Classico";
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Menu/Menu_classico.jpg";
		document.getElementById("n_menu").value = tmen;
		document.getElementById("h_menu").value = pmen;
	}
	else if (x == "isole"){
		pmen = 80;
		tmen = "Men&ugrave; Isole";
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Menu/Menu_isole.jpg";
		document.getElementById("n_menu").value = tmen;
		document.getElementById("h_menu").value = pmen;
	}
}


/*step5*/

/*Open bar*/
function prezzoopen(){
	var y = document.getElementById("yop").checked;
	if ( y == true){
	popen = 5;
	nopen = "Open bar";
    //document.getElementById("valore_open").innerHTML = "Prezzo: " + z + "&euro;";
    document.getElementById("h_open").value = popen;    
    document.getElementById("n_open").value = nopen;    
	}
	else if (y == false){
	nopen= "No Open bar";
	popen = 0
	//document.getElementById("valore_open").innerHTML =  "Prezzo: " + m + "&euro;";
    document.getElementById("h_open").value = popen;    
    document.getElementById("n_open").value = nopen;  
	}	
}


/*Ombra*/
function prezzoombra(){
	var x = document.getElementById("q_ombra").value;
	var y = document.getElementById("yo").checked;
	if ( y == true){
	document.getElementById("q_ombra").style.display="block";
	pombra = 50;
	nombra = "Ombrellone 3x4";
	var z = pombra * x;
	pombra = z;
    //document.getElementById("valore_baby").innerHTML = "Prezzo: " + z + "&euro;";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Accessori vari/Ombrellone-bianco-3x4m.jpg";
    document.getElementById("h_ombra").value = pombra;    
    document.getElementById("n_ombra").value = nombra;  
	document.getElementById("o_ombra").value = x;	
	}
	else if (y == false){
	nombra= "No Ombrellone 3x4";
	pombra = 0;
	oombra = 0;
	//document.getElementById("valore_baby").innerHTML =  "Prezzo: " + m + "&euro;";
	document.getElementById("menu-zero").style.display="none";
    document.getElementById("h_ombra").value = pombra;    
    document.getElementById("n_ombra").value = nombra;
	document.getElementById("o_ombra").value = oombra;	
	document.getElementById("q_ombra").style.display="none"; 	
	}	
}


/*divanetto*/
function prezzodivano(){
	var x = document.getElementById("q_divano").value;
	var y = document.getElementById("yd").checked;
	if ( y == true){
	document.getElementById("q_divano").style.display="block";
	pdiva = 20;
	ndiva = "Divanetto bancali";
	var z = pdiva * x;
	pdiva = z;
    //document.getElementById("valore_baby").innerHTML = "Prezzo: " + z + "&euro;";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Accessori vari/Divanetto-con-bancali.jpg";
    document.getElementById("h_divano").value = pdiva;    
    document.getElementById("n_divano").value = ndiva;  
	document.getElementById("o_divano").value = x;
	}
	else if (y == false){
	ndiva= "No divanetto bancali";
	pdiva = 0;
	odiva = 0;
	//document.getElementById("valore_baby").innerHTML =  "Prezzo: " + m + "&euro;";
	document.getElementById("menu-zero").style.display="none";
    document.getElementById("h_divano").value = pdiva;    
    document.getElementById("n_divano").value = ndiva;  
	document.getElementById("o_divano").value = odiva;	
	document.getElementById("q_divano").style.display="none";
	}
}


/*poufq*/
function prezzopoufq(){
	var x = document.getElementById("q_poufq").value;
	var y = document.getElementById("ypq").checked;
	if ( y == true){
	document.getElementById("q_poufq").style.display="block";
	ppoufq = 40;
	npoufq = "Pouf quadrato";
	var z = ppoufq * x;
	ppoufq = z;
    //document.getElementById("valore_baby").innerHTML = "Prezzo: " + z + "&euro;";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Accessori vari/Pouf-cubo-bianco.jpg";
    document.getElementById("h_poufq").value = ppoufq;    
    document.getElementById("n_poufq").value = npoufq;  
    document.getElementById("o_poufq").value = x;		
	}
	else if (y == false){
	npoufq= "No Pouf quadrato";
	ppoufq = 0;
	opoufq = 0;
	//document.getElementById("valore_baby").innerHTML =  "Prezzo: " + m + "&euro;";
	document.getElementById("menu-zero").style.display="none";
    document.getElementById("h_poufq").value = ppoufq;    
    document.getElementById("n_poufq").value = npoufq;  
	document.getElementById("o_poufq").value = opoufq;	
	document.getElementById("q_poufq").style.display="none";
	}		
}


/*poufr*/
function prezzopoufr(){
	var x = document.getElementById("q_poufr").value;
	var y = document.getElementById("ypr").checked;
	var n = document.getElementById("npr").checked;
	if ( y == true){
	document.getElementById("q_poufr").style.display="block";
	ppoufr = 40;
	npoufr = "Pouf rettangolare ecopelle";
	var z = ppoufr * x;
	ppoufr = z;
    //document.getElementById("valore_baby").innerHTML = "Prezzo: " + z + "&euro;";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Accessori vari/Panca-ecopelle-esterno.jpg";
    document.getElementById("h_poufr").value = ppoufr;    
    document.getElementById("n_poufr").value = npoufr;  
    document.getElementById("o_poufr").value = x;		
	}
	else if (y == false){
	npoufr= "No Pouf rettangolare ecopelle";
	ppoufr = 0;
	opoufr = 0;
	//document.getElementById("valore_baby").innerHTML =  "Prezzo: " + m + "&euro;";
	document.getElementById("menu-zero").style.display="none";	
    document.getElementById("h_poufr").value = ppoufr;    
    document.getElementById("n_poufr").value = npoufr;
	document.getElementById("o_poufr").value = opoufr;	
	document.getElementById("q_poufr").style.display="none";	
	}		
}

/*isola*/
/*function prezzoisola(){
	var x = document.getElementById("q_isola").value;
	var y = document.getElementById("yi").checked;
	var n = document.getElementById("ni").checked;
	if ( y == true){
	document.getElementById("q_isola").style.display="block";
	pisola = 2;
	nisola = "Isola tonda completa";
	var z = pisola * x;
	pisola = z;
    //document.getElementById("valore_isola").innerHTML = "Prezzo: " + z + "&euro;";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Accessori vari/Isola-tonda-completa.jpg";
    document.getElementById("h_pisola").value = pisola;    
    document.getElementById("n_pisola").value = nisola;  
    document.getElementById("o_isola").value = x;	
	}
	else if (y == false){
	nisola = "No isola tonda completa";
	pisola = 0;
	oisola = 0;
	//document.getElementById("valore_baby").innerHTML =  "Prezzo: " + m + "&euro;";
	document.getElementById("menu-zero").style.display="none";
    document.getElementById("h_pisola").value = pisola;    
    document.getElementById("n_pisola").value = nisola;  
	document.getElementById("o_isola").value = oisola;	
	document.getElementById("q_isola").style.display="none";
	}		
}
*/
/*confettata*/
function prezzoconf(){
	var x = document.getElementById("q_conf").value;
	var y = document.getElementById("yc").checked;
	var n = document.getElementById("nc").checked;
	if ( y == true){
	document.getElementById("q_conf").style.display="block";
	pconf = 250;
	nconf = "Confettata";
	var z = pconf * x;
	pconf = z;
    //document.getElementById("valore_isola").innerHTML = "Prezzo: " + z + "&euro;";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Confettata/Confettata.jpg";
    document.getElementById("h_pconf").value = pconf;    
    document.getElementById("n_pconf").value = nconf;  
    document.getElementById("o_conf").value = x;	
	}
	else if (y == false){
	nconf = "No Confettata";
	pconf = 0;
	oconf = 0;
	//document.getElementById("valore_baby").innerHTML =  "Prezzo: " + m + "&euro;";
	document.getElementById("menu-zero").style.display="none";
    document.getElementById("h_pconf").value = pconf;    
    document.getElementById("n_pconf").value = nconf;  
	document.getElementById("o_conf").value = oconf;	
	document.getElementById("q_conf").style.display="none";
	}		
}
/*Fuochi d'artificio*/
function prezzofire(){
	var x = 1;
	var y = document.getElementById("yf").checked;
	var n = document.getElementById("nf").checked;
	if ( y == true){
	//document.getElementById("q_fire").style.display="block";
	pfire = 1000;
	nfire = "Fucohi d'artificio";
	var z = pfire * x;
	pfire = z;
    //document.getElementById("valore_isola").innerHTML = "Prezzo: " + z + "&euro;";
	document.getElementById("menu-zero").style.display="block";
	document.getElementById("menu-zero").src = "images/Fuochi/Fuochi.jpg";
    document.getElementById("h_pfire").value = pfire;    
    document.getElementById("n_pfire").value = nfire;  
    document.getElementById("o_fire").value = x;	
	}
	else if (y == false){
	nfire = "No Fuochi d'artificio";
	pfire = 0;
	ofire = 0;
	//document.getElementById("valore_baby").innerHTML =  "Prezzo: " + m + "&euro;";
	document.getElementById("menu-zero").style.display="none";
    document.getElementById("h_pfire").value = pfire;    
    document.getElementById("n_pfire").value = nfire;  
	document.getElementById("o_fire").value = ofire;	
	document.getElementById("q_fire").style.display="none";
	}		
}

/*babysitter*/
function prezzobaby(){
	var x = document.getElementById("q_baby").value;
	var y = document.getElementById("yb").checked;
	var n = document.getElementById("nb").checked;
	var obaby = document.getElementById("q_baby").value;
	if ( y == true){	
	document.getElementById("q_baby").style.display="block";
	pbaby = 15;
	nbaby = "Babysitter";
	var z = pbaby * x;
	pbaby = z;
   // document.getElementById("valore_baby").innerHTML = "Prezzo: " + z + "&euro;";
   	document.getElementById("menu-zero").style.display="none";
    document.getElementById("h_baby").value = pbaby;  
    document.getElementById("n_baby").value = nbaby;
    document.getElementById("o_baby").value = obaby;	
	}
	else if (n == true){
	pbaby = 0;
	nbaby = "No babysitter";
	obaby = 0;
	//document.getElementById("valore_baby").innerHTML =  "Prezzo: " + m + "&euro;";
	document.getElementById("menu-zero").style.display="none";
    document.getElementById("h_baby").value = pbaby;
    document.getElementById("n_baby").value = nbaby;
	document.getElementById("o_baby").value = obaby;	
	document.getElementById("q_baby").style.display="none";
	}	
}


/*auto*/
function prezzoauto(){
	var x = document.getElementById("s_auto").value;
	var y = document.getElementById("km_auto").value;
	var check = document.getElementById("ya").checked;
	var kmauto = 0;

    //document.getElementById("valore_auto").innerHTML = "Prezzo: " + z + "&euro;";
	//document.getElementById("h_auto").value  = pauto;
	
	if ( check == true){	
	document.getElementById("s_auto").style.display="block";
	document.getElementById("km_auto").style.display="block";	
	}else if (check == false){
	pauto = 0;
	nauto = "No automobile";
	//document.getElementById("valore_baby").innerHTML =  "Prezzo: " + m + "&euro;";
	document.getElementById("menu-zero").style.display="none";
    document.getElementById("h_auto").value = pauto;
    document.getElementById("n_auto").value = nauto;
	document.getElementById("s_auto").style.display="none";
	document.getElementById("km_auto").style.display="none";
	}	
	
	if (x == "M" && y == 1){
	pauto = 250;
	nauto = "Mercedes 250c";
		document.getElementById("h_auto").value = pauto;
		document.getElementById("n_auto").value = nauto;
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Automobili/Mercedes-250-C.jpg";
	}
	else if (x == "M" && y == 2){
	pauto = 350;
	nauto = "Mercedes 250c";
		document.getElementById("h_auto").value = pauto;
		document.getElementById("n_auto").value = nauto;
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Automobili/Mercedes-250-C.jpg";
	}
		else if (x == "M" && y == 3){
	pauto = 450;
	nauto = "Mercedes 250c";
		document.getElementById("h_auto").value = pauto;
		document.getElementById("n_auto").value = nauto;
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Automobili/Mercedes-250-C.jpg";
	}
		else if (x == "M" && y == 4){
	pauto = 550;
	nauto = "Mercedes 250c";
		document.getElementById("h_auto").value = pauto;
		document.getElementById("n_auto").value = nauto;
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Automobili/Mercedes-250-C.jpg";
	}/*fiat*/
		else if (x == "F" && y == 1){
	pauto = 250;
	nauto = "Fiat 1100 E";
		document.getElementById("h_auto").value = pauto;
		document.getElementById("n_auto").value = nauto;
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Automobili/Fiat-1100-E.jpg";
	}
		else if (x == "F" && y == 2){
	pauto = 350;
	nauto = "Fiat 1100 E";
		document.getElementById("h_auto").value = pauto;
		document.getElementById("n_auto").value = nauto;
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Automobili/Fiat-1100-E.jpg";
	}
		else if (x == "F" && y == 3){
	pauto = 450;
	nauto = "Fiat 1100 E";
		document.getElementById("h_auto").value = pauto;
		document.getElementById("n_auto").value = nauto;
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Automobili/Fiat-1100-E.jpg";
	}
		else if (x == "F" && y == 4){
	pauto = 550;
	nauto = "Fiat 1100 E";
		document.getElementById("h_auto").value = pauto;
		document.getElementById("n_auto").value = nauto;
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Automobili/Fiat-1100-E.jpg";
	}/*fiat*/
		else if (x == "C" && y == 1){
	pauto = 150;
	nauto = "Citro&euml;n 2CV";
		document.getElementById("h_auto").value = pauto;
		document.getElementById("n_auto").value = nauto;
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Automobili/Citroen-2-CV.jpg";
	}
		else if (x == "C" && y == 2){
	pauto = 250;
	nauto = "Citro&euml;n 2CV";
		document.getElementById("h_auto").value = pauto;
		document.getElementById("n_auto").value = nauto;
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Automobili/Citroen-2-CV.jpg";
	}
		else if (x == "C" && y == 3){
	pauto = 350;
	nauto = "Citro&euml;n 2CV";
		document.getElementById("h_auto").value = pauto;
		document.getElementById("n_auto").value = nauto;
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Automobili/Citroen-2-CV.jpg";
	}
		else if (x == "C" && y == 4){
	pauto = 450;
	nauto = "Citro&euml;n 2CV";
		document.getElementById("h_auto").value = pauto;
		document.getElementById("n_auto").value = nauto;
		document.getElementById("menu-zero").style.display="block";
	    document.getElementById("menu-zero").src = "images/Automobili/Citroen-2-CV.jpg";
	}	
	else if (x == 0) {
    nauto = "No auto";
    document.getElementById("n_auto").value = nauto;
	document.getElementById("menu-zero").style.display="none";
	}
    else if (x == "no"){
    nauto = "No auto";
    document.getElementById("n_auto").value = nauto;
	document.getElementById("menu-zero").style.display="none";
	}
	
	if ( y == 0){ 
	document.getElementById("kmauto").value = kmauto;
	}
	else if ( y == 1){ 
	kmauto = "da 0 a 50 km";
	document.getElementById("kmauto").value = kmauto;
	}
	else if ( y == 2){ 
	kmauto = "da 50 a 100 km";
	document.getElementById("kmauto").value = kmauto;
	}
	else if ( y == 3){ 
	kmauto = "da 100 a 150 km";
	document.getElementById("kmauto").value = kmauto;
	}
	else if ( y == 4){ 
	kmauto = "da 150 a 200 km";
	document.getElementById("kmauto").value = kmauto;
	}
}


function totale(){
var a = Number(ploc);/*location*/
var b = Number(pbaby); /*babysitter*/
//var c= parseInt(pposate);/*posate*/
var d = Number(pbic);/*acqua*/
var f = Number(ppia);/*piatti*/
var g = Number(pmen); /*menu*/
//var h = parseInt(pfio); /*fiori*/
var i = Number(pauto); /*auto*/
var l = Number(ptav);/*tavolo*/
var m = Number(ptov);/*tovaglia*/
var n = Number(psot);/*sottopiatti*/
var o = Number(psed);/*sedie*/
var p = Number(pflut); /*flute*/
var q = Number(pombra); /*ombra*/
var r = Number(pdiva); /*divano*/
var s = Number(ppoufq); /*pouf quadrato*/
var t = Number(ppoufr); /*pouf rettangolare*/
var u = Number(pisola); /*isola*/
var v = Number(popen); /*open bar*/
var z = Number(prvin); /*vino rosso*/
var aa = Number(pbvin); /*vino bianco*/
var conf = Number(pconf);/*confettata*/
var fire = Number(pfire);/*fuochi d'artificio*/
var invitati = document.getElementById("invitati").value;
var inv = Number(invitati);

var totale =  + a + b + i + conf + fire + q + r + s + t + u + ( d + f + g + l + m + n + o + p + z + aa + v) * (inv);


/* (a + b + i) + ( d + f + g + l + m + n + o + p + q + r + s + t + u + v + z+ aa) * (inv)*/ ;



   // document.getElementById("valore_totale").innerHTML = "Totale: " + totale + "&euro;"; 
	document.getElementById("PalazzoMartino").style.display="none";
	document.getElementById("MontidellaPieve").style.display="none";
	document.getElementById("VillaMazzucchelliM").style.display="none";
	document.getElementById("VillaMazzucchelliR").style.display="none";
	document.getElementById("villasigurta").style.display="none";
	document.getElementById("cortecola").style.display="none";
	document.getElementById("menu-zero").style.display="none";   
	document.getElementById("valore_totale").innerHTML = "Totale: " + totale +"&euro; " ;
	document.getElementById("h_invitati").value = inv;
	document.getElementById("h_totale").value = totale;
	
	var vtav = 0;
	var tavolata = document.getElementById("s_tavoli").value;
    //document.getElementById("valore_tavolo").innerHTML = "Prezzo: " + x + "&euro;";

	
	if (tavolata == 0){
		vtav = 0;
		document.getElementById("v_tavoli").value =  vtav;
	}
	else if (tavolata == 8){
		ntavoli = (inv / 8 );
		vtav = ntavoli.toFixed(2);
		document.getElementById("v_tavoli").value =  vtav;
	}
	else if (tavolata == 10){
		ntavoli = (inv / 10 );
		vtav = ntavoli.toFixed(2);
		document.getElementById("v_tavoli").value =  vtav;
	}
	else if (tavolata == "reale"){
		ntavoli = 1;
		vtav = ntavoli;
		document.getElementById("v_tavoli").value =  vtav;
	}
}

function validate(){
	
	if( document.preventivo.nome.value == "" )
         {
            alert( "Inserisci il Nome!" );
            document.preventivo.nome.focus() ;
            return false;
         }
		 
}
