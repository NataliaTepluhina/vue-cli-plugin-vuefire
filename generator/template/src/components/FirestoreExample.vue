<template>
  <section>
    <div v-for="(item, id) in collection" :key="id">
      <h2>Item #{{id}}</h2>
      <div v-for="(value, key) in item" :key="key+value">{{key}}:{{value}}</div>
    </div>
  </section>
</template>

<script>
import { db } from '../firebaseConfig'

export default {
  data() {
    return {
      collection: []
    };
  },
  firestore: {
    collection: db.collection("<%= collection && collection.trim() ? collection : 'YOUR_COLLECTION' %>")
  }
};
</script>