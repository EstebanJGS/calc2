function suma(){
    //document = pagina = dpcumentos cientificos en los 90's
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    let resultado= parseInt(n1)+parseInt(n2);
    //Accedemos al parrafo que tiene un id de resultado y modificamos su contenido
    document.getElementById("resultado").innerHTML="Resultado: "+resultado;
}

function resta(){
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    let resultado= n1-n2;
    document.getElementById("resultado").innerHTML="Resultado: "+resultado;
}

function multiplicacion(){
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    let resultado= n1*n2;
    document.getElementById("resultado").innerHTML="Resultado: "+resultado;
}

function div(){
    let n1=document.getElementById("n1").value;
    let n2=document.getElementById("n2").value;
    if(n2 != 0) {
        let resultado = n1/n2;
        document.getElementById("resultado").innerHTML="Resultado: "+resultado;
    }
    else
        document.getElementById("resultado").innerHTML="Imposible dividir entre 0";

}