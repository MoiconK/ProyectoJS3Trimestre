// CONTADOR DE PUNTOS

let contador = $("#contador").val();
console.log(contador);

// MODIFICA EL CONTADOR DENTRO DEL HTML

$(document).ready(function(){
    $(".fila1").click(function(){
        if($(this).css('opacity') == 0) {
            console.log("NADA");
        } else {
            $("#contador").text(contador = contador*1+500)
            $(this).css('opacity', 0)
        console.log(contador);
    }
    })
    $(".fila2").click(function(){
        if($(this).css('opacity') == 0) {
            console.log("NADA");
        } else {
            $("#contador").text(contador = contador*1+800)
            $(this).css('opacity', 0)
        console.log(contador);

    }
    })
    $(".fila3").click(function(){
        if($(this).css('opacity') == 0) {
            console.log("NADA");
        } else {
            $("#contador").text(contador = contador*1+1500)
            $(this).css('opacity', 0)
        console.log(contador);
    }
    })

})

// TEMPORIZADOR Y LOOP DE JUEGO

var segundos = 00;
var minutos = 1;
var llamada;
var juego;
var ceromin='';
var ceroseg='';

function cuentaAtras(){
    terminarPartida();
    $('#start').hide();
    var juego = setInterval(mostrarDiana(), 3000)
    var llamada = setTimeout(cuentaAtras, 1000);
    devolvercero(minutos,segundos);
    segundos = segundos % 60;
    document.getElementById("temporizador").innerHTML=ceromin+minutos+':'+ceroseg+segundos;
     if (minutos ===0 && segundos ===0){
        clearTimeout(llamada);
        clearInterval(juego);
        terminarPartida();
        $("#restart").css('display', 'block');
        
    }
    if (segundos ==0){
        minutos --;
        segundos+=60;   
    }   
    segundos --;
    
}

function devolvercero(minutos,segundos){
    if (minutos<10){
        ceromin='0';
       
    }
    if (segundos<10){
        ceroseg='0';
       
    }else {
        ceroseg='';
    }
     return ceroseg;return ceromin;
}

// MOSTRAR Y OCULTAR DIANAS

function mostrarDiana(){
let i = Math.floor(Math.random()*13) + 1;
if($("#dia" + i).css('opacity') == 0){
    $("#dia" + i).css('opacity', 100);
    setInterval(desaparecerDiana, 2000)
}

}

function desaparecerDiana(){
$(this).css('opacity', 0)
}

// OCULTAR TODAS LAS DIANAS

function terminarPartida(){
    $(".fila1").css('opacity', 0);
    $(".fila2").css('opacity', 0);
    $(".fila3").css('opacity', 0);
}

// COMENZAR LA PARTIDA
terminarPartida();
$("#start").click(cuentaAtras);

// RECARGAR PÁGINA

$("#restart").click(function(){
    location.reload();
});