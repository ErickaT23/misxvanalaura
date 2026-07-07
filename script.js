// Función para abrir la invitación (sobre) y reproducir la música
let invitadoActual = null;
let activeEventId = 'ana-laura-2026';

function formatearNombreInvitado(nombre) {
    const texto = String(nombre == null ? '' : nombre).trim().replace(/\s+/g, ' ');
    if (!texto) return '';
    const palabrasMinusculas = new Set(['y', 'de', 'del', 'la', 'las', 'los']);

    return texto
        .split(' ')
        .map((palabra) => {
            const minuscula = String(palabra || '').toLocaleLowerCase('es');
            if (!minuscula) return '';
            if (palabrasMinusculas.has(minuscula)) return minuscula;
            return minuscula.charAt(0).toLocaleUpperCase('es') + minuscula.slice(1);
        })
        .join(' ');
}

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
        '1': { nombre: 'SRA. LILIAN HERNÁNDEZ DE PADILLA', pases: 2 },
        '2': { nombre: 'FAMILIA ORELLANA HERNÁNDEZ', pases: 4 },
        '3': { nombre: 'FAMILIA YON HERNÁNDEZ', pases: 4 },
        '4': { nombre: 'SR. SELVIN ESTUARDO Y SRA.', pases: 2 },
        '5': { nombre: 'SR. JUAN JOSÉ PADILLA Y FAM', pases: 5 },
        '6': { nombre: 'FABIOLA PADILLA E HIJO', pases: 2 },
        '7': { nombre: 'FAM. HENÁNDEZ BATÉN', pases: 3 },
        '8': { nombre: 'FAM. ORELLANA GONZALEZ', pases: 3 },
        '9': { nombre: 'NICOLAS ORELLANA HERNÁNDEZ', pases: 1 },
        '10': { nombre: 'FAM. PADILLA GALLARDO', pases: 4 },
        '11': { nombre: 'FAM. ANDRADE YON', pases: 2 },
        '12': { nombre: 'ALEJANDRA HERNÁNDEZ E HIJA', pases: 2 },
        '13': { nombre: 'SRA. MARIBEL BERRIOS E HIJA', pases: 2 },
        '14': { nombre: 'SRA. CLAUDIA PADILLA E HIJA', pases: 2 },
        '15': { nombre: 'FAMILIA CARDONA AMAYA', pases: 3 },
        '16': { nombre: 'FAM. ARIZA RAMIREZ', pases: 2 },
        '17': { nombre: 'FAM. LOPEZ ARIZA', pases: 3 },
        '18': { nombre: 'FAM. DUARTE  PAZ', pases: 2 },
        '19': { nombre: 'SRA. TELMA ARIZA Y NIETA', pases: 2 },
        '20': { nombre: 'SR. EVER ARIZA Y FAM', pases: 4 },
        '21': { nombre: 'SRA. ILMA ARIZA', pases: 2 },
        '22': { nombre: 'SR. MIGDAEL ARIZA', pases: 1 },
        '23': { nombre: 'SRA. INGRID ZARCEÑO Y FAM', pases: 4 },
        '24': { nombre: 'JOSELYN ZARCEÑO', pases: 2 },
        '25': { nombre: 'FAM. HERNÁNDEZ CARDENAS', pases: 3 },
        '26': { nombre: 'SRA. NINFA TENAS', pases: 1 },
        '27': { nombre: 'FAM. ARIZA MARTINEZ', pases: 4 },
        '28': { nombre: 'KARLA ARIZA', pases: 1 },
        '29': { nombre: 'Sr. WILBER ORTEGA Y SRA', pases: 2 },
        '30': { nombre: 'SRA. VILMA GARCIA', pases: 1 },
        '31': { nombre: 'DEYANIRA MARTINEZ', pases: 1 },
        '32': { nombre: 'SRA. MARINA HERRERA', pases: 3 },
        '33': { nombre: 'MARINA VIRULA E HIJO', pases: 2 },
        '34': { nombre: 'FAM. LÓPEZ VIRULA', pases: 3 },
        '35': { nombre: 'FAM. VEGA VALIENTE', pases: 3 },
        '36': { nombre: 'SR. EDWIN HERNÁNDEZ Y FAM', pases: 3 },
        '37': { nombre: 'PRISCILA HERNÁNDEZ', pases: 2 },
        '38': { nombre: 'FABIOLA HERNÁNDEZ E HIJO', pases: 2 },
        '39': { nombre: 'CRISTHIAN CASTILLO Y SRA', pases: 2 },
        '40': { nombre: 'FAM CRUZ HERRERA', pases: 2 },
        '41': { nombre: 'FAM HERRERA CRUZ', pases: 3 },
        '42': { nombre: 'FAM MONZON PEREZ', pases: 4 },
        '43': { nombre: 'SAHILY LOHAIZA', pases: 1 },
        '44': { nombre: 'FAM ESPINOZA ROMERO', pases: 3 },
        '45': { nombre: 'FAM ELVIRA ELÍAS', pases: 2 },
        '46': { nombre: 'FAM FOLGAR ROMERO', pases: 4 },
        '47': { nombre: 'JEYMI TRIGUEROS', pases: 1 },
        '48': { nombre: 'ILIANA AROCHE', pases: 1 },
        '49': { nombre: 'SRA. MILVIA CASTILLO E HIJO', pases: 2 },
        '50': { nombre: 'ANDREA MARTINEZ', pases: 1 },
        '51': { nombre: 'SR WALFRED ORDOÑEZ Y FAM', pases: 3 },
        '52': { nombre: 'SR ADALBERTO ORDOÑEZ Y FAM', pases: 4 },
        '53': { nombre: 'NURY SARCEÑO', pases: 1 },
        '54': { nombre: 'LIC HUGO MENCOS Y SRA', pases: 2 },
        '55': { nombre: 'SR MARTÍN OROZCO Y SRA', pases: 2 },
        '56': { nombre: 'MARCELA ARGUETA', pases: 1 },
        '57': { nombre: 'SOFIA SARCEÑO', pases: 1 },
        '58': { nombre: 'RODRIGO RUANO', pases: 1 },
        '59': { nombre: 'MARIA ELISA CORADO', pases: 1 },
        '60': { nombre: 'CRISTIAN CAMBARA', pases: 1 },
        '61': { nombre: 'VALERIE CRÚZ', pases: 1 },
        '62': { nombre: 'FABRIZZIO RUANO', pases: 1 },
        '63': { nombre: 'ABRIL QUIÑONEZ LEMUS', pases: 1 },
        '64': { nombre: 'DORIS MENCOS', pases: 1 },
        '65': { nombre: 'RICARDO CONTRERAS', pases: 1 },
        '66': { nombre: 'NOEL FOLGAR', pases: 1 },
        '67': { nombre: 'AMILCAR FOLGAR', pases: 1 },
        '68': { nombre: 'CHRISTIAN COLOCHO', pases: 1 },
        '69': { nombre: 'SOFIA GRIJALVA', pases: 1 },
        '70': { nombre: 'SEBASTIAN SOLARES', pases: 1 },
        '71': { nombre: 'ANDRÉ MARROQUÍN', pases: 1 },
        '72': { nombre: 'ANDRES CARVAJAL', pases: 1 },
        '73': { nombre: 'BORIS NAJERA', pases: 1 },
        '74': { nombre: 'PATRICK PARRAS', pases: 1 },
        '75': { nombre: 'ARMANDO LINARES', pases: 1 },
        '76': { nombre: 'AURY ROSALES', pases: 1 },
        '77': { nombre: 'IVAN TEO', pases: 1 },
        '78': { nombre: 'Emanuel PALMA', pases: 1 },
        '79': { nombre: 'CARLOS VASQUEZ', pases: 1 },
        '80': { nombre: 'FREDDY LIMA', pases: 1 },
        '81': { nombre: 'SCARLET PINEDA', pases: 1 },
        '82': { nombre: 'ANTONY RAMIREZ', pases: 1 },
        '83': { nombre: 'SR RENE RECINOS Y FAMILIA', pases: 2 },
        '84': { nombre: 'FAM VALDEZ POLANCO', pases: 2 },
        '85': { nombre: 'KRISTEL RECINOS', pases: 1 },
        '86': { nombre: 'MARIA FERNANDA MORALES', pases: 1 },
        '87': { nombre: 'JOSUE MORALES', pases: 1 },
        '88': { nombre: 'JOSE ALFREDO HERNANDEZ', pases: 1 },
        '89': { nombre: 'SERGIO RODIGUEZ', pases: 1 },
        '90': { nombre: 'Jeremy Barrientos', pases: 1 },
        '91': { nombre: 'Ivana Ruiz', pases: 1 },
        '92': { nombre: 'Karla Calderon', pases: 1 },
        '93': { nombre: 'NICOLE GARCIA', pases: 1 },
        '94': { nombre: 'STEVEN DANIEL', pases: 1 },
        '95': { nombre: 'Samuel Salguero', pases: 1 },
        '96': { nombre: 'ENRRIQUE HERRERA Y FAM.', pases: 4 },
        '97': { nombre: 'SR TEODORO VASQUEZ Y SRA', pases: 2 },
        '98': { nombre: 'CLARY HERRERA Y MAMA', pases: 2 },
        '99': { nombre: 'ANTONIA HERRERA Y FAM', pases: 2 },
        '100': { nombre: 'SR JOSE LUIS HERRERA Y SRA', pases: 2 },
        '101': { nombre: 'MARITZA HERRERA Y FAM', pases: 2 },
        '102': { nombre: 'SRA MARTA DIAZ', pases: 1 },
        '103': { nombre: 'DAVIS YANES', pases: 1 },
        '104': { nombre: 'SRA ESTELA HERRERA', pases: 3 },
        '105': { nombre: 'SR OSBALDO JIMENES Y SRA', pases: 2 },
        '106': { nombre: 'LIC OSIEL DIONICIO Y SRA.', pases: 2 },
        '107': { nombre: 'FAM DUARTE DE PAZ', pases: 2 },
        '108': { nombre: 'GLENDA ZEPEDA FLORES', pases: 1 },
        '109': { nombre: 'MIRLIN TRIGUEROS', pases: 1 },
        '110': { nombre: 'MIGDAEL LOPEZ Y FAM', pases: 5 },
        '111': { nombre: 'ILMARIS LEMUS', pases: 1 },
        '112': { nombre: 'KARLA MATEO', pases: 1 },
        '113': { nombre: 'EMELY HERNÁNDEZ', pases: 1 },
        '114': { nombre: 'DAYANARA PINTO', pases: 1 },
        '115': { nombre: 'FAM. CARDONA MÉNDEZ', pases: 4 },
        '116': { nombre: 'RAMON PAZ Y CONCEPCIÓN HERNÁNDEZ', pases: 2 },
        '117': { nombre: 'SORALLA PAREDES', pases: 2 }
    };

    const invitadoLocal = invitados[invitadoId];

    const aplicarInvitado = (invitado) => {
        if (invitado) {
            const nombreFormateado = formatearNombreInvitado(invitado.nombre);
            invitadoActual = {
                id: String(invitado.id || invitadoId),
                nombre: nombreFormateado,
                pases: Number(invitado.pases) || 0
            };
            document.getElementById('nombreInvitado').innerText = nombreFormateado;
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
            return `Hola, soy ${nombre} y confirmo mi asistencia con mi lugar reservado a los quince de Anna Laura. Nos vemos pronto.`;
        }

        return `Hola, somos ${nombre} y confirmamos nuestra asistencia con nuestros ${pases} pases reservados a los quince de Anna Laura. Nos vemos pronto.`;
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
                <h3 class="wish-card-name" style="padding: 0;">${escapeHtml(wish.name)}</h3>
                <p class="wish-card-message" style="padding: 0;">${escapeHtml(wish.message)}</p>
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
