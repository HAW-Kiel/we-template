# Sprechstunden-Buchungssystem

Web Engineering SoSe 2026 · Prof. Dr. Christian Krauss · HAW Kiel

## Schnellstart

```bash
# 1. Abhängigkeiten installieren
npm install

# 2. Umgebungsvariablen einrichten
cp .env.example .env
# → .env bearbeiten: SUPABASE_URL und SUPABASE_ANON_KEY eintragen

# 3. Entwicklungsserver starten
npm run dev
```

Die Anwendung läuft dann auf `http://localhost:3000`.

## Befehle

| Befehl | Beschreibung |
|---|---|
| `npm run dev` | Entwicklungsserver starten |
| `npm test` | Tests ausführen (einmalig) |
| `npm run test:watch` | Tests im Watch-Modus (bei jeder Änderung) |
| `npm run lint` | ESLint prüfen |
| `npm run lint:fix` | ESLint-Fehler automatisch beheben |
| `npm run generate` | Statische Seiten generieren (für Abgabe) |

## Projektstruktur (Nuxt 4)

```
├── .github/workflows/ci.yml   ← CI-Pipeline (ESLint, Tests, Lighthouse)
├── app/                        ← Ihr Anwendungscode (Nuxt 4)
│   ├── pages/                  ← Seiten (File-Based Routing)
│   │   └── index.vue           ← Startseite (TODO)
│   ├── utils/
│   │   └── booking.js          ← Buchungslogik (TODO: implementieren)
│   └── app.vue                 ← Root-Komponente
├── server/api/                 ← Server-API-Routen (optional)
├── shared/                     ← Code, der in App und Server genutzt wird
├── tests/
│   └── booking.test.js         ← Tests (laufen mit: npm test)
├── nuxt.config.js              ← Nuxt-Konfiguration
├── vitest.config.js            ← Test-Konfiguration
├── lighthouserc.json           ← Lighthouse CI-Schwellenwerte
└── .env.example                ← Vorlage für Umgebungsvariablen
```

**Hinweis:** Nuxt 4 verwendet die `app/`-Verzeichnisstruktur. Seiten, Komponenten, Composables und Utilities gehören in `app/`. Server-Code bleibt in `server/`.

## Erste Schritte

1. **Tests zum Laufen bringen:** Implementieren Sie die Funktionen in `app/utils/booking.js`, bis `npm test` grün ist.
2. **Supabase einrichten:** Erstellen Sie ein Projekt auf [supabase.com](https://supabase.com), legen Sie die Tabellen an, konfigurieren Sie RLS-Policies.
3. **Seiten bauen:** Erstellen Sie die Seiten unter `app/pages/` — Nuxt generiert das Routing automatisch.
4. **Regelmäßig committen:** Ihre Git-History ist Teil der Bewertung.

## CI-Pipeline

Bei jedem Push auf `main` läuft automatisch:

- **ESLint** — Code-Qualität prüfen
- **Vitest** — Tests ausführen
- **Lighthouse** — Performance und Accessibility messen

Ergebnisse sehen Sie als ✅ oder ❌ neben Ihrem Commit auf GitHub.

Damit Lighthouse in GitHub Actions funktioniert, müssen Sie Ihre Supabase-Credentials als **Repository Secrets** hinterlegen: Settings → Secrets and variables → Actions → `SUPABASE_URL` und `SUPABASE_ANON_KEY`.
