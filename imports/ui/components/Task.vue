<template>
  <div class="task-container">
    <h3>To Do</h3>
    <!-- <div v-for="task in tasks" v-bind:key="task._id">
    </div> -->
    <div
      v-for="task in todoTask"
      v-bind:key="task._id"
      class="todo"
      style="background-color: gray"
    >
      <ul>
        <li>Matkul: {{ task.matkul }}</li>
        <li>Deskripsi: {{ task.deskripsi }}</li>
        <li>Deadline: {{ task.deadline }}</li>
        <li>Pengumpulan: {{ task.pengumpulan }}</li>
        <li>Status: {{ task.status }}</li>
      </ul>
    </div>
    <h3>Completed</h3>
    <div
      v-for="task in completedTask"
      v-bind:key="task._id"
      class="complete"
      style="background-color: green"
    >
      <ul>
        <li>Matkul: {{ task.matkul }}</li>
        <li>Deskripsi: {{ task.deskripsi }}</li>
        <li>Deadline: {{ task.deadline }}</li>
        <li>Pengumpulan: {{ task.pengumpulan }}</li>
        <li>Status: {{ task.status }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tasks"],
  data() {
    return {};
  },
  computed: {
    todoTask: function () {
      return this.tasks.filter(function (task) {
        return task.status == false;
      });
    },
    completedTask: function () {
      return this.tasks.filter(function (task) {
        return task.status == true;
      });
    },
  },
};
</script>