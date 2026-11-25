export const equipoEncabezado = {
  eyebrow: 'NUESTRO EQUIPO',
  titulo: 'Las personas detrás de cada estudio',
  bajada: 'Las personas que te reciben, te acompañan durante el estudio y te explican cada paso.',
};

// `foto` es el nombre base de la imagen optimizada (ej. 'equipo-maria-perez'); vacío si todavía no hay foto.
// `matricula` queda vacía si no corresponde.
// Un solo grupo: el equipo se muestra unido, sin subtítulos de área.
// Orden: médicos primero, después instrumentación y secretaría.
export const equipoAreas = [
  {
    nombre: 'Equipo CEDICH',
    integrantes: [
      {
        nombre: 'Dr. Jarvey Valbuena Ortiz',
        cargo: 'Médico cirujano',
        descripcion: 'Realiza endoscopías altas y bajas diagnósticas.',
        matricula: 'MP 5832',
        foto: 'equipo-jarvey-valbuena',
        fotoAlt: 'Dr. Jarvey Valbuena Ortiz en CEDICH',
      },
      {
        nombre: 'Dra. Camila Andrea Cáceres',
        cargo: 'Médica cirujana',
        descripcion:
          'Especialista en soporte parenteral y falla intestinal. Realiza endoscopías altas y bajas diagnósticas.',
        matricula: 'MP 5506 · MN 179285',
        // PENDIENTE CLIENTE: foto (mientras tanto se muestran las iniciales)
        foto: '',
        fotoAlt: 'Dra. Camila Andrea Cáceres en CEDICH',
      },
      {
        nombre: 'Dr. Nicolás Deltin',
        cargo: 'Médico anestesiólogo',
        // PENDIENTE CLIENTE: validar texto con el Dr. Deltin
        descripcion: 'Se ocupa de la sedación y del cuidado del paciente durante los estudios.',
        matricula: 'MP 5359',
        // PENDIENTE CLIENTE: foto (mientras tanto se muestran las iniciales)
        foto: '',
        fotoAlt: 'Dr. Nicolás Deltin en CEDICH',
      },
      {
        nombre: 'Lic. Jessica I. Beltrán',
        cargo: 'Instrumentación quirúrgica',
        descripcion: 'Asiste al equipo médico en las endoscopías y en las CPRE.',
        matricula: 'MP 0082',
        foto: 'equipo-jessica-beltran',
        fotoAlt: 'Lic. Jessica I. Beltrán, instrumentadora quirúrgica de CEDICH',
      },
      {
        nombre: 'Sofía Rivero',
        cargo: 'Instrumentadora quirúrgica',
        // PENDIENTE CLIENTE: validar texto, título y matrícula
        descripcion:
          'Asiste al equipo médico durante los estudios y se ocupa de la preparación de la sala y el equipamiento.',
        matricula: '',
        foto: 'equipo-sofia-rivero',
        fotoAlt: 'Sofía Rivero, instrumentadora quirúrgica de CEDICH',
      },
      {
        // PENDIENTE CLIENTE: apellido
        nombre: 'Carolina',
        cargo: 'Secretaría y tests de aire espirado',
        // PENDIENTE CLIENTE: validar texto
        descripcion: 'Coordina los turnos, recibe a los pacientes y realiza los tests de aire espirado.',
        matricula: '',
        foto: 'equipo-carolina',
        fotoAlt: 'Carolina, secretaria de CEDICH',
      },
    ],
  },
];
