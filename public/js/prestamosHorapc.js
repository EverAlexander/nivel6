function inicializarTiempoJuego() {
  const inicioInput = document.getElementById("iniciopc");
  const finalInput = document.getElementById("finalpc");

  if (!inicioInput || !finalInput) return; // seguridad

  inicioInput.addEventListener("change", function() {
    let inicio = inicioInput.value;
    if (!inicio) return;

    let [horas, minutos] = inicio.split(":").map(Number);
    let totalMin = horas * 60 + minutos;

    totalMin += 120; // +2 horas

    let nuevaHora = Math.floor(totalMin / 60) % 24;
    let nuevaMin = totalMin % 60;

    let horaFinal =
      String(nuevaHora).padStart(2, "0") + ":" +
      String(nuevaMin).padStart(2, "0");

    finalInput.value = horaFinal;
  });
}
