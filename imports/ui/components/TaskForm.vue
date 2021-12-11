<template>
  <div class="new-task">
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Matkul" v-model="matkul" />
      <input type="text" placeholder="Deskripsi" v-model="deskripsi" />
      <input type="date" placeholder="Deadline" v-model="deadline" />
      <input type="text" placeholder="Pengumpulan" v-model="pengumpulan" />
      <input type="text" placeholder="Link" v-model="link" />

      <button type="submit">Tambahkan</button>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import { TasksCollection } from "../../api/TasksCollection";

export default {
  data() {
    return {
      matkul: "",
      deskripsi: "",
      deadline: "",
      pengumpulan: "",
      link: "#",
    };
  },
  methods: {
    handleSubmit(event) {
      TasksCollection.insert({
        matkul: this.matkul,
        deskripsi: this.deskripsi,
        deadline: this.deadline,
        pengumpulan: this.pengumpulan,
        link: this.link,
        status: "todo",
        dateModified: new Date(), // waktu sekarang
      });

      // bersihkan form
      this.matkul = "";
      this.deskripsi = "";
      this.deadline = "";
      this.pengumpulan = "";
      this.link = "#";
    },
  },
};
</script>