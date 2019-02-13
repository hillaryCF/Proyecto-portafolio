const words = ['web designer and developer'];
const contenedor = document.getElementById('profession');
let content = contenedor.innerHTML;
let condicional = true;
setInterval(function(){
  if(condicional){
	for(let i = 0; content.length <26; i++){
		contenedor.innerHTML = words[i].slice(0, content.length+1);
		content=contenedor.innerHTML;
	}
} 
},100);
