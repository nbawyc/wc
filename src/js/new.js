  window.onload=function(){
	
	var box=document.getElementById('banner');
	var Ul=document.getElementsByTagName('ul')[0];
	var uLi=Ul.getElementsByTagName('li');
	var Ol=document.getElementsByTagName('ol')[0];
	var oLi=Ol.getElementsByTagName('li');
	var n=null
	var tim=null
	var timer=null;
	
	
	oLi[0].style.background='yellow'
	
	function start(obj,long){
		clearInterval(tim)
		tim=setInterval(function (){ 
			speed=(long-Ul.offsetLeft)/7
			speed>0?speed=Math.ceil(speed):speed=Math.floor(speed)
			if(Ul.offsetLeft==long){
				clearInterval(tim)
			}
			else{
				Ul.style.left=Ul.offsetLeft+speed+"px"
			}	
	},30)
}

	for(var i=0;i<oLi.length;i++){
		oLi[i].index=i;
		oLi[i].onmouseover=function(){
			n=this.index;
			dian()
			 
		}
}

    function dian(){
    	for(var i=0;i<oLi.length;i++){ 
				for(var j=0;j<oLi.length;j++){
				 oLi[j].style.background=''
				 }
			     oLi[n].style.background='yellow'
			     start(oLi[n],-uLi[0].offsetWidth*n)

	}
    }
    
 
    function yundong(){
    	n++;
    	if(n==oLi.length){
    		n=0
    	}
    	dian()
    }
    
	 timer=setInterval(yundong,1000)		
	
	 banner.onmouseover=function(){
	 	clearInterval(timer)
	 }
	 banner.onmouseout=function(){
	 	clearInterval(timer)
	 	timer=setInterval(yundong,1000)
	 }		
	
	
        
}