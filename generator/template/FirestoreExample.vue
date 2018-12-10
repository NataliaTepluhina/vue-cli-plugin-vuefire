<template>
  <section>
    <div v-for="(item, id) in collection" :key="id">
      <h2>Item #{{id}}</h2>
      <div v-for="(value, key) in item" :key="key+value">{{key}}:{{value}}</div>
    </div>
  </section>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "<%= apiKey ? apiKey :  '<<YOUR_API_KEY>>' %>",
  projectId: "<<YOUR_PROJECT_ID>>"
});

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default {
  data() {
    return {
      collection: []
    };
  },
  firestore: {
    collection: db.collection("<<YOUR_COLLECTION>>")
  }
};
</script>