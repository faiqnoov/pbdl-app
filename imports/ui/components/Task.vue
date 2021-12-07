<template>
  <div class="task-container">
    <h3>To Do</h3>
    <TaskItem
      v-for="task in todoTask"
      v-bind:key="task._id"
      v-bind:task="task"
    />

    <h3>Completed</h3>
    <TaskItem
      v-for="task in completedTask"
      v-bind:key="task._id"
      v-bind:task="task"
    />
  </div>
</template>

<script>
import Vue from "vue";
import TaskItem from "./TaskItem.vue";

export default {
  components: {
    TaskItem,
  },
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