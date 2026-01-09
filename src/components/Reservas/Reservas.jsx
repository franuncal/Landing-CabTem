import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  startTransition,
} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { gapi } from "gapi-script";
import { cabanas } from "../../data/cabanas";
import {
  condiciones,
  mediosPago,
  calcularTotal,
  calcularPagos,
} from "../../data/precios";
import "./Reservas.css";

function detectarCabanaDesdeNombre(nombreEvento) {
  const nombreLower = nombreEvento.toLowerCase();
  const normalizado = nombreLower
    .replace(/cabaña/g, "cabana")
    .replace(/ñ/g, "n");

  const patrones = [
    {
      matches: ["cabana 1", "cabaña 1", "cabana i", "cabaña i"],
      excludes: [
        "cabana 2",
        "cabaña 2",
        "cabana ii",
        "cabaña ii",
        "cabana 3",
        "cabaña 3",
        "cabana iii",
        "cabaña iii",
      ],
      id: "cabana-1",
    },
    {
      matches: ["cabana 2", "cabaña 2", "cabana ii", "cabaña ii"],
      excludes: [
        "cabana 1",
        "cabaña 1",
        "cabana i",
        "cabaña i",
        "cabana 3",
        "cabaña 3",
        "cabana iii",
        "cabaña iii",
      ],
      id: "cabana-2",
    },
    {
      matches: ["cabana 3", "cabaña 3", "cabana iii", "cabaña iii"],
      excludes: [
        "cabana 1",
        "cabaña 1",
        "cabana i",
        "cabaña i",
        "cabana 2",
        "cabaña 2",
        "cabana ii",
        "cabaña ii",
      ],
      id: "cabana-3",
    },
  ];

  for (const patron of patrones) {
    const tieneMatch = patron.matches.some(
      (m) => nombreLower.includes(m) || normalizado.includes(m)
    );
    const tieneExclude = patron.excludes.some((e) => nombreLower.includes(e));
    if (tieneMatch && !tieneExclude) {
      return patron.id;
    }
  }

  return null;
}

