/**
 * ============================================================
 *  ARCHIVO ÚNICO DE DATOS — Tinta Negra Studio (web de demostración)
 * ============================================================
 *  Todos los textos, precios, horarios, imágenes y enlaces de la web
 *  salen de aquí. Para adaptarla a un estudio real basta con editar
 *  este archivo y cambiar las fotos de /public/img por las propias.
 *
 *  ⚠ Estudio, dirección, teléfono, artistas, redes y opiniones son
 *    FICTICIOS. Las fotos son de Unsplash (licencia libre de Unsplash),
 *    convertidas a WebP; ver `photoCredits` al final del archivo.
 * ============================================================
 */

export const site = {
  // URL pública final (se usa en Open Graph y canonical). Cambiar tras desplegar.
  url: 'https://demo-tatuajes-two.vercel.app',
  lang: 'es',
  title: 'Tinta Negra Studio · Estudio de tatuajes en La Laguna, Tenerife',
  description:
    'Tinta Negra Studio: tatuajes de realismo, tradicional, fine line, blackwork y lettering en San Cristóbal de La Laguna, Tenerife. Diseño a medida. Pide tu cita por WhatsApp.',
  ogImage: '/img/og.jpg',
  themeColor: '#0b0b0b',
}

export const business = {
  name: 'Tinta Negra Studio',
  shortName: 'Tinta Negra',
  eyebrow: 'Estudio de tatuajes · La Laguna',
  slogan: 'Piel con historia. Tinta con carácter.',
  intro:
    'Diseños originales, agujas nuevas en cada sesión y cero prisas. Tú traes la idea; nosotros la convertimos en algo que vas a llevar con orgullo toda la vida.',
  city: 'San Cristóbal de La Laguna',
  // Dirección inventada (no corresponde a ningún local real).
  address: 'Calle de la Aguja, 7',
  postalCode: '38201',
  region: 'Tenerife, España',
  phoneDisplay: '+34 600 000 000', // teléfono de ejemplo
  whatsapp: '34600000000', // formato internacional, sin "+" ni espacios
  whatsappMessage: 'Hola, quiero información para un tatuaje',
  email: 'hola@tintanegra.example', // correo de ejemplo
  heroImage: '/img/hero-1600.webp',
  heroImageMobile: '/img/hero-800.webp',
  heroImageAlt: 'Tatuador trabajando en el brazo de un cliente en un estudio en penumbra',
}

export const nav = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Artistas', href: '#artistas' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Precios', href: '#precios' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

export const buttons = {
  book: 'Pedir cita',
  works: 'Ver trabajos',
  whatsappFloat: 'Pedir cita por WhatsApp',
  directions: 'Cómo llegar',
}

// Franja de datos rápidos bajo la portada.
export const highlights = ['Diseño 100 % a medida', 'Material estéril de un solo uso', 'Solo mayores de 18', 'Con cita previa']

// ---------- GALERÍA ----------
// "style" debe coincidir con un "id" de gallery.filters.
// Cada foto tiene versión pequeña (-sm, 600×750) y grande (-lg, 1200×1500) en WebP.
const g = (file, style, alt) => ({ thumb: `/img/g-${file}-sm.webp`, full: `/img/g-${file}-lg.webp`, style, alt })

