/* Contenido local: funciona también al abrir index.html directamente. */
const POSTS = [
  {
    "id": "01",
    "network": "Instagram",
    "pillar": "Educativo",
    "title": "Tu cita en tres pasos",
    "lines": [
      "TU CITA,",
      "EN 3 PASOS."
    ],
    "sub": "Busca. Elige. Revisa.",
    "copy": "¿Tu agenda siempre está llena? Encuentra un servicio, elige un horario y revisa tu selección. Así de fácil es probar TurnoFácil. Explora la demo desde nuestro sitio. #TurnoFacil #TuTiempoImporta #ReservaEnLinea",
    "cta": "Descubre cómo funciona",
    "design": "steps",
    "image": "assets/publicaciones/01.svg"
  },
  {
    "id": "02",
    "network": "Facebook",
    "pillar": "Comercial",
    "title": "Tu tiempo vale",
    "lines": [
      "MENOS VUELTAS.",
      "MÁS TIEMPO."
    ],
    "sub": "Haz espacio para lo que importa.",
    "copy": "Un corte, una consulta o una revisión: organiza tu día en un solo lugar. Conoce las categorías de TurnoFácil y prueba una reserva de ejemplo. #TurnoFacil #NegociosLocales #TuTiempoVale",
    "cta": "Explora los servicios",
    "design": "clock",
    "image": "assets/publicaciones/02.svg"
  },
  {
    "id": "03",
    "network": "TikTok",
    "pillar": "Comunidad",
    "title": "¿Qué reservarías primero?",
    "lines": [
      "¿QUÉ RESERVAS",
      "PRIMERO?"
    ],
    "sub": "Tu próximo plan empieza contigo.",
    "copy": "Un corte, cambio de look, consulta o revisión del auto: ¿qué reservarías primero? Cuéntanos tu elección y explora TurnoFácil. Guion sugerido: cuatro cambios de escena, uno por categoría. #TurnoFacil #OrganizaTuDia #Comunidad",
    "cta": "Elige tu categoría",
    "design": "choices",
    "image": "assets/publicaciones/03.svg"
  },
  {
    "id": "04",
    "network": "Instagram",
    "pillar": "Comercial",
    "title": "Un lugar, cuatro posibilidades",
    "lines": [
      "UN LUGAR.",
      "TU PRÓXIMA CITA."
    ],
    "sub": "Barberías · Salones · Consultorios · Talleres",
    "copy": "Tu próxima cita puede ser más fácil. Descubre las cuatro categorías de TurnoFácil y encuentra un momento para ti. Prueba la demostración en nuestra web. #TurnoFacil #ServiciosLocales #AgendaFacil",
    "cta": "Encuentra tu momento",
    "design": "calendar",
    "image": "assets/publicaciones/04.svg"
  },
  {
    "id": "05",
    "network": "Facebook",
    "pillar": "Educativo",
    "title": "Una agenda sin complicaciones",
    "lines": [
      "TU AGENDA,",
      "CON MÁS ORDEN."
    ],
    "sub": "Antes de elegir: revisa servicio, fecha y hora.",
    "copy": "Consejo para organizarte: identifica el servicio que necesitas, elige una fecha y revisa el horario antes de confirmar. En TurnoFácil puedes recorrer este proceso con nuestra demo. #TurnoFacil #Consejos #OrganizaTuTiempo",
    "cta": "Prueba los tres pasos",
    "design": "steps",
    "image": "assets/publicaciones/05.svg"
  },
  {
    "id": "06",
    "network": "TikTok",
    "pillar": "Tráfico y conversión",
    "title": "Del scroll a tu próxima cita",
    "lines": [
      "DEL SCROLL",
      "A TU CITA."
    ],
    "sub": "Abre la web. Elige. Prueba.",
    "copy": "POV: recuerdas esa cita pendiente mientras haces scroll. Abre TurnoFácil, elige una categoría y prueba el formulario. Guion sugerido: pantalla de inicio, selección del servicio y resumen de ejemplo. #TurnoFacil #ReservaFacil #DelScrollATuCita",
    "cta": "Prueba la reserva",
    "design": "phone",
    "image": "assets/publicaciones/06.svg"
  },
  {
    "id": "07",
    "network": "Instagram",
    "pillar": "Comunidad",
    "title": "Haz espacio para ti",
    "lines": [
      "HAZ ESPACIO",
      "PARA TI."
    ],
    "sub": "¿Cuál es ese plan que sigues posponiendo?",
    "copy": "A veces solo falta elegir un momento. ¿Qué plan llevas tiempo posponiendo? Guarda esta idea para organizar tu semana y descubre las categorías de TurnoFácil. #TurnoFacil #TiempoParaTi #MiProximaCita",
    "cta": "Organiza tu próximo plan",
    "design": "clock",
    "image": "assets/publicaciones/07.svg"
  },
  {
    "id": "08",
    "network": "Facebook",
    "pillar": "Tráfico y conversión",
    "title": "Tu próxima cita empieza aquí",
    "lines": [
      "TU PRÓXIMA CITA",
      "EMPIEZA AQUÍ."
    ],
    "sub": "Conoce la experiencia desde tu navegador.",
    "copy": "Sin descargar una aplicación: abre TurnoFácil desde tu celular o computadora y conoce nuestra propuesta. Explora servicios y prueba una reserva de ejemplo. #TurnoFacil #SinComplicaciones #ReservaWeb",
    "cta": "Visita la demostración",
    "design": "phone",
    "image": "assets/publicaciones/08.svg"
  },
  {
    "id": "09",
    "network": "TikTok",
    "pillar": "Educativo",
    "title": "Tres cosas antes de reservar",
    "lines": [
      "ANTES DE",
      "RESERVAR…"
    ],
    "sub": "Servicio claro. Fecha elegida. Horario revisado.",
    "copy": "Tres cosas que te ayudan a organizar una cita: saber qué necesitas, elegir tu fecha y revisar la hora. Guion sugerido: texto en pantalla con cada consejo y cierre con la web de TurnoFácil. #TurnoFacil #Tips #AgendaTuDia",
    "cta": "Conoce cómo funciona",
    "design": "calendar",
    "image": "assets/publicaciones/09.svg"
  }
];
'use strict';
// 1. Navegación móvil accesible.
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menú');
  navigation.classList.remove('is-open');
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('click', e => { if (!e.target.closest('.site-header')) closeMenu(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu(); menuToggle.focus();
  }
});
window.matchMedia('(min-width: 1101px)').addEventListener('change', closeMenu);

