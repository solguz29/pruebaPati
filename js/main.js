// $(document).ready(function () {
//     $("a[rel^='prettyPhoto']").prettyPhoto();
//     $(".owl-slider").owlCarousel();
// });

/*function validarFormulario() {

    let nombre = document.forms["formularioContacto"]["nombre"].value;
    let email = document.forms["formularioContacto"]["email"].value;
    let mensaje = document.forms["formularioContacto"]["mensaje"].value;

    if (nombre.length < 2 || email.length < 2 || mensaje.length < 2) {
        alert('Complete todos los campos');
        return false;
    }

    alert('Datos ingresados correctamente');
    
}*/

/* VALIDACIÓN MAIL */

var valor;

function validarEnvio() { 
var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; // Expresión regular
valor = document.getElementById("email").value;

if(document.formulario.nombre.value=="" || !(ck_email.test(valor))) // Si el nombre o el mail son inválidos
{
  if(document.formulario.nombre.value=="") // Si el nombre es el que está inválido
  {
  document.getElementById('campo1').innerHTML='*Ingrese su nombre'; // Mensaje aclarando que debe volver a ingresar su nombre
  document.getElementById('nombre').style.border='#db3019 solid 3px'; // Alerta con el campo con borde rojo
  } else {
  document.getElementById('campo1').innerHTML=''; // Mensaje de alerta se borra
  document.getElementById('nombre').style.border='#32bb39 solid 3px'; // El campo se contornea de verde
  }

  if(!(ck_email.test(valor))) // Si el mail es el que está inválido
  {
  document.getElementById('campo2').innerHTML='*Ingrese un email válido'; // Mensaje aclarando que debe volver a ingresar su mail
  document.getElementById('email').style.border='#db3019 solid 3px'; // Alerta con el campo con borde rojo
  } else {
  document.getElementById('campo2').innerHTML=''; // Mensaje de alerta se borra
  document.getElementById('email').style.border='#32bb39 solid 3px'; // El campo se contornea de verde
  }

  return false; // En caso de que haya al menos alguno de los dos errores, nos devuelve "false" para evitar que se envíe el mail

} else {
return true; // En caso de que no haya ningún errores, nos devuelve "true" y el mail se envía sin problemas
}

}