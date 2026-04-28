<!--
  API-Demo: Daten aus einer Fake-REST-API holen
  ---------------------------------------------------------------------------
  Diese Seite demonstriert, wie Sie in Nuxt Daten von einer externen API
  laden und im Template anzeigen. Das Pattern brauchen Sie später für
  Ihr eigenes Backend (Supabase).

  Konzepte:
    1. useFetch() lädt asynchron Daten — Nuxt kümmert sich um SSR + Caching
    2. v-for iteriert über das Ergebnis-Array
    3. {{ }} blendet Werte ins HTML ein
    4. :src / :to (mit Doppelpunkt) bindet Werte dynamisch an Attribute

  Diese Seite verwendet https://fakestoreapi.com/ — eine kostenlose Test-API.
  Sie können diese Datei später löschen oder als Vorlage nehmen.

  → Vorlesung S. 421–422
-->
<template>
  <section>
    <PageHeader
      title="API-Demo"
      subtitle="Daten von einer externen API laden"
    />

    <p>
      Beispielhafte Produkte aus
      <a
        href="https://fakestoreapi.com/"
        target="_blank"
        rel="noopener"
      >fakestoreapi.com</a>.
      So können Sie auch später Daten aus Ihrer eigenen API laden.
    </p>

    <!-- Ladezustand: solange `pending` true ist, gibt es noch keine Daten -->
    <p v-if="pending">Lade Daten …</p>

    <!-- Fehlerfall: API nicht erreichbar -->
    <p v-else-if="error" class="error">
      Daten konnten nicht geladen werden ({{ error.message }}).
    </p>

    <!-- Erfolg: Produkte als Liste anzeigen -->
    <ul v-else class="products">
      <li
        v-for="product in products"
        :key="product.id"
        class="card"
      >
        <img
          :src="product.image"
          :alt="product.title"
          class="thumb"
        >
        <div>
          <h3>{{ product.title }}</h3>
          <p class="price">{{ product.price }} &euro;</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
// useFetch ist in Nuxt automatisch verfügbar (kein Import nötig).
// Es liefert ein Objekt mit data, pending, error.
const { data: products, pending, error } = await useFetch(
  'https://fakestoreapi.com/products?limit=6'
)
</script>

<style scoped>
.products {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  background: #fff;
}

.thumb {
  height: 120px;
  width: 100%;
  object-fit: contain;
}

.card h3 {
  font-size: 0.95rem;
  margin: 0;
  /* Lange Titel auf zwei Zeilen begrenzen */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.price {
  font-weight: 700;
  margin: 0;
}

.error {
  color: #b00020;
}
</style>