// 2. Búsqueda y filtros de las cuatro categorías.
const searchInput = document.querySelector('#search');
const serviceCards = [...document.querySelectorAll('.service-card')];
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
function filterServices(category = 'Todos', query = '') {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  let count = 0;
  serviceCards.forEach(card => {
    const text = normalize(card.dataset.keywords + ' ' + card.textContent);
    const match = (category === 'Todos' || category === card.dataset.category) && terms.every(term => text.includes(term));
    card.hidden = !match;
    if (match) count++;
  });
  document.querySelectorAll('[data-filter]').forEach(button => {
    const active = category === button.dataset.filter;
    button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('#no-services').hidden = count !== 0;
  document.querySelector('#service-status').textContent = `${count} ${count === 1 ? 'categoría disponible' : 'categorías disponibles'}${query ? ` para “${query}”` : ''}`;
}
document.querySelector('#search-form').addEventListener('submit', e => {
  e.preventDefault(); filterServices('Todos', searchInput.value.trim());
  document.querySelector('#servicios').scrollIntoView({behavior:'smooth'});
});
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  searchInput.value = ''; filterServices(button.dataset.filter);
}));
document.querySelector('#reset-search').addEventListener('click', () => {
  searchInput.value = ''; filterServices(); document.querySelector('[data-filter="Todos"]').focus();
});

// 3. FAQ: abre una respuesta a la vez; también funciona con teclado.
document.querySelectorAll('.faq-question').forEach(question => question.addEventListener('click', () => {
  const open = question.getAttribute('aria-expanded') !== 'true';
  document.querySelectorAll('.faq-question').forEach(item => {
    const active = item === question && open;
    item.setAttribute('aria-expanded', String(active));
    item.querySelector('.faq-plus').textContent = active ? '−' : '+';
    document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
  });
}));

