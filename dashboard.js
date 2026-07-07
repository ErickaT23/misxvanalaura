import { subscribeToConfirmations, subscribeToInvitados } from "./database.js";

const guestDirectorySeed = {
    "1": { nombre: "SRA. LILIAN HERNÁNDEZ DE PADILLA", pases: 2 },
    "2": { nombre: "FAMILIA ORELLANA HERNÁNDEZ", pases: 4 },
    "3": { nombre: "FAMILIA YON HERNÁNDEZ", pases: 4 },
    "4": { nombre: "SR. SELVIN ESTUARDO Y SRA.", pases: 2 },
    "5": { nombre: "SR. JUAN JOSÉ PADILLA Y FAM", pases: 5 },
    "6": { nombre: "FABIOLA PADILLA E HIJO", pases: 2 },
    "7": { nombre: "FAM. HENÁNDEZ BATÉN", pases: 3 },
    "8": { nombre: "FAM. ORELLANA GONZALEZ", pases: 3 },
    "9": { nombre: "NICOLAS ORELLANA HERNÁNDEZ", pases: 1 },
    "10": { nombre: "FAM. PADILLA GALLARDO", pases: 4 },
    "11": { nombre: "FAM. ANDRADE YON", pases: 2 },
    "12": { nombre: "ALEJANDRA HERNÁNDEZ E HIJA", pases: 2 },
    "13": { nombre: "SRA. MARIBEL BERRIOS E HIJA", pases: 2 },
    "14": { nombre: "SRA. CLAUDIA PADILLA E HIJA", pases: 2 },
    "15": { nombre: "FAMILIA CARDONA AMAYA", pases: 3 },
    "16": { nombre: "FAM. ARIZA RAMIREZ", pases: 2 },
    "17": { nombre: "FAM. LOPEZ ARIZA", pases: 3 },
    "18": { nombre: "FAM. DUARTE  PAZ", pases: 2 },
    "19": { nombre: "SRA. TELMA ARIZA Y NIETA", pases: 2 },
    "20": { nombre: "SR. EVER ARIZA Y FAM", pases: 4 },
    "21": { nombre: "SRA. ILMA ARIZA", pases: 2 },
    "22": { nombre: "SR. MIGDAEL ARIZA", pases: 1 },
    "23": { nombre: "SRA. INGRID ZARCEÑO Y FAM", pases: 4 },
    "24": { nombre: "JOSELYN ZARCEÑO", pases: 2 },
    "25": { nombre: "FAM. HERNÁNDEZ CARDENAS", pases: 3 },
    "26": { nombre: "SRA. NINFA TENAS", pases: 1 },
    "27": { nombre: "FAM. ARIZA MARTINEZ", pases: 4 },
    "28": { nombre: "KARLA ARIZA", pases: 1 },
    "29": { nombre: "Sr. WILBER ORTEGA Y SRA", pases: 2 },
    "30": { nombre: "SRA. VILMA GARCIA", pases: 1 },
    "31": { nombre: "DEYANIRA MARTINEZ", pases: 1 },
    "32": { nombre: "SRA. MARINA HERRERA", pases: 3 },
    "33": { nombre: "MARINA VIRULA E HIJO", pases: 2 },
    "34": { nombre: "FAM. LÓPEZ VIRULA", pases: 3 },
    "35": { nombre: "FAM. VEGA VALIENTE", pases: 3 },
    "36": { nombre: "SR. EDWIN HERNÁNDEZ Y FAM", pases: 3 },
    "37": { nombre: "PRISCILA HERNÁNDEZ", pases: 2 },
    "38": { nombre: "FABIOLA HERNÁNDEZ E HIJO", pases: 2 },
    "39": { nombre: "CRISTHIAN CASTILLO Y SRA", pases: 2 },
    "40": { nombre: "FAM CRUZ HERRERA", pases: 2 },
    "41": { nombre: "FAM HERRERA CRUZ", pases: 3 },
    "42": { nombre: "FAM MONZON PEREZ", pases: 4 },
    "43": { nombre: "SAHILY LOHAIZA", pases: 1 },
    "44": { nombre: "FAM ESPINOZA ROMERO", pases: 3 },
    "45": { nombre: "FAM ELVIRA ELÍAS", pases: 2 },
    "46": { nombre: "FAM FOLGAR ROMERO", pases: 4 },
    "47": { nombre: "JEYMI TRIGUEROS", pases: 1 },
    "48": { nombre: "ILIANA AROCHE", pases: 1 },
    "49": { nombre: "SRA. MILVIA CASTILLO E HIJO", pases: 2 },
    "50": { nombre: "ANDREA MARTINEZ", pases: 1 },
    "51": { nombre: "SR WALFRED ORDOÑEZ Y FAM", pases: 3 },
    "52": { nombre: "SR ADALBERTO ORDOÑEZ Y FAM", pases: 4 },
    "53": { nombre: "NURY SARCEÑO", pases: 1 },
    "54": { nombre: "LIC HUGO MENCOS Y SRA", pases: 2 },
    "55": { nombre: "SR MARTÍN OROZCO Y SRA", pases: 2 },
    "56": { nombre: "MARCELA ARGUETA", pases: 1 },
    "57": { nombre: "SOFIA SARCEÑO", pases: 1 },
    "58": { nombre: "RODRIGO RUANO", pases: 1 },
    "59": { nombre: "MARIA ELISA CORADO", pases: 1 },
    "60": { nombre: "CRISTIAN CAMBARA", pases: 1 },
    "61": { nombre: "VALERIE CRÚZ", pases: 1 },
    "62": { nombre: "FABRIZZIO RUANO", pases: 1 },
    "63": { nombre: "ABRIL QUIÑONEZ LEMUS", pases: 1 },
    "64": { nombre: "DORIS MENCOS", pases: 1 },
    "65": { nombre: "RICARDO CONTRERAS", pases: 1 },
    "66": { nombre: "NOEL FOLGAR", pases: 1 },
    "67": { nombre: "AMILCAR FOLGAR", pases: 1 },
    "68": { nombre: "CHRISTIAN COLOCHO", pases: 1 },
    "69": { nombre: "SOFIA GRIJALVA", pases: 1 },
    "70": { nombre: "SEBASTIAN SOLARES", pases: 1 },
    "71": { nombre: "ANDRÉ MARROQUÍN", pases: 1 },
    "72": { nombre: "ANDRES CARVAJAL", pases: 1 },
    "73": { nombre: "BORIS NAJERA", pases: 1 },
    "74": { nombre: "PATRICK PARRAS", pases: 1 },
    "75": { nombre: "ARMANDO LINARES", pases: 1 },
    "76": { nombre: "AURY ROSALES", pases: 1 },
    "77": { nombre: "IVAN TEO", pases: 1 },
    "78": { nombre: "Emanuel PALMA", pases: 1 },
    "79": { nombre: "CARLOS VASQUEZ", pases: 1 },
    "80": { nombre: "FREDDY LIMA", pases: 1 },
    "81": { nombre: "SCARLET PINEDA", pases: 1 },
    "82": { nombre: "ANTONY RAMIREZ", pases: 1 },
    "83": { nombre: "SR RENE RECINOS Y FAMILIA", pases: 2 },
    "84": { nombre: "FAM VALDEZ POLANCO", pases: 2 },
    "85": { nombre: "KRISTEL RECINOS", pases: 1 },
    "86": { nombre: "MARIA FERNANDA MORALES", pases: 1 },
    "87": { nombre: "JOSUE MORALES", pases: 1 },
    "88": { nombre: "JOSE ALFREDO HERNANDEZ", pases: 1 },
    "89": { nombre: "SERGIO RODIGUEZ", pases: 1 },
    "90": { nombre: "Jeremy Barrientos", pases: 1 },
    "91": { nombre: "Ivana Ruiz", pases: 1 },
    "92": { nombre: "Karla Calderon", pases: 1 },
    "93": { nombre: "NICOLE GARCIA", pases: 1 },
    "94": { nombre: "STEVEN DANIEL", pases: 1 },
    "95": { nombre: "Samuel Salguero", pases: 1 },
    "96": { nombre: "ENRRIQUE HERRERA Y FAM.", pases: 4 },
    "97": { nombre: "SR TEODORO VASQUEZ Y SRA", pases: 2 },
    "98": { nombre: "CLARY HERRERA Y MAMA", pases: 2 },
    "99": { nombre: "ANTONIA HERRERA Y FAM", pases: 2 },
    "100": { nombre: "SR JOSE LUIS HERRERA Y SRA", pases: 2 },
    "101": { nombre: "MARITZA HERRERA Y FAM", pases: 2 },
    "102": { nombre: "SRA MARTA DIAZ", pases: 1 },
    "103": { nombre: "DAVIS YANES", pases: 1 },
    "104": { nombre: "SRA ESTELA HERRERA", pases: 3 },
    "105": { nombre: "SR OSBALDO JIMENES Y SRA", pases: 2 },
    "106": { nombre: "LIC OSIEL DIONICIO Y SRA.", pases: 2 },
    "107": { nombre: "FAM DUARTE DE PAZ", pases: 2 },
    "108": { nombre: "GLENDA ZEPEDA FLORES", pases: 1 },
    "109": { nombre: "MIRLIN TRIGUEROS", pases: 1 },
    "110": { nombre: "MIGDAEL LOPEZ Y FAM", pases: 5 },
    "111": { nombre: "ILMARIS LEMUS", pases: 1 },
    "112": { nombre: "KARLA MATEO", pases: 1 },
    "113": { nombre: "EMELY HERNÁNDEZ", pases: 1 },
    "114": { nombre: "DAYANARA PINTO", pases: 1 },
    "115": { nombre: "FAM. CARDONA MÉNDEZ", pases: 4 },
    "116": { nombre: "RAMON PAZ Y CONCEPCIÓN HERNÁNDEZ", pases: 2 },
    "117": { nombre: "SORALLA PAREDES", pases: 2 }
};

