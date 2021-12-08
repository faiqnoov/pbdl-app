<template>
  <div class="task-item">
    <ul>
      <li>Matkul: {{ task.matkul }}</li>
      <li>Deskripsi: {{ task.deskripsi }}</li>
      <li>Deadline: {{ task.deadline }}</li>
      <li>Pengumpulan: {{ task.pengumpulan }}</li>
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