// 4. Galería local de la campaña. Los perfiles son simulados.
function filterPosts(network) {
  let count = 0;
  document.querySelectorAll('.post-card').forEach(card => {
    card.hidden = network !== 'Todas' && network !== card.dataset.network;
    if (!card.hidden) count++;
  });
  document.querySelectorAll('.post-filter').forEach(button => {
    const active = button.dataset.network === network;
    button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('#post-status').textContent = `${count} publicaciones${network === 'Todas' ? ' · 4 tipos de contenido' : ` para ${network}`}`;
}
document.querySelectorAll('.post-filter, .network-filter').forEach(button => button.addEventListener('click', e => {
  e.preventDefault(); filterPosts(button.dataset.network);
  if (button.classList.contains('network-filter')) document.querySelector('#publicaciones').scrollIntoView({behavior:'smooth'});
}));
const postDialog = document.querySelector('#post-dialog');
let lastPostTrigger;
let moveToBooking = false;
document.querySelectorAll('[data-post]').forEach(button => button.addEventListener('click', () => {
  const post = POSTS.find(post => post.id === button.dataset.post);
  lastPostTrigger = button;
  document.querySelector('#post-detail-image').src = post.image;
  document.querySelector('#post-detail-image').alt = `${post.title}: ${post.sub}`;
  document.querySelector('#post-title').textContent = post.title;
  document.querySelector('#post-detail-meta').textContent = `${post.network} · ${post.pillar}`;
  document.querySelector('#post-copy').textContent = post.copy;
  document.querySelector('#post-download').href = post.image;
  postDialog.showModal(); document.body.classList.add('dialog-open');
}));
document.querySelector('.dialog-close').addEventListener('click', () => postDialog.close());
document.querySelector('#post-booking').addEventListener('click', () => {
  moveToBooking = true;
  postDialog.close();
});
postDialog.addEventListener('click', e => {
  const bounds = postDialog.getBoundingClientRect();
  if (e.target === postDialog && (e.clientX < bounds.left || e.clientX > bounds.right || e.clientY < bounds.top || e.clientY > bounds.bottom)) postDialog.close();
});
postDialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (moveToBooking) {
    moveToBooking = false;
    document.querySelector('#reservar').scrollIntoView({behavior:'smooth'});
    document.querySelector('#open-agenda').focus({preventScroll:true});
  } else lastPostTrigger?.focus({preventScroll:true});
});



// La agenda conserva las reservas y la administración en su servidor actual.
const $ = selector => document.querySelector(selector);
document.querySelectorAll('[data-booking]').forEach(button => button.addEventListener('click', () => {
  closeMenu();
  $('#reservar').scrollIntoView({behavior:'smooth'});
  $('#open-agenda').focus({preventScroll:true});
}));
// La portada muestra tres destacadas; las nueve piezas siguen disponibles.
let allPosts=false;
function galleryVisibility(){
  const active=document.querySelector('.post-filter.active')?.dataset.network||'Todas';let shown=0;
  document.querySelectorAll('.post-card').forEach(card=>{
    const matches=active==='Todas'||card.dataset.network===active;
    card.hidden=!matches||(!allPosts&&active==='Todas'&&shown>=3);if(matches)shown++;
  });
  $('#more-posts').hidden=active!=='Todas';$('#more-posts').textContent=allPosts?'Mostrar solo destacadas':'Ver las 9 publicaciones';
  $('#more-posts').setAttribute('aria-expanded',String(allPosts));
  $('#post-status').textContent=active==='Todas'?(allPosts?'9 publicaciones · 4 tipos de contenido':'3 destacadas · 9 publicaciones en la campaña'):`3 publicaciones para ${active}`;
}
document.querySelectorAll('.post-filter,.network-filter').forEach(b=>b.addEventListener('click',galleryVisibility));
$('#more-posts').addEventListener('click',()=>{allPosts=!allPosts;galleryVisibility();});galleryVisibility();