const guestDirectoriesByEvent = {
    "ana-laura-2026": guestDirectorySeed
};

window.LocalGuestSeeds = {
    ...(window.LocalGuestSeeds || {}),
    ...guestDirectoriesByEvent
};

const VALID_FILTERS = new Set(["todos", "si", "no", "pendiente"]);

function formatGuestName(value) {
    const text = String(value == null ? "" : value).trim().replace(/\s+/g, " ");
    if (!text) return "";
    const lowercaseWords = new Set(["y", "de", "del", "la", "las", "los"]);

    return text
        .split(" ")
        .map((word) => {
            const lower = String(word || "").toLocaleLowerCase("es");
            if (!lower) return "";
            if (lowercaseWords.has(lower)) return lower;
            return lower.charAt(0).toLocaleUpperCase("es") + lower.slice(1);
        })
        .join(" ");
}

function resolveDashboardEventContext() {
    const externalConfig = window.config || {};
    const eventConfig = externalConfig.event || {};
    const eventIdParam = String(eventConfig.eventIdParam || "eventId").trim() || "eventId";
    const defaultEventId = String(eventConfig.defaultEventId || "ana-laura-2026").trim() || "ana-laura-2026";
    const params = new URLSearchParams(window.location.search || "");
    const fromQuery = String(params.get(eventIdParam) || "").trim();
    const fromWindow = String(
        window.currentEventId
        || (window.EventContext && window.EventContext.eventId)
        || ""
    ).trim();

    const eventId = fromWindow || fromQuery || defaultEventId;
    const context = { eventId, eventIdParam, defaultEventId };

    window.EventContext = {
        ...(window.EventContext || {}),
        ...context
    };
    window.currentEventId = eventId;

    return context;
}

