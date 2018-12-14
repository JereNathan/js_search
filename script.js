var searchBox = $d.querySelector("#search_box"); /* Se crea la caja de Busqueda */

var searchAllBox = $d.createElement("input"); /* se crea un imput */
	searchAllBox.setAttribute("type","text"); /* se le asigna el tipo text type="text" */
	searchAllBox.setAttribute("placeholder","Search.."); /* placeholder="Search" */
	searchAllBox.setAttribute("class","_searchAll"); /* class="_searchAll" */

var headBoxDiv = $d.createElement("div"); /* se crea una caja cabecera */
	headBoxDiv.setAttribute("class","_clH8950m32"); /* id="_clH8950m32" */

var buttonCancelSearch = $d.createElement("button"); /* se crea el boton de cerrar */
var spanButtonCancel = $d.createTextNode("×"); /* se le asigna una "x" */
	buttonCancelSearch.setAttribute("id","c467mz32"); /* id="c467mz32" */
	buttonCancelSearch.appendChild(spanButtonCancel); /* se inserta la "x" dentro del div */

	headBoxDiv.appendChild(searchAllBox); /* inserta caja de busqueda dentro de la cabecera id */
	headBoxDiv.appendChild(buttonCancelSearch); /* se inserta el boton dentro de la cabecera id */
	buttonCancelSearch.style.display="none"; /* display:none; */
	searchBox.appendChild(headBoxDiv); /* se inserta la cabecera id dentro de la caja de busqueda */

	$.addevent(buttonCancelSearch,"click",function(){searchAllBox.value = null;}); /* si el boton "x" es presionado, se borrara el valor dentro de la caja */

var onLoadBar = $d.createElement("div"); /* se crea un id de carga */
	onLoadBar.setAttribute("id","on843l57"); /* id="on843l57" */

var spanOnLoadBar = $d.createElement("div"); /* se crea un div de carga interno */
	spanOnLoadBar.setAttribute("id","sp844l57"); /* id="sp844l57" */

onLoadBar.appendChild(spanOnLoadBar); /* se inserta el circulo de carga dentro del div de carga */

var showResultAllBox = $d.createElement("div"); /* se crea un div de resultados */
	showResultAllBox.setAttribute("class","showResultAll"); /* class="showResultAll" */

var searchAll = $d.querySelector("._searchAll"); /* se le busca el id a la caja de busqueda de texto */

	$.addevent(searchAll,"keyup",function(event){
		var searchAllKeyUpped = $d.querySelector("._searchAll").value; /* se toma el valor de lo insertado en la caja de texto */
		if(searchAllKeyUpped === ''){
			showResultAllBox.innerHTML = null;
			if(searchBox.contains(showResultAllBox)){
				searchBox.removeChild(showResultAllBox);
			}else{
				return false;
			}
			buttonCancelSearch.style.display = "none";
		}else{
			buttonCancelSearch.style.display = "block";
			connexion.onreadystatechange = function(e){
				if($.prot(200,4)){
					var result = connexion.responseText;
					searchBox.appendChild(showResultAllBox);
					showResultAllBox.appendChild(onLoadBar);
					setTimeout(function(){showResultAllBox.innerHTML = result;},1000);
					return;
				}else{
					return false;
				}
			};
		$.ajaxopen("GET","connexion/s_result.php?q="+searchAllKeyUpped,true);
		$.ajaxsend();
		/* if window was touched */
		var touchedNowArrived = 0;
			$.addevent(window,"click",function(event){
				touchedNowArrived++;
				showResultAllBox.innerHTML = null;
				buttonCancelSearch.style.display = "none";
				if(touchedNowArrived === 1){
					if(searchBox.contains(showResultAllBox)){
						searchBox.removeChild(showResultAllBox);
					}else{
						return false;
					}
				}else if(touchedNowArrived > 1){
					return false;
				}
			});
		}
	});