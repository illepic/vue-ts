<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import cats from './cats';

@Component
export default class App extends Vue {
  cats = cats;
  selected = cats[0].name;

  get cat() {
    return this.cats.find(cat => cat.name === this.selected) || this.cats[0];
  }
  get disposition() {
    return this.cat.isFed ? this.cat.fedDisposition : this.cat.disposition;
  }
  feed() {
    (
      this.cats.find(cat => cat.name === this.selected) || this.cats[0]
    ).isFed = true;
  }
  reset() {
    this.cats.forEach(cat => (cat.isFed = false));
  }
}
</script>

<template>
  <div id="app">
    <h1 class="small">
      Class-based Vue |
      <a href="/vanilla">Vanilla instead</a>
    </h1>
    <img :src="cat.img" class="d-block mx-auto w-25 my-3" />
    <button
      v-for="kitty in cats"
      :key="kitty.name"
      @click="selected = kitty.name"
      class="btn btn-primary mx-1"
    >
      {{ kitty.name }}
    </button>

    <h2 class="mt-3">{{ cat.name }}</h2>
    <h4
      class="text-success"
      :class="{ 'text-danger': disposition === 'surly' }"
    >
      Current disposition: {{ disposition }}
    </h4>

    <h1 v-if="disposition === 'surly'">MEOW</h1>
    <p v-else-if="disposition">mew</p>

    <button @click="feed()" class="btn btn-success mx-1">Feed</button>
    <button @click="reset()" class="btn btn-danger mx-1">Reset</button>
  </div>
</template>
