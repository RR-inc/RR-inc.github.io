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
      buttSource.innerHTML='<a title="source" href="https://github.com/RR-inc/RR-inc.github.io/edit/master' + pageName + '" target="blank">Source</a>';
      
			bott.appendChild(buttSource);
      
			document.body.appendChild(bott);
  }
};
	document.addEventListener('DOMContentLoaded', loadedDo);
