export const serviciosEncabezado = {
  eyebrow: 'NUESTROS SERVICIOS',
  titulo: 'Estudios y procedimientos para tu salud digestiva',
  bajada:
    'Estudios digestivos con equipamiento moderno y acompañamiento en cada paso. Todos los estudios se realizan según indicación médica.',
};

// En mobile el botón muestra solo `consultar`; `consultarDetalle` queda para lectores de pantalla
export const serviciosAcciones = {
  consultar: 'Consultar',
  consultarDetalle: ' por este estudio',
  verPreparacion: 'Ver preparación',
};

// ÍCONOS: reemplazar por un set profesional si el cliente lo pide
// (claves anteriores: estomago, colon, aire, lactosa, sibo)

// La numeración 01 a 06 sigue el orden de los grupos y de los estudios dentro de cada uno.
// `destacado` marca los estudios principales (cards más amplias con franja superior).
export const gruposServicios = [
  {
    id: 'endoscopicos',
    nombre: 'Estudios endoscópicos',
    destacado: true,
    estudios: [
      {
        id: 'endoscopia-alta',
        titulo: 'Endoscopía digestiva alta',
        descripcion: 'Estudio del esófago, estómago y duodeno.',
        mensajeWhatsapp: 'Hola, quiero consultar por Endoscopía Digestiva Alta',
        preparacion: true,
        // icono: 'estomago',
      },
      {
        id: 'colonoscopia',
        titulo: 'Colonoscopía',
        descripcion: 'Estudio del colon y recto.',
        mensajeWhatsapp: 'Hola, quiero consultar por Colonoscopía',
        preparacion: true,
        // icono: 'colon',
      },
    ],
  },
  {
    id: 'aire-espirado',
    nombre: 'Tests de aire espirado',
    destacado: false,
    estudios: [
      {
        id: 'test-aire-espirado',
        titulo: 'Test de aire espirado',
        descripcion: 'Estudio no invasivo para evaluar alteraciones digestivas.',
        mensajeWhatsapp: 'Hola, quiero consultar por Test de Aire Espirado',
        preparacion: true,
        // icono: 'aire',
      },
      {
        id: 'intolerancia-lactosa',
        titulo: 'Intolerancia a la lactosa',
        descripcion: 'Diagnóstico preciso mediante test de aire espirado.',
        mensajeWhatsapp: 'Hola, quiero consultar por Intolerancia a la Lactosa',
        preparacion: true,
        // icono: 'lactosa',
      },
      {
        // PENDIENTE REVISIÓN MÉDICA: confirmar que la detección de SIBO se realiza por test de aire espirado
        id: 'deteccion-sibo',
        titulo: 'Detección de SIBO',
        descripcion: 'Estudio de sobrecrecimiento bacteriano intestinal.',
        mensajeWhatsapp: 'Hola, quiero consultar por Detección de SIBO',
        preparacion: true,
        // icono: 'sibo',
      },
    ],
  },
  {
    id: 'terapeutica',
    nombre: 'Endoscopía terapéutica',
    destacado: false,
    estudios: [
      {
        // PENDIENTE REVISIÓN MÉDICA: validar descripción con el Dr. Galarza
        id: 'cpre',
        titulo: 'CPRE',
        subtitulo: 'Colangiopancreatografía retrógrada endoscópica',
        descripcion: 'Procedimiento endoscópico para diagnosticar y tratar problemas de la vía biliar y el páncreas, como cálculos o estrecheces.',
        mensajeWhatsapp: 'Hola, quiero consultar por CPRE',
        preparacion: false,
      },
    ],
  },
];

// PENDIENTE CLIENTE: confirmar si estos servicios siguen vigentes
// {
//   id: 'prevencion',
//   titulo: 'Prevención',
//   descripcion: 'Detección temprana y prevención de patologías digestivas.',
//   icono: 'escudo',
// },
