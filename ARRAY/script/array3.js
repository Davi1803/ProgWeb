function minhaFuncao() {

    let numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    
    const romanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var n  = document.getElementById("numero").value;

    for(var i = 0; i < numeros.length; i++){
        console.log(numeros[i]);
        console.log(n);
        if(n == numeros[i]){
            var r = i;
            alert(romanos[r]);
        }            
    }

	
	
	/*.value;

    var messagem = serie[value];
    alert(messagem); 
	
	*/
}