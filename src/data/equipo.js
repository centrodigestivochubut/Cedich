export const equipoEncabezado = {
  eyebrow: 'NUESTRO EQUIPO',
  titulo: 'Las personas detrás de cada estudio',
  bajada:
    'Médicos, instrumentadoras y secretaría trabajan juntos para que tu estudio sea seguro, puntual y sin vueltas.',
};

// `foto` es el nombre base de la imagen optimizada (ej. 'equipo-maria-perez'); vacío si todavía no hay foto.
// `matricula` queda vacía si no corresponde.
export const equipoAreas = [
  {
    nombre: 'Equipo CEDICH',
    integrantes: [
      {
        nombre: 'Dr. Jarvey Valbuena',
        // PENDIENTE CLIENTE: confirmar especialidad
        cargo: 'Médico',
        // PENDIENTE CLIENTE: validar con el Dr. Valbuena
        descripcion: 'Realiza estudios endoscópicos en CEDICH junto al Dr. Andrés Galarza.',
        // PENDIENTE CLIENTE
        matricula: '',
        foto: 'equipo-jarvey-valbuena',
        fotoAlt: 'Dr. Jarvey Valbuena en CEDICH',
      },
      {
        nombre: 'Jessica Beltrán',
        cargo: 'Instrumentadora quirúrgica',
        // PENDIENTE CLIENTE: validar texto
        descripcion: 'Asiste al equipo médico durante los estudios y acompaña a cada paciente en la sala.',
        matricula: '',
        foto: 'equipo-jessica-beltran',
        fotoAlt: 'Jessica Beltrán, instrumentadora quirúrgica de CEDICH',
      },
      {
        nombre: 'Sofía Rivero',
        cargo: 'Instrumentadora quirúrgica',
        // PENDIENTE CLIENTE: validar texto
        descripcion:
          'Asiste al equipo médico durante los estudios y se ocupa de la preparación de la sala y el equipamiento.',
        matricula: '',
        foto: 'equipo-sofia-rivero',
        fotoAlt: 'Sofía Rivero, instrumentadora quirúrgica de CEDICH',
      },
      {
        // PENDIENTE CLIENTE: apellido
        nombre: 'Yamila',
        cargo: 'Secretaría y tests de aire espirado',
        // PENDIENTE CLIENTE: validar texto
        descripcion: 'Coordina los turnos, recibe a los pacientes y realiza los tests de aire espirado.',
        matricula: '',
        foto: 'equipo-yamila',
        fotoAlt: 'Yamila, secretaria de CEDICH',
      },
    ],
  },
];
