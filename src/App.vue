<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import Button from 'primevue/button';
import { toShortDate } from './utils/filters';

export default defineComponent({
  components: {
    PButton: Button
  },
  data() {
    return {
      count: 0,
      currentPrice: 'Unknown'
    }
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.currentPrice = JSON.stringify(response.data);
      });
  },
  methods: {
    toShortDate
  }
});
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#"
      >Top navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarCollapse"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#"
            >Home</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form
          class="d-flex"
          role="search"
        >
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
          <button
            class="btn btn-outline-success"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>

  <main class="container">
    <div class="bg-light p-5 rounded">
      <h1>Navbar example</h1>
      <p class="lead">
        This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.
      </p>
      <a
        class="btn btn-lg btn-primary"
        href="/docs/5.2/components/navbar/"
        role="button"
      >View navbar docs &raquo;</a>
    </div>


    <PButton
      @click="count++"
    >
      Click
    </PButton>
    <div>Click count: {{ count }}</div>

    <PButton
      label="Show"
      severity="success"
    />

    <p>
      i18n test: {{ $t("message.hello") }}
    </p>

    <p>The date is: {{ toShortDate(new Date()) }}</p>

    <p>Current price: {{ currentPrice }}</p>
  </main>
</template>

<style scoped>

</style>
