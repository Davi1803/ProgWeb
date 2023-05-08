function minhaFuncao() {
    const numeros = [1,2,3,4,5];

    var quadrados = numeros.map(function(n){
        return Math.pow(n, 2); //retorna o item original elevado ao quadrado
     });

     alert(quadrados);
     
}
