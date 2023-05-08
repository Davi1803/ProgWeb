cb1 = document.querySelector("#cb1");
cb2 = document.querySelector("#cb2");
cb3 = document.querySelector("#cb3");
secao1 = document.querySelector("#secao1");
secao2 = document.querySelector("#secao2");
secao3 = document.querySelector("#secao3");

cb1.addEventListener("click",myFunction);
cb2.addEventListener("click",myFunction2);
cb3.addEventListener("click",myFunction3);

function myFunction(){
    if(secao1.style.display == 'none'){
        secao1.style.display = 'block';
    }else{
        secao1.style.display = 'none';
    }
}

function myFunction2(){
    if(secao2.style.display == 'none'){
        secao2.style.display = 'block';
    }else{
        secao2.style.display = 'none';
    }
}

function myFunction3(){
    if(secao3.style.display == 'none'){
        secao3.style.display = 'block';
    }else{
        secao3.style.display = 'none';
    }
}