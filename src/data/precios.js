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

// Precios por noche fijos (no varían por temporada ni cantidad de huéspedes)
const preciosPorNoche = {
  "cabana-1": 95000,
  "cabana-2": 135000,
  "cabana-3": 135000,
};

// Función para obtener el precio por noche (precio fijo)
function obtenerPrecioPorNoche(cabanaId) {
  return preciosPorNoche[cabanaId] || 95000; // Precio por defecto
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

  // Calcular subtotal: precio fijo por noche
  const precioPorNoche = obtenerPrecioPorNoche(cabanaId);
  let subtotal = precioPorNoche * noches;

  // Precio del desayuno por persona (si se necesita)
  const precioDesayuno = 5000;

  // Agregar desayuno si está incluido (aunque ya no se usa, mantenemos la lógica por si acaso)
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
