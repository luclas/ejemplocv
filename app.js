//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let atencion = document.getElementById("atencion");
crearBarra(atencion);
let trabajo_en_equipo = document.getElementById("trabajo_en_equipo");
crearBarra(trabajo_en_equipo);
let emprendedor = document.getElementById("emprendedor");
crearBarra(emprendedor);
let manejo_de_excel = document.getElementById("manejo_de_excel");
crearBarra(manejo_de_excel);
let aprendizaje = document.getElementById("aprendizaje");
crearBarra(aprendizaje);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalAtencion = setInterval(function(){
            pintarBarra(atencion, 16, 0, intervalAtencion);
        },100);
        const intervalTrabajo = setInterval(function(){
            pintarBarra(trabajo_en_equipo, 11, 1, intervalTrabajo);
        },100);
        const intervalEmprendedor = setInterval(function(){
            pintarBarra(emprendedor, 11, 2, intervalEmprendedor);
        },100);
        const intervalManejo_de_excel = setInterval(function(){
            pintarBarra(manejo_de_excel, 15, 3, intervalManejo_de_excel);
        },100);
        const intervalAprendizaje = setInterval(function(){
            pintarBarra(aprendizaje, 16, 4, intervalAprendizaje);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 11, 5, intervalIlustrator);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#ff0000";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}