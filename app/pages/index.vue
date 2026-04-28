<!--
  Startseite (Route: /)
  ---------------------------------------------------------------------------
  In Nuxt entspricht diese Datei der URL `/`.
  Das Layout `app/layouts/default.vue` wird automatisch um diesen Inhalt
  herum gerendert (Menübar, Footer).

  → Vorlesung S. 397
-->
<template>
  <section>
    <PageHeader
      title="Sprechstunden-Buchungssystem"
      subtitle="Prof. Dr. Christian Krauss · HAW Kiel"
    />

    <p>
      Hier entsteht Ihr Buchungssystem.
      Ersetzen Sie diesen Inhalt mit Ihrer Kalender- oder Listenansicht.
    </p>

    <h2>Erste Schritte</h2>
    <ul>
      <li>
        <strong>API-Demo ansehen:</strong>
        <NuxtLink to="/demo">/demo</NuxtLink>
        zeigt, wie man Daten von einer externen API lädt.
      </li>
      <li>
        <strong>Pflichtseite Impressum:</strong>
        <NuxtLink to="/impressum">/impressum</NuxtLink>
        ist eine zweite Beispielseite.
      </li>
      <li>
        <strong>404-Seite testen:</strong>
        Geben Sie eine nicht existierende URL ein, z. B.
        <code>/gibtsnicht</code>.
      </li>
    </ul>
  </section>
</template>

<script setup>
// Hier kommt später Ihre Logik zum Laden der Slots aus Supabase.
</script>

<style scoped>
ul {
  line-height: 1.7;
}
code {
  background: #f4f4f4;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: ui-monospace, monospace;
}
</style>