export const gallery = {
  title: 'Trabajos',
  subtitle: 'Una selección de piezas por estilo. Toca una foto para verla en grande.',
  allLabel: 'Todos',
  filters: [
    { id: 'realismo', label: 'Realismo' },
    { id: 'tradicional', label: 'Tradicional' },
    { id: 'fineline', label: 'Fine line' },
    { id: 'blackwork', label: 'Blackwork' },
    { id: 'lettering', label: 'Lettering' },
  ],
  items: [
    g('realismo-1', 'realismo', 'Manga de realismo en negro y gris con retrato femenino'),
    g('tradicional-1', 'tradicional', 'Brazo con piezas de estilo tradicional a color'),
    g('fineline-2', 'fineline', 'Peonías en línea fina sobre el antebrazo'),
    g('blackwork-1', 'blackwork', 'Mandala de blackwork en la espalda'),
    g('lettering-1', 'lettering', 'Brazo con lettering y sombreado en tonos cálidos'),
    g('tradicional-2', 'tradicional', 'Golondrina y rosa de estilo tradicional en las piernas'),
    g('realismo-2', 'realismo', 'Tatuador sombreando una pieza realista en el antebrazo'),
    g('blackwork-2', 'blackwork', 'Ojo de blackwork en el dorso de la mano'),
    g('fineline-1', 'fineline', 'Rama y frase en línea fina en el antebrazo'),
    g('lettering-2', 'lettering', 'Lettering en el pecho y cuello'),
    g('tradicional-4', 'tradicional', 'Mano esquelética con flor de caléndula a color'),
    g('blackwork-3', 'blackwork', 'Símbolos nórdicos en blackwork sobre la pierna'),
    g('realismo-3', 'realismo', 'Pieza realista con daga en el brazo'),
    g('tradicional-3', 'tradicional', 'Rosa roja tradicional en la mano'),
    g('fineline-3', 'fineline', 'Pequeño tatuaje de línea fina en la muñeca'),
    g('blackwork-4', 'blackwork', 'Serpiente de blackwork en la mano'),
    g('lettering-3', 'lettering', 'Espalda y brazos tatuados con lettering'),
  ],
}

// ---------- ARTISTAS (de ejemplo) ----------
// Instagram: enlaces de ejemplo que llevan a la portada de Instagram,
// para no apuntar a cuentas reales. Sustituir por los perfiles del estudio.
export const artists = {
  title: 'Los artistas',
  subtitle: 'Tres manos, tres maneras de entender la tinta. Elige con quién quieres trabajar.',
  members: [
    {
      name: 'Zeke Morales',
      role: 'Fundador',
      styles: ['Blackwork', 'Lettering'],
      bio: 'Negros sólidos, geometría y letras dibujadas a mano. Más de 12 años con la máquina.',
      photo: '/img/artista-1.webp',
      instagram: '@zeke.tintanegra',
      instagramUrl: 'https://www.instagram.com/',
    },
    {
      name: 'Iván Herrera',
      role: 'Artista residente',
      styles: ['Tradicional', 'Neotradicional'],
      bio: 'Líneas gruesas, color que dura y flash clásico reinterpretado.',
      photo: '/img/artista-2.webp',
      instagram: '@ivan.tintanegra',
      instagramUrl: 'https://www.instagram.com/',
    },
    {
      name: 'Bruno Santana',
      role: 'Artista residente',
      styles: ['Realismo', 'Fine line'],
      bio: 'Retratos en negro y gris, texturas finas y piezas delicadas de aguja única.',
      photo: '/img/artista-3.webp',
      instagram: '@bruno.tintanegra',
      instagramUrl: 'https://www.instagram.com/',
    },
  ],
}

// ---------- CÓMO FUNCIONA ----------
export const howItWorks = {
  title: 'Cómo funciona',
  subtitle: 'Del boceto a la piel en cuatro pasos.',
  steps: [
    {
      title: 'Consulta y diseño',
      text: 'Escríbenos por WhatsApp con tu idea, zona del cuerpo, tamaño aproximado y referencias. Quedamos (en el estudio o en línea) y el artista dibuja tu diseño a medida.',
    },
    {
      title: 'Presupuesto y señal',
      text: 'Te damos un precio cerrado o por sesión. Para reservar fecha pedimos una señal que se descuenta del total el día del tatuaje.',
    },
    {
      title: 'Sesión',
      text: 'Revisamos el diseño contigo, colocamos el stencil y tatuamos con material estéril y de un solo uso. Puedes hacer pausas siempre que lo necesites.',
    },
    {
      title: 'Cuidados posteriores',
      text: 'Te vas con las indicaciones por escrito y te acompañamos durante la curación. Si hace falta, el retoque de los primeros meses va incluido.',
    },
  ],
}

