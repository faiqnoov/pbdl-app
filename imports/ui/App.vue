<template>
  <div class="container">
    <header>
      <h1>Tugasku</h1>
    </header>
    <Task v-for="task in getTasks()" v-bind:key="task._id" v-bind:task="task" />
  </div>
</template>

<script>
import Vue from "vue";
import Task from "./components/Task.vue";

export default {
  components: {
    Task,
  },
  data() {
    return {};
  },
  methods: {
    getTasks() {
      return [
        {
          _id: 1,
          matkul: "Statistik dan Probabilitas",
          deskripsi: "Hipotesis",
          deadline: "2021/12/17",
          pengumpulan: "ethol",
          status: false,
        },
        {
          _id: 2,
          matkul: "Prak Konsep Jaringan",
          deskripsi: "Static Routing",
          deadline: "2021/12/30",
          pengumpulan: "classroom",
          status: true,
        },
        {
          _id: 3,
          matkul: "GIS",
          deskripsi: "Geocoding",
          deadline: "2021/12/19",
          pengumpulan: "gdrive",
          status: true,
        },
      ];
    },
  },
};
</script>

<style>
</style>
