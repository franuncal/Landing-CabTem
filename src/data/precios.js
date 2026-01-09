// Condiciones de reserva
export const condiciones = {
  minimoNoches: 2, // Mínimo de noches requeridas
};

// Medios de pago disponibles
export const mediosPago = [
  {
    id: "efectivo",
    nombre: "Efectivo",
    recargo: 0,
  },
  {
    id: "transferencia",
    nombre: "Transferencia bancaria",
    recargo: 0,
  },
  {
    id: "tarjeta",
    nombre: "Tarjeta de crédito/débito",
    recargo: 10,
  },
];

// Precios por noche según temporada y cabaña
// Ajustar estos valores según los precios reales
const preciosPorNoche = {
  "cabana-1": {
    temporadaBaja: 25000, // Ajustar según precio real
    temporadaAlta: 35000, // Ajustar según precio real
  },
  "cabana-2": {
    temporadaBaja: 28000, // Ajustar según precio real
    temporadaAlta: 38000, // Ajustar según precio real
  },
  "cabana-3": {
    temporadaBaja: 25000, // Ajustar según precio real
    temporadaAlta: 35000, // Ajustar según precio real
  },
};

// Precio del desayuno por persona
const precioDesayuno = 5000; // Ajustar según precio real

// Función para determinar si una fecha está en temporada alta
// Temporada alta: diciembre, enero, febrero, julio
function esTemporadaAlta(fechaStr) {
  const [año, mes] = fechaStr.split("-").map(Number);
  return mes === 12 || mes === 1 || mes === 2 || mes === 7;
}

// Función para calcular el precio por noche según la fecha
function obtenerPrecioPorNoche(cabanaId, fechaStr) {
  const precios = preciosPorNoche[cabanaId];
  if (!precios) return 25000; // Precio por defecto

  return esTemporadaAlta(fechaStr)
    ? precios.temporadaAlta
    : precios.temporadaBaja;
}

// Función para calcular el total de la reserva
export function calcularTotal(
  fechaInicio,
  fechaFin,
  conDesayuno,
  medioPagoId,
  huespedes,
  cabanaId
) {
  const [añoInicio, mesInicio, diaInicio] = fechaInicio.split("-").map(Number);
  const [añoFin, mesFin, diaFin] = fechaFin.split("-").map(Number);
  const fechaInicioDate = new Date(añoInicio, mesInicio - 1, diaInicio);
  const fechaFinDate = new Date(añoFin, mesFin - 1, diaFin);
  const diferencia = fechaFinDate - fechaInicioDate;
  const noches = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  // Calcular precio promedio por noche (puede variar según temporada)
  let subtotal = 0;
  const fechaActual = new Date(fechaInicioDate);

  for (let i = 0; i < noches; i++) {
    const año = fechaActual.getFullYear();
    const mes = fechaActual.getMonth() + 1;
    const dia = fechaActual.getDate();
    const fechaStr = `${año}-${String(mes).padStart(2, "0")}-${String(
      dia
    ).padStart(2, "0")}`;
    subtotal += obtenerPrecioPorNoche(cabanaId, fechaStr);
    fechaActual.setDate(fechaActual.getDate() + 1);
  }

  const precioPorNoche = Math.round(subtotal / noches);

  // Agregar desayuno si está incluido
  if (conDesayuno) {
    subtotal += precioDesayuno * huespedes * noches;
  }

  // Calcular recargo por medio de pago
  const medioPago = mediosPago.find((m) => m.id === medioPagoId);
  const recargo = medioPago ? (subtotal * medioPago.recargo) / 100 : 0;

  const total = subtotal + recargo;

  return {
    noches,
    precioPorNoche,
    subtotal,
    recargo,
    total,
    conDesayuno,
    precioDesayuno: conDesayuno ? precioDesayuno * huespedes * noches : 0,
  };
}

// Función para calcular los pagos (seña y saldo)
export function calcularPagos(total) {
  const reserva = Math.round(total * 0.3); // 30% de seña
  const saldo = total - reserva; // 70% restante

  return {
    total,
    reserva,
    saldo,
  };
}