function formatearFecha(fechaStr) {
  const [año, mes, dia] = fechaStr.split("-").map(Number);
  return new Date(año, mes - 1, dia).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function formatearFechaCorta(fechaStr) {
  const [año, mes, dia] = fechaStr.split("-").map(Number);
  return new Date(año, mes - 1, dia).toLocaleDateString("es-AR");
}

function obtenerFechaHoy() {
  const hoy = new Date();
  return `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(hoy.getDate()).padStart(2, "0")}`;
}

export default function Reservas() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Obtener cabaña preseleccionada desde el estado de navegación
  const cabanaPreSeleccionada = location.state?.cabanaId || null;
  
  const [cabanaSeleccionada, setCabanaSeleccionada] = useState(
    cabanaPreSeleccionada
  );
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [medioPago, setMedioPago] = useState("efectivo");
  const [huespedes, setHuespedes] = useState(2);
  const [datosCliente, setDatosCliente] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [paso, setPaso] = useState(cabanaPreSeleccionada ? 2 : 1);
  const [disponibilidad, setDisponibilidad] = useState({});
  const [mostrarModalDisponibilidad, setMostrarModalDisponibilidad] =
    useState(false);
  const [mensajeDisponibilidad, setMensajeDisponibilidad] = useState({
    tipo: "error",
    titulo: "",
    mensaje: "",
  });
  const [fechasOcupadas, setFechasOcupadas] = useState([]);
  const [cargandoFechasOcupadas, setCargandoFechasOcupadas] = useState(false);
  const [mesCalendario, setMesCalendario] = useState(new Date().getMonth());
  const [añoCalendario, setAñoCalendario] = useState(new Date().getFullYear());

  const capacidadMaxima = useMemo(
    () =>
      cabanaSeleccionada
        ? cabanas.find((c) => c.id === cabanaSeleccionada)?.capacidad || 2
        : 2,
    [cabanaSeleccionada]
  );

  useEffect(() => {
    if (cabanaSeleccionada) {
      startTransition(() => {
        setHuespedes((prevHuespedes) => {
          if (prevHuespedes > capacidadMaxima) {
            return capacidadMaxima;
          }
          return prevHuespedes;
        });
      });
    }
  }, [cabanaSeleccionada, capacidadMaxima]);

  const fechaMaxima = useMemo(() => {
    const fecha = new Date(2026, 6, 31); // 31 de julio de 2026
    fecha.setHours(23, 59, 59, 999);
    return fecha.toISOString().split("T")[0];
  }, []);

  const calcularNoches = useCallback((inicio, fin) => {
    if (!inicio || !fin) return 0;
    const [añoInicio, mesInicio, diaInicio] = inicio.split("-").map(Number);
    const [añoFin, mesFin, diaFin] = fin.split("-").map(Number);
    const inicioDate = new Date(añoInicio, mesInicio - 1, diaInicio);
    const finDate = new Date(añoFin, mesFin - 1, diaFin);
    return Math.floor((finDate - inicioDate) / (1000 * 60 * 60 * 24));
  }, []);

  const obtenerDiasOcupados = useCallback((eventos) => {
    const diasOcupados = new Set();

    eventos.forEach((evento) => {
      let inicioStr = evento.inicio;
      let finStr = evento.fin;
      let horaFin = 10;

      if (inicioStr instanceof Date) {
        inicioStr = inicioStr.toISOString().split("T")[0];
      } else if (inicioStr?.includes("T")) {
        inicioStr = inicioStr.split("T")[0];
      }

      if (finStr instanceof Date) {
        const fechaFinDate = new Date(finStr);
        horaFin = fechaFinDate.getHours();
        finStr = fechaFinDate.toISOString().split("T")[0];
      } else if (finStr?.includes("T")) {
        const fechaFinDate = new Date(finStr);
        horaFin = fechaFinDate.getHours();
        finStr = finStr.split("T")[0];
      }

      const [añoInicio, mesInicio, diaInicio] = inicioStr
        .split("-")
        .map(Number);
      const [añoFin, mesFin, diaFin] = finStr.split("-").map(Number);
      const fechaInicio = new Date(añoInicio, mesInicio - 1, diaInicio);
      const fechaFin = new Date(añoFin, mesFin - 1, diaFin);
      const fechaActual = new Date(fechaInicio);

      while (fechaActual <= fechaFin) {
        const año = fechaActual.getFullYear();
        const mes = fechaActual.getMonth() + 1;
        const dia = fechaActual.getDate();
        const fechaStr = `${año}-${String(mes).padStart(2, "0")}-${String(
          dia
        ).padStart(2, "0")}`;

        const esDiaCheckOut = fechaStr === finStr;
        if (!(esDiaCheckOut && horaFin <= 10)) {
          diasOcupados.add(fechaStr);
        }

        fechaActual.setDate(fechaActual.getDate() + 1);
      }
    });

    return diasOcupados;
  }, []);

  const limpiarFechas = useCallback(() => {
    setFechaInicio("");
    setFechaFin("");
    setMostrarModalDisponibilidad(false);
  }, []);

  const handleClickDia = useCallback(
    (fechaStr) => {
      const hoyStr = obtenerFechaHoy();
      const diasOcupados = obtenerDiasOcupados(fechasOcupadas);

      if (
        fechaStr < hoyStr ||
        diasOcupados.has(fechaStr) ||
        fechaStr > fechaMaxima
      ) {
        return;
      }

      if (fechaStr === fechaInicio) {
        limpiarFechas();
        return;
      }

      if (fechaStr === fechaFin) {
        setFechaFin("");
        setMostrarModalDisponibilidad(false);
        return;
      }

      if (fechaInicio && fechaFin) {
        setFechaInicio(fechaStr);
        setFechaFin("");
        setMostrarModalDisponibilidad(false);
        return;
      }

      if (!fechaInicio || fechaStr < fechaInicio) {
        setFechaInicio(fechaStr);
        setFechaFin("");
        setMostrarModalDisponibilidad(false);
        return;
      }

      if (fechaStr > fechaInicio) {
        const noches = calcularNoches(fechaInicio, fechaStr);

        if (noches >= condiciones.minimoNoches) {
          const [añoInicio, mesInicio, diaInicio] = fechaInicio
            .split("-")
            .map(Number);
          const [añoFin, mesFin, diaFin] = fechaStr.split("-").map(Number);
          const fechaInicioDate = new Date(añoInicio, mesInicio - 1, diaInicio);
          const fechaFinDate = new Date(añoFin, mesFin - 1, diaFin);
          const fechaActual = new Date(fechaInicioDate);
          let todasDisponibles = true;

          while (fechaActual <= fechaFinDate) {
            const año = fechaActual.getFullYear();
            const mes = fechaActual.getMonth() + 1;
            const dia = fechaActual.getDate();
            const fechaCheck = `${año}-${String(mes).padStart(2, "0")}-${String(
              dia
            ).padStart(2, "0")}`;

            if (
              diasOcupados.has(fechaCheck) ||
              fechaCheck < hoyStr ||
              fechaCheck > fechaMaxima
            ) {
              todasDisponibles = false;
              break;
            }
            fechaActual.setDate(fechaActual.getDate() + 1);
          }

          if (todasDisponibles) {
            setFechaFin(fechaStr);
            setMostrarModalDisponibilidad(false);
          } else {
            setMensajeDisponibilidad({
              tipo: "error",
              titulo: "Rango no disponible",
              mensaje:
                "Algunas fechas en el rango seleccionado están ocupadas. Por favor, elegí otro rango.",
            });
            setMostrarModalDisponibilidad(true);
          }
        } else {
          setMensajeDisponibilidad({
            tipo: "error",
            titulo: "Estadía mínima",
            mensaje: `La estadía mínima es de ${
              condiciones.minimoNoches
            } noches. Has seleccionado ${noches} noche${
              noches !== 1 ? "s" : ""
            }.`,
          });
          setMostrarModalDisponibilidad(true);
        }
      }
    },
    [
      fechaInicio,
      fechaFin,
      fechasOcupadas,
      fechaMaxima,
      obtenerDiasOcupados,
      calcularNoches,
      limpiarFechas,
    ]
  );

  const obtenerEstadoDia = useCallback(
    (fechaStr) => {
      const hoyStr = obtenerFechaHoy();
      const diasOcupados = obtenerDiasOcupados(fechasOcupadas);

      if (
        fechaStr < hoyStr ||
        diasOcupados.has(fechaStr) ||
        fechaStr > fechaMaxima
      ) {
        return "no-disponible";
      }

      if (fechaStr === fechaInicio) return "seleccionado-inicio";
      if (fechaStr === fechaFin) return "seleccionado-fin";
      if (
        fechaInicio &&
        fechaFin &&
        fechaStr >= fechaInicio &&
        fechaStr <= fechaFin
      ) {
        return "seleccionado-rango";
      }

      return "disponible";
    },
    [fechaInicio, fechaFin, fechasOcupadas, fechaMaxima, obtenerDiasOcupados]
  );

  const navegarMes = useCallback(
    (direccion) => {
      const nuevaFecha = new Date(añoCalendario, mesCalendario, 1);
      nuevaFecha.setMonth(nuevaFecha.getMonth() + direccion);

      // Obtener el mes y año de la fecha máxima
      const fechaMaximaDate = new Date(fechaMaxima);
      const añoMaximo = fechaMaximaDate.getFullYear();
      const mesMaximo = fechaMaximaDate.getMonth(); // 0-11

      // Validar que no se navegue más allá del mes de la fecha máxima
      const nuevoAño = nuevaFecha.getFullYear();
      const nuevoMes = nuevaFecha.getMonth();

      // Si el nuevo mes/año es mayor al máximo, no navegar
      if (
        nuevoAño > añoMaximo ||
        (nuevoAño === añoMaximo && nuevoMes > mesMaximo)
      ) {
        return; // No hacer nada si excede el límite
      }

      setMesCalendario(nuevoMes);
      setAñoCalendario(nuevoAño);
    },
    [añoCalendario, mesCalendario, fechaMaxima]
  );

  const renderizarCalendarioMes = useCallback(
    (año, mes, mostrarNavegacion = false) => {
      const diasOcupados = obtenerDiasOcupados(fechasOcupadas);
      const primerDia = new Date(año, mes, 1);
      const ultimoDia = new Date(año, mes + 1, 0);
      const diasEnMes = ultimoDia.getDate();
      const diaInicioSemana = primerDia.getDay();
      const diaInicioAjustado = diaInicioSemana === 0 ? 6 : diaInicioSemana - 1;

      const diasSemana = ["L", "M", "X", "J", "V", "S", "D"];
      const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];

      const dias = [];
      for (let i = 0; i < diaInicioAjustado; i++) {
        dias.push(null);
      }

      const hoyStr = obtenerFechaHoy();
      for (let dia = 1; dia <= diasEnMes; dia++) {
        const fechaStr = `${año}-${String(mes + 1).padStart(2, "0")}-${String(
          dia
        ).padStart(2, "0")}`;
        const estado = obtenerEstadoDia(fechaStr);
        const ocupado = diasOcupados.has(fechaStr);
        const esPasado = fechaStr < hoyStr;
        const excedeMaximo = fechaStr > fechaMaxima;

        dias.push({
          dia,
          ocupado,
          fechaStr,
          estado,
          esPasado,
          excedeMaximo,
          clickeable: !ocupado && !esPasado && !excedeMaximo,
        });
      }

      return (
        <div key={`${año}-${mes}`} className="calendario-mes-nuevo">
          <div className="calendario-mes-header">
            {mostrarNavegacion && (
              <button
                className="calendario-nav-btn"
                onClick={() => navegarMes(-1)}
                aria-label="Mes anterior"
              >
                ←
              </button>
            )}
            <h5 className="calendario-mes-titulo">
              {meses[mes]} de {año}
            </h5>
            {mostrarNavegacion && (
              <button
                className="calendario-nav-btn"
                onClick={() => navegarMes(1)}
                aria-label="Mes siguiente"
              >
                →
              </button>
            )}
          </div>
          <div className="calendario-grid-nuevo">
            {diasSemana.map((dia) => (
              <div key={dia} className="calendario-dia-header-nuevo">
                {dia}
              </div>
            ))}
            {dias.map((item, index) => {
              if (item === null) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="calendario-dia-nuevo vacio"
                  />
                );
              }

              const esSeleccionado =
                item.estado === "seleccionado-inicio" ||
                item.estado === "seleccionado-fin" ||
                item.estado === "seleccionado-rango";

              return (
                <div
                  key={item.fechaStr}
                  className={`calendario-dia-nuevo ${
                    esSeleccionado
                      ? "seleccionado"
                      : item.clickeable
                      ? "disponible"
                      : "no-disponible"
                  } ${item.clickeable ? "clickeable" : ""}`}
                  title={
                    item.ocupado
                      ? "Ocupado"
                      : item.esPasado
                      ? "Fecha pasada"
                      : item.excedeMaximo
                      ? "Fecha no disponible"
                      : item.estado === "seleccionado-inicio"
                      ? "Fecha de ingreso"
                      : item.estado === "seleccionado-fin"
                      ? "Fecha de salida"
                      : item.estado === "seleccionado-rango"
                      ? "Rango seleccionado"
                      : "Disponible - Click para seleccionar"
                  }
                  onClick={() =>
                    item.clickeable && handleClickDia(item.fechaStr)
                  }
                >
                  {item.dia}
                </div>
              );
            })}
          </div>
        </div>
      );
    },
    [
      fechasOcupadas,
      fechaMaxima,
      obtenerEstadoDia,
      obtenerDiasOcupados,
      handleClickDia,
      navegarMes,
    ]
  );

  const obtenerMesSiguiente = useCallback(() => {
    const siguiente = new Date(añoCalendario, mesCalendario + 1, 1);
    return {
      mes: siguiente.getMonth(),
      año: siguiente.getFullYear(),
    };
  }, [añoCalendario, mesCalendario]);

  const nochesReales = useMemo(
    () => calcularNoches(fechaInicio, fechaFin),
    [fechaInicio, fechaFin, calcularNoches]
  );
  const nochesInvalidas =
    nochesReales > 0 && nochesReales < condiciones.minimoNoches;

  const calculo = useMemo(
    () =>
      fechaInicio && fechaFin && cabanaSeleccionada
        ? calcularTotal(
            fechaInicio,
            fechaFin,
            false,
            medioPago,
            huespedes,
            cabanaSeleccionada
          )
        : null,
    [fechaInicio, fechaFin, medioPago, huespedes, cabanaSeleccionada]
  );

  const pagos = useMemo(
    () => (calculo ? calcularPagos(calculo.total) : null),
    [calculo]
  );

  const cargarFechasOcupadas = useCallback(() => {
    if (!cabanaSeleccionada) {
      setFechasOcupadas([]);
      setCargandoFechasOcupadas(false);
      return;
    }

    const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    if (!CALENDAR_ID || !API_KEY || !CLIENT_ID) {
      setCargandoFechasOcupadas(false);
      return;
    }

    setCargandoFechasOcupadas(true);

    const DISCOVERY_DOCS = [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ];
    const SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

    const initClient = () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then(() =>
          gapi.client.calendar.events.list({
            calendarId: CALENDAR_ID,
            timeMin: new Date().toISOString(),
            timeMax: new Date(
              new Date().setFullYear(new Date().getFullYear() + 1)
            ).toISOString(),
            showDeleted: false,
            singleEvents: true,
            orderBy: "startTime",
          })
        )
        .then((response) => {
          const eventos = response.result.items || [];
          const eventosEstaCabana = eventos.filter((ev) => {
            const nombreEvento = ev.summary || "";
            const cabanaDetectada = detectarCabanaDesdeNombre(nombreEvento);
            return cabanaDetectada === cabanaSeleccionada;
          });

          const fechasFormateadas = eventosEstaCabana.map((ev) => {
            let inicio, fin;

            if (ev.start.date) {
              inicio = ev.start.date;
              const fechaFin = new Date(ev.end.date);
              fechaFin.setDate(fechaFin.getDate() - 1);
              fin = fechaFin.toISOString().split("T")[0];
            } else {
              inicio = ev.start.dateTime.split("T")[0];
              fin = ev.end.dateTime.split("T")[0];
            }

            return { inicio, fin };
          });

          setFechasOcupadas(fechasFormateadas);
          setCargandoFechasOcupadas(false);
        })
        .catch(() => {
          setFechasOcupadas([]);
          setCargandoFechasOcupadas(false);
        });
    };

    gapi.load("client:auth2", initClient);
  }, [cabanaSeleccionada]);

  const verificarDisponibilidad = useCallback(() => {
    if (!fechaInicio || !fechaFin) {
      setDisponibilidad({ disponible: true });
      setMostrarModalDisponibilidad(false);
      return;
    }

    const diasOcupados = obtenerDiasOcupados(fechasOcupadas);
    const [añoInicio, mesInicio, diaInicio] = fechaInicio
      .split("-")
      .map(Number);
    const [añoFin, mesFin, diaFin] = fechaFin.split("-").map(Number);
    const fechaInicioDate = new Date(añoInicio, mesInicio - 1, diaInicio);
    const fechaFinDate = new Date(añoFin, mesFin - 1, diaFin);
    const fechaActual = new Date(fechaInicioDate);
    let hayConflicto = false;

    while (fechaActual <= fechaFinDate) {
      const año = fechaActual.getFullYear();
      const mes = fechaActual.getMonth() + 1;
      const dia = fechaActual.getDate();
      const fechaCheck = `${año}-${String(mes).padStart(2, "0")}-${String(
        dia
      ).padStart(2, "0")}`;

      if (diasOcupados.has(fechaCheck)) {
        hayConflicto = true;
        break;
      }
      fechaActual.setDate(fechaActual.getDate() + 1);
    }

    if (hayConflicto) {
      setDisponibilidad({ disponible: false });
      setMensajeDisponibilidad({
        tipo: "error",
        titulo: "No hay disponibilidad",
        mensaje:
          "Lo sentimos, no hay disponibilidad para las fechas seleccionadas. Por favor, elegí otras fechas.",
      });
      setMostrarModalDisponibilidad(true);
    } else {
      setDisponibilidad({ disponible: true });
      setMostrarModalDisponibilidad(false);
    }
  }, [fechaInicio, fechaFin, fechasOcupadas, obtenerDiasOcupados]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [paso]);

  useEffect(() => {
    if (cabanaSeleccionada && paso === 2) {
      startTransition(() => {
        cargarFechasOcupadas();
      });
    }
  }, [cabanaSeleccionada, paso, cargarFechasOcupadas]);

  useEffect(() => {
    if (cabanaSeleccionada && fechaInicio && fechaFin) {
      startTransition(() => {
        verificarDisponibilidad();
      });
    }
  }, [cabanaSeleccionada, fechaInicio, fechaFin, verificarDisponibilidad]);

  const handleSiguiente = () => {
    if (paso === 1 && cabanaSeleccionada) {
      setPaso(2);
    } else if (
      paso === 2 &&
      fechaInicio &&
      fechaFin &&
      disponibilidad.disponible !== false
    ) {
      setPaso(3);
    } else if (paso === 3) {
      if (datosCliente.nombre && datosCliente.email && datosCliente.telefono) {
        setPaso(4);
      }
    }
  };

  const generarMensajeWhatsApp = () => {
    const cabanaNombre = cabanas.find(
      (c) => c.id === cabanaSeleccionada
    )?.nombre;
    const medioPagoNombre = mediosPago.find((m) => m.id === medioPago)?.nombre;

    const formatearFecha = (fechaStr) => {
      const [año, mes, dia] = fechaStr.split("-").map(Number);
      return new Date(año, mes - 1, dia).toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };

    let mensaje = `🏡 *RESERVA - Cabañas Temístocles*\n\n`;
    mensaje += `📋 *Datos de la Reserva:*\n`;
    mensaje += `• Cabaña: ${cabanaNombre}\n`;
    mensaje += `• Fechas: ${formatearFecha(fechaInicio)} al ${formatearFecha(
      fechaFin
    )}\n`;
    mensaje += `• Huéspedes: ${huespedes}\n`;
    mensaje += `• Noches: ${calculo?.noches || 0}\n\n`;
    mensaje += `👤 *Mis Datos:*\n`;
    mensaje += `• Nombre: ${datosCliente.nombre}\n`;
    mensaje += `• Email: ${datosCliente.email}\n`;
    mensaje += `• Teléfono: ${datosCliente.telefono}\n\n`;

    if (pagos) {
      mensaje += `💰 *Montos:*\n`;
      mensaje += `• Total: $${pagos.total.toLocaleString("es-AR")}\n`;
      mensaje += `• Seña (30%): $${pagos.reserva.toLocaleString(
        "es-AR"
      )} ← *Para confirmar*\n`;
      mensaje += `• Saldo (70%): $${pagos.saldo.toLocaleString(
        "es-AR"
      )} ← *Al ingresar*\n\n`;
    }

    mensaje += `💳 *Medio de pago preferido:* ${medioPagoNombre}\n\n`;

    if (datosCliente.mensaje) {
      mensaje += `📝 *Mensaje adicional:*\n${datosCliente.mensaje}\n\n`;
    }

    mensaje += `Gracias! Espero tu confirmación para proceder con el pago de la seña.`;
    return mensaje;
  };

  const handleReservar = () => {
    const mensaje = generarMensajeWhatsApp();
    const phoneNumber = "5492945405471";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(whatsappUrl, "_blank");
    setTimeout(() => navigate("/"), 500);
  };

  return (
    <section className="reservas reservas-page" id="reservas">
      <div className="reservas-header">
        <Link to="/" className="reservas-back-link">
          ← Volver al inicio
        </Link>
        <h2>Reservá tu estadía</h2>
        <p>
          Elegí tu cabaña, fechas y completá tus datos. Al finalizar, serás
          redirigido a WhatsApp para confirmar el pago.
        </p>
      </div>

      <div className="reservas-container">
        {paso === 1 && (
          <div className="reservas-paso">
            <h3>Paso 1: Elegí tu cabaña</h3>
            <div className="cabanas-seleccion">
              {cabanas.map((cabana) => (
                <button
                  key={cabana.id}
                  className={`cabana-option ${
                    cabanaSeleccionada === cabana.id ? "selected" : ""
                  }`}
                  onClick={() => setCabanaSeleccionada(cabana.id)}
                >
                  <div className="cabana-option-img">
                    {cabana.imagen && (
                      <img src={cabana.imagen} alt={cabana.nombre} />
                    )}
                  </div>
                  <div className="cabana-option-info">
                    <h4>{cabana.nombre}</h4>
                    <p>{cabana.resumen}</p>
                    <span>Hasta {cabana.capacidad} personas</span>
                  </div>
                </button>
              ))}
            </div>
            <button
              className="btn-primary"
              onClick={handleSiguiente}
              disabled={!cabanaSeleccionada}
            >
              Continuar
            </button>
          </div>
        )}

        {paso === 2 && (
          <div className="reservas-paso">
            <h3>Paso 2: Fechas y opciones</h3>

            <div className="calendario-wrapper">
              {cargandoFechasOcupadas ? (
                <p className="calendario-cargando">
                  ⏳ Cargando fechas ocupadas...
                </p>
              ) : (
                <div className="calendario-doble">
                  {renderizarCalendarioMes(añoCalendario, mesCalendario, true)}
                  <div className="calendario-mes-siguiente desktop-only">
                    {renderizarCalendarioMes(
                      obtenerMesSiguiente().año,
                      obtenerMesSiguiente().mes,
                      false
                    )}
                  </div>
                </div>
              )}
              {fechaInicio && (
                <div className="calendario-seleccion-info">
                  <div className="calendario-fechas-seleccionadas">
                    <p>
                      <strong>Ingreso:</strong> {formatearFecha(fechaInicio)}
                    </p>
                    {fechaFin && (
                      <p>
                        <strong>Salida:</strong> {formatearFecha(fechaFin)} -{" "}
                        <strong>{nochesReales}</strong> noche
                        {nochesReales !== 1 ? "s" : ""}
                      </p>
                    )}
                  </div>
                  <button
                    className="btn-limpiar-fechas"
                    onClick={limpiarFechas}
                    title="Cambiar fechas"
                    aria-label="Limpiar selección de fechas"
                  >
                    ✕ Cambiar fechas
                  </button>
                </div>
              )}
            </div>

            <div className="reservas-form-grid">
              <div className="form-group">
                <label>Cantidad de huéspedes</label>
                <input
                  type="number"
                  min="1"
                  max={capacidadMaxima}
                  value={huespedes}
                  onChange={(e) => {
                    const valor = parseInt(e.target.value) || 1;
                    const valorLimitado = Math.min(
                      Math.max(1, valor),
                      capacidadMaxima
                    );
                    setHuespedes(valorLimitado);
                  }}
                />
                <small>
                  Máximo {capacidadMaxima}{" "}
                  {capacidadMaxima === 1 ? "huésped" : "huéspedes"} para esta
                  cabaña
                </small>
              </div>
            </div>

            {calculo && (
              <div className="reservas-resumen">
                <div className="resumen-item">
                  <span>
                    {calculo.noches} noches × $
                    {calculo.precioPorNoche.toLocaleString("es-AR")}
                  </span>
                  <span>${calculo.subtotal.toLocaleString("es-AR")}</span>
                </div>
                {calculo.recargo > 0 && (
                  <div className="resumen-item">
                    <span>
                      Recargo por{" "}
                      {mediosPago.find((m) => m.id === medioPago)?.nombre}{" "}
                      (+10%)
                    </span>
                    <span>${calculo.recargo.toLocaleString("es-AR")}</span>
                  </div>
                )}
                <div className="resumen-total">
                  <span>Total</span>
                  <span>${calculo.total.toLocaleString("es-AR")}</span>
                </div>
              </div>
            )}

            {nochesInvalidas && (
              <div className="alerta-error">
                ⚠️ La estadía mínima es de {condiciones.minimoNoches} noches.
                Has seleccionado {nochesReales} noche
                {nochesReales !== 1 ? "s" : ""}. Por favor, selecciona una fecha
                de salida que permita al menos {condiciones.minimoNoches}{" "}
                noches.
              </div>
            )}

            <div className="reservas-actions">
              <button className="btn-secondary" onClick={() => setPaso(1)}>
                Volver
              </button>
              <button
                className="btn-primary"
                onClick={handleSiguiente}
                disabled={
                  !fechaInicio ||
                  !fechaFin ||
                  disponibilidad.disponible === false ||
                  nochesInvalidas
                }
              >
                Continuar
              </button>
            </div>
          </div>
        )}

        {paso === 3 && (
          <div className="reservas-paso">
            <h3>Paso 3: Tus datos</h3>
            <div className="reservas-form">
              <div className="form-group">
                <label>Nombre completo *</label>
                <input
                  type="text"
                  value={datosCliente.nombre}
                  onChange={(e) =>
                    setDatosCliente({ ...datosCliente, nombre: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  value={datosCliente.email}
                  onChange={(e) =>
                    setDatosCliente({ ...datosCliente, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Teléfono (WhatsApp) *</label>
                <input
                  type="tel"
                  value={datosCliente.telefono}
                  onChange={(e) =>
                    setDatosCliente({
                      ...datosCliente,
                      telefono: e.target.value,
                    })
                  }
                  placeholder="549XXXXXXXXXX"
                  required
                />
              </div>
              <div className="form-group">
                <label>Medio de pago preferido</label>
                <select
                  value={medioPago}
                  onChange={(e) => setMedioPago(e.target.value)}
                >
                  {mediosPago.map((medio) => (
                    <option key={medio.id} value={medio.id}>
                      {medio.nombre}
                      {medio.recargo > 0 && ` (+${medio.recargo}%)`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Mensaje adicional (opcional)</label>
                <textarea
                  value={datosCliente.mensaje}
                  onChange={(e) =>
                    setDatosCliente({
                      ...datosCliente,
                      mensaje: e.target.value,
                    })
                  }
                  rows="4"
                />
              </div>
            </div>

            {pagos && (
              <div className="reservas-pagos">
                <h4>Resumen de pagos</h4>
                <div className="pago-item">
                  <span>Seña (30%)</span>
                  <span>${pagos.reserva.toLocaleString("es-AR")}</span>
                </div>
                <div className="pago-item">
                  <span>Saldo al ingresar (70%)</span>
                  <span>${pagos.saldo.toLocaleString("es-AR")}</span>
                </div>
                <div className="pago-total">
                  <span>Total</span>
                  <span>${pagos.total.toLocaleString("es-AR")}</span>
                </div>
              </div>
            )}

            <div className="reservas-actions">
              <button className="btn-secondary" onClick={() => setPaso(2)}>
                Volver
              </button>
              <button
                className="btn-primary"
                onClick={handleSiguiente}
                disabled={
                  !datosCliente.nombre ||
                  !datosCliente.email ||
                  !datosCliente.telefono
                }
              >
                Revisar y confirmar
              </button>
            </div>
          </div>
        )}

        {paso === 4 && (
          <div className="reservas-paso">
            <h3>Paso 4: Confirmación</h3>

            <div className="reservas-whatsapp-info">
              <div className="whatsapp-info-icon">💬</div>
              <div className="whatsapp-info-text">
                <strong>¿Qué sigue?</strong>
                <p>
                  Al confirmar, serás redirigido a WhatsApp para completar el
                  pago de la seña (30%) y confirmar tu reserva. El saldo
                  restante (70%) se abona al ingresar.
                </p>
              </div>
            </div>

            <div className="reservas-confirmacion">
              <div className="confirmacion-item">
                <strong>Cabaña:</strong>
                <span>
                  {cabanas.find((c) => c.id === cabanaSeleccionada)?.nombre}
                </span>
              </div>
              <div className="confirmacion-item">
                <strong>Fechas:</strong>
                <span>
                  {formatearFechaCorta(fechaInicio)} -{" "}
                  {formatearFechaCorta(fechaFin)}
                </span>
              </div>
              <div className="confirmacion-item">
                <strong>Huéspedes:</strong>
                <span>{huespedes}</span>
              </div>
              <div className="confirmacion-item">
                <strong>Medio de pago:</strong>
                <span>
                  {mediosPago.find((m) => m.id === medioPago)?.nombre}
                </span>
              </div>
              {pagos && (
                <>
                  <div className="confirmacion-item destacado">
                    <strong>Seña a abonar (30%):</strong>
                    <span>${pagos.reserva.toLocaleString("es-AR")}</span>
                  </div>
                  <div className="confirmacion-item">
                    <strong>Saldo al ingresar (70%):</strong>
                    <span>${pagos.saldo.toLocaleString("es-AR")}</span>
                  </div>
                  <div className="confirmacion-item total">
                    <strong>Total:</strong>
                    <span>${pagos.total.toLocaleString("es-AR")}</span>
                  </div>
                </>
              )}
            </div>

            <div className="reservas-actions">
              <button className="btn-secondary" onClick={() => setPaso(3)}>
                Volver
              </button>
              <button
                className="btn-primary btn-large"
                onClick={handleReservar}
              >
                Confirmar y continuar en WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>

      {mostrarModalDisponibilidad && (
        <div
          className="modal-overlay"
          onClick={
            mensajeDisponibilidad.tipo === "loading"
              ? undefined
              : () => setMostrarModalDisponibilidad(false)
          }
        >
          <div
            className="modal-confirmacion"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`modal-icon ${mensajeDisponibilidad.tipo}`}>
              {mensajeDisponibilidad.tipo === "loading"
                ? "⏳"
                : mensajeDisponibilidad.tipo === "error"
                ? "❌"
                : "✅"}
            </div>
            <h3 className="modal-titulo">{mensajeDisponibilidad.titulo}</h3>
            <p className="modal-mensaje">{mensajeDisponibilidad.mensaje}</p>
            <div className="modal-actions">
              {mensajeDisponibilidad.tipo === "loading" ? (
                <button className="btn-primary" disabled>
                  Verificando...
                </button>
              ) : (
                <button
                  className="btn-primary"
                  onClick={() => setMostrarModalDisponibilidad(false)}
                >
                  Entendido
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
