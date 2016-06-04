function numRandom(){
	var num_uno= parseInt(document.getElementById("num1").value);
	var num_dos= parseInt(document.getElementById("num2").value);
	var resultado=document.getElementById("resultado");
	resultado.innerHTML= (Math.random()*(num_dos-num_uno)+num_uno).toFixed();
}