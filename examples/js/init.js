var Done=Done||{status:false};

var loadedDo=function(){
  if(!Done.status){
    Done.status=true;
			var bott=document.createElement('div');
      bott.classList.add("bottom");
      
      
			var buttSource=document.createElement('div');
      buttSource.classList.add("button");
      buttSource.classList.add("source");
      var pageName=''+window.location.pathname;
      buttSource.innerHTML='<a title="source" href="https://github.com/RR-inc/RR-inc.github.io/tree/master' + pageName + '" target="blank">Source</a>';
      
			bott.appendChild(buttSource);


			var buttHome=document.createElement('div');
      buttHome.classList.add("button");
      buttHome.innerHTML='<a title="home" href="https://rr-inc.github.io">&lt;&lt; Home</a>';
	  
			bott.appendChild(buttHome);
      
			document.body.appendChild(bott);
  }
};
	document.addEventListener('DOMContentLoaded', loadedDo);
