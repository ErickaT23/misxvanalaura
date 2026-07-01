// Función para abrir la invitación (sobre) y reproducir la música
let invitadoActual = null;
let activeEventId = 'ana-laura-2026';

function abrirInvitacion() {
    // Obtener el sobre y la invitación
    const envelope = document.getElementById('envelope');
    const invitacion = document.getElementById('invitacion');
    
    // Añadir clase para animar la apertura del sobre
    envelope.classList.add('open');

    // Mostrar la invitación después de la animación
    setTimeout(() => {
        envelope.style.display = 'none';
        invitacion.style.display = 'block';
        
        // Reproducir la música solo después de abrir el sobre
        const musica = document.getElementById('musica');
        if (musica) {
            musica.play();
        }
    }, 1000); // Ajustar tiempo para esperar la animación de apertura del sobre
}

// Asignar el evento de clic al sello para abrir el sobre
document.addEventListener('DOMContentLoaded', function() {
    const seal = document.getElementById('seal');
    if (seal) {
        seal.addEventListener('click', abrirInvitacion);
    }

    // Iniciar el contador y cargar los datos del invitado al cargar la página
    iniciarContador();
    cargarDatosInvitado();
});

// Función para obtener datos de invitados (sin inputs)
function cargarDatosInvitado() {
    const params = new URLSearchParams(window.location.search);
    const invitadoId = params.get('id');

    if (!invitadoId) {
        alert('ID de invitado no encontrado en el enlace.');
        return;
    }

    activeEventId = String(
        (window.config && window.config.event && window.config.event.defaultEventId)
        || 'ana-laura-2026'
    ).trim();

    // Base de datos local de respaldo
    const invitados = {
        '1': { nombre: 'Ana Pérez', pases: 3 },
        '2': { nombre: 'Luis García', pases: 2 },
        '3': { nombre: 'María López', pases: 4 }
    };

    const invitadoLocal = invitados[invitadoId];

    const aplicarInvitado = (invitado) => {
        if (invitado) {
            invitadoActual = {
                id: String(invitado.id || invitadoId),
                nombre: String(invitado.nombre || ''),
                pases: Number(invitado.pases) || 0
            };
            document.getElementById('nombreInvitado').innerText = invitado.nombre;
            document.getElementById('cantidadPases').innerText = `Pases: ${invitado.pases}`;
        } else {
            alert('Invitado no encontrado.');
        }
    };

    if (window.RSVPDatabase && typeof window.RSVPDatabase.getInvitadoById === 'function') {
        window.RSVPDatabase
            .getInvitadoById(activeEventId, invitadoId)
            .then((invitadoRemoto) => {
                if (invitadoRemoto && invitadoRemoto.activo !== false) {
                    aplicarInvitado(invitadoRemoto);
                    return;
                }
                aplicarInvitado(invitadoLocal);
            })
            .catch(() => {
                aplicarInvitado(invitadoLocal);
            });
        return;
    }

    aplicarInvitado(invitadoLocal);
}

// Función para iniciar el contador de la fecha del evento
function iniciarContador() {
    const eventoFecha = new Date(2026, 9, 17, 17, 0, 0).getTime();

    const actualizarContador = () => {
        const ahora = new Date().getTime();
        const diferencia = eventoFecha - ahora;

        if (diferencia <= 0) {
            actualizarValorContador("dias", 0);
            actualizarValorContador("horas", 0);
            actualizarValorContador("minutos", 0);
            actualizarValorContador("segundos", 0);
            return;
        }

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        actualizarValorContador("dias", dias);
        actualizarValorContador("horas", horas);
        actualizarValorContador("minutos", minutos);
        actualizarValorContador("segundos", segundos);
    };

    actualizarContador();
    setInterval(actualizarContador, 1000);
}

function actualizarValorContador(id, valor) {
    const elemento = document.getElementById(id);

    if (!elemento) {
        return;
    }

    const valorTexto = String(valor);

    if (elemento.innerText === valorTexto) {
        return;
    }

    elemento.innerText = valorTexto;
    elemento.classList.remove('countdown-tick');
    void elemento.offsetWidth;
    elemento.classList.add('countdown-tick');
}

