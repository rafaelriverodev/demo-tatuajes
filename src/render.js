// Genera el HTML de la página a partir de src/data.js en tiempo de build
// (y en cada recarga en desarrollo). La web carga ya pintada, sin esperar
// a JavaScript, y todo el contenido sigue en un único archivo de datos.
import * as d from './data.js'

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

const abs = (path) => (/^https?:/.test(path) ? path : `${d.site.url}${path}`)

export const waLink = () =>
  `https://wa.me/${d.business.whatsapp}?text=${encodeURIComponent(d.business.whatsappMessage)}`

const icons = {
  whatsapp:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>',
  tiktok:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M16.6 2h-3.3v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.2a6.2 6.2 0 1 0 5.3 6.2V8.6a7.9 7.9 0 0 0 4.4 1.3V6.6a4.5 4.5 0 0 1-4.4-4.6Z"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3v3.2h2.8V22h3.4Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m12 2.8 2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3-4.6-4.4 6.3-.9Z"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 5-7 7 7 7"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 5 7 7-7 7"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
}

const sectionHead = (num, title, subtitle) => `
      <header class="section-head reveal">
        <span class="section-num">${num}</span>
        <h2>${esc(title)}</h2>
        ${subtitle ? `<p>${esc(subtitle)}</p>` : ''}
      </header>`

const waBtn = (wa, label, cls = 'btn btn-accent') =>
  `<a class="${cls}" href="${wa}" target="_blank" rel="noopener">${icons.whatsapp}<span>${esc(label)}</span></a>`

function head() {
  const { site, business } = d
  const og = esc(abs(site.ogImage))
  return `
    <title>${esc(site.title)}</title>
    <meta name="description" content="${esc(site.description)}" />
    <meta name="theme-color" content="${esc(site.themeColor)}" />
    <link rel="canonical" href="${esc(site.url)}/" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_ES" />
    <meta property="og:site_name" content="${esc(business.name)}" />
    <meta property="og:title" content="${esc(site.title)}" />
    <meta property="og:description" content="${esc(site.description)}" />
    <meta property="og:url" content="${esc(site.url)}/" />
    <meta property="og:image" content="${og}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(business.heroImageAlt)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(site.title)}" />
    <meta name="twitter:description" content="${esc(site.description)}" />
    <meta name="twitter:image" content="${og}" />
    <link rel="preload" as="image" type="image/webp" href="${esc(business.heroImageMobile)}" media="(max-width: 699px)" fetchpriority="high" />
    <link rel="preload" as="image" type="image/webp" href="${esc(business.heroImage)}" media="(min-width: 700px)" fetchpriority="high" />`
}

