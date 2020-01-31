window.onload = cargarEventos;
var tabla = [
  {
    "nombre": null ,
    "edad"  : null },
];
var tablaMayores = [
  {
    "nombre": null ,
    "edad"  : null },
];

function cargarEventos(){
  document.getElementById("botonRegistrar").addEventListener( "click", nuevaPersona, false);
  document.getElementById("botonRegistrar").addEventListener( "click", limpiar, false);
  document.getElementById("botonLista").addEventListener( "click", mostrarTabla, false);
  document.getElementById("botonMayoresDeEdad").addEventListener( "click", mostrarMayores, false);
}

function nuevaPersona(){
  var introNombre = document.getElementById("txtNombre").value;
  var introEdad   = parseFloat(document.getElementById("txtEdad").value);
  var nuevaPersona = { "nombre": introNombre, "edad": introEdad };
  tabla.push(nuevaPersona);
}

function mostrarTabla(){
  var cuerpoTabla = document.getElementById("datos-tabla");
  var tablaLlena = "";
  for (var i = 1; i < tabla.length; i++) {
    tablaLlena += "<tr><td>" + tabla[i].nombre + "</td><td>" + tabla[i].edad + "</td></tr>" ;
  }
  cuerpoTabla.innerHTML = tablaLlena;
}
function limpiar() {
    document.getElementById("txtNombre").value = "";
    document.getElementById("txtEdad").value = "";
}
function mostrarMayores(){
  var cuerpoTabla = document.getElementById("data-table");
  var mayorDeEdad = 18;
  var tablaLlena = "";
  for (var i = 1; i < tabla.length; i++) {
    if (tabla[i].edad >= mayorDeEdad) {
      tablaLlena += "<tr><td>" + tabla[i].nombre + "</td><td>" + tabla[i].edad + "</td></tr>" ;
    }
    cuerpoTabla.innerHTML = tablaLlena;
  }
}