// Función para abrir el lightbox solo al hacer clic en una imagen de la galería
function changePhoto(element) {
    const mainPhotoModal = document.getElementById('main-photo-modal');

    // Establecer la imagen del modal como la imagen seleccionada
    mainPhotoModal.src = element.src;

    // Mostrar el modal
    openModal();
}

// Función para mostrar el modal
function openModal() {
    const modal = document.getElementById('photo-modal');

    if (!modal) {
        return;
    }

    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.classList.add('is-open');
    });
}

// Función para cerrar el modal
function closeModal(event) {
    // Cerrar el modal solo si el clic no fue en la imagen
    const modal = document.getElementById('photo-modal');

    if (!modal) {
        return;
    }

    if (!event || event.target.id === 'photo-modal' || event.target.className === 'close') {
        modal.classList.remove('is-open');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Fade-in effect cuando los elementos se hacen visibles al hacer scroll
document.addEventListener("DOMContentLoaded", function() {
    const elementsToFade = document.querySelectorAll('.fade-in-element');

    const observerOptions = {
        threshold: 0.5, // El porcentaje del elemento que debe ser visible antes de activar la animación
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Deja de observar una vez que la animación se activa
            }
        });
    }, observerOptions);

    elementsToFade.forEach(element => {
        observer.observe(element);
    });
});

//Funcion para confirmar la asistencia 
function confirmarAsistencia() {
    const modal = document.getElementById('asistencia-modal');

    if (!modal) {
        return;
    }

    modal.classList.remove('is-hidden');
}

function cerrarModalAsistencia(event) {
    const modal = document.getElementById('asistencia-modal');

    if (!modal) {
        return;
    }

    if (!event || event.target.id === 'asistencia-modal') {
        modal.classList.add('is-hidden');
    }
}

function responderAsistencia(respuesta) {
    if (!invitadoActual) {
        alert('No se encontró la información del invitado.');
        return;
    }

    const nombre = invitadoActual.nombre;
    const pases = Number(invitadoActual.pases) || 0;
    const mensaje = construirMensajeAsistencia(respuesta, nombre, pases);
    const numeroTelefono = '50233649029';
    const enlaceWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;
    const confirmacion = document.getElementById('confirmacion');

    if (confirmacion) {
        if (respuesta === 'si') {
            confirmacion.innerText = 'Gracias por confirmar, nos vemos pronto';
        } else {
            confirmacion.innerText = 'Lamentamos que no puedas acompañarnos, te extrañaremos.';
        }
    }

    cerrarModalAsistencia();

    if (window.RSVPDatabase && typeof window.RSVPDatabase.saveConfirmation === 'function') {
        window.RSVPDatabase.saveConfirmation(activeEventId, {
            id: String(invitadoActual.id || '').trim() || 'default',
            nombre,
            pasesAsignados: pases,
            respuesta,
            cantidadConfirmada: respuesta === 'si' ? pases : 0,
            fechaConfirmacion: Date.now()
        }).catch((error) => {
            console.error('No se pudo guardar la confirmación en Firebase:', error);
        });
    }

    window.open(enlaceWhatsapp, '_blank');
}

function construirMensajeAsistencia(respuesta, nombre, pases) {
    const esUnPase = pases === 1;

    if (respuesta === 'si') {
        if (esUnPase) {
            return `Hola, soy ${nombre} y confirmo mi asistencia con mi lugar reservado a los quince de Ana Laura. Nos vemos pronto.`;
        }

        return `Hola, somos ${nombre} y confirmamos nuestra asistencia con nuestros ${pases} pases reservados a los quince de Ana Laura. Nos vemos pronto.`;
    }

    if (esUnPase) {
        return `Gracias por la invitación, pero desafortunadamente no podré asistir. Saludos, ${nombre}`;
    }

    return `Gracias por la invitación, pero desafortunadamente no podremos asistir. Saludos, ${nombre}`;
}
//Funcion para abrir waze o maps
//iglesia
function elegirAplicacion() {
    const enlaceGoogleMaps = 'https://maps.app.goo.gl/dfD9cMEbSAdn56qV8';
    const enlaceWaze = 'https://waze.com/ul?ll=14.558065,-90.729567&navigate=yes';

    // Intentar abrir Google Maps primero
    window.open(enlaceGoogleMaps, '_blank');
    
    // Intentar abrir Waze (en caso de que Google Maps no esté disponible)
    setTimeout(() => {
        window.open(enlaceWaze, '_blank');
    }, 1000); // Retraso para permitir que el primer enlace se abra si está disponible
}
//fiesta
function elegirAplicacionOtraDireccion() {
    const enlaceGoogleMaps = 'https://maps.app.goo.gl/q7DFNUJxHAuYN2TK7';
    const enlaceWaze = 'https://ul.waze.com/ul?place=ChIJ7U7eSwCBYo8RJ1gtZv3reZk&ll=14.26646570%2C-89.95208010&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location';

    // Intentar abrir Google Maps primero
    window.open(enlaceGoogleMaps, '_blank');

    // Intentar abrir Waze (en caso de que Google Maps no esté disponible)
    setTimeout(() => {
        window.open(enlaceWaze, '_blank');
    }, 1000); // Retraso para permitir que el primer enlace se abra si está disponible
}

