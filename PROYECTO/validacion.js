
/*formulario-contacto*/
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nombre: false,
    apellido: false,
    correo: false,
}

/*--VALIDACION DE FORMULARIO--*/

function ValidarEnviar() {
// Validacion del campo 1 Nombre. 

//
//if (document.formulariocontacto.nombre.value.length <= 2) {
//alert("Tiene que escribir un nombre valido (min 2 caracteres)");  
//

// Obtener el elemento de entrada del nombre
var nombreInput = document.getElementById("nombre");

// Agregar un evento de escucha al evento "input" para realizar la validación en tiempo real

nombreInput.addEventListener("input", function () {
var nombreValor = nombreInput.value;
var contieneNumeros = /\d/.test(nombreValor); // Comprueba si la cadena contiene números

if (contieneNumeros) {
    // Si contiene números, muestra un mensaje de error o realiza alguna acción.
    alert("El campo de nombre no debe contener números.");
    nombreInput.value = ''; // Borra el valor del campo para corregirlo
    document.formulariocontacto.apellido.focus();
    return;
  }
});





    // Validacion del campo 2 Apellido. 
    if (document.formulariocontacto.apellido.value.length <= 2) {
        alert("Tiene que escribir un apellido valido (min 2 caracteres)");
        document.formulariocontacto.apellido.focus();
        return;
    }
    // Validacion del campo 3 Correo. 


    // Validacion del campo 4. "como supiste de nosotros"

    if (
        document.formulariocontacto.descubrir[0].checked == false &&
        document.formulariocontacto.descubrir[1].checked == false &&
        document.formulariocontacto.descubrir[2].checked == false &&
        document.formulariocontacto.descubrir[3].checked == false) {

        alert("Selecciona una opcion en el campo 4");
        document.formulariocontacto.descubrir.focus()
        return;
    }





    // Validar el campo de aporte a el sitio web
    if (document.formulariocontacto.aporte.selectedIndex == 0) {
        alert("Debe seleccionar una opcion en el campo 5.");
        document.formulariocontacto.aporte.focus();
        return;
    }


    // Validar el campo de aporte a el sitio web

    if (document.formulariocontacto.info.value.length >= 180) {
        alert("Son maximo 180 caracteres en el area de recomendaciones");
        document.formulariocontacto.info.focus();
        return;
    }


    // Si todas las validaciones pasan, se envía el formulario.

    alert("Muchas gracias por llenar el formulario");
    document.formulariocontacto.submit();

}