function body() {
  const { business: b, nav, buttons, highlights, gallery, artists, howItWorks, pricing, aftercare, faq, reviews, contact, socials, footer } = d
  const wa = esc(waLink())
  const m = contact.map
  const bbox = [m.lon - m.zoomBox, m.lat - m.zoomBox / 2, m.lon + m.zoomBox, m.lat + m.zoomBox / 2].join('%2C')
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${m.lat}%2C${m.lon}`
  const mapsLink = `https://www.openstreetmap.org/?mlat=${m.lat}&mlon=${m.lon}#map=17/${m.lat}/${m.lon}`
  const socialLinks = socials
    .map((s) => `<a class="social" href="${esc(s.href)}" target="_blank" rel="noopener" aria-label="${esc(s.name)} (enlace de ejemplo)">${icons[s.icon]}</a>`)
    .join('')
  const [word1, ...rest] = b.shortName.split(' ')
  const logo = (label) => `
      <a class="logo" href="#inicio" aria-label="${esc(label)}">
        <span class="logo-mark" aria-hidden="true">TN</span>
        <span class="logo-text">${esc(b.shortName)}<small>Studio</small></span>
      </a>`

  return `
  <a class="skip" href="#main">Saltar al contenido</a>

  <header class="topbar" data-topbar>
    <div class="wrap topbar-inner">
      ${logo(`${b.name}, inicio`)}
      <nav class="nav" aria-label="Principal">
        ${nav.map((n) => `<a href="${n.href}">${esc(n.label)}</a>`).join('')}
      </nav>
      <a class="btn btn-accent btn-sm" href="${wa}" target="_blank" rel="noopener">${esc(buttons.book)}</a>
    </div>
  </header>

  <main id="main">
    <section class="hero" id="inicio">
      <picture>
        <source media="(min-width: 700px)" srcset="${esc(b.heroImage)}" type="image/webp" />
        <img class="hero-img" src="${esc(b.heroImageMobile)}" alt="${esc(b.heroImageAlt)}" width="800" height="1100" fetchpriority="high" decoding="async" />
      </picture>
      <div class="hero-shade" aria-hidden="true"></div>
      <div class="wrap hero-content">
        <p class="eyebrow hero-in" style="--d:0">${esc(b.eyebrow)}</p>
        <h1 class="hero-title hero-in" style="--d:1">
          <span class="hero-line">${esc(word1)}</span>
          <span class="hero-line hero-outline">${esc(rest.join(' '))}</span>
          <span class="hero-tag">Studio</span>
        </h1>
        <p class="hero-slogan hero-in" style="--d:2">${esc(b.slogan)}</p>
        <p class="hero-intro hero-in" style="--d:3">${esc(b.intro)}</p>
        <div class="hero-cta hero-in" style="--d:4">
          ${waBtn(wa, buttons.book)}
          <a class="btn btn-ghost" href="#trabajos"><span>${esc(buttons.works)}</span>${icons.arrow}</a>
        </div>
        <p class="hero-meta hero-in" style="--d:5">${icons.pin}<span>${esc(b.city)} · ${esc(b.region)}</span></p>
      </div>
    </section>

    <div class="ticker" aria-label="Lo esencial">
      <ul class="wrap ticker-list">
        ${highlights.map((h) => `<li>${esc(h)}</li>`).join('')}
      </ul>
    </div>

    <section class="section" id="trabajos">
      <div class="wrap">
        ${sectionHead('01', gallery.title, gallery.subtitle)}
        <div class="filters reveal" role="group" aria-label="Filtrar trabajos por estilo" data-filters hidden>
          <button type="button" class="chip" data-filter="all" aria-pressed="true">${esc(gallery.allLabel)} <span class="chip-count">${gallery.items.length}</span></button>
          ${gallery.filters
            .map(
              (f) =>
                `<button type="button" class="chip" data-filter="${esc(f.id)}" aria-pressed="false">${esc(f.label)} <span class="chip-count">${gallery.items.filter((i) => i.style === f.id).length}</span></button>`
            )
            .join('\n          ')}
        </div>
        <p class="sr-only" aria-live="polite" data-filter-status></p>
        <ul class="gallery">
          ${gallery.items
            .map((g) => {
              const label = gallery.filters.find((f) => f.id === g.style)?.label ?? g.style
              return `
          <li class="gallery-cell" data-style="${esc(g.style)}">
            <button class="gallery-item" type="button" data-full="${esc(g.full)}" aria-label="Ampliar: ${esc(g.alt)}">
              <img src="${esc(g.thumb)}" alt="${esc(g.alt)}" width="600" height="750" loading="lazy" decoding="async" />
              <span class="tag">${esc(label)}</span>
            </button>
          </li>`
            })
            .join('')}
        </ul>
      </div>
    </section>

    <section class="section section-alt" id="artistas">
      <div class="wrap">
        ${sectionHead('02', artists.title, artists.subtitle)}
        <ul class="artists">
          ${artists.members
            .map(
              (a) => `
          <li class="artist reveal">
            <div class="artist-photo"><img src="${esc(a.photo)}" alt="Retrato de ${esc(a.name)} (foto de ejemplo)" width="600" height="750" loading="lazy" decoding="async" /></div>
            <div class="artist-info">
              <span class="artist-role">${esc(a.role)}</span>
              <h3>${esc(a.name)}</h3>
              <ul class="artist-styles">${a.styles.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
              <p>${esc(a.bio)}</p>
              <a class="artist-ig" href="${esc(a.instagramUrl)}" target="_blank" rel="noopener" aria-label="Instagram de ${esc(a.name)} (enlace de ejemplo)">${icons.instagram}<span>${esc(a.instagram)}</span></a>
            </div>
          </li>`
            )
            .join('')}
        </ul>
      </div>
    </section>

    <section class="section" id="proceso">
      <div class="wrap">
        ${sectionHead('03', howItWorks.title, howItWorks.subtitle)}
        <ol class="steps">
          ${howItWorks.steps
            .map(
              (s, i) => `
          <li class="step reveal">
            <span class="step-num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
            <h3>${esc(s.title)}</h3>
            <p>${esc(s.text)}</p>
          </li>`
            )
            .join('')}
        </ol>
      </div>
    </section>

    <section class="section section-alt" id="precios">
      <div class="wrap">
        ${sectionHead('04', pricing.title, pricing.subtitle)}
        <ul class="prices">
          ${pricing.items
            .map(
              (p) => `
          <li class="price-card reveal${p.featured ? ' is-featured' : ''}">
            <h3>${esc(p.name)}</h3>
            <p class="price">${esc(p.price)}</p>
            <p>${esc(p.note)}</p>
          </li>`
            )
            .join('')}
        </ul>
        <p class="price-deposit reveal">${esc(pricing.deposit)}</p>
        <p class="small-note reveal">${esc(pricing.disclaimer)}</p>
        <div class="center reveal">${waBtn(wa, 'Pedir presupuesto')}</div>
      </div>
    </section>

    <!-- CUIDADOS: consejos de ejemplo PENDIENTES DE REVISIÓN por el estudio. Ver src/data.js -->
    <section class="section" id="cuidados"${aftercare.needsReview ? ' data-needs-review="true"' : ''}>
      <div class="wrap">
        ${sectionHead('05', aftercare.title, aftercare.subtitle)}
        ${aftercare.needsReview ? `<p class="review-flag reveal"><strong>Pendiente de revisión</strong> ${esc(aftercare.reviewNotice)}</p>` : ''}
        <ul class="tips">
          ${aftercare.tips
            .map(
              (t) => `
          <li class="tip reveal">
            <h3>${esc(t.title)}</h3>
            <p>${esc(t.text)}</p>
          </li>`
            )
            .join('')}
        </ul>
      </div>
    </section>

    <section class="section section-alt" id="faq">
      <div class="wrap wrap-narrow">
        ${sectionHead('06', faq.title)}
        <div class="faq">
          ${faq.items
            .map(
              (f) => `
          <details class="faq-item reveal">
            <summary><span>${esc(f.q)}</span>${icons.plus}</summary>
            <p>${esc(f.a)}</p>
          </details>`
            )
            .join('')}
        </div>
      </div>
    </section>

    <!-- OPINIONES: DATOS DE DEMOSTRACIÓN (no son reseñas reales). Ver src/data.js -->
    <section class="section" id="opiniones" data-demo="true">
      <div class="wrap">
        ${sectionHead('07', reviews.title, reviews.subtitle)}
        <ul class="reviews">
          ${reviews.items
            .map(
              (r) => `
          <li class="review reveal"${r.demo ? ' data-demo="true"' : ''}>
            <div class="stars" role="img" aria-label="${r.rating} de 5 estrellas">${Array.from({ length: 5 }, (_, i) => `<span class="${i < r.rating ? 'on' : ''}">${icons.star}</span>`).join('')}</div>
            <blockquote>“${esc(r.text)}”</blockquote>
            <cite>${esc(r.name)}</cite>
          </li>`
            )
            .join('')}
        </ul>
        <p class="small-note demo-note">${esc(reviews.demoNotice)}</p>
      </div>
    </section>

    <section class="section section-alt" id="contacto">
      <div class="wrap">
        ${sectionHead('08', contact.title)}
        <div class="contact-grid">
          <div class="contact-info reveal">
            <h3>${icons.clock}<span>Horario</span></h3>
            <table class="hours">
              <tbody>
                ${contact.hours
                  .map(
                    (h) => `<tr data-day="${h.day}"><th scope="row">${esc(h.label)}</th><td${h.time === 'Cerrado' ? ' class="closed"' : ''}>${esc(h.time)}</td></tr>`
                  )
                  .join('\n                ')}
              </tbody>
            </table>
            <p class="small-note">${esc(contact.hoursNote)}</p>
            <h3>${icons.pin}<span>Dirección</span></h3>
            <address>
              ${esc(b.address)}<br />${esc(b.postalCode)} ${esc(b.city)}<br />${esc(b.region)}
            </address>
            <p class="small-note">${esc(contact.addressNote)}</p>
            <h3>${icons.phone}<span>Teléfono</span></h3>
            <p><a class="link" href="tel:+${esc(b.whatsapp)}">${esc(b.phoneDisplay)}</a> <span class="small-note">(de ejemplo)</span></p>
            <div class="contact-cta">
              ${waBtn(wa, buttons.book)}
              <a class="btn btn-ghost" href="${esc(mapsLink)}" target="_blank" rel="noopener">${esc(buttons.directions)}</a>
            </div>
          </div>
          <div class="map reveal">
            <iframe title="Mapa de ejemplo de la ubicación del estudio" src="${esc(mapSrc)}" loading="lazy" referrerpolicy="no-referrer"></iframe>
            <span class="map-label">Mapa de ejemplo</span>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="wrap footer-inner">
      <p class="footer-big" aria-hidden="true">${esc(b.shortName)}</p>
      <div class="footer-row">
        ${logo(`${b.name}, volver arriba`)}
        <div class="socials" aria-label="Redes sociales (de ejemplo)">${socialLinks}</div>
      </div>
      <p class="credit">${esc(footer.credit)} <a href="${esc(footer.creditUrl)}" target="_blank" rel="noopener">${esc(footer.creditName)}</a></p>
      <p class="disclaimer">${esc(footer.disclaimer)}</p>
    </div>
  </footer>

  <a class="wa-float" href="${wa}" target="_blank" rel="noopener" aria-label="${esc(buttons.whatsappFloat)}">${icons.whatsapp}</a>

  <dialog class="lightbox" data-lightbox aria-label="Imagen ampliada">
    <figure>
      <img alt="" />
      <figcaption></figcaption>
    </figure>
    <button class="lb-btn lb-close" type="button" data-lb="close" aria-label="Cerrar">${icons.close}</button>
    <button class="lb-btn lb-prev" type="button" data-lb="prev" aria-label="Anterior">${icons.prev}</button>
    <button class="lb-btn lb-next" type="button" data-lb="next" aria-label="Siguiente">${icons.next}</button>
  </dialog>`
}

export function renderPage(html) {
  return html
    .replace('<html lang="es">', `<html lang="${d.site.lang}">`)
    .replace('<!--head-->', head())
    .replace('<!--app-->', body())
}
