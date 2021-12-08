<template>
  <div class="container">
    <header>
      <h1>Task Manager</h1>
    </header>
    <main>
      <!-- <Task v-for="task in getTasks()" v-bind:key="task._id" v-bind:task="task" /> -->
      <Task v-bind:tasks="getTasks()" />
    </main>
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
          // pengumpulan: "https://ethol.pens.ac.id/mahasiswa/tugas-online",
          pengumpulan: "ethol",
          status: "todo",
        },
        {
          _id: 2,
          matkul: "Prak Konsep Jaringan",
          deskripsi: "Static Routing",
          deadline: "2021/12/30",
          // pengumpulan: "https://classroom.google.com/u/0/c/MzkyOTEyNjIzMzg1/a/NDI5ODg2MDkyMzQ1/details",
          pengumpulan: "classroom",
          status: "todo",
        },
        {
          _id: 3,
          matkul: "GIS",
          deskripsi: "Geocoding",
          deadline: "2021/12/19",
          // pengumpulan: "https://drive.google.com/drive/u/1/folders/1psLLNT-OauEGqWxWDMuXjkKYJuHP0gFz",
          pengumpulan: "google drive",
          status: "done",
        },
        {
          _id: 4,
          matkul: "B. Inggris",
          deskripsi: "Video Resume",
          deadline: "2021/12/22",
          // pengumpulan: "https://drive.google.com/drive/u/1/folders/1psLLNT-OauEGqWxWDMuXjkKYJuHP0gFz",
          pengumpulan: "google drive",
          status: "progress",
        },
      ];
    },
  },
};
</script>

<style>
body {
  margin: 30px;
}
</style>