function getGuestDirectoryForEvent(eventId) {
    return guestDirectoriesByEvent[eventId] || {};
}

function mapInvitadosToDirectory(invitados) {
    const directory = {};

    if (!Array.isArray(invitados)) {
        return directory;
    }

    invitados.forEach((invitado) => {
        if (!invitado || typeof invitado !== "object") return;

        const id = normalizeGuestId(invitado.id || invitado._key);
        const activo = typeof invitado.activo === "undefined" ? true : Boolean(invitado.activo);
        if (!id || !activo) return;

        directory[id] = {
            nombre: formatGuestName(invitado.nombre) || "Invitado",
            pases: Math.max(0, Number(invitado.pases) || 0)
        };
    });

    return directory;
}

function normalizeGuestId(value) {
    const safeValue = String(value || "").trim();
    return safeValue || "default";
}

function normalizeResponse(response) {
    const safeResponse = String(response || "").trim().toLowerCase();
    if (safeResponse === "si") return "si";
    if (safeResponse === "no") return "no";
    return "pendiente";
}

function normalizeConfirmation(record) {
    const response = normalizeResponse(record && record.respuesta);
    return {
        id: normalizeGuestId(record && (record.id || record._key)),
        nombre: formatGuestName(record && record.nombre),
        pasesAsignados: Math.max(0, Number(record && record.pasesAsignados) || 0),
        respuesta: response,
        cantidadConfirmada: response === "si"
            ? Math.max(0, Number(record && record.cantidadConfirmada) || 0)
            : 0,
        fechaConfirmacion: Number(record && record.fechaConfirmacion) || null
    };
}

