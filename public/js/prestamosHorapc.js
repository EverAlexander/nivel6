$(document).ready(function() {
    // Cuando cambia el valor del campo inicio
    $("#iniciopc").on("change", function() {
        // Obtener el valor de inicio
        var inicio = $("#iniciopc").val();

        // Validar el formato de la hora de inicio
        if (!moment(inicio, "HH:mm").isValid()) {
            console.log("Hora de inicio no válida");
            return;
        }

        // Crear objeto moment para la hora de inicio
        var inicioMoment = moment(inicio, "HH:mm");

        // Clonar y sumar 120 minutos (2 horas)
        var finalizacionMoment = inicioMoment.clone().add(120, 'minutes');

        // Formatear la nueva hora
        var nuevaHora = finalizacionMoment.format("HH:mm");

        // Actualizar el valor de finalización
        $("#finalpc").val(nuevaHora);
    });
});
