export const site = {
  nombreCorto: 'CEDICH',
  nombreCompleto: 'Centro de Endoscopías Digestivas de Chubut',
  telefono: '280 453 3933',
  telefonoInternacional: '+54 9 280 453-3933',
  whatsapp: '5492804533933',
  direccion: 'Pedro Martínez 45',
  localidad: 'Rawson',
  provincia: 'Chubut',
  codigoPostal: '9103',
  pais: 'Argentina',
  referencia: 'Dentro del Instituto Cardiovascular',
  // Horarios iguales a los de la ficha de Google de CEDICH
  horarios: [
    { dia: 'Lunes', franja: '13:00 a 17:00' },
    { dia: 'Miércoles', franja: '09:00 a 12:00' },
  ],
  instagram: {
    url: 'https://www.instagram.com/cedich_arg/',
    usuario: '@cedich_arg',
  },
  facebook: {
    url: 'https://www.facebook.com/cedichendoscopia/',
  },
  // PENDIENTE CLIENTE: confirmar si CEDICH tiene TikTok y su usuario
  tiktok: {
    url: '',
    usuario: '',
  },
  // Nombre oficial: 'Centro de Endoscopías Digestivas de Chubut'. La ficha de Google figura como
  // 'Centro de Endoscopias Digestivas del Chubut | CEDICH' y se va a unificar a este nombre.
  // Mantener iguales en web, ficha de Google, Instagram y Facebook: nombre, dirección, teléfono y horarios.
  // Variantes del nombre que circulan en Google y redes (solo para datos estructurados).
  nombresAlternativos: ['Centro de Endoscopias Digestivas del Chubut', 'Centro de Endoscopía Digestiva de Chubut'],
  // Localidades a las que atiende CEDICH (solo para datos estructurados)
  areaAtencion: ['Rawson', 'Playa Unión', 'Trelew', 'Gaiman', 'Dolavon', 'Puerto Madryn'],
  googlePlaceId: 'ChIJNTsRit1XAb4RzLz86jnfkGE',
  coordenadas: { latitud: -43.3013863, longitud: -65.1080839 },
  // Ficha oficial de CEDICH en Google Maps (nombre, opiniones, fotos y ruta).
  // Link alternativo al mismo destino, solo como referencia: https://share.google/B02CDs5fb5ZbxURgJ
  googleFichaUrl: 'https://maps.app.goo.gl/1KXyTKAGgxbm6EXW6',
  // Abre directamente el formulario para dejar una opinión en la ficha de Google de CEDICH
  googleOpinionUrl: 'https://search.google.com/local/writereview?placeid=ChIJNTsRit1XAb4RzLz86jnfkGE',
  googleMapaEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.6148747791335!2d-65.1080839!3d-43.3013863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbe0157dd8a113b35%3A0x6190df39eafcbccc!2sCentro%20de%20Endoscopias%20Digestivas%20del%20Chubut%20%7C%20CEDICH!5e0!3m2!1ses!2sar!4v1792695138871!5m2!1ses!2sar',
  googleComoLlegarUrl: 'https://www.google.com/maps/dir/?api=1&destination=-43.3013863,-65.1080839',
};

// Mensajes de WhatsApp unificados
export const whatsappMensajes = {
  solicitarTurno: 'Hola, quiero solicitar un turno',
  consultaGeneral: 'Hola, tengo una consulta',
  consultaCobertura: 'Hola, quiero consultar si trabajan con mi obra social',
  consultaPreparacion: 'Hola, quiero consultar por la preparación de un estudio',
};

export function getWhatsappLink(mensaje) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}