function buildRows(confirmations, guestDirectory) {
    const localGuestDirectory = guestDirectory || {};
    const rows = [];
    const configuredIds = Object.keys(localGuestDirectory);
    const confirmationById = new Map();

    confirmations.forEach((record) => {
        const normalized = normalizeConfirmation(record);
        confirmationById.set(normalized.id, normalized);
    });

    configuredIds.forEach((id) => {
        const guest = localGuestDirectory[id];
        const confirmation = confirmationById.get(id);

        if (!confirmation) {
            rows.push({
                id,
                nombre: formatGuestName(guest.nombre),
                pasesAsignados: Math.max(0, Number(guest.pases) || 0),
                respuesta: "pendiente",
                cantidadConfirmada: 0,
                fechaConfirmacion: null
            });
            return;
        }

        rows.push({
            ...confirmation,
            nombre: confirmation.nombre || formatGuestName(guest.nombre),
            pasesAsignados: confirmation.pasesAsignados || Math.max(0, Number(guest.pases) || 0)
        });
    });

    confirmationById.forEach((confirmation, id) => {
        if (configuredIds.includes(id)) return;
        rows.push(confirmation);
    });

    return rows.sort((a, b) => compareGuestIds(a && a.id, b && b.id));
}

function formatConfirmationDate(value) {
    if (!value) return "--";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "--";
    return date.toLocaleString("es-GT", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

function formatConfirmationDateParts(value) {
    if (!value) {
        return { date: "--", time: "--" };
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return { date: "--", time: "--" };
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    let hour = date.getHours();
    const minute = String(date.getMinutes()).padStart(2, "0");
    const period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;

    return {
        date: day + "/" + month + "/" + year,
        time: hour + ":" + minute + " " + period
    };
}

function toResponseLabel(response) {
    if (response === "si") return "confirmado";
    if (response === "no") return "no asistirán";
    return "pendiente";
}

function normalizeSearchText(value) {
    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function formatGuestId(value) {
    const safeValue = String(value || "").trim();
    return "#" + (safeValue || "--");
}

function compareGuestIds(a, b) {
    const idA = String(a == null ? "" : a).trim();
    const idB = String(b == null ? "" : b).trim();
    const numericA = /^\d+$/.test(idA) ? Number(idA) : Number.POSITIVE_INFINITY;
    const numericB = /^\d+$/.test(idB) ? Number(idB) : Number.POSITIVE_INFINITY;

    if (numericA !== numericB) {
        return numericA - numericB;
    }

    return idA.localeCompare(idB, "es", { numeric: true, sensitivity: "base" });
}

function matchesActiveFilter(row, filter) {
    if (filter === "todos") return true;
    return String(row && row.respuesta || "") === filter;
}

function applySearchAndFilter(rows, filter, searchTerm) {
    const normalizedSearch = normalizeSearchText(searchTerm);

    return rows.filter((row) => {
        if (!matchesActiveFilter(row, filter)) return false;
        if (!normalizedSearch) return true;
        const normalizedName = normalizeSearchText(row && row.nombre);
        return normalizedName.includes(normalizedSearch);
    });
}

function escapeCsvCell(value) {
    const text = String(value == null ? "" : value);
    return '"' + text.replace(/"/g, '""') + '"';
}

function buildCsvContent(rows) {
    const headers = [
        "Nombre",
        "Pases asignados",
        "Respuesta",
        "Cantidad confirmada",
        "Fecha de confirmación"
    ];

    const lines = [headers.map(escapeCsvCell).join(",")];

    rows.forEach((row) => {
        const responseValue = row.respuesta === "si" || row.respuesta === "no" ? row.respuesta : "pendiente";
        const line = [
            row.nombre || "--",
            String(Number(row.pasesAsignados) || 0),
            toResponseLabel(responseValue),
            responseValue === "pendiente" ? "--" : String(Number(row.cantidadConfirmada) || 0),
            responseValue === "pendiente" ? "--" : formatConfirmationDate(row.fechaConfirmacion)
        ];
        lines.push(line.map(escapeCsvCell).join(","));
    });

    return "\uFEFF" + lines.join("\n");
}

function downloadCsvFile(content, eventId) {
    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const dateStamp = new Date().toISOString().slice(0, 10);
    const safeEventId = String(eventId || "evento").replace(/[^a-zA-Z0-9_-]/g, "-");

    link.href = url;
    link.download = "confirmaciones-rsvp-" + safeEventId + "-" + dateStamp + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function setSummaryValues(rows) {
    const totalGuests = rows.length;
    const totalYes = rows
        .filter((row) => row && row.respuesta === "si")
        .reduce((acc, row) => acc + (Number(row && row.cantidadConfirmada) || 0), 0);
    const totalNo = rows
        .filter((row) => row && row.respuesta === "no")
        .reduce((acc, row) => acc + (Number(row && row.pasesAsignados) || 0), 0);
    const totalPending = rows
        .filter((row) => row && row.respuesta === "pendiente")
        .reduce((acc, row) => acc + (Number(row && row.pasesAsignados) || 0), 0);
    const totalConfirmedPeople = rows
        .filter((row) => row.respuesta === "si")
        .reduce((acc, row) => acc + (Number(row.cantidadConfirmada) || 0), 0);

    const totalGuestsEl = document.getElementById("summary-total-guests");
    const totalYesEl = document.getElementById("summary-yes");
    const totalNoEl = document.getElementById("summary-no");
    const totalPendingEl = document.getElementById("summary-pending");
    const totalConfirmedPeopleEl = document.getElementById("summary-confirmed-people");

    if (totalGuestsEl) totalGuestsEl.textContent = String(totalGuests);
    if (totalYesEl) totalYesEl.textContent = String(totalYes);
    if (totalNoEl) totalNoEl.textContent = String(totalNo);
    if (totalPendingEl) totalPendingEl.textContent = String(totalPending);
    if (totalConfirmedPeopleEl) totalConfirmedPeopleEl.textContent = String(totalConfirmedPeople);
}

function renderDesktopTable(rows, emptyMessage) {
    const tableBody = document.getElementById("confirmations-table-body");
    if (!tableBody) return;

    if (!Array.isArray(rows) || rows.length === 0) {
        const message = emptyMessage || "No hay confirmaciones para mostrar.";
        tableBody.innerHTML = '<tr><td class="empty-state" colspan="6">' + message + "</td></tr>";
        return;
    }

    tableBody.replaceChildren();

    rows.forEach((row) => {
        const tr = document.createElement("tr");

        const idTd = document.createElement("td");
        idTd.className = "id-cell";
        idTd.textContent = formatGuestId(row.id);

        const nameTd = document.createElement("td");
        nameTd.className = "name-cell";
        nameTd.textContent = row.nombre || "--";

        const assignedTd = document.createElement("td");
        assignedTd.textContent = String(Number(row.pasesAsignados) || 0);

        const responseTd = document.createElement("td");
        const badge = document.createElement("span");
        const responseValue = row.respuesta === "si" || row.respuesta === "no" ? row.respuesta : "pendiente";
        badge.className = "status-badge status-badge--" + responseValue;
        badge.textContent = toResponseLabel(responseValue);
        responseTd.appendChild(badge);

        const confirmedTd = document.createElement("td");
        confirmedTd.textContent = responseValue === "pendiente"
            ? "--"
            : String(Number(row.cantidadConfirmada) || 0);

        const dateTd = document.createElement("td");
        dateTd.className = "date-cell";
        const dateParts = responseValue === "pendiente"
            ? { date: "--", time: "--" }
            : formatConfirmationDateParts(row.fechaConfirmacion);
        const dateMain = document.createElement("span");
        dateMain.className = "date-main";
        dateMain.textContent = dateParts.date;
        const dateSub = document.createElement("span");
        dateSub.className = "date-sub";
        dateSub.textContent = dateParts.time;
        dateTd.append(dateMain, dateSub);

        tr.append(idTd, nameTd, assignedTd, responseTd, confirmedTd, dateTd);
        tableBody.appendChild(tr);
    });
}

function renderMobileCards(rows, emptyMessage) {
    const mobileList = document.getElementById("confirmations-mobile-list");
    if (!mobileList) return;

    if (!Array.isArray(rows) || rows.length === 0) {
        const message = emptyMessage || "No hay confirmaciones para mostrar.";
        mobileList.innerHTML = '<div class="mobile-empty-state">' + message + "</div>";
        return;
    }

    mobileList.replaceChildren();

    rows.forEach((row) => {
        const card = document.createElement("article");
        card.className = "confirmation-card";

        const nameEl = document.createElement("h3");
        nameEl.className = "confirmation-card-name";
        const idInline = document.createElement("span");
        idInline.className = "confirmation-card-id-inline";
        idInline.textContent = formatGuestId(row.id);
        const nameMain = document.createElement("span");
        nameMain.className = "confirmation-card-name-main";
        nameMain.textContent = row.nombre || "--";
        nameEl.append(idInline, document.createTextNode(" \u2022 "), nameMain);

        const statusWrap = document.createElement("div");
        statusWrap.className = "confirmation-card-status";

        const responseValue = row.respuesta === "si" || row.respuesta === "no" ? row.respuesta : "pendiente";
        const badge = document.createElement("span");
        badge.className = "status-badge status-badge--" + responseValue;
        badge.textContent = toResponseLabel(responseValue);
        statusWrap.appendChild(badge);

        const details = document.createElement("div");
        details.className = "confirmation-card-details";

        const dateParts = responseValue === "pendiente"
            ? { date: "--", time: "--" }
            : formatConfirmationDateParts(row.fechaConfirmacion);

        const lineAssigned = document.createElement("div");
        lineAssigned.className = "confirmation-card-line";
        const assignedLabel = document.createElement("span");
        assignedLabel.textContent = "Pases";
        const assignedValue = document.createElement("strong");
        assignedValue.textContent = String(Number(row.pasesAsignados) || 0);
        lineAssigned.append(assignedLabel, assignedValue);

        const lineConfirmed = document.createElement("div");
        lineConfirmed.className = "confirmation-card-line";
        const confirmedLabel = document.createElement("span");
        confirmedLabel.textContent = "Pases confirmados";
        const confirmedValue = document.createElement("strong");
        confirmedValue.textContent = responseValue === "pendiente"
            ? "--"
            : String(Number(row.cantidadConfirmada) || 0);
        lineConfirmed.append(confirmedLabel, confirmedValue);

        const lineDate = document.createElement("div");
        lineDate.className = "confirmation-card-line";
        const dateLabel = document.createElement("span");
        dateLabel.textContent = "Fecha de confirmación";
        const dateValue = document.createElement("strong");
        dateValue.textContent = dateParts.date;
        lineDate.append(dateLabel, dateValue);

        const lineTime = document.createElement("div");
        lineTime.className = "confirmation-card-line";
        const timeLabel = document.createElement("span");
        timeLabel.textContent = "Hora de confirmación";
        const timeValue = document.createElement("strong");
        timeValue.textContent = dateParts.time;
        lineTime.append(timeLabel, timeValue);

        details.append(lineAssigned, lineConfirmed, lineDate, lineTime);
        card.append(nameEl, statusWrap, details);
        mobileList.appendChild(card);
    });
}

function renderTable(rows, emptyMessage) {
    renderDesktopTable(rows, emptyMessage);
    renderMobileCards(rows, emptyMessage);
}

document.addEventListener("DOMContentLoaded", function () {
    const eventContext = resolveDashboardEventContext();
    const activeEventId = eventContext.eventId;
    const eventBadge = document.getElementById("dashboard-event-current");
    if (eventBadge) {
        eventBadge.textContent = "Evento activo: " + activeEventId;
    }

    const fallbackGuestDirectory = getGuestDirectoryForEvent(activeEventId);
    let remoteGuestDirectory = {};
    let hasRemoteGuestSource = false;
    let confirmationsState = [];
    const searchInput = document.getElementById("dashboard-search");
    const clearButton = document.getElementById("dashboard-clear");
    const exportButton = document.getElementById("dashboard-export");
    const filterButtons = Array.from(document.querySelectorAll(".filter-chip[data-filter]"));
    let allRows = buildRows([], fallbackGuestDirectory);
    let visibleRows = [];
    let activeFilter = "todos";
    let currentSearchTerm = "";

    function syncFilterButtons() {
        filterButtons.forEach((button) => {
            const isActive = button.dataset.filter === activeFilter;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-selected", isActive ? "true" : "false");
        });
    }

    function getEffectiveGuestDirectory() {
        if (hasRemoteGuestSource) return remoteGuestDirectory;
        return fallbackGuestDirectory;
    }

    function refreshRowsFromSources() {
        const effectiveGuestDirectory = getEffectiveGuestDirectory();
        const rows = buildRows(confirmationsState, effectiveGuestDirectory);
        updateDashboard(rows);
    }

    function updateTableView() {
        const filteredRows = applySearchAndFilter(allRows, activeFilter, currentSearchTerm);
        const sortedRows = filteredRows.slice().sort((a, b) => {
            const byId = compareGuestIds(a && a.id, b && b.id);
            if (byId !== 0) return byId;
            return String(a && a.nombre || "").localeCompare(String(b && b.nombre || ""), "es");
        });

        visibleRows = sortedRows;
        const hasControlsApplied = activeFilter !== "todos" || normalizeSearchText(currentSearchTerm).length > 0;
        const emptyMessage = hasControlsApplied
            ? "No hay coincidencias con la búsqueda o filtro seleccionado."
            : "No hay confirmaciones para mostrar.";
        renderTable(sortedRows, emptyMessage);
        if (exportButton) exportButton.disabled = visibleRows.length === 0;
    }

    function updateDashboard(rows) {
        allRows = Array.isArray(rows) ? rows : [];
        setSummaryValues(allRows);
        updateTableView();
    }

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            currentSearchTerm = searchInput.value || "";
            updateTableView();
        });
    }

    if (clearButton) {
        clearButton.addEventListener("click", function () {
            currentSearchTerm = "";
            activeFilter = "todos";
            if (searchInput) searchInput.value = "";
            syncFilterButtons();
            updateTableView();
        });
    }

    if (exportButton) {
        exportButton.addEventListener("click", function () {
            if (!visibleRows || visibleRows.length === 0) return;
            const csvContent = buildCsvContent(visibleRows);
            downloadCsvFile(csvContent, activeEventId);
        });
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const nextFilter = String(button.dataset.filter || "");
            if (!VALID_FILTERS.has(nextFilter)) return;
            activeFilter = nextFilter;
            syncFilterButtons();
            updateTableView();
        });
    });

    syncFilterButtons();

    const initialRows = buildRows([], fallbackGuestDirectory);
    updateDashboard(initialRows);

    subscribeToConfirmations(
        activeEventId,
        function (confirmations) {
            confirmationsState = Array.isArray(confirmations) ? confirmations : [];
            refreshRowsFromSources();
        },
        function (error) {
            console.error("Error al sincronizar confirmaciones:", error);
        }
    );

    subscribeToInvitados(
        activeEventId,
        function (invitados) {
            const invitadosArray = Array.isArray(invitados) ? invitados : [];
            hasRemoteGuestSource = invitadosArray.length > 0;
            remoteGuestDirectory = mapInvitadosToDirectory(invitadosArray);
            refreshRowsFromSources();
        },
        function (error) {
            console.error("Error al sincronizar invitados:", error);
        }
    );
});
