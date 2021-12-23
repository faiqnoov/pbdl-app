<template>
  <div>
    <button
      class="btn btn-primary taskbtn"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse-task"
      aria-expanded="false"
      aria-controls="collapse-task"
    >
      <i class="fas fa-plus"></i>
    </button>

    <div class="collapse" id="collapse-task">
      <div class="row justify-content-center mb-5">
        <form @submit.prevent="handleSubmit" class="col-md-6">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="matkul"
              placeholder="x"
              v-model="matkul"
              required
            />
            <label for="matkul" class="form-label">Mata Kuliah</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="date"
              class="form-control"
              id="deadline"
              placeholder="x"
              v-model="deadline"
              required
            />
            <label for="deadline" class="form-label">Deadline</label>
          </div>
          <div class="form-floating mb-3">
            <textarea
              class="form-control"
              id="desc"
              placeholder="x"
              style="height: 100px"
              v-model="deskripsi"
              required
            ></textarea>
            <label for="desc" class="form-label">Deskripsi Tugas</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="pengumpulan"
              placeholder="x"
              v-model="pengumpulan"
              required
            />
            <label for="pengumpulan" class="form-label">Pengumpulan</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="link"
              placeholder="x"
              v-model="link"
            />
            <label for="link" class="form-label">Link</label>
          </div>
          <div class="d-flex justify-content-end">
            <button
              type="button"
              class="btn btn-secondary btn-sm me-3"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-task"
              aria-expanded="false"
              aria-controls="collapse-task"
            >
              Tutup
            </button>
            <button type="submit" class="btn btn-primary btn-sm">
              Tambahkan
            </button>
          </div>
        </form>
      </div>
    </div>
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
      link: "",
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
      this.link = "";
    },
  },
};
</script>

<style scoped>
label {
  color: var(--c1);
}

input,
textarea {
  border: none;
  background-color: var(--c3);
}

.taskbtn {
  position: fixed;
  bottom: 30px;
  right: 40px;
  border-radius: 50%;
  z-index: 7;
}

.btn-secondary {
  background-color: var(--c1);
  border: none;
}
</style>