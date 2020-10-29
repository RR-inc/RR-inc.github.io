var Done=Done||{status:false};
var setBGcolor=function(e){
	if(document.body.style==null)document.body.style={}
	document.body.style.backgroundColor=''+e;
}
var loadedDo=function(){
  if(!Done.status){
    Done.status=true;
			var bott=document.createElement('div');
      bott.classList.add("bottom");
      
      
			var buttSource=document.createElement('div');
      buttSource.classList.add("button");
      buttSource.classList.add("source");
      var pageName=''+window.location.pathname;
      buttSource.innerHTML='<a title="source" href="https://github.com/RR-inc/RR-inc.github.io/tree/master' + pageName + '" target="blank"><svg style="margin-top: 2px; margin-bottom: -3px; margin-left: -4px;" xmlns="http://www.w3.org/2000/svg" version="1.0" width="20" height="20" viewBox="0 0 560.000000 560.000000" preserveAspectRatio="xMidYMid meet" id="pollo"> <g class="giticona" transform="translate(0.000000,560.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M2571 4839 c-733 -82 -1361 -525 -1676 -1182 -488 -1019 -73 -2233 941 -2749 60 -31 154 -72 209 -93 116 -43 165 -43 202 0 22 25 23 33 23 242 l0 215 -27 -6 c-16 -4 -86 -9 -158 -12 -152 -7 -232 7 -328 59 -95 50 -147 110 -211 239 -61 126 -113 194 -190 251 -111 83 -131 118 -78 138 107 42 291 -57 387 -207 106 -165 229 -232 404 -221 108 7 211 40 211 68 0 39 43 145 81 201 45 66 57 56 -99 83 -497 85 -752 358 -803 858 -26 260 24 468 158 647 l48 65 -17 65 c-33 127 -16 355 34 465 12 27 14 27 78 22 119 -10 299 -82 454 -181 l52 -33 110 23 c276 58 562 58 838 0 l110 -23 52 33 c156 100 335 171 456 181 l66 6 28 -84 c37 -114 45 -299 17 -405 l-19 -71 49 -63 c164 -218 207 -519 122 -856 -95 -376 -368 -595 -817 -656 -49 -7 -88 -16 -88 -19 0 -4 11 -20 24 -36 39 -47 74 -125 90 -206 13 -61 16 -145 16 -416 0 -338 0 -340 23 -366 37 -43 86 -43 202 0 1143 427 1676 1745 1150 2842 -296 618 -865 1045 -1550 1164 -139 24 -440 33 -574 18z"></path> </g> </svg>Source</a>';
      
			bott.appendChild(buttSource);


			var buttHome=document.createElement('div');
      buttHome.classList.add("button");
      buttHome.innerHTML='<a title="home" href="https://rr-inc.github.io">&lt;&lt; Home</a>';
	  
			bott.appendChild(buttHome);
      
			var menu=document.createElement('div');
      menu.classList.add("themes");
	  
	  
			var titl=document.createElement('div');
      titl.classList.add("themestitle"); 
      titl.innerHTML='THEMES:';
	  menu.appendChild(titl);
	  
	  var colors=["white","black"];
	 var classes=["lightbutt","darkabutt"];
	  for(var i=0;i<colors.length;i++){
		var ti=document.createElement('div');
	    	  ti.classList.add("coltheme"); 
		  ti.style.background=''+colors[0+i]; 
		  ti.style.backgroundColor=''+colors[0+i];
		  ti.index=0+i;
		  
		ti.addEventListener('click', function (e) {
			setBGcolor(colors[0+this.index]);//this.style.backgroundColor);
			
			  for(var u=0;u<classes.length;u++){
				  if(0+u!=0+this.index){
					  if(bott.classList.contains(classes[u+0])){
						bott.classList.remove(classes[u+0]);
					  }
				  }else{
				 	 if(!bott.classList.contains(classes[u+0])){
						bott.classList.add(classes[u+0]);
					 }
				  }
			  }
			e.preventDefault();
			e.stopPropagation();
		}, false);
		  menu.appendChild(ti);
	  }
	  
			bott.appendChild(menu);
	  
			document.body.appendChild(bott);
	  
	  
		var url = new URL(window.location+'');
		var c = url.searchParams.get('color');
		if(c!=null){
			setBGcolor(''+decodeURIComponent(c));
		}
	  
  }
};
	document.addEventListener('DOMContentLoaded', loadedDo);
