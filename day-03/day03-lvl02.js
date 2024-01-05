// Write a script that prompt the user to enter base and height of the triangle and
// calculate an area of a triangle (area = 0.5 x b x h).


document.getElementById('arearesult').addEventListener('click', () =>{
	var altura = parseInt(document.getElementById('altura').value)
	var base = parseInt(document.getElementById('base').value)
	
	if(isNaN(altura) || isNaN(base)) {
		alert("Please insert a valid number")
	}
	else{
		let area = 0.5 * base * altura;
		document.getElementById('result').innerText= "A área do triângulo é: "+ area
	}
})