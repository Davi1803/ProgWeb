function mostrarAluno(){
    let display= document.getElementById("divAluno").style.display
    if(display == "none"){
        document.getElementById("divAluno").style.display = 'block';
        document.getElementById("divProf").style.display = 'none';
    }
    else {
        document.getElementById("divAluno").style.display = 'none';
    }
    
}

function mostrarProf(){
    let display= document.getElementById("divProf").style.display
    if(display == "none"){
        document.getElementById("divProf").style.display = 'block';
        document.getElementById("divAluno").style.display = 'none';

    }
    else {
        document.getElementById("divProf").style.display = 'none';
    }
    
}

function btnCriarAluno(){
    let nome = prompt("Digite o nome do Aluno:" );
    let divAluno = document.createElement("div");
    divAluno.setAttribute('id', 'dvA');
    divAluno.style.background = '#b0ffdd';
    divAluno.style.maxHeight = 'auto';
    divAluno.style.maxWidth = 'auto';
    divAluno.style.border = "solid 1px";
    divAluno.style.borderRadius = "10px";
    let Nomes = document.createTextNode("Aluno " + nome);
    divAluno.prepend(Nomes);
    document.getElementById("divAluno").prepend(divAluno);

}

function btnCriarProf(){
    let nome = prompt("Digite o nome do Professor:" );
    let divProf = document.createElement("div");
    divProf.setAttribute('id', 'dvP');
    divProf.style.background = '#99ffa6';
    divProf.style.maxHeight = 'auto';
    divProf.style.maxWidth = 'auto';
    divProf.style.border = "solid 1px";
    divProf.style.borderRadius = "10px";
    let Nomes = document.createTextNode("Professor " + nome);
    divProf.prepend(Nomes);
    document.getElementById("divProf").prepend(divProf);
}