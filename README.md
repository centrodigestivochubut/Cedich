# CEDICH — Sitio web institucional

Sitio web oficial de **CEDICH — Centro de Endoscopías Digestivas de Chubut**.
Pedro Martínez 45, Rawson, Chubut, Argentina (dentro del Instituto Cardiovascular).

Sitio institucional estático de una sola página, pensado para informar al paciente y facilitar la consulta por WhatsApp. No tiene backend, base de datos, panel de administración, sistema de turnos ni login de usuarios.

---

## Stack

- [Astro](https://astro.build) — sitio estático
- [Tailwind CSS v4](https://tailwindcss.com)
- React (Islands) solo en componentes interactivos: menú mobile, preguntas frecuentes y preparación para estudios
- Deploy en [Vercel](https://vercel.com) con integración a GitHub
- Sitemap automático (`@astrojs/sitemap`), metadatos SEO, Open Graph y datos estructurados (JSON-LD)

## Requisitos

- Node.js **22.12 o superior**
- npm

## Comandos

| Comando           | Acción                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Instala las dependencias                        |
| `npm run dev`     | Servidor local en `http://localhost:4321`       |
| `npm run build`   | Genera el sitio de producción en `./dist/`      |
| `npm run preview` | Previsualiza el build de producción localmente  |

## Estructura

```text
/
├── public/                 Imágenes, logos, favicons, imagen para compartir (OG) y robots.txt
├── src/
│   ├── components/
│   │   ├── home/           Secciones de la página (Hero, Servicios, Nosotros, Profesionales,
│   │   │                   Tecnología, Preparación, Pacientes, Obras sociales, Ubicación)
│   │   ├── layout/         Header, menú mobile y footer
│   │   └── ui/             Componentes reutilizables (títulos de sección, botón flotante de WhatsApp)
│   ├── data/               Todo el contenido editable del sitio
│   ├── layouts/            Layout base con SEO, Open Graph y JSON-LD
│   ├── pages/              Inicio + Política de privacidad + Términos y condiciones
│   └── styles/             Estilos globales y variables de marca
└── astro.config.mjs        Configuración de Astro (URL del sitio, sitemap, integraciones)
```

## Cómo editar el contenido

Los textos y datos del sitio **no están escritos dentro de los componentes**: viven en `src/data/`.

| Archivo                        | Contenido                                                    |
| :----------------------------- | :----------------------------------------------------------- |
| `site.js`                      | Nombre, teléfono, WhatsApp, dirección, horarios, redes, mapa y mensajes prearmados de WhatsApp |
| `hero.js`                      | Portada                                                       |
| `servicios.js`                 | Estudios y servicios                                          |
| `nosotros.js`                  | Sección institucional                                         |
| `profesionales.js`             | Equipo médico y trayectoria                                   |
| `tecnologia.js`                | Equipamiento                                                  |
| `preparacion.js` / `pasos.js`  | Preparación para estudios y pasos para pedir turno            |
| `faq.js`                       | Preguntas frecuentes                                          |
| `obrasSociales.js`             | Obras sociales                                                |
| `ubicacion.js` / `footer.js`   | Contacto, ubicación y pie de página                           |
| `legal.js`                     | Páginas legales                                               |

Los datos de contacto (nombre, dirección, teléfono y horarios) deben coincidir siempre con la ficha de CEDICH en Google Maps, Instagram y Facebook.

### Contenido pendiente de confirmación

Los datos que todavía no fueron confirmados están marcados en el código con comentarios:

- `PENDIENTE CLIENTE` — información a confirmar por CEDICH (horarios, obras sociales, redes, etc.)
- `PENDIENTE REVISIÓN MÉDICA` — textos médicos que debe validar un profesional antes de publicarse

Para ver la lista completa, buscá esos textos en el proyecto.

## Deploy

El sitio se publica automáticamente en Vercel con cada `push` a la rama `main`.

Al conectar o cambiar el dominio definitivo, actualizar la URL en:

- `astro.config.mjs` → `site`
- `public/robots.txt` → línea `Sitemap`

De esa URL dependen el sitemap, la URL canónica y la vista previa al compartir el link (WhatsApp, redes).

## Créditos

Diseño y desarrollo: [DevCraft](https://devcraft.com.ar)

© 2026 CEDICH — Centro de Endoscopías Digestivas de Chubut. Todos los derechos reservados.