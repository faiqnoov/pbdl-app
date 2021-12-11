<template>
  <div class="task-item" v-bind:class="taskStatus">
    <ul>
      <li>Matkul: {{ task.matkul }}</li>
      <li>Deskripsi: {{ task.deskripsi }}</li>
      <li>Deadline: {{ task.deadline }}</li>
      <li>
        Pengumpulan:
        <a v-bind:href="task.link" target="_blank">{{ task.pengumpulan }}</a>
      </li>
      <li>Status: {{ task.status }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["task"],
  data() {
    return {};
  },
  computed: {
    taskStatus: function () {
      return {
        todo: this.task.status == "todo",
        progress: this.task.status == "progress",
        done: this.task.status == "done",
      };
    },
  },
};
</script>

<style scoped>
.task-item {
  border: 1px solid #000;
  width: 300px;
  margin-bottom: 10px;
  padding-right: 20px;
}
</style>