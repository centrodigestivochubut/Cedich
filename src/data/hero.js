export const hero = {
  eyebrow: 'RAWSON, CHUBUT',
  titulo: 'Centro de Endoscopías Digestivas de Chubut',
  bajada:
    'Endoscopía alta, colonoscopía y test de aire espirado en Rawson, con equipamiento propio y un equipo que te acompaña en cada paso.',
  cta: 'Solicitar turno por WhatsApp',
  beneficios: [
    { etiqueta: 'Atención personalizada', icono: 'personas' },
    { etiqueta: 'Equipamiento propio', icono: 'equipo' },
    { etiqueta: 'Te guiamos en la preparación', icono: 'preparacion' },
  ],
  // Fondo rotativo. `desktop` y `mobile` son nombres base de imágenes optimizadas.
  // Los encuadres (object-position) son opcionales; sin ellos, la primera conserva
  // el encuadre del CSS y las demás quedan centradas.
  diapositivas: [
    { desktop: 'hero-desktop', mobile: 'hero-mobile' },
    {
      desktop: 'hero-2-desktop',
      mobile: 'hero-2-mobile',
      encuadreDesktop: 'center 40%',
      encuadreMobile: 'center 40%',
    },
    {
      desktop: 'hero-3-desktop',
      mobile: 'hero-3-mobile',
      encuadreDesktop: 'center 40%',
      encuadreMobile: 'center 40%',
    },
    {
      desktop: 'hero-4-desktop',
      mobile: 'hero-4-mobile',
      encuadreDesktop: 'center 40%',
      encuadreMobile: 'center 40%',
    },
  ],
};
