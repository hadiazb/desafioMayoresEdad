window.onload = cargarEventos;
var tabla = [
  {
    "nombre": null ,
    "edad"  : null },
];

function cargarEventos(){
  document.getElementById("botonRegistrar").addEventListener( "click", nuevoEstudiante, false);
  // document.getElementById("botonLista").addEventListener( "click", mostrarTabla, false);
}

function nuevoEstudiante(){
  var introNombre = document.getElementById("txtNombre").value;
  var introEdad   = parseFloat(document.getElementById("txtEdad").value);
  var nuevoEstudiante = { "nombre": introNombre, "nota": introEdad };
  tabla.push(nuevoEstudiante);
}
