const config = {
    event: {
        defaultEventId: "ana-laura-2026",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },

    seo: {
        titulo: "Mis Quince Anna Laura",
        descripcion: "Invitación de quince años de Anna Laura - 17 de octubre de 2026",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Anna Laura",
        fecha: "17-10-2026",
        fechaVisible: "17.10.2026"
    },

    musica: {
        titulo: "Yellow",
        archivo: "Yellow.mp3"
    },

    evento: {
        recepcion: {
            titulo: "Recepción",
            lugar: "Casa Club Residenciales Amayito",
            hora: "6:00 PM",
            direccion: "Km 111 Carretera Interamericana, Jutiapa",
            ubicacionUrl: "https://maps.app.goo.gl/q7DFNUJxHAuYN2TK7"
        }
    },

    textos: {
        mensajeInvitado: "Eres muy especial para nosotros",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },

    footer: {
        hashtag: "#AnnaLauraXV",
        instagramUrl: "https://www.instagram.com/thetwodesign/",
        facebookUrl: "https://www.facebook.com/thetwodesign",
        marcaTexto: "Diseño",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
