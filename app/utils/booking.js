// =============================================================================
// Buchungslogik — Hilfsfunktionen
//
// Diese Funktionen enthalten die Kernlogik des Buchungssystems.
// Sie sind bewusst von Vue-Komponenten getrennt, damit sie testbar sind.
//
// TODO: Implementieren Sie die Funktionen, sodass alle Tests grün werden.
// =============================================================================

/**
 * Prüft, ob ein Slot verfügbar ist (nicht gebucht und nicht blockiert).
 *
 * @param {Object} slot - Der zu prüfende Slot ({ id, start_time, end_time, is_blocked })
 * @param {Array} bookings - Alle bestehenden Buchungen ([{ slot_id, ... }])
 * @returns {boolean} true, wenn der Slot buchbar ist
 */
export function isSlotAvailable(slot, bookings) {
  // TODO: Implementieren
  // Hinweis: Ein Slot ist verfügbar, wenn er nicht blockiert ist
  // und keine aktive Buchung für diesen Slot existiert.
  throw new Error('Nicht implementiert')
}

/**
 * Prüft, ob ein Slot in der Zukunft liegt und somit buchbar ist.
 *
 * @param {Object} slot - Der zu prüfende Slot
 * @param {Date} [now=new Date()] - Aktueller Zeitpunkt (optional, für Tests)
 * @returns {boolean} true, wenn der Slot in der Zukunft liegt
 */
export function isSlotBookable(slot, now = new Date()) {
  // TODO: Implementieren
  throw new Error('Nicht implementiert')
}

/**
 * Prüft, ob eine Buchung noch storniert werden kann.
 * Stornierung ist nur bis 2 Stunden vor dem Termin möglich.
 *
 * @param {Object} slot - Der gebuchte Slot
 * @param {Date} [now=new Date()] - Aktueller Zeitpunkt (optional, für Tests)
 * @returns {boolean} true, wenn die Stornierung noch möglich ist
 */
export function isCancellable(slot, now = new Date()) {
  // TODO: Implementieren
  // Hinweis: Mindestens 2 Stunden vor start_time
  throw new Error('Nicht implementiert')
}

/**
 * Validiert eine Matrikelnummer.
 * Gültig: 5-8 Ziffern, keine Buchstaben.
 *
 * @param {string} matrikel - Die zu prüfende Matrikelnummer
 * @returns {boolean} true, wenn die Matrikelnummer gültig ist
 */
export function isValidMatrikel(matrikel) {
  // TODO: Implementieren
  throw new Error('Nicht implementiert')
}

/**
 * Formatiert einen ISO-Zeitstring in ein lesbares deutsches Format.
 * Beispiel: "2026-06-10T14:00:00" → "Mi., 10. Juni 2026, 14:00 Uhr"
 *
 * @param {string} isoString - ISO 8601 Zeitstring
 * @returns {string} Formatierter String
 */
export function formatDateTime(isoString) {
  // TODO: Implementieren
  // Hinweis: Verwenden Sie Intl.DateTimeFormat mit locale 'de-DE'
  throw new Error('Nicht implementiert')
}

/**
 * Filtert eine Liste von Slots nach einem bestimmten Datum.
 *
 * @param {Array} slots - Alle verfügbaren Slots
 * @param {string} date - Das gewünschte Datum (YYYY-MM-DD)
 * @returns {Array} Slots an diesem Datum, sortiert nach Startzeit
 */
export function getSlotsByDate(slots, date) {
  // TODO: Implementieren
  throw new Error('Nicht implementiert')
}
