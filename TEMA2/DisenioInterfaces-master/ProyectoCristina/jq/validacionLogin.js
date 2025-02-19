$(document).ready(function () {
  var formulario = document.getElementById("formulario");
  $(formulario).validate({
    reglas: {
      usuario: {
        required: true,
        minlength: 6,
      },
      clave: {
        required: true,
        minlength: 8,
      },
    },
    mensajes: {
      usuario: {
        minlength: "El nombre tiene que tener mínimo 6 carácteres",
      },
      clave: {
        minlength: "La clave tiene que tener mínimo 8 carácteres",
      },
    },
  });
});
