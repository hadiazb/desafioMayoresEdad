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
  document.getElementById("botonLista").addEventListener( "click", mostrarTabla, false);
  // document.getElementById("botonLista").addEventListener( "click", mostrarMayores, false);
}

function nuevaPersona(){
  var introNombre = document.getElementById("txtNombre").value;
  var introEdad   = parseFloat(document.getElementById("txtEdad").value);
  var nuevaPersona = { "nombre": introNombre, "edad": introEdad };
  tabla.push(nuevaPersona);
  var limpiar = document.getElementById('txtNombre').value
  limpiar.innerHTML = ""


}

function mostrarTabla(){
  var cuerpoTabla = document.getElementById("datos-tabla");
  var tablaLlena = "";
  for (var i = 1; i < tabla.length; i++) {
    tablaLlena += "<tr><td>" + tabla[i].nombre + "</td><td>" + tabla[i].edad + "</td></tr>" ;
  }
  cuerpoTabla.innerHTML = tablaLlena;
}
