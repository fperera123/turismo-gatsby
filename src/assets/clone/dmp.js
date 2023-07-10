/*---------------
 * 
 *---------------*/
function generate_dmp_script_error(){
	var dmp_path = document.getElementById('dmp-path').value;
	var dmp_pagegroup = document.getElementById('dmp-pagegroup').value;
	var dmp_idioma = document.getElementById('dmp-idioma').value;
	//specific parameters
	var dmp_error = document.getElementById('dmp-error').value;
	var ea_datalayer = [
		"'path'", "'"+dmp_path+"'",
		"'pagegroup'", "'"+dmp_pagegroup+"'",
		"'idioma'", "'"+dmp_idioma+"'",
		//specific parameters
		"'error'", "'"+dmp_error+"'"		
	];
	
	write_dmp_script(ea_datalayer);
	
}

/*---------------
 * 
 *---------------*/
function generate_dmp_script_category(){
	var dmp_path = document.getElementById('dmp-path').value;
	var dmp_pagegroup = document.getElementById('dmp-pagegroup').value;
	//specific parameters
	var dmp_cflag_val_tipoServicio = document.getElementById('dmp-cflag-val-filtroDirectorioServicioTipoServicio').value;
	var dmp_cflag_val_motivacion = document.getElementById('dmp-cflag-val-motivacion').value;
	var dmp_cflag_val_isla = document.getElementById('dmp-cflag-val-isla').value;
	var dmp_cflag_val_perfil = document.getElementById('dmp-cflag-val-perfil').value;
	var dmp_idioma = document.getElementById('dmp-idioma').value;
	var dmp_motivacion = document.getElementById('dmp-motivacion').value;
	var dmp_isla = document.getElementById('dmp-isla').value;
	var dmp_perfil = document.getElementById('dmp-perfil').value;
	var dmp_prdref = document.getElementById('dmp-prdref').value;
	var dmp_prdname = document.getElementById('dmp-prdname').value;
	var dmp_filtros_dist_recurso_key = document.getElementById('dmp-filtros-dist-recurso-keys').value;
	var dmp_filtros_dist_recurso_values = document.getElementById('dmp-filtros-dist-recurso-values').value;
	//var dmp_cflag_val_filtroPlayasTipo = document.getElementById('dmp-cflag-val-filtroPlayasTipo').value;
	//var dmp_cflag_val_filtroPlayasColorArena = document.getElementById('dmp-cflag-val-filtroPlayasColorArena').value;
	
	var ea_datalayer = [
		"'path'", "'"+dmp_path+"'",
		"'pagegroup'", "'"+dmp_pagegroup+"'",
		//specific parameters
		"'cflag-key'", "'filtroMotivacion'",
		"'cflag-val'", dmp_cflag_val_motivacion,
		"'cflag-key'", "'filtroDirectorioServicioTipoServicio'",
		//"'cflag-val'", "'"+dmp_cflag_val_tipoServicio+"'",		
		"'cflag-val'", dmp_cflag_val_tipoServicio,
		"'cflag-key'", "'filtroIsla'",
		//"'cflag-val'", "'"+dmp_cflag_val_isla+"'",
		"'cflag-val'", dmp_cflag_val_isla,
		"'cflag-key'", "'perfil'",
		"'cflag-val'", dmp_cflag_val_perfil,
		"'idioma'", "'"+dmp_idioma+"'",
		//"'motivacion'", "'"+dmp_motivacion+"'",
		//"'isla'", "'"+dmp_isla+"'",
		"'perfil'", "'"+dmp_perfil+"'",
		"'prdref'", "'"+dmp_prdref+"'",
		"'prdname'", "'"+dmp_prdname+"'",
		/*"'cflag-key'", "'filtroPlayasTipo'",
		"'cflag-val'", "'"+dmp_cflag_val_filtroPlayasTipo+"'",
		"'cflag-key'", "'filtroPlayasColorArena'",
		"'cflag-val'", "'"+dmp_cflag_val_filtroPlayasColorArena+"'"*/
	];	
	//Cogmeos los filtros de la distribuidora de recurso
	var arr_keys = dmp_filtros_dist_recurso_key.split(',');
	var arr_values = dmp_filtros_dist_recurso_values.split(',');
	if (arr_keys.length == arr_values.length &&  arr_keys.length > 1){
		 for (i=0;i<arr_keys.length-1;i++){
			 ea_datalayer.push("'cflag-key'");
			 ea_datalayer.push("'" + arr_keys[i] + "'");
			 ea_datalayer.push("'cflag-val'");
			 ea_datalayer.push("'" + arr_values[i] + "'");
		 }
	}

	write_dmp_script(ea_datalayer);
}

/*---------------
 * 
 *---------------*/
