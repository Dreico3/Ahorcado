const btnNuevaPalabra=document.querySelector("#btn-agregar-palabra");
const btnCancelar=document.querySelector("#btn-cancelar");
const btnIniciarJuego=document.querySelector('#btn-iniciar-juego');
const btnDesistir=document.querySelector('#btn-rendirse');
const btnGuardarEmpezar=document.querySelector('#btn-guardar');
const cajaAdivina=document.querySelector(".adivina");
const btnNuevoJuego=document.querySelector("#botones-jugar");
const btnReiniciar=document.querySelector('#reiniciarPer');
const btnReiniciarGa=document.querySelector('#reiniciarGa');

var palabras=["perro", "card", "los", "un"];
var fallas=0;
var aciertos=0;
function VaciarCaja(){
    while (cajaAdivina.firstChild){
        cajaAdivina.removeChild(cajaAdivina.firstChild);
    };
    while(fallas>0){
        document.querySelector(`#c${fallas}`).style.display="none";
        fallas-=1;
    }
}
function ReiniciarJuego(){
    VaciarCaja();
    EsconderPalabra(retornaAleatorio());
}
function CambiarAagregar(){
    document.querySelector("#botones-inicio").style.display="none";
    document.querySelector("#botones-agregar").style.display="block";
    document.querySelector(".cont-agregar").style.display="block";
}
function Cancelar(){
    document.querySelector("#botones-inicio").style.display="block";
    document.querySelector("#botones-agregar").style.display="none";
    document.querySelector(".cont-agregar").style.display="none";
}

function ControladorTeclas(e){
        let palabra=palabras[idPalabra];
        if(e.target.value.toLowerCase()==palabra[e.target.id-1]){
            console.log("son iguales");
            aciertos+=1;
            
        }else{
            console.log("fallaste perra");
            fallas+=1
            console.log(fallas);
            document.querySelector(`#c${fallas}`).style.display="block";
        }
        if(aciertos>=palabra.length){
            document.querySelector('.cont-ganador').style.display="block";
        }
        if(fallas>=6){
            document.querySelector('.cont-perdedor').style.display="block";
            document.querySelector('#palabra__ganadora').innerHTML=palabra;
        }
}
function EsconderPalabra(pa){
    //console.log(retornaAleatorio());
    idPalabra=pa[1];
    for (let i=1;i<=pa[0].length;i++){
        var ele=document.createElement("input");
        ele.setAttribute("id", i);
        ele.setAttribute("class", "pa");
        ele.setAttribute("maxlength", "1");
        ele.setAttribute("autocomplete","off");
        ele.onchange=ControladorTeclas;
        cajaAdivina.appendChild(ele);
    }
}
function retornaAleatorio(){
    var r=Math.floor(Math.random() * palabras.length);
    return [palabras[r],r]
}
function IniciarJuego(){
    document.querySelector("#botones-inicio").style.display="none";
    document.querySelector("#botones-jugar").style.display="block";
    document.querySelector(".cont-jugar").style.display="block";
    VaciarCaja();
    EsconderPalabra(retornaAleatorio())
}
function Rendirse(){
    document.querySelector("#botones-inicio").style.display="block";
    document.querySelector("#botones-jugar").style.display="none";
    document.querySelector(".cont-jugar").style.display="none";
}
function Reiniciar(){
    document.querySelector('.cont-perdedor').style.display="none";
    document.querySelector('.cont-ganador').style.display="none";
    Rendirse()
    aciertos=0;
}
function GuardarEmpezar(){
    var palabra=document.querySelector("#inp-palabra").value.toLowerCase();
    if(palabra.length<8){
        Cancelar()
        IniciarJuego();
        palabras.push(palabra);
        console.log(palabras);
        document.querySelector("#inp-palabra").value="";
    }else{
        alert("la palabra introducida tiene mas de 8 letras")
    }
}
btnNuevaPalabra.onclick = CambiarAagregar; 
btnCancelar.onclick=Cancelar;
btnIniciarJuego.onclick=IniciarJuego;
btnDesistir.onclick=Rendirse;
btnGuardarEmpezar.onclick=GuardarEmpezar;
btnNuevoJuego.onclick=ReiniciarJuego;
btnReiniciar.onclick=Reiniciar;
btnReiniciarGa.onclick=Reiniciar;


/* const el = document.querySelector('.selector');
el.classList.contains('someClass');
el.classList.add('newClass');
el.classList.remove('otherClass'); */