const wishesData = [];

function syncWishesFromFirebase() {
    if (!window.RSVPDatabase || typeof window.RSVPDatabase.subscribeToWishes !== 'function') {
        return;
    }

    window.RSVPDatabase.subscribeToWishes(
        activeEventId,
        (wishes) => {
            wishesData.length = 0;
            (Array.isArray(wishes) ? wishes : []).forEach((wish) => {
                wishesData.push({
                    name: String(wish.nombre || '').trim(),
                    message: String(wish.mensaje || '').trim(),
                    timestamp: Number(wish.timestamp) || 0
                });
            });
            renderWishes();
        },
        (error) => {
            console.error('Error al sincronizar deseos:', error);
        }
    );
}

function toggleWishForm() {
    const formPanel = document.getElementById('wish-form-panel');
    const wishesList = document.getElementById('wishes');

    if (!formPanel || !wishesList) {
        return;
    }

    formPanel.classList.toggle('hidden');
    wishesList.classList.add('hidden');
}

function toggleWishes() {
    const formPanel = document.getElementById('wish-form-panel');
    const wishesList = document.getElementById('wishes');

    if (!formPanel || !wishesList) {
        return;
    }

    renderWishes();
    wishesList.classList.toggle('hidden');
    formPanel.classList.add('hidden');
}

function submitWish(event) {
    event.preventDefault();

    const nameInput = document.getElementById('wish-name');
    const messageInput = document.getElementById('wish-message');
    const status = document.getElementById('wish-status');

    if (!nameInput || !messageInput || !status) {
        return false;
    }

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !message) {
        status.innerText = 'Por favor completa nombre y deseo.';
        return false;
    }

    if (window.RSVPDatabase && typeof window.RSVPDatabase.saveWish === 'function') {
        window.RSVPDatabase
            .saveWish(activeEventId, {
                nombre: name,
                mensaje: message,
                timestamp: Date.now()
            })
            .then(() => {
                status.innerText = 'Gracias por tu deseo. Lo guardamos con mucho cariño.';
            })
            .catch(() => {
                wishesData.unshift({ name, message, timestamp: Date.now() });
                renderWishes();
                status.innerText = 'Guardamos tu deseo localmente por el momento.';
            });
    } else {
        wishesData.unshift({ name, message, timestamp: Date.now() });
        renderWishes();
        status.innerText = 'Gracias por tu deseo. Lo guardamos con mucho cariño.';
    }

    nameInput.value = '';
    messageInput.value = '';
    return false;
}

function renderWishes() {
    const container = document.getElementById('wishes');

    if (!container) {
        return;
    }

    if (wishesData.length === 0) {
        container.innerHTML = '<p class="wishes-empty">Aún no hay deseos. Sé la primera persona en dejar uno.</p>';
        return;
    }

    container.innerHTML = wishesData
        .map((wish) => `
            <article class="wish-card">
                <h3 class="wish-card-name">${escapeHtml(wish.name)}</h3>
                <p class="wish-card-message">${escapeHtml(wish.message)}</p>
            </article>
        `)
        .join('');
}

function escapeHtml(value) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(syncWishesFromFirebase, 0);
});