function generate_dmp_script_generic(){
	var dmp_path = document.getElementById('dmp-path').value;
	var dmp_pagegroup = document.getElementById('dmp-pagegroup').value;
	//specific parameters
	var dmp_cflag_val_motivacion = document.getElementById('dmp-cflag-val-motivacion').value;
	var dmp_cflag_val_isla = document.getElementById('dmp-cflag-val-isla').value;
	var dmp_cflag_val_perfil = document.getElementById('dmp-cflag-val-perfil').value;
	var dmp_idioma = document.getElementById('dmp-idioma').value;
	var dmp_motivacion = document.getElementById('dmp-motivacion').value;
	var dmp_isla = document.getElementById('dmp-isla').value;
	
	if (dmp_cflag_val_motivacion == ''){
		dmp_cflag_val_motivacion = "['Generico']";
	}
	if (dmp_cflag_val_isla == ''){
		dmp_cflag_val_isla = "[]";
	}
	if (dmp_cflag_val_perfil == ''){
		dmp_cflag_val_perfil = "[]";
	}
	if (dmp_motivacion == ''){
		dmp_motivacion = "Generico";
	}	
	
	
	var ea_datalayer = [
		"'path'", "'"+dmp_path+"'",
		"'pagegroup'", "'"+dmp_pagegroup+"'",
		//specific parameters
		"'cflag-key'", "'motivacion'",
		"'cflag-val'", dmp_cflag_val_motivacion,
		"'cflag-key'", "'isla'",
		"'cflag-val'", dmp_cflag_val_isla,
		"'cflag-key'", "'perfil'",
		"'cflag-val'", dmp_cflag_val_perfil,
		"'idioma'", "'"+dmp_idioma+"'",
		"'motivacion'", "'"+dmp_motivacion+"'",
		"'isla'", "'"+dmp_isla+"'",
	];	
	
	//Elemetos Bono
	var dmp_type = document.getElementById('dmp-type').value;
	var dmp_email = document.getElementById('dmp-email').value;
	var dmp_estimate = document.getElementById('dmp-estimate').value;
	var dmp_ref = document.getElementById('dmp-ref').value;
	var dmp_uid = document.getElementById('dmp-uid').value;
	
	if (dmp_type != '') {
		ea_datalayer.push("'type'");
		ea_datalayer.push("'" + dmp_type + "'");
	}
	if (dmp_email != '') {
		ea_datalayer.push("'email'");
		ea_datalayer.push("'" + dmp_email + "'");
	}
	if (dmp_estimate != '') {
		ea_datalayer.push("'estimate'");
		ea_datalayer.push("'" + dmp_estimate + "'");
	}
	if (dmp_ref != '') {
		ea_datalayer.push("'ref'");
		ea_datalayer.push("'" + dmp_ref + "'");
	}
	if (dmp_uid != '') {
		ea_datalayer.push("'uid'");
		ea_datalayer.push("'" + dmp_uid + "'");
	}
	
	write_dmp_script(ea_datalayer);
}

/*---------------
 * 
 *---------------*/
function generate_dmp_script_search(){
	var dmp_path = document.getElementById('dmp-path').value;
	var dmp_pagegroup = document.getElementById('dmp-pagegroup').value;
	//specific parameters
	var dmp_searchengine = document.getElementById('dmp-isearchengine').value;
	var dmp_results = 0;
	if(document.getElementById('dmp-lsearchresults') != null){
		var dmp_results = document.getElementById('dmp-lsearchresults').value;
	}
	var dmp_search_search_results = document.getElementById('dmp-search-texto-search-results').value;		
	var dmp_search_agenda = document.getElementById('dmp-search-agenda').value;		
	var dmp_f_inicio = document.getElementById('dmp-f-inicio').value;
	var dmp_f_fin = document.getElementById('dmp-f-fin').value;
	var dmp_cflag_val_edad = document.getElementById('dmp-cflag-val-filtroedad').value;
	var dmp_cflag_val_motivacion = document.getElementById('dmp-cflag-val-filtromotivacion').value;
	var dmp_cflag_val_isla = document.getElementById('dmp-cflag-val-filtroisla').value;
	var dmp_cflag_val_categoria = document.getElementById('dmp-cflag-val-filtrocategoria').value;
	var dmp_idioma = document.getElementById('dmp-idioma').value;
	
	var ea_datalayer = [
		"'path'", "'"+dmp_path+"'",
		"'pagegroup'", "'"+dmp_pagegroup+"'",
		//specific parameters
		"'isearchengine'", "'"+dmp_searchengine+"'",
		"'isearchresults'", "'"+dmp_results+"'",		
		"'isearchkey'", "'searchTextoBusqueda'",
		"'isearchdata'", "'"+dmp_search_search_results+"'",			
		"'isearchkey'", "'searchTextoABusquedaAgenda'",
		"'isearchdata'", "'"+dmp_search_agenda+"'",
		"'isearchkey'", "'searchFechaIniAgenda'",
		"'isearchdata'", "'"+dmp_f_inicio+"'",
		"'isearchkey'", "'searchFechaFinAgenda'",
		"'isearchdata'", "'"+dmp_f_fin+"'",
		"'fechaIniAgenda'", "'"+dmp_f_inicio+"'",
		"'fechaFinAgenda'", "'"+dmp_f_fin+"'",
		"'cflag-key'", "'filtroMotivacion'",
		"'cflag-val'", dmp_cflag_val_motivacion,
		"'cflag-key'", "'filtroIsla'",
		"'cflag-val'", dmp_cflag_val_isla,
		"'cflag-key'", "'filtroEdadAgenda'",
		"'cflag-val'", dmp_cflag_val_edad,
		"'cflag-key'", "'filtroCategoriaAgenda'",
		"'cflag-val'", dmp_cflag_val_categoria,		
		"'idioma'", "'"+dmp_idioma+"'",
	];	
	
	write_dmp_script(ea_datalayer);
}

