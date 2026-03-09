// =============================================================================
// Tests für die Buchungslogik
//
// Diese Tests prüfen die Funktionen in app/utils/booking.js.
// Mindestens 5 sinnvolle Tests müssen bestehen.
//
// Ausführen:  npm test
// Watch-Mode: npm run test:watch
//
// TODO: Implementieren Sie die Funktionen in app/utils/booking.js,
//       sodass alle Tests grün werden. Ergänzen Sie weitere Tests.
// =============================================================================

import { describe, it, expect } from 'vitest'
import {
  isSlotAvailable,
  isSlotBookable,
  isCancellable,
  isValidMatrikel,
  formatDateTime,
  getSlotsByDate
} from '../app/utils/booking.js'

// ---------------------------------------------------------------------------
// Hilfsdaten
// ---------------------------------------------------------------------------
const futureSlot = {
  id: 1,
  start_time: '2026-06-15T14:00:00',
  end_time: '2026-06-15T14:30:00',
  is_blocked: false
}

const blockedSlot = {
  id: 2,
  start_time: '2026-06-15T15:00:00',
  end_time: '2026-06-15T15:30:00',
  is_blocked: true
}

const pastSlot = {
  id: 3,
  start_time: '2020-01-10T10:00:00',
  end_time: '2020-01-10T10:30:00',
  is_blocked: false
}

const sampleBookings = [
  {
    id: 100,
    slot_id: 1,
    student_name: 'Max Mustermann',
    matrikelnummer: '12345',
    reason: 'Frage zur Übung',
    status: 'confirmed',
    created_at: '2026-06-01T10:00:00'
  }
]

// ---------------------------------------------------------------------------
// Test 1: Slot-Verfügbarkeit
// ---------------------------------------------------------------------------
describe('isSlotAvailable', () => {
  it('erkennt einen freien Slot', () => {
    const unbookedSlot = { id: 99, start_time: '2026-06-15T16:00:00', end_time: '2026-06-15T16:30:00', is_blocked: false }
    expect(isSlotAvailable(unbookedSlot, sampleBookings)).toBe(true)
  })

  it('erkennt einen gebuchten Slot', () => {
    expect(isSlotAvailable(futureSlot, sampleBookings)).toBe(false)
  })

  it('erkennt einen blockierten Slot als nicht verfügbar', () => {
    expect(isSlotAvailable(blockedSlot, [])).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// Test 2: Buchbarkeit (Zeitprüfung)
// ---------------------------------------------------------------------------
describe('isSlotBookable', () => {
  it('erlaubt Buchung eines zukünftigen Slots', () => {
    expect(isSlotBookable(futureSlot, new Date('2026-06-10T12:00:00'))).toBe(true)
  })

  it('verhindert Buchung eines vergangenen Slots', () => {
    expect(isSlotBookable(pastSlot, new Date('2026-06-10T12:00:00'))).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// Test 3: Stornierungsfrist
// ---------------------------------------------------------------------------
describe('isCancellable', () => {
  it('erlaubt Stornierung mehr als 2 Stunden vorher', () => {
    // Slot um 14:00, aktuelle Zeit 10:00 → 4h vorher → erlaubt
    expect(isCancellable(futureSlot, new Date('2026-06-15T10:00:00'))).toBe(true)
  })

  it('verhindert Stornierung weniger als 2 Stunden vorher', () => {
    // Slot um 14:00, aktuelle Zeit 13:00 → 1h vorher → nicht erlaubt
    expect(isCancellable(futureSlot, new Date('2026-06-15T13:00:00'))).toBe(false)
  })

  it('verhindert Stornierung genau 2 Stunden vorher', () => {
    // Grenzfall: Slot um 14:00, aktuelle Zeit 12:00 → genau 2h → nicht erlaubt
    expect(isCancellable(futureSlot, new Date('2026-06-15T12:00:00'))).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// Test 4: Matrikelnummer-Validierung
// ---------------------------------------------------------------------------
describe('isValidMatrikel', () => {
  it('akzeptiert gültige Matrikelnummern', () => {
    expect(isValidMatrikel('12345')).toBe(true)
    expect(isValidMatrikel('12345678')).toBe(true)
  })

  it('lehnt zu kurze Nummern ab', () => {
    expect(isValidMatrikel('1234')).toBe(false)
  })

  it('lehnt zu lange Nummern ab', () => {
    expect(isValidMatrikel('123456789')).toBe(false)
  })

  it('lehnt Buchstaben ab', () => {
    expect(isValidMatrikel('abc12')).toBe(false)
    expect(isValidMatrikel('12a45')).toBe(false)
  })

  it('lehnt leere Eingabe ab', () => {
    expect(isValidMatrikel('')).toBe(false)
  })
})

// ---------------------------------------------------------------------------
// Test 5: Slots nach Datum filtern
// ---------------------------------------------------------------------------
describe('getSlotsByDate', () => {
  const slots = [
    { id: 1, start_time: '2026-06-15T14:00:00', end_time: '2026-06-15T14:30:00', is_blocked: false },
    { id: 2, start_time: '2026-06-15T15:00:00', end_time: '2026-06-15T15:30:00', is_blocked: false },
    { id: 3, start_time: '2026-06-16T10:00:00', end_time: '2026-06-16T10:30:00', is_blocked: false },
  ]

  it('filtert Slots nach Datum', () => {
    const result = getSlotsByDate(slots, '2026-06-15')
    expect(result).toHaveLength(2)
    expect(result[0].id).toBe(1)
    expect(result[1].id).toBe(2)
  })

  it('gibt leeres Array bei keinem Treffer', () => {
    const result = getSlotsByDate(slots, '2026-06-20')
    expect(result).toHaveLength(0)
  })
})

// ---------------------------------------------------------------------------
// Ergänzen Sie weitere Tests!
//
// Ideen:
// - formatDateTime: Gibt korrekt formatiertes deutsches Datum zurück
// - Edge Cases: Was passiert bei leeren Arrays?
// - Eigene Funktionen, die Sie für Ihr Projekt schreiben
// ---------------------------------------------------------------------------
