function numRandom(){
	var num_uno= parseInt($("#num1").val());
	var num_dos= parseInt($("#num2").val());
	var resultado=document.getElementById("resultado");
	resultado.innerHTML= (Math.random()*(num_dos-num_uno)+num_uno).toFixed();
}