/*---------------
 * 
 *---------------*/
function write_dmp_script(ea_datalayer){
	//Comprobamos cookies
	awaitForCookies(ea_datalayer);
}

/*
 * 
 */
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


/*
 *  Espera a tener las cookies de aceptar cookies para poner el script de dmp
 */
async function awaitForCookies(ea_datalayer) {
	var dmp_script = document.getElementById('dmp-script').value;
	var attempt = 0;

	while (attempt < 10000) {
		cookie_agreed = getCookie('cookie-agreed');
		if(cookie_agreed == '2'){
			cookie_agreed_categories = getCookie('cookie-agreed-categories');
			//Si aceptamos cookies, cargamos personalizacion
			if (cookie_agreed_categories.indexOf("tracking") > 0 ||
					cookie_agreed_categories.indexOf("marketing") > 0 ||
					cookie_agreed_categories.indexOf("obligatorios") > 0 ) {	
				  var src = "var EA_datalayer = ["+ ea_datalayer +"];" + dmp_script;
				  var script_tag = document.createElement( 'script' );
				  script_tag.innerHTML = src;
				  document.body.appendChild(script_tag);	
				  
				  await sleep(1000);
				  var dmp_send_cookies = getCookie('dmp-send-cookies');
				  if(dmp_send_cookies == null){
				  	setCookie('dmp-send-cookies', 1, null);
				  	eulerian_set_cookie();
				  }				  
				return;	
			}
			else {
				return;
			}
			
		}
		await sleep(100);
		//attempt++;
	}	
}

function eulerian_set_cookie(){
  var categories;
  categories = getCookie('cookie-agreed-categories');
  if(categories!==undefined){
          if(typeof _oEa != "undefined" && typeof EA_epmGet != "undefined") {
	  	setCookie('dmp-send-cookies', 0, null);
	  	var cookie_required = {type:"required", id:1, value:(categories.includes('obligatorios')) ? 1 : 0};
		  var cookie_tracking = {type:"tracking", id:10, value:(categories.includes('tracking')) ? 1 : 0};
		  var cookie_marketing = {type:"marketing", id:19, value:(categories.includes('marketing')) ? 1 : 0};
		  
		  var obj_categories = EA_epmGet();
		  
		  var tracking_id = 10;
		  var tracking_index = obj_categories.findIndex((obj => obj.id == tracking_id));
		  var marketing_id = 19;
		  var marketing_index = obj_categories.findIndex((obj => obj.id == marketing_id));
		  var send_object = true;
		  
		  //There are four different scenes in DMP:
		  //1 - Required												-> the script will not be activated. If it is activated, is because of a change in the preferences of cookies and it will be notified to DMP. 
		  //2 - Required / Tracking							-> Modify obj_categories
		  //3 - Required / Marketing						-> Modify obj_categories and “_oEa.cookieset(‘optinMarketing’, val, 1);”
		  //4 - Required / Tracking / Marketing -> EA_epmSetAllowAll(); and “_oEa.cookieset(‘optinMarketing’, val, 1);”
		  
		  //case 1
		  if(cookie_required.value == 1 && cookie_tracking.value == 0 && cookie_marketing.value == 0){
		  	if(obj_categories[tracking_index].allowed == false && obj_categories[marketing_index].allowed == false ){
		  		send_object = false;
		  	}
		  	obj_categories[tracking_index].allowed = false;
		  	obj_categories[tracking_index].denied = true;
		  	obj_categories[marketing_index].allowed = false;
		  	obj_categories[marketing_index].denied = true;
		  //case 2
		  }else if(cookie_required.value == 1 && cookie_tracking.value == 1 && cookie_marketing.value == 0){
		  	obj_categories[tracking_index].allowed = true;
		  	obj_categories[tracking_index].denied = false;
		  	obj_categories[marketing_index].allowed = false;
		  	obj_categories[marketing_index].denied = true;			  	
		  //case 3
		  }else if(cookie_required.value == 1 && cookie_tracking.value == 0 && cookie_marketing.value == 1){
		  	obj_categories[tracking_index].allowed = false;
		  	obj_categories[tracking_index].denied = true;
		  	obj_categories[marketing_index].allowed = true;
		  	obj_categories[marketing_index].denied = false;	
		  	_oEa.cookieset('optinMarketing', 1, 1);
		  //case 4
		  }else if(cookie_required.value == 1 && cookie_tracking.value == 1 && cookie_marketing.value == 1){
		  	_oEa.cookieset('optinMarketing', 1, 1);
		  	 EA_epmSetAllowAll();
		  }			 
		  
		  if(send_object){
		  	EA_epmSet(obj_categories);
		  	EA_epmEnd();
		  }
	  }
  }	  
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