// ---------- PRECIOS (de ejemplo) ----------
export const pricing = {
  title: 'Precios orientativos',
  subtitle: 'Cada diseño se presupuesta de forma individual según tamaño, zona, detalle y tiempo.',
  items: [
    { name: 'Pieza pequeña', price: 'desde 60 €', note: 'Mínimo por pieza. Incluye material y diseño sencillo.' },
    { name: 'Media sesión', price: '200 €', note: 'Hasta 3 horas de trabajo. Ideal para piezas medianas.', featured: true },
    { name: 'Sesión completa', price: '380 €', note: 'Hasta 6 horas. Mangas, espaldas y proyectos grandes.' },
  ],
  deposit: 'Señal para reservar: 50 €, descontada del precio final.',
  disclaimer:
    'Precios de ejemplo con IVA incluido. El presupuesto definitivo se da tras la consulta: cada diseño se presupuesta de forma individual.',
}

// ---------- CUIDADOS ----------
// ⚠ PENDIENTE DE REVISIÓN: consejos genéricos de ejemplo. El estudio
//   debe revisarlos y adaptarlos a su protocolo antes de publicarlos.
export const aftercare = {
  title: 'Cuidados del tatuaje',
  subtitle: 'Lo básico para que cure bien y luzca durante años.',
  reviewNotice: 'Consejos de ejemplo pendientes de revisión por el estudio. Sigue siempre las indicaciones de tu artista.',
  needsReview: true,
  tips: [
    { title: 'Las primeras horas', text: 'Deja el film o apósito el tiempo que te indique tu artista. Después, lava con agua tibia y jabón neutro, sin frotar.' },
    { title: 'Hidratación', text: 'Aplica una capa fina de crema específica 2 o 3 veces al día durante unas dos semanas. Menos es más.' },
    { title: 'Nada de rascar', text: 'Picará y se pelará: es normal. No arranques costras ni pieles para no perder tinta.' },
    { title: 'Sol, playa y piscina', text: 'Evita el sol directo, el mar y las piscinas hasta que esté curado. Después, protector solar alto siempre.' },
    { title: 'Ropa y roce', text: 'Usa ropa holgada y limpia sobre la zona los primeros días para evitar roces e irritaciones.' },
    { title: 'Si algo no va bien', text: 'Enrojecimiento que crece, calor intenso o fiebre no son normales: escríbenos y consulta con un profesional sanitario.' },
  ],
}

// ---------- PREGUNTAS FRECUENTES ----------
export const faq = {
  title: 'Preguntas frecuentes',
  items: [
    {
      q: '¿Cuál es la edad mínima para tatuarse?',
      a: '18 años. Pedimos DNI o documento oficial antes de cada sesión, sin excepciones.',
    },
    {
      q: '¿Qué tengo que llevar el día de la cita?',
      a: 'Tu DNI, ropa cómoda que deje accesible la zona, algo de comer y beber para sesiones largas y, si quieres, auriculares. Del resto nos encargamos nosotros.',
    },
    {
      q: '¿Cómo me preparo antes de tatuarme?',
      a: 'Duerme bien, come antes de venir y mantén la piel hidratada los días previos. Evita el alcohol las 24 horas anteriores y no tomes el sol en la zona la semana antes.',
    },
    {
      q: '¿Qué pasa si tengo que cancelar o cambiar la cita?',
      a: 'Avísanos con al menos 48 horas y movemos la fecha sin perder la señal. Si cancelas con menos tiempo o no te presentas, la señal no se devuelve.',
    },
    {
      q: '¿Puedo traer mi propio diseño?',
      a: 'Claro. Lo usamos como referencia y el artista lo adapta a tu cuerpo y a su estilo para que funcione bien en piel.',
    },
  ],
}

