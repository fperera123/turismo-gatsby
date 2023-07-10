	
	var attempt = 0;
	var d = new Date();
	var timeEulerian = d.getTime();
	var etuix_code;
	
	/*
	 * 
	 */
	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	/*
	 *  Espera a tener las cookies de aceptar cookies para ver si vamos a mirar o no personlaizacion
	 */
	async function awaitForCookies() {

		while (attempt < 10000) {
			//console.log(Math.abs(new Date() - d)+' -- comprobar cookies --> Intento: '+attempt);
			cookie_agreed = getCookie('cookie-agreed');
			if(cookie_agreed == '2'){
				cookie_agreed_categories = getCookie('cookie-agreed-categories');
				//console.log(Math.abs(new Date() - d)+' -- comprobar cookies --> cookie-agreed-categories: ' + cookie_agreed_categories);
				//Si aceptamso cookies, cargamos personalizacion
				if (cookie_agreed_categories.indexOf("marketing") > 0 ) {
					setCampaignName();
				} else {
					//No aceptamos cookies, pero podemos cargar los bloques
					setCookie('dmp-get-blocks', 1, null);
				}
				return;
			}
			await sleep(100);
			//attempt++;
		}
	}
	
	//console.log(Math.abs(new Date())+' -- ' + Math.abs(new Date() - d)+' -- Empieza la ejecucion ');
	setCookie('dmp-get-blocks', 0, null);
	//Esperamos a saber si podemos on cargar la personalizacion
	awaitForCookies();

	//console.log(Math.abs(new Date())+' -- ' + Math.abs(new Date() - d)+' --tras comprobar cookies ');
	
	
	/*
 	 * 
 	 */
	function setCampaignName() {
		var maxAttempts = 5;
		var minutesExpiration = 5;
		//console.log(Math.abs(new Date() - d)+' -- setCampaignName --> Entramos');
		//comprobamos si tenemos campaña por url
		var url_string = window.location.href;
		var url = new URL(url_string);
		var url_campaign = url.searchParams.get("campaign");		
		if (url_campaign !== null && url_campaign !== '') {
			//console.log(Math.abs(new Date() - d)+' -- setCampaignName --> Campaña URL ' + url_campaign);
			setCookie('dmp-campaign-personalize', 1, null);
			setCookie('dmp-get-blocks', 1, null);
			setCookie('dmp-campaign-name', url_campaign, 365);
			return;
		} else {
			setCookie('dmp-campaign-personalize', 0, null); //Si hay campaña, ya se pondra a 1
		}
		
		//Will be requested a new campaign name just in case of dmp-campaign-expiration will be over
		var oldExpiration = getCookie('dmp-campaign-expiration');
		//console.log(Math.abs(new Date() - d)+' -- setCampaignName --> oldExpiration: ' + oldExpiration);
		//var campaignName = getCookie('dmp-campaign-name');
		//alert(campaignName);
		if(oldExpiration !== null && oldExpiration !== 'undefined'){
			var current = new Date();
			//console.log(Math.abs(new Date() - d)+' -- setCampaignName --> current: ' + current);
			var oldExpirationDate = new Date(parseInt(oldExpiration)*1000);
			//console.log(Math.abs(new Date() - d)+' -- setCampaignName --> oldExpirationDate: ' + oldExpirationDate);
			if(current < oldExpirationDate){
				//the execution goes on because the expiration time is not over 	
				//console.log(Math.abs(new Date() - d)+' -- setCampaignName --> No es necesario llamar');
				setCookie('dmp-get-blocks', 1, null);								
				return; //si la campaña no ha expirado, salimos
			}						
		}			
		//console.log(Math.abs(new Date() - d)+' -- setCampaignName --> Obtenemos etuix');
		//getCookieFromServer('dmp-get-blocks');
		getCookieFromServer('etuix', function (result) {
			//etuix_code = result;
			//console.log(Math.abs(new Date() - d)+' -- Volvemos de la llamada ');
		});
		
	}

	
	/*
 	 * 
 	 */
	function getCookieFromServer(cookie, callback){
		 //console.log(Math.abs(new Date() - d)+' -- getCookieFromServer --> Obtener ' + cookie);
		 var httpRequest = new XMLHttpRequest();// Initiatlization of XMLHttpRequest  
         if (!httpRequest) {  
        	 console.log(' Cannot create an XMLHTTP instance');  
             return false;  
         }  
         httpRequest.onreadystatechange = function () {        // ready state event, will be executed once the server send back the data   
             if (httpRequest.readyState === XMLHttpRequest.DONE) {  
                 if (httpRequest.status === 200) {  
                	 //console.log(httpRequest.responseText);
                	 //console.log(Math.abs(new Date())+' -- ' + Math.abs(new Date() - d)+' -- getCookieFromServer --> Obtenida ' + cookie);
                	 //callback(httpRequest.responseText);
                	 callback(null);
                 } else {  
                	 console.log('There was a problem with the request.');     
                	 callback(null);
                 }  
             }  
         };  
         httpRequest.open('GET', '/get_dmp_campaign.php?cookie=' + cookie); // service call   
         httpRequest.send();
	}
	
	
	/*
 	 * 
 	 */
	function getCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ')
				c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0)
				return c.substring(nameEQ.length, c.length);
		}
		return null;
	}
	
	/*
 	 * 
 	 */
	function setCookie(cname, cvalue, exdays) {
		if (exdays == null) {
			document.cookie = cname + "=" + cvalue + ";path=/";
			return;
		}
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}
	
	//console.log(Math.abs(new Date() - d)+' -- Al final de la libreria ');
