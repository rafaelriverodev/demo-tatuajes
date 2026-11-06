// Interacciones mínimas: barra superior, aparición al hacer scroll,
// filtros de la galería, visor de imágenes y día de hoy en el horario.
// Sin JavaScript la página se ve completa (galería sin filtrar).

// Barra superior con fondo al hacer scroll
const topbar = document.querySelector('[data-topbar]')
const onScroll = () => topbar.classList.toggle('is-scrolled', window.scrollY > 40)
onScroll()
window.addEventListener('scroll', onScroll, { passive: true })

// Aparición suave de bloques (desactivada con prefers-reduced-motion en CSS)
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js-reveal')
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  )
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
}

// Filtros de la galería
const filters = document.querySelector('[data-filters]')
const cells = [...document.querySelectorAll('.gallery-cell')]
const status = document.querySelector('[data-filter-status]')
if (filters) {
  filters.hidden = false
  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-filter]')
    if (!btn) return
    const value = btn.dataset.filter
    filters.querySelectorAll('[data-filter]').forEach((b) => b.setAttribute('aria-pressed', String(b === btn)))
    let shown = 0
    for (const cell of cells) {
      const match = value === 'all' || cell.dataset.style === value
      cell.hidden = !match
      if (match) {
        shown++
        cell.classList.remove('is-in')
        void cell.offsetWidth // reinicia la animación de entrada
        cell.classList.add('is-in')
      }
    }
    if (status) status.textContent = `${shown} trabajos mostrados`
  })
}

// Visor de imágenes (recorre solo las fotos visibles según el filtro)
const dialog = document.querySelector('[data-lightbox]')
if (dialog && typeof dialog.showModal === 'function') {
  const img = dialog.querySelector('img')
  const caption = dialog.querySelector('figcaption')
  let list = []
  let current = 0
  let opener = null
  const show = (i) => {
    current = (i + list.length) % list.length
    const btn = list[current]
    img.src = btn.dataset.full
    img.alt = btn.querySelector('img').alt
    caption.textContent = `${btn.querySelector('.tag').textContent} · ${img.alt}`
  }
  document.querySelector('.gallery')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.gallery-item')
    if (!btn) return
    list = cells.filter((c) => !c.hidden).map((c) => c.querySelector('.gallery-item'))
    opener = btn
    show(list.indexOf(btn))
    dialog.showModal()
  })
  dialog.addEventListener('click', (e) => {
    const action = e.target.closest('[data-lb]')?.dataset.lb
    if (action === 'close' || e.target === dialog) dialog.close()
    if (action === 'prev') show(current - 1)
    if (action === 'next') show(current + 1)
  })
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(current - 1)
    if (e.key === 'ArrowRight') show(current + 1)
  })
  // Deslizar en móvil
  let x0 = null
  dialog.addEventListener('touchstart', (e) => (x0 = e.touches[0].clientX), { passive: true })
  dialog.addEventListener('touchend', (e) => {
    if (x0 === null) return
    const dx = e.changedTouches[0].clientX - x0
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1))
    x0 = null
  })
  dialog.addEventListener('close', () => opener?.focus())
}

// Resaltar el día de hoy en el horario
const row = document.querySelector(`.hours tr[data-day="${new Date().getDay()}"]`)
if (row) {
  row.classList.add('today')
  row.querySelector('th').insertAdjacentHTML('beforeend', ' <span class="today-tag">Hoy</span>')
}
