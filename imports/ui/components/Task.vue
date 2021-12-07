<template>
  <div class="task-container">
    <!-- <h3>To Do</h3> -->
    <div
      v-if="task.status == false"
      class="todo"
      style="background-color: gray"
    >
      <ul>
        <li>Matkul: {{ this.task.matkul }}</li>
        <li>Deskripsi: {{ this.task.deskripsi }}</li>
        <li>Deadline: {{ this.task.deadline }}</li>
        <li>Pengumpulan: {{ this.task.pengumpulan }}</li>
        <li>Status: {{ this.task.status }}</li>
      </ul>
    </div>
    <!-- <h3>Completed</h3> -->
    <div
      v-if="task.status == true"
      class="complete"
      style="background-color: green"
    >
      <ul>
        <li>Matkul: {{ this.task.matkul }}</li>
        <li>Deskripsi: {{ this.task.deskripsi }}</li>
        <li>Deadline: {{ this.task.deadline }}</li>
        <li>Pengumpulan: {{ this.task.pengumpulan }}</li>
        <li>Status: {{ this.task.status }}</li>
      </ul>
    </div>
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