// ---------- OPINIONES ----------
// ⚠ DATOS DE DEMOSTRACIÓN: opiniones inventadas, no son reseñas reales.
export const reviews = {
  title: 'Opiniones',
  subtitle: 'Lo que cuentan quienes ya salieron con tinta nueva.',
  demoNotice: 'Opiniones de demostración: textos de ejemplo, no son reseñas reales.',
  items: [
    { name: 'Laura M.', rating: 5, text: 'Llegué con una idea muy vaga y salí con la pieza que no sabía que quería. Trato de diez y un estudio limpísimo.', demo: true },
    { name: 'Carlos D.', rating: 5, text: 'Mi primera manga y no podía estar más contento. Me explicaron cada paso y las sesiones se hicieron cortas.', demo: true },
    { name: 'Andrea P.', rating: 5, text: 'Fine line perfecto, líneas finísimas y la curación fue de libro siguiendo sus cuidados.', demo: true },
    { name: 'Javi R.', rating: 4, text: 'Mucha lista de espera, pero merece la pena. El lettering quedó exactamente como lo dibujamos.', demo: true },
  ],
}

// ---------- CONTACTO ----------
export const contact = {
  title: 'Visítanos',
  // day: 0 = domingo … 6 = sábado (para resaltar el día de hoy)
  hours: [
    { day: 1, label: 'Lunes', time: 'Cerrado' },
    { day: 2, label: 'Martes', time: '11:00 – 20:00' },
    { day: 3, label: 'Miércoles', time: '11:00 – 20:00' },
    { day: 4, label: 'Jueves', time: '11:00 – 20:00' },
    { day: 5, label: 'Viernes', time: '11:00 – 20:00' },
    { day: 6, label: 'Sábado', time: '11:00 – 15:00' },
    { day: 0, label: 'Domingo', time: 'Cerrado' },
  ],
  hoursNote: 'Solo con cita previa.',
  addressNote: 'Dirección y mapa de ejemplo para esta demostración.',
  // Coordenadas del mapa de ejemplo (casco de La Laguna).
  map: { lat: 28.4874, lon: -16.3159, zoomBox: 0.006 },
}

// Redes de ejemplo: llevan a la portada de cada red, no a cuentas reales.
export const socials = [
  { name: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/' },
  { name: 'TikTok', icon: 'tiktok', href: 'https://www.tiktok.com/' },
  { name: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/' },
]

export const footer = {
  credit: 'Web de demostración creada por',
  creditName: 'Rafael Rivero Dev',
  creditUrl: 'https://rafaelriverodev.com',
  disclaimer:
    'Tinta Negra Studio es un estudio ficticio. Artistas, datos de contacto y opiniones son de ejemplo. Fotos: Unsplash.',
}

// Créditos de las fotos (IDs de Unsplash). Útil para atribuir o sustituir.
export const photoCredits = {
  hero: '1775135981378-4e7c1767436d',
  'artista-1': '1606276969080-bf446209054a',
  'artista-2': '1700652793469-6fcbffc9aed6',
  'artista-3': '1769605767701-6e5a680ef685',
  'realismo-1': '1665085326630-b01fea9a613d',
  'realismo-2': '1568515045052-f9a854d70bfd',
  'realismo-3': '1669476526639-e390ead82f4b',
  'tradicional-1': '1543244128-30d70d41e2a9',
  'tradicional-2': '1601848714157-d845bb5c11ff',
  'tradicional-3': '1585303390830-874c989ce8f1',
  'tradicional-4': '1718661426798-208d614f4f1e',
  'fineline-1': '1542727365-19732a80dcfd',
  'fineline-2': '1562962230-16e4623d36e6',
  'fineline-3': '1531951829979-d658d7e5e8a6',
  'blackwork-1': '1586243287039-23f4c8e2e7ab',
  'blackwork-2': '1627960630431-270d04164a22',
  'blackwork-3': '1662753361921-e6784e43f88b',
  'blackwork-4': '1635889096265-24e4efa72e42',
  'lettering-1': '1479767574301-a01c78234a0c',
  'lettering-2': '1571248526699-9b0203142333',
  'lettering-3': '1759247943094-38c725526a5d',
}
