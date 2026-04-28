<!--
  Impressum
  ---------------------------------------------------------------------------
  Diese Datei demonstriert das File-based Routing von Nuxt:
  Allein dadurch, dass diese Datei unter `app/pages/impressum.vue` liegt,
  ist die Seite unter http://localhost:3000/impressum erreichbar.

  → Vorlesung S. 397
-->
<template>
  <article>
    <PageHeader
      title="Impressum"
      subtitle="Angaben gemäß § 5 TMG"
    />

    <p>
      Verantwortlich für den Inhalt:<br>
      Prof. Dr. Christian Krauss<br>
      HAW Kiel<br>
      Sokratesplatz 2, 24149 Kiel
    </p>

    <p>
      Dies ist eine Übungsseite im Rahmen des Moduls Web Engineering.
    </p>
  </article>
</template>

<script setup>
// Keine Logik nötig — reine Inhaltsseite.
</script>

<style scoped>
p {
  line-height: 1.6;
  margin-bottom: 1rem;
}